const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  sidebar.classList.toggle('open');
});

function closeSidebar() {
  menuToggle.classList.remove('open');
  sidebar.classList.remove('open');
}

function handleResize() {
  if (window.innerWidth > 768) {
    closeSidebar();
  }
}

window.addEventListener('resize', handleResize);

// Get all feature elements
const features = document.querySelectorAll('.feature');

// Add event listener to each feature element
features.forEach(feature => {
  feature.addEventListener('mouseover', () => {
    feature.classList.add('active');
  });

  feature.addEventListener('mouseout', () => {
    feature.classList.remove('active');
  });
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  }
}

window.addEventListener('DOMContentLoaded', function() {
  var homeDescription = document.getElementById('home-description');
  
  function updateDescription() {
    if (window.innerWidth <= 768) {
      homeDescription.textContent = "Embrace a greener future with the EcoHero app. Gain insights and take action for sustainable waste management. Join us on this journey to a brighter, eco-friendly world!";
    } else {
      homeDescription.textContent = "With the EcoHero app, you can gain valuable insights and take meaningful action towards a greener and more sustainable future. By understanding the impact of our actions and making conscious choices through the app, we can actively contribute to reducing waste, conserving resources, and creating a healthier environment for generations to come. Let's embark on this journey together with the EcoHero app and make a positive difference for our planet!";
    }
  }
  
  // Call the function initially
  updateDescription();
  
  // Call the function whenever the window is resized
  window.addEventListener('resize', updateDescription);
});

