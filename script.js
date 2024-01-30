$(document).ready(function() {
    // Get the elements using jQuery
    const menuToggle = $('.menu-toggle');
    const navLinks = $('.nav-links');
  
    // Toggle the active class on the navLinks when the menuToggle is clicked
    menuToggle.on('click', function() {
      navLinks.toggleClass('active');
    });
  });


  $(document).ready(function() {
    // Get the contact button using jQuery
    const contactButton = $('.contact-button');
  
    // Attach a click event listener to the contact button
    contactButton.on('click', function(e) {
      e.preventDefault();  // Prevent any default action
      // Open the default email client in a new tab or window
      window.open("mailto:weigongcmu@gmail.com", '_blank');
    });
  });
  
  
  
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a.smooth-scroll").on('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Instead of getting the hash from the link, we'll target the class directly
        var targetClass = ".selected-work-section";

        // Check if an element with that class exists
        if ($(targetClass).length) {

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(targetClass).offset().top
            }, 800);
        }
    });
});


$(document).ready(function() {
  // Check if there's a "section" query parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const sectionName = urlParams.get('section');

  if (sectionName) {
    // Wait a little for the page to fully render, then scroll to the section
    setTimeout(() => {
      const targetSection = $('.' + sectionName);
      if (targetSection.length) {  // if element with the class exists
        $('html, body').animate({
          scrollTop: targetSection.offset().top
        }, 1000); // 1000ms animation speed
      }
    }, 100);  // 100ms delay
  }
});


$(document).ready(function() {
  $(".active a").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

function openPDF() {
  // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
  var pdfPath = '/weigong-2024.pdf';
  
  // Open the PDF file in a new tab
  window.open(pdfPath, '_blank');
}


///Users/gongwei/Documents/GitHub/weigong0202.github.io/weigong-2024.pdf