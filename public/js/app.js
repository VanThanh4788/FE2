
//filter
const btn_fil = document.querySelectorAll('.filter-content')
const search = document.querySelector('.search ')
const filter = document.querySelector('.filter')
const textfilter = document.querySelectorAll('.title-filter.col-md-3 ul')
const filterDisplay = document.querySelector('.list-filter')
const searchDisplay = document.querySelector('.input-search')
//fiter product
const product_filter = document.querySelectorAll('.product');

//su kien click vao nut search
search.addEventListener('click', function () {
  if (search.classList.contains('actived')) {
    search.classList.remove('actived')
    searchDisplay.style.display = 'none'
  }
  else {
    search.classList.add('actived')
    filter.classList.remove('actived')
    searchDisplay.style.display = 'block';
    filterDisplay.classList.add('d-none')
  }
})

//su kien click vao filter
filter.addEventListener('click', function () {
  if (filter.classList.contains('actived')) {
    filter.classList.remove('actived')
    filterDisplay.classList.add('d-none')
    // textfilter.forEach(textfilter => {
    //   textfilter.style.display = 'inline';
    // });
  }
  else {
    filter.classList.add('actived')
    search.classList.remove('actived')
    filterDisplay.classList.remove('d-none')
    searchDisplay.style.display = 'none'
  }
})

btn_fil.forEach(element => {
  element.addEventListener('click', function () {
    resetBtnFil();
    showFilteredContent(element);
    element.classList.add('actived');
  })

});

function resetBtnFil() {
  btn_fil.forEach(element => {
    element.classList.remove('actived')
  });
}

function showFilteredContent(btn) {
  product_filter.forEach((element) => {
    if (element.classList.contains(btn.id)) {
      console.log(btn.id);
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
