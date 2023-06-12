
//Input number
const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
});
//heart background
const productIcon= document.querySelectorAll(".product-icon");
productIcon.forEach(element => {
  element.addEventListener('click',function() {
    if(element.classList.contains("actived"))
    {
      element.classList.remove ("actived");
      element.querySelector('i').classList.remove('zmdi-favorite')
      element.querySelector('i').classList.add('zmdi-favorite-outline')
    }
    else
    {
      element.classList.add("actived");
      element.querySelector('i').classList.add('zmdi-favorite')
      element.querySelector('i').classList.remove('zmdi-favorite-outline')
    }    
  })
});


//show product view
//change image product detail
const imgSelect= document.querySelectorAll(".img-select");
const imgMain= document.querySelector(".img-main");
imgSelect.forEach(element => {
  element.addEventListener('click',function(){
    imgMain.src=element.src;
  })
});

//An hien product show
const btnProduct = document.querySelectorAll('.product-btn');
const productShow = document.querySelector('.productshow');
const productDetail = document.querySelector('.product-detail');
productShow.addEventListener('click', function (event) {
  //ham dung de chan su kien click lan toa (click con anh huong cha)
  event.stopPropagation();
})
btnProduct.forEach(element => {
  element.addEventListener('click', function () {
    productDetail.style.display = 'flex';
  })
});

productDetail.addEventListener('click', function () {
  productDetail.style.display = 'none';
})
// slide
let slide = document.querySelectorAll('.slide');
const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');
let index = 0;
function Next() {
  slide[index].classList.remove('active');
  index = (index + 1) % slide.length;
  slide[index].classList.add('active');
}
function Prev() {
  slide[index].classList.remove('active');
  index = (index - 1 + slide.length) % slide.length;
  slide[index].classList.add('active');
}
next.addEventListener('click', Next);
prev.addEventListener('click', Prev);
setInterval(Next, 5000);
// slide