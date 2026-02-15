const music=document.getElementById('music');

function startMusic(){
  music.play().catch(()=>{});
}
document.body.addEventListener('pointerdown', startMusic, {once:true});

function show(id){
  document.querySelectorAll('.slide').forEach(s=>s.classList.remove('show'));
  setTimeout(()=>{
    document.getElementById(id).classList.add('show');
  },50);
}

window.onload=()=>{
  show('cover');
};

function openSite(){
  startMusic();
  show('intro');
}

function goYes(){
  show('yesSlide');
}

const noBtn=document.getElementById('noBtn');

noBtn.addEventListener('click',()=>{
  show('noSlide');
});

noBtn.addEventListener('mouseover',e=>{
  e.target.style.transform=`translate(${Math.random()*18}px,${Math.random()*8}px)`;
});
