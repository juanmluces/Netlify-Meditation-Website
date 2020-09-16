const home = document.querySelector('.home');
const mindfulness = document.querySelector('.mindfulness');
const chakras = document.querySelector('.chakras');
const chakrasInfo = document.querySelector('.chakra__info');
const chakrasNav = document.querySelector('.chakras__nav');
const contactMe = document.querySelector('.contact__me');
const chakraMain1 = document.querySelector('.main--chakra1');
const chakraMain2 = document.querySelector('.main--chakra2');
const chakraMain3 = document.querySelector('.main--chakra3');
const chakraMain4 = document.querySelector('.main--chakra4');
const chakraMain5 = document.querySelector('.main--chakra5');
const chakraMain6 = document.querySelector('.main--chakra6');
const chakraMain7 = document.querySelector('.main--chakra7');
const logo = document.querySelector('.logo');
const navlist = document.querySelector('.navlist');
const homebtn = document.querySelector('.home__container');
const mediaQuery = window.matchMedia('(min-width:600px)');
const cta = document.getElementsByClassName('cta');

sections = [home, mindfulness, chakras, chakrasInfo, contactMe];

chakrasIds = [
  '.btn__chakra1',
  '.btn__chakra2',
  '.btn__chakra3',
  '.btn__chakra4',
  '.btn__chakra5',
  '.btn__chakra6',
  '.btn__chakra7',
];

chakrasIdsTwo = [
  '.btn__chakra1-nav',
  '.btn__chakra2-nav',
  '.btn__chakra3-nav',
  '.btn__chakra4-nav',
  '.btn__chakra5-nav',
  '.btn__chakra6-nav',
  '.btn__chakra7-nav',
];

sectionsChakras = [
  chakraMain1,
  chakraMain2,
  chakraMain3,
  chakraMain4,
  chakraMain5,
  chakraMain6,
  chakraMain7,
];

window.onorientationchange = function () {
  var orientation = window.orientation;
  switch (orientation) {
    case 0:
    case 90:
    case -90:
      console.log('reoriented');
      window.location.reload();
      break;
  }
};

addingEventListeners();

function addingEventListeners() {
  for (let i = 0; i < chakrasIds.length; i++) {
    let j = 0;
    j = i;
    document
      .querySelector(chakrasIds[i])
      .addEventListener('click', function () {
        changeSection(chakrasInfo);
        changeMain(sectionsChakras[j]);
      });
    document
      .querySelector(chakrasIdsTwo[i])
      .addEventListener('click', function () {
        changeMain(sectionsChakras[j]);
      });
  }

  for (let i = 0; i < cta.length; i++) {
    cta[i].addEventListener('click', function () {
      changeSection(contactMe);
    });
  }

  let chakraButtons = document.getElementsByClassName('chakra__back');
  for (let i = 0; i < chakraButtons.length; i++) {
    chakraButtons[i].addEventListener('click', function () {
      if (!mediaQuery.matches) {
        changeSection(chakras);
      }
    });
  }

  logo.addEventListener('click', function () {
    window.location.href = 'https://juanmluces.netlify.app/';
  });

  document.getElementById('navbutton').addEventListener('click', function () {
    toggleMenu();
  });

  document.querySelector('.navlist').addEventListener('click', function () {
    if (mediaQuery.matches) {
      return;
    } else {
      toggleMenu();
    }
  });

  document
    .getElementById('mindful__link')
    .addEventListener('click', function () {
      changeSection(mindfulness);
      if (mediaQuery.matches) {
        toggleMenu();
      }
    });

  document.getElementById('home__link').addEventListener('click', function () {
    changeSection(home);
  });

  homebtn.addEventListener('click', function () {
    changeSection(home);
  });

  document
    .getElementById('chakras__link')
    .addEventListener('click', function () {
      changeSection(chakras);
      if (mediaQuery.matches) {
        toggleMenu();
      }
    });

  let coursesButtons = document.getElementsByClassName('mindfulness__logo');
  for (let i = 0; i < coursesButtons.length; i++) {
    coursesButtons[i].addEventListener('click', function () {
      changeSection(contactMe);
    });
  }

  document
    .getElementById('contact__link')
    .addEventListener('click', function () {
      changeSection(contactMe);
      if (mediaQuery.matches) {
        toggleMenu();
      }
    });
}

function toggleMenu() {
  document.getElementById('nav__list').classList.toggle('show--navlist');
  document
    .querySelector('.navbutton__element')
    .classList.toggle('navbutton__element--close');
}

function changeSection(destination) {
  if (destination.classList.contains('hide')) {
    destination.classList.add('transparent');
    let i = 0;
    for (i in sections) {
      if (sections[i] == destination) {
        continue;
      }
      sections[i].classList.add('transparent');
      if (destination == home && mediaQuery.matches) {
        homebtn.classList.add('transparent');
      } else {
        if (mediaQuery.matches) {
          homebtn.classList.remove('hide');
        }
      }
    }
    setTimeout(function () {
      if (destination == home) {
        logo.classList.remove('moved__logo');
        navlist.classList.remove('show--navlist');
        if (mediaQuery.matches) {
          homebtn.classList.add('hide');
        }
      } else {
        logo.classList.add('moved__logo');
        if (mediaQuery.matches) {
          homebtn.classList.remove('transparent');
        }
      }
      destination.classList.remove('hide');
      for (i in sections) {
        if (sections[i] == destination) {
          continue;
        }
        sections[i].classList.add('hide');
      }
      setTimeout(function () {
        destination.classList.remove('transparent');
        for (i in sections) {
          if (sections[i] == destination) {
            continue;
          }
          sections[i].classList.remove('transparent');
        }
      }, 20);
    }, 500);
  }
}
function changeMain(destination) {
  if (chakrasNav.classList.contains('hide')) {
    chakrasNav.classList.add('transparent');
  }
  if (destination.classList.contains('hide')) {
    destination.classList.add('transparent');
    let i = 0;
    for (i in sectionsChakras) {
      if (sectionsChakras[i] == destination) {
        continue;
      }
      sectionsChakras[i].classList.add('transparent');
    }
    setTimeout(function () {
      if (chakrasNav.classList.contains('hide')) {
        chakras.navlist.remove('hide');
      }
      destination.classList.remove('hide');
      for (i in sectionsChakras) {
        if (sectionsChakras[i] == destination) {
          continue;
        }
        sectionsChakras[i].classList.add('hide');
      }
      setTimeout(function () {
        chakrasNav.classList.remove('transparent');
        destination.classList.remove('transparent');
        for (i in sectionsChakras) {
          if (sectionsChakras[i] == destination) {
            continue;
          }
          sectionsChakras[i].classList.remove('transparent');
        }
      }, 20);
    }, 500);
  }
}
