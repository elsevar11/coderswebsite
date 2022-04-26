const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.iconhamburger');
const navbar = document.querySelector('.navbar');
const section = document.querySelector('.section');
const section_2=document.querySelector('.Body');
const tab=document.querySelector('.tab-2');
const vxod = document.querySelector('.girism')
const login = document.querySelector('.login');
const letter = document.querySelector('.letter');
const btnlogin = document.querySelector('.btnlogin');
const closespan = document.querySelector('.closespan');
const mainsection = document.querySelector('.mainsection');
const registerm=document.querySelector('.registerm');
hamburger.addEventListener('click', () => {
    section.classList.toggle('sectionactive');
    section_2.classList.toggle('sectionactive');
    navbar.classList.toggle('show');
    hamburger.classList.toggle('active1');
    menu.classList.toggle('mobilemenu');
    
    
})
// Making Vxod Section
registerm.addEventListener('click', () => {
    mainsection.classList.toggle('mainsectionactive');  
    login.classList.toggle('loginactive');
    })
  vxod.addEventListener('click', () => {
  mainsection.classList.toggle('mainsectionactive');  
  login.classList.toggle('loginactive');
  })
  
  btnlogin.addEventListener('click', () => {
    letter.classList.toggle('letteractive');
  })
  
  closespan.addEventListener('click', () => {
     login.classList.toggle('logindeactive');
     mainsection.classList.toggle('mainsectiondeactive');  
  }
  )


hamburger.addEventListener('click', () => {
      if(screen.width>=768 && screen.width<1223){
      section.classList.toggle('sectiontab')
      }
    })




    const parentContainer =  document.querySelector('.read-more-container');

    parentContainer.addEventListener('click', event=>{
    
        const current = event.target;
    
        const isReadMoreBtn = current.className.includes('read-more-btn');
    
        if(!isReadMoreBtn) return;
    
        const currentText = event.target.parentNode.querySelector('.read-more-text');
    
        currentText.classList.toggle('read-more-text--show');
    
        current.textContent = current.textContent.includes('Развернуть') ? "свернуть" : "Развернуть...";
    
    })