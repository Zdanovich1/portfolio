//alert('При изменении разрешения экрана не забудьте, пожалуйста, перезагрузить страницу!')
/*-----------------------------Burger menu------------------------------ */
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

/*----------Карусель в блоке Testimonials---------*/

let scrollValue = document.querySelector('input[type="range"]');
//console.log(scrollValue.value)

let testimonials = document.querySelector('.testimonials__feedback');
let testimonialsWidth = testimonials.offsetWidth;
//console.log(testimonialsWidth)

scrollValue.addEventListener("input", function () {
   //console.log(scrollValue.value)
   let winWith = window.innerWidth;

   if (winWith > 1220) {
      testimonials.style.marginLeft = `-${scrollValue.value * 298}px`
   } else if (winWith > 944 && winWith < 1221) {
      testimonials.style.marginLeft = `-${scrollValue.value * 323}px`
   }
}
)

/*----------POP-UP Testimonials---------*/

let rewiew = document.querySelectorAll('.feedback__review');
let rewiewText = document.querySelectorAll('.review__text');
const reviewBack = document.getElementById('review__back');

//console.log(winWith)

rewiew.forEach(rewiew => {
   let rewiewCloseIcon = rewiew.querySelector('.user__close-icon');

   rewiew.addEventListener('click', function (e) {
      let winWith = window.innerWidth;
      if (winWith < 944) {
         document.body.classList.toggle('_lock');
         reviewBack.classList.toggle('_active');
         rewiew.classList.toggle('_active');
         rewiewText.forEach(rewiewText => rewiewText.classList.toggle('_active'))
         rewiewCloseIcon.classList.toggle('_active');
      }
   })

   reviewBack.addEventListener("click", function (e) {
      document.body.classList.remove('_lock');
      reviewBack.classList.remove('_active');
      rewiew.classList.remove('_active');
      rewiewText.forEach(rewiewText => rewiewText.classList.remove('_active'))
      rewiewCloseIcon.classList.remove('_active');
   })
})

/*----------------------Slider----------------------*/

const pets = [
   {
      "name": "Lion",
      "img": "../../assets/images/lion.jpg",
      "habitat": "Native to Africa",
      "ration": "../../assets/icons/meet-fish_icon.svg"
   },
   {
      "name": "Zebra",
      "img": "../../assets/images/zebra.jpg",
      "habitat": "Native to Africa",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "bison",
      "img": "../../assets/images/bison.jpg",
      "habitat": "Native to North America",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "tiger",
      "img": "../../assets/images/tiger.jpg",
      "habitat": "Native to Africa",
      "ration": "../../assets/icons/meet-fish_icon.svg"
   },
   {
      "name": "kangaroo",
      "img": "../../assets/images/kangaroo.jpg",
      "habitat": "Native to Australia",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "hummingbird",
      "img": "../../assets/images/hummingbird.jpg",
      "habitat": "Native to North America",
      "ration": "../../assets/icons/meet-fish_icon.svg"
   },
   {
      "name": "giant Pandas",
      "img": "../../assets/images/Pandas.jpg",
      "habitat": "Native to Southwest China",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "Eagles",
      "img": "../../assets/images/Eagles.jpg",
      "habitat": "Native to South America",
      "ration": "../../assets/icons/meet-fish_icon.svg"
   },
   {
      "name": "cheetahs",
      "img": "../../assets/images/cheetahs.jpg",
      "habitat": "Native to Africa",
      "ration": "../../assets/icons/meet-fish_icon.svg"
   },
   {
      "name": "Gorillas",
      "img": "../../assets/images/Gorillas.jpg",
      "habitat": "Native to Congo",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "Two-toed Sloth",
      "img": "../../assets/images/Sloth.jpg",
      "habitat": "Mesoamerica, South America",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "elephant",
      "img": "../../assets/images/elephant.jpg",
      "habitat": "Native to Africa",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "Alligators",
      "img": "../../assets/images/alligators.jpg",
      "habitat": "Native to Southeastern U. S.",
      "ration": "../../assets/icons/meet-fish_icon.svg"
   },
   {
      "name": "Penguins",
      "img": "../../assets/images/Penguins.jpg",
      "habitat": "Native to Antarctica",
      "ration": "../../assets/icons/meet-fish_icon.svg"
   },
   {
      "name": "orangutan",
      "img": "../../assets/images/orangutan.jpg",
      "habitat": "Native to Sumatra",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "camel",
      "img": "../../assets/images/camel.jpg",
      "habitat": "Native to Asia",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "squirrel",
      "img": "../../assets/images/squirrel.jpg",
      "habitat": "Native to Eurasia",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   },
   {
      "name": "giraffe",
      "img": "../../assets/images/giraffe.jpg",
      "habitat": "Native to Africa",
      "ration": "../../assets/icons/banana-bamboo_icon.svg"
   }
]

