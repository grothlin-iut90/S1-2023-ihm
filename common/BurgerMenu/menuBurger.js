const spinContainer = document.querySelector(".spin-container");
const sideNav = document.querySelector('.sidenav');

spinContainer.addEventListener("click", () => {

    spinContainer.classList.toggle("active");
    sideNav.classList.toggle("active");
});

