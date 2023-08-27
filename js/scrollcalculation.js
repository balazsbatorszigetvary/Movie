/*

// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Iterate over each navigation link
navLinks.forEach((link) => {
  // Add click event listener to each link
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior

    // Get the target section ID from the href attribute
    const targetId = link.getAttribute('href');

    // Get the target section element
    const targetSection = document.querySelector(targetId);

    // Calculate the offset to adjust the scroll position
    const navHeight = document.getElementById('nav').offsetHeight; // Height of the navigation bar
    const targetPosition = targetSection.offsetTop; // Top position of the target section
    const offset = navHeight; // Adjust the offset as needed

    // Scroll to the target section with adjusted offset
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth'
    });
    
  });
});

*/


$(document).ready(function() {
  // Get all the navigation links
  var navLinks = $('.nav-link');

  // Add click event listener to each link
  navLinks.on('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior

    // Get the target section ID from the href attribute
    var targetId = $(this).attr('href');

    // Get the target section element
    var targetSection = $(targetId);

    // Calculate the offset to adjust the scroll position
    var navHeight = $('#nav').outerHeight(); // Height of the navigation bar
    var targetPosition = targetSection.offset().top; // Top position of the target section
    var offset = navHeight; // Adjust the offset as needed

    // Scroll to the target section with adjusted offset
    $('html, body').animate({
      scrollTop: targetPosition - offset
    }, 'slow');
  });
});







  

   
  
