document.addEventListener('DOMContentLoaded', function() {
  var fadeIns = document.querySelectorAll('.fade-in');

  function handleScroll() {
    fadeIns.forEach(function(fadeIn) {
      if (isElementInViewport(fadeIn, 100)) { // Adjust the offset (100 in this case) to make them appear earlier
        fadeIn.style.opacity = 1;
      } else {
        fadeIn.style.opacity = 0;
      }
    });
  }

  // Initial check on page load
  handleScroll();

  window.addEventListener('scroll', handleScroll);
});

function isElementInViewport(el, offset) {
  var rect = el.getBoundingClientRect();
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewportHeight = window.innerHeight  || document.documentElement.clientHeight;

  // Check if any part of the element is in the viewport, considering an offset
  return (
    rect.right - offset > 0 &&
    rect.left + offset < viewportWidth &&
    rect.bottom - offset > 0 &&
    rect.top + offset < viewportHeight
  );
}
