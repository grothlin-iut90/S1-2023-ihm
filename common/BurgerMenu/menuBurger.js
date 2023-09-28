const spinContainer = document.querySelector(".spin-container");
const sideNav = document.querySelector('.sidenav');
const btn = document.querySelector(".burger-menu-btn");

btn.addEventListener("click", () => {

    spinContainer.classList.toggle("active");
    sideNav.classList.toggle("active");
});

