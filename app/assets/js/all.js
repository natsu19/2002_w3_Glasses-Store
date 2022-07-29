let navToggle = document.querySelector(".navToggle")
  let nav = document.querySelector(".nav")

  
  //點漢堡icon時
  navToggle.onclick = function(){
    //增加一個active的class
    nav.classList.toggle("active");
  }