// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Function to adjust layout based on window size
    function adjustLayout() {
      const width = window.innerWidth;
  
      // Handle header navigation responsiveness
      const nav = document.querySelector('.header nav ul');
      if (width <= 768) {
        nav.style.flexDirection = 'column';
        nav.style.gap = '5px';
      } else {
        nav.style.flexDirection = 'row';
        nav.style.gap = '10px';
      }
  
      // Adjust property grid layout
      const properties = document.querySelector('.properties');
      if (width <= 480) {
        properties.style.gridTemplateColumns = '1fr'; // One column for small screens
      } else if (width <= 768) {
        properties.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Two columns for tablets
      } else {
        properties.style.gridTemplateColumns = 'repeat(3, 1fr)'; // Three columns for larger screens
      }
  
      // Adjust font sizes dynamically
      const aboutText = document.querySelector('.about p');
      if (width <= 768) {
        aboutText.style.fontSize = '1rem';
      } else {
        aboutText.style.fontSize = '1.2rem';
      }
    }
  
    // Adjust layout on page load
    adjustLayout();
  
    // Adjust layout on window resize
    window.addEventListener('resize', adjustLayout);
  });
  