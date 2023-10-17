

document.addEventListener('DOMContentLoaded', function() {
    
    var fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(function(fadeIn) {
      if (isElementInViewport(fadeIn)) {
        fadeIn.style.opacity = 1;
      }     
    })
    window.addEventListener('scroll', function() {
      fadeIns.forEach(function(fadeIn) {
        if (isElementInViewport(fadeIn)) {
          fadeIn.style.opacity = 1;
        }else{
          fadeIn.style.opacity = 0;
        }
      });
    });
  
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
});

