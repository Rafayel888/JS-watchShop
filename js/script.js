"use strict" //!здесь не было необходимости в строгом режиме, но я его использовал)

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Min/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry()
      || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
  }
}

const menu = document.getElementById('div__menu__phone');
const menu_div = document.getElementById('div__phone');
const body = document.querySelector('body');




// !Slider js

const slider_div = document.querySelector('.slide__div__img');
const next = document.getElementById('slider-next');
const prev = document.getElementById('slider-previous');

let img_div = document.getElementById('all__img__div').clientWidth;

let count_slider = document.getElementById('count');

let offset = 0;
let count = 1;

next.onclick = function () {

  offset += img_div;

  if (offset > 1042) {
    offset = 0;
  }

  slider_div.style.left = -offset + 'px';

  if (count == 3) {
    count = 0;
  }

  count++;
  count_slider.innerHTML = `
  ${'0' + count}
  `

}

prev.onclick = function () {

  offset -= img_div;

  if (offset < 0) {
    offset = 1042;
  }

  slider_div.style.left = -offset + 'px';

  if (count == 0) {
    count = 3;
  }

  count--;
  count_slider.innerHTML = `
  ${'0' + count}
  `
}


//! эти функции работают только во время телефона (touch)
if (isMobile.any()) {
  body.classList.add('touch');

  menu.onclick = function () {
    menu_div.classList.toggle('active')
  }


  function myFunction(x) {
    if (x.matches) {
      document.querySelectorAll('.arrow').forEach((e) => {
        e.addEventListener('click', () => {
          e.classList.toggle('active')
        })
      })

      document.querySelectorAll('.open__scroll').forEach((el) => {
        el.addEventListener('click', () => {

          let content = el.nextElementSibling;

          if (content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
          } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      });
    } else {
      console.log('not');
    }
  }

  let x = window.matchMedia("(max-width: 480px)");
  myFunction(x);
  x.addListener(myFunction);

} else {
  body.classList.add('mouse')
}





