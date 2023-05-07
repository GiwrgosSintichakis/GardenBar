window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add ("display");
  }, 2000);
};

// const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
// const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li img');
// const header = document.querySelector('.header.container');


// hamburger.addEventListener('click',() => {
//   hamburger.classList.toggle('active');
//   mobile_menu.classList.toggle('active');
// });

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = 'rgba(0, 0, 0)';
  }else{
    header.style.backgroundColor = 'transparent';
  }
});

// menu_item.forEach((item) => {
//   item.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
//   });
// });



const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function(e){
  if(e.target.id !== 'sidebar' && e.target.id !== 'toggle'){
    toggle.classList.remove('active');
    sidebar.classList.remove('active');
  }  
}
toggle.onclick = function(){
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
}