const toggleMenu = function (visible) {
  document.querySelector('.sidebar').classList.toggle('show', visible);
  document.querySelector('.sidebar-menu').classList.toggle('show', visible);
};

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});


const sectionClickHandler = function(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  const activeLinks = document.querySelectorAll('.sidebar-menu a .active');
  for (let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  clickedElement.classList.add('active');

  const activeSections = document.querySelectorAll('.content .active');
  for (let activeSection of activeSections){
    activeSection.classList.remove('active');
  }

  const sectionSelector = clickedElement.getAttribute('href');
  console.log('sectionSelector:', sectionSelector);

  const targetSection = document.querySelector(sectionSelector);
  console.log('targetSection:', targetSection);

  targetSection.classList.add('active');
};

const links = document.querySelectorAll('.sidebar-menu a');

for(let link of links){
  link.addEventListener('click', sectionClickHandler);
}