const sliderElements = document.querySelectorAll('.slider__card')
const arrowLeft = document.querySelector('.arrow__left')
const arrowRight = document.querySelector('.arrow__right')
const carusel = document.querySelector('.slider__wrapper')
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const moveLeft = () => {
   carusel.classList.add("transition-left");
   arrowLeft.removeEventListener("click", moveLeft);
   arrowRight.removeEventListener("click", moveRight);
};

const moveRight = () => {
   carusel.classList.add("transition-right");
   arrowLeft.removeEventListener("click", moveLeft);
   arrowRight.removeEventListener("click", moveRight);
};

arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);

carusel.addEventListener("animationend", (animationEvent) => {

   let changedItem;
   if (animationEvent.animationName === "move-left") {
      carusel.classList.remove("transition-left");
      changedItem = ITEM_LEFT;

      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;

      const itemTitle = document.querySelectorAll('.pet-info__name');
      const itemHabitat = document.querySelectorAll('.pet-info__native');
      const itemRation = document.querySelectorAll('.item__ration');
      const itemImage = document.querySelectorAll('.item__img');

      let arr = [];
      for (let i = 0; i < 100; i++) {
         let random = getRandom(0, 17);

         if (!arr.includes(random) && pets[random].name !== itemTitle[7].innerHTML && pets[random].name !== itemTitle[8].innerHTML && pets[random].name !== itemTitle[9].innerHTML && pets[random].name !== itemTitle[10].innerHTML && pets[random].name !== itemTitle[11].innerHTML && pets[random].name !== itemTitle[12].innerHTML) {
            arr.push(random)
         }
         if (arr.length == 6) break
      }
      //console.log(arr)

      for (let i = 0; i < arr.length; i++) {
         itemImage[i].src = pets[arr[i]].img;
         itemTitle[i].innerHTML = pets[arr[i]].name;
         itemHabitat[i].innerHTML = pets[arr[i]].habitat;
         itemRation[i].src = pets[arr[i]].ration;
      }

      for (let i = 12; i < itemImage.length; i++) {
         itemImage[i].src = pets[arr[i - 12]].img;
         itemTitle[i].innerHTML = pets[arr[i - 12]].name;
         itemHabitat[i].innerHTML = pets[arr[i - 12]].habitat;
         itemRation[i].src = pets[arr[i - 12]].ration;
      }

   } else {
      carusel.classList.remove("transition-right");
      changedItem = ITEM_RIGHT;
      document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;

      const itemTitle = document.querySelectorAll('.pet-info__name');
      const itemHabitat = document.querySelectorAll('.pet-info__native');
      const itemRation = document.querySelectorAll('.item__ration');
      const itemImage = document.querySelectorAll('.item__img');
      //console.log(itemImage.length)

      let arr = [];
      for (let i = 0; i < 100; i++) {
         let random = getRandom(0, 17);

         if (!arr.includes(random) && pets[random].name !== itemTitle[7].innerHTML && pets[random].name !== itemTitle[8].innerHTML && pets[random].name !== itemTitle[9].innerHTML && pets[random].name !== itemTitle[10].innerHTML && pets[random].name !== itemTitle[11].innerHTML && pets[random].name !== itemTitle[12].innerHTML) {
            arr.push(random)
         }
         if (arr.length == 6) break
      }
      //console.log(arr)

      for (let i = 0; i < arr.length; i++) {
         itemImage[i].src = pets[arr[i]].img;
         itemTitle[i].innerHTML = pets[arr[i]].name;
         itemHabitat[i].innerHTML = pets[arr[i]].habitat;
         itemRation[i].src = pets[arr[i]].ration;
      }

      for (let i = 12; i < itemImage.length; i++) {
         itemImage[i].src = pets[arr[i - 12]].img;
         itemTitle[i].innerHTML = pets[arr[i - 12]].name;
         itemHabitat[i].innerHTML = pets[arr[i - 12]].habitat;
         itemRation[i].src = pets[arr[i - 12]].ration;
      }

   }

   arrowLeft.addEventListener("click", moveLeft);
   arrowRight.addEventListener("click", moveRight);
})

function getRandom(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
let a = getRandom(0, 8)

