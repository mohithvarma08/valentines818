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
