const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.iconhamburger');
const navbar = document.querySelector('.navbar');
const section = document.querySelector('.section');
const section_2=document.querySelector('.Body');
const tab=document.querySelector('.tab-2');

hamburger.addEventListener('click', () => {
    section.classList.toggle('sectionactive');
    section_2.classList.toggle('sectionactive');
    navbar.classList.toggle('show');
    hamburger.classList.toggle('active1');
    menu.classList.toggle('mobilemenu');
    
    
})



hamburger.addEventListener('click', () => {
      if(screen.width>=768 && screen.width<1223){
      section.classList.toggle('sectiontab')
      }
    })




    



    // var acc = document.getElementsByClassName("accordion");
    // var i;
    
    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
    //     this.classList.toggle("active0");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.maxHeight) {
    //       panel.style.maxHeight = null;
    //     } else {
    //       panel.style.maxHeight = panel.scrollHeight + "px";
    //     } 
    //   });
    // }