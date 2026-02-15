function showSlide(id){
  document.querySelectorAll(".slide").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* Wait for DOM */
document.addEventListener("DOMContentLoaded", function(){

  /* Envelope click */
  const envelope = document.getElementById("openEnvelope");
  if(envelope){
    envelope.onclick = function(){
      showSlide("loveLetter");
    };
  }

  /* To Proposal */
  const toProposal = document.getElementById("toProposal");
  if(toProposal){
    toProposal.onclick = function(){
      showSlide("proposalSlide");
    };
  }

  /* Yes buttons */
  const yesBtn = document.getElementById("yesBtn");
  const yesBtn2 = document.getElementById("yesBtn2");

  if(yesBtn) yesBtn.onclick = celebrate;
  if(yesBtn2) yesBtn2.onclick = celebrate;

});

/* Celebration */
function celebrate(){
  showSlide("celebrationSlide");
  launchConfetti();

  /* Optional: after celebration, go nowhere (final stage)
     If you ever want to restart:
     setTimeout(()=> parent.goToStage("intro"), 5000);
  */
}

/* Confetti */
function launchConfetti(){
  for(let i=0;i<80;i++){
    let confetti=document.createElement("div");
    confetti.className="confetti";
    confetti.style.left=Math.random()*100+"vw";
    confetti.style.background=["#ff2f7d","#ff8fab","#ffffff"][Math.floor(Math.random()*3)];
    confetti.style.animationDuration=(Math.random()*2+2)+"s";
    document.body.appendChild(confetti);

    setTimeout(()=>confetti.remove(),3000);
  }
}
