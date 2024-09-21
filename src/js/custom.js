
// Measure loading performance and show the loader when the page is loading
  // Store the start time when the script is loaded
const startTime = performance.now();

window.addEventListener('load', () => {
  // Calculate the loading time
  const endTime = performance.now();
  const loadingTime = endTime - startTime;

  // Log or display the loading time
  console.log(`Loading time: ${loadingTime.toFixed(2)} milliseconds`);

  // Opening animation
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    element.classList.toggle('visible');
  });

  // const loader = document.getElementById('loader');
  // setTimeout(() => {
  //   console.log("five seconds passed")
  // }, 5000);
  // loader.classList.add('hidden'); // Hide loader after page load
});


  document.addEventListener('DOMContentLoaded', function() {
      const lastLoginDate = document.getElementById('todayDate');
      const today = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      lastLoginDate.innerHTML += today.toLocaleDateString('en-US', options);;
  });

  document.getElementById('menu-toggle').addEventListener('click', function () {
      const menu = document.getElementById('menu');
      const isVisible = menu.classList.contains('menu-visible');

      if (isVisible) {
        // Start closing animation
        menu.style.height = `${menu.scrollHeight}px`; // Set to the current height
        // Trigger reflow to apply the transition
        menu.offsetHeight; // Forces the reflow
        menu.style.height = '32px'; // Set height to 32px for closing

        setTimeout(() => {
          menu.classList.remove('menu-visible');
          menu.classList.add('menu-hidden'); // Fully hide it after transition
        }, 300); // Match this duration with the CSS transition duration
      } else {
        // Start opening animation
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-visible');
        
        // Set height to the full height for opening
        menu.style.height = '0'; // Start from 0
        menu.offsetHeight; // Forces the reflow
        menu.style.height = `${menu.scrollHeight}px`; // Set to the full height
        
        // After the transition ends, set height to auto for content
        setTimeout(() => {
          menu.style.height = 'auto';
        }, 300); // Match this duration with the CSS transition duration
      }
    });