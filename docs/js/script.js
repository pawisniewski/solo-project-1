{
  /* Mobile menu visibility */

  const toggleMenu = function (visible) {
    document.querySelector('.sidebar').classList.toggle('show', visible);
    document.querySelector('.sidebar-menu').classList.toggle('show', visible);
  };

  document.querySelector('.hamburger').addEventListener('click', function(event) {
    event.preventDefault();
    toggleMenu();
  });


  /* Sidebar menu links */

  const sectionClickHandler = function(event) {

    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    const activeLinks = document.querySelectorAll('.side-menu-list .menu-link');
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

    window.scrollTo(0, 0);
    document.querySelector('.sidebar').classList.remove('show');
    document.querySelector('.sidebar-menu').classList.remove('show');
  };

  const links = document.querySelectorAll('.side-menu-list .menu-link');

  for(let link of links){
    link.addEventListener('click', sectionClickHandler);
  }


  /* Dynamic chart */

  const ctx = document.getElementById('myChart').getContext('2d');

  // eslint-disable-next-line no-undef, no-unused-vars
  const chart = new Chart (ctx, {

    type: 'bar',
    data: {

      labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
      datasets: [{

        label: 'Signups',
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],

      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
        hidden: true,
      }]
    },
    options: {
      legend: {
        display: false,
      },
    },
  });


  /* Modals visibility */

  const closeModal = function() {
    document.getElementById('overlay').classList.remove('show-mod');
    document.getElementById('quitModal').classList.remove('show-mod');
    document.getElementById('chatModal').classList.remove('show-mod');
  };

  document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
    });
  });

  document.querySelector('#overlay').addEventListener('click', function(e) {
    if(e.target === this) {
      closeModal();
    }
  });

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal();
    }
  });

  const openModal = function(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show-mod');
    });
    document.querySelector('#overlay').classList.add('show-mod');
    document.querySelector(modal).classList.add('show-mod');
  };


  /* Quit modal listeners */

  document.querySelector('.quit-side').addEventListener('click', function(event) {
    event.preventDefault();
    openModal('#quitModal');
    console.log('Quit was clicked!');
  });

  document.querySelector('.quit-top').addEventListener('click', function(event) {
    event.preventDefault();
    openModal('#quitModal');
    console.log('Quit was clicked!');
  });


  /* Chat modal listeners */

  document.querySelector('.manager-image').addEventListener('click', function(event) {
    event.preventDefault();
    openModal('#chatModal');
    console.log('Chat was clicked!');
  });

  document.querySelector('.manager-name').addEventListener('click', function(event) {
    event.preventDefault();
    openModal('#chatModal');
    console.log('Chat was clicked!');
  });

}
