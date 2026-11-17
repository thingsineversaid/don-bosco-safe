(() => {
const $=id=>document.getElementById(id), overlay=$('overlay'), choices=$('sheetChoices');
let mode='',selected='',holdTimer=null,toastTimer=null,reports=[];
function toast(msg){const el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3000)}
function openSheet(kind,title,text,symbol,options=[]){
 mode=kind;selected=options[0]||'';$('sheetTitle').textContent=title;$('sheetText').textContent=text;$('sheetSymbol').textContent=symbol;choices.innerHTML='';$('sheetExtra').innerHTML='';
 options.forEach((o,i)=>{const b=document.createElement('button');b.className='choice'+(!i?' selected':'');b.textContent=o;b.onclick=()=>{selected=o;choices.querySelectorAll('.choice').forEach(x=>x.classList.toggle('selected',x===b))};choices.appendChild(b)});
 $('sheetPrimary').textContent=kind==='help'?'Mengerti':'Kirim laporan';$('sheetPrimary').style.display=kind==='safe'?'none':'block';overlay.hidden=false;
}
function closeSheet(){overlay.hidden=true}
function send(type,category){reports.unshift({type,category,time:new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})});closeSheet();toast('✓ Simulasi terkirim ke petugas sekolah.')}
$('closeSheet').onclick=closeSheet;$('sheetCancel').onclick=closeSheet;overlay.onclick=e=>{if(e.target===overlay)closeSheet()};
$('sosBtn').addEventListener('pointerdown',e=>{e.preventDefault();$('sosBtn').style.transform='scale(.97)';holdTimer=setTimeout(()=>send('SOS DARURAT','Butuh pertolongan segera'),1300)});
['pointerup','pointerleave','pointercancel'].forEach(ev=>$('sosBtn').addEventListener(ev,()=>{clearTimeout(holdTimer);$('sosBtn').style.transform=''}));
$('sosBtn').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openSheet('sos-confirm','Kirim sinyal darurat?','Konfirmasikan jika kamu membutuhkan pertolongan sekarang.','SOS',['Saya membutuhkan bantuan sekarang'])}});
$('witnessBtn').onclick=()=>openSheet('witness','Apa yang kamu lihat?','Pilih kejadian. Tidak perlu mengetik atau mendekati pelaku.','👁',['Perkelahian','Pengeroyokan','Bullying fisik','Ancaman / intimidasi']);
$('bullyBtn').onclick=()=>openSheet('bully','Kamu tidak sendiri.','Pilih jenis kejadian. Petugas akan menindaklanjuti secara pribadi.','🛡',['Diejek / dihina','Dikucilkan','Diancam / diperas','Disakiti secara fisik','Bullying online']);
$('safeBtn').onclick=()=>{openSheet('safe','Tempat meminta bantuan','Jika merasa tidak aman, pergilah ke tempat ramai dan cari orang dewasa tepercaya.','⌖');$('sheetExtra').innerHTML='<div class="quick-location">📍 <b>Ruang Guru</b><br>Temui guru yang bertugas.</div><div class="quick-location">📍 <b>Ruang BK</b><br>Meminta pendampingan.</div><div class="quick-location">📍 <b>Pos Keamanan</b><br>Untuk bantuan segera.</div>';$('sheetPrimary').style.display='none'};
$('sheetPrimary').onclick=()=>{if(mode==='sos-confirm')send('SOS DARURAT','Butuh pertolongan segera');else if(mode==='witness')send('SAFE WITNESS',selected);else if(mode==='bully')send('ANTI-BULLYING',selected);else if(mode==='help'){closeSheet();toast('Tetap jaga keselamatan.')}};
$('helpBtn').onclick=()=>openSheet('help','Cara menggunakan','DARURAT: tekan dan tahan. LIHAT KEJADIAN: laporkan sebagai saksi. SAYA DI-BULLY: minta pendampingan. Jangan mendekati pelaku.','?',[]);
$('staffBtn').onclick=()=>alert('PANEL PETUGAS — DATA DEMO\\n\\n'+(reports.length?reports.map(r=>r.time+' · '+r.type+' · '+r.category).join('\\n'):'Belum ada laporan simulasi.')+'\\n\\nData hanya tersimpan sementara di browser ini.');
})();
