let hamb =document.querySelector(".hamburger");
let side = document.querySelector(".ham-menu")
let body = document.querySelector("body")
hamb.addEventListener("click",()=>{
      if (side.style.display === "block") {
    side.style.display = "none";
  } else {
    side.style.display = "block";
  }
    
})




window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    side.style.display = "none"; 
  }
});




window.addEventListener("click", (e) => {
  
  if (
    side.style.display === "block" &&
    !side.contains(e.target) &&
    !hamb.contains(e.target)
  ) {
    side.style.display = "none";
  }
});


side.addEventListener("click", (e) => {
  e.stopPropagation();
});

