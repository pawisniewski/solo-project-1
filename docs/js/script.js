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

    const activeLinks = document.querySelectorAll('.sidebar-menu .menu-link');
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

  const links = document.querySelectorAll('.sidebar-menu .menu-link');

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
}
