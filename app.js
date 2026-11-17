(() => {
  const $ = id => document.getElementById(id);
  let selectedLevel = 3, activeTab = 'staff', incidents = [], misuseCounts = {}, pendingTimer = null, holdTimer = null, holdStarted = false;
  const levelNames = {3:'DARURAT',2:'BUTUH BANTUAN',1:'LAPORAN'};
  const levelClasses = {3:'b-red',2:'b-amber',1:'b-blue'};
  const studentNames = ['Alya Pratama · 8A','Bima Saputra · 7B','Citra Lestari · 10 IPA 1','Dimas Putra · 5A'];
  document.querySelectorAll('.level').forEach(btn => btn.addEventListener('click', () => {
    selectedLevel = Number(btn.dataset.level);
    document.querySelectorAll('.level').forEach(b=>b.classList.toggle('active',b===btn));
  }));
  function openModal(){
    if(pendingTimer) clearInterval(pendingTimer);
    $('confirmModal').classList.add('show');
    let n=3; $('countdown').textContent=n;
    pendingTimer=setInterval(()=>{n--; $('countdown').textContent=n>0?n:'SIAP'; if(n<=0) clearInterval(pendingTimer)},1000);
  }
  function closeModal(){ $('confirmModal').classList.remove('show'); if(pendingTimer)clearInterval(pendingTimer); }
  const sos=$('sos');
  sos.addEventListener('pointerdown',e=>{e.preventDefault();holdStarted=true;sos.textContent='TAHAN…';holdTimer=setTimeout(()=>{if(holdStarted){sos.textContent='SOS';openModal()}},2000)});
  ['pointerup','pointerleave','pointercancel'].forEach(ev=>sos.addEventListener(ev,()=>{holdStarted=false;clearTimeout(holdTimer);if(!$('confirmModal').classList.contains('show'))sos.textContent='SOS'}));
  $('cancelSOS').addEventListener('click',closeModal);
  $('confirmSOS').addEventListener('click',()=>{
    closeModal();
    const student=$('student').value, place=$('place').value, detail=$('detail').value.trim();
    const item={id:Date.now(),student,place,detail,level:selectedLevel,time:new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}),status:'Menunggu tindak lanjut'};
    incidents.unshift(item); $('detail').value=''; render(); showTab(activeTab);
    alert('Simulasi berhasil: sinyal '+levelNames[selectedLevel]+' dikirim ke petugas sekolah.');
  });
  function render(){
    $('statReports').textContent=incidents.length;
    $('statOpen').textContent=incidents.filter(i=>i.status!=='Selesai').length;
    $('statCommunity').textContent=incidents.filter(i=>i.community).length;
    $('incidentList').innerHTML=incidents.length?incidents.map(i=>`<div class="incident"><div class="incident-top"><strong>${escapeHtml(i.student)}</strong><span class="badge ${levelClasses[i.level]}">${levelNames[i.level]}</span></div><p>📍 ${escapeHtml(i.place)} · ${i.time}</p><p>${escapeHtml(i.detail||'Tidak ada keterangan tambahan.')}</p><div class="row"><span class="badge ${i.status==='Selesai'?'b-green':'b-amber'}">${i.status}</span><button class="btn outline" data-done="${i.id}">${i.status==='Selesai'?'Selesai':'Tandai selesai'}</button></div></div>`).join(''):'<div class="empty"><span>📝</span>Belum ada laporan.</div>';
    document.querySelectorAll('[data-done]').forEach(b=>b.addEventListener('click',()=>{const x=incidents.find(i=>i.id==b.dataset.done);if(x)x.status='Selesai';render();showTab(activeTab)}));
  }
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function showTab(tab){
    activeTab=tab;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
    const list=incidents;
    if(!list.length){$('notificationView').innerHTML='<div class="empty"><span>🔔</span>Belum ada notifikasi. Coba kirim simulasi SOS.</div>';return}
    $('notificationView').innerHTML=list.map(i=>{
      if(tab==='staff')return `<div class="alert-card staff"><h4>🔴 Notifikasi petugas · ${levelNames[i.level]}</h4><p><b>${escapeHtml(i.student)}</b> membutuhkan tindak lanjut di <b>${escapeHtml(i.place)}</b> · ${i.time}. ${escapeHtml(i.detail||'Tanpa keterangan tambahan.')}</p></div>`;
      if(tab==='team')return `<div class="alert-card team"><h4>🟠 Instruksi tim pendamping</h4><p>Mohon petugas pendamping memeriksa area <b>${escapeHtml(i.place)}</b> dan berkoordinasi dengan petugas utama. Identitas korban hanya diberikan kepada petugas yang perlu mengetahuinya.</p></div>`;
      return i.level===3?`<div class="alert-card community"><h4>🔵 Peringatan keselamatan umum</h4><p>Mohon hindari area <b>${escapeHtml(i.place)}</b> sementara waktu dan ikuti arahan guru. Petugas sedang menangani situasi. Tidak ada identitas korban yang dibagikan.</p></div>`:`<div class="alert-card"><h4>ℹ️ Tidak ada siaran komunitas</h4><p>Laporan ini ditangani secara terbatas oleh petugas. Komunitas tidak menerima detail pribadi.</p></div>`;
    }).join('');
  }
  document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>showTab(b.dataset.tab)));
  $('reset').addEventListener('click',()=>{if(confirm('Hapus semua data simulasi pada halaman ini?')){incidents=[];render();showTab(activeTab)}});
  function updateMisuse(){
    const name=$('misuseStudent').value,count=misuseCounts[name]||0;
    $('misuseStatus').className='notice '+(count>=3?'danger':count>0?'warn':'info');
    $('misuseStatus').textContent=count===0?'Belum ada catatan penyalahgunaan untuk akun ini.':count>=3?`Akun demo ${name} mencapai ${count}/3 catatan dan dibekukan untuk pemeriksaan petugas. Jalur bantuan alternatif tetap tersedia.`:`Akun demo ${name}: ${count}/3 catatan penyalahgunaan. ${count===2?'Peringatan terakhir; perlu pemeriksaan petugas.':'Peringatan dan edukasi penggunaan.'}`;
  }
  $('misuse').addEventListener('click',()=>{const n=$('misuseStudent').value;misuseCounts[n]=Math.min(3,(misuseCounts[n]||0)+1);updateMisuse()});
  $('clearMisuse').addEventListener('click',()=>{misuseCounts[$('misuseStudent').value]=0;updateMisuse()});
  $('misuseStudent').addEventListener('change',updateMisuse);
  render();showTab('staff');updateMisuse();
})();
