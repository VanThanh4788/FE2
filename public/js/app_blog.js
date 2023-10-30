// Tạo hàm để xử lý sự kiện cuộn trang
function myFunction() {
    // Lấy vị trí cuộn hiện tại của trang
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Thực hiện các hành động tương ứng với vị trí cuộn
    if (scrollPosition <= 36) {
        // Nếu người dùng đã cuộn xuống 100px từ đầu trang, thực hiện hành động này
        nav(scrollPosition, 0);
    } else {
        // Nếu người dùng ở vị trí khác, thực hiện hành động khác
        nav(scrollPosition, 1);
        btntop();
    }
}


// Gắn kết hàm `myFunction` với sự kiện cuộn trang
window.addEventListener("scroll", myFunction);

function nav(scrollPosition, p) {
    const nav = document.querySelector('.top-nav');
    const height = document.querySelector('.top-head');
    const topheight = window.getComputedStyle(height).height;
    if (p == 0) {
        nav.style.top = `${topheight.split('px')[0] - scrollPosition}px`;
        height.style.height = `unset`;
    } else {
        nav.style.top = `${0}px`;
        height.style.height = `${topheight}px`;
    }
}

function btntop() {
    const btntop = document.querySelector('#myBtn');
    btntop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

//navbar
const navLinks = document.querySelectorAll('.nav-link');
if (navLinks.length === 0) {
    console.log('Mảng rỗng.');
} else {
    console.log('Mảng không rỗng.');
}
navLinks.forEach(element => {
    element.addEventListener('click', function () {
        removeActiveNavbar();
        alert('a');
        element.classList.add('active');
    })
});

function removeActiveNavbar() {
    navLinks.forEach(element => {
        element.addEventListener('click', function () {
            element.classList.remove('active');
        })
    });
}