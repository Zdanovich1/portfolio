/*-----------------------------Burger menu------------------------------*/
const iconMenu = document.querySelector('.header__icon');
const navigationList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');
const headerBack = document.getElementById('header__back');
const logo = document.querySelector('header__logo')

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle('_active');
      document.body.classList.toggle('_lock');
      navigationList.classList.toggle('_active');
      headerBack.classList.toggle('_active');
   });
}

if (menuLinks) {
   menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener("click", function (e) {
         iconMenu.classList.remove('_active');
         document.body.classList.remove('_lock');
         navigationList.classList.remove('_active');
         headerBack.classList.remove('_active');
      })
   })
}

if (headerBack) {
   headerBack.addEventListener("click", function (e) {
      iconMenu.classList.remove('_active');
      document.body.classList.remove('_lock');
      navigationList.classList.remove('_active');
      headerBack.classList.remove('_active');
   })
}

/*-----------------------Amount------------------------*/

const amountValues = document.querySelectorAll('input[name=amount]');
let anotherAmountValue = document.querySelector('input[name=number]');

amountValues.forEach(amountValues => {
   amountValues.addEventListener("click", function (e) {
      if (amountValues.checked) {
         anotherAmountValue.value = amountValues.value;
      }
   })
})

anotherAmountValue.addEventListener('input', function (e) {
   this.value = this.value.substr(0, 4);
   for (let i = 0; i < amountValues.length; i++) {
      if (anotherAmountValue.value === amountValues[i].value) {
         amountValues[i].checked = true;
      } else if (anotherAmountValue.value !== amountValues[0].value && anotherAmountValue.value !== amountValues[1].value && anotherAmountValue.value !== amountValues[2].value && anotherAmountValue.value !== amountValues[3].value && anotherAmountValue.value !== amountValues[4].value && anotherAmountValue.value !== amountValues[5].value && anotherAmountValue.value !== amountValues[6].value && anotherAmountValue.value !== amountValues[7].value) {
         amountValues.forEach(amountValues => amountValues.checked = false)
      }
   }
})