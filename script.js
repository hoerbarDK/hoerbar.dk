let mainElement = document.querySelector('main');
let iconContainer = document.getElementById('iconContainer');
let iconWrapper = document.getElementById('iconWrapper');
let iconLeft = document.getElementById('iconLeft');
let iconRight = document.getElementById('iconRight');

function iconAnimation() {
  if (iconWrapper && iconLeft && iconRight && iconContainer) {
    // Generate a random rotation value between 45 and 360
    let randomRotation = Math.floor(Math.random() * (360 - 45 + 1) + 45);
    // Set rotation for icon wrapper
    iconWrapper.style.transform = 'rotate(' + randomRotation + 'deg)';
    // Set 'top' for iconLeft and iconRight
    iconLeft.style.top = '-50%';
    iconRight.style.top = '100%';
    // Fade out icon wrapper
    iconWrapper.style.opacity = '0';
    // Fade out icon container
    iconContainer.style.opacity = '0';
    // Hide icon container and load page after 2.25 seconds
    setTimeout(function () { iconContainer.style.display = 'none'; }, 2250);
  }
}

window.addEventListener('load', function() {
    iconAnimation();
});