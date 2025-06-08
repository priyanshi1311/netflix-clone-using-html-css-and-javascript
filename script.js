// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Movie hover effect enhancement
const movies = document.querySelectorAll('.movie');

movies.forEach(movie => {
    movie.addEventListener('mouseenter', () => {
        // Add a slight delay to make the animation smoother
        setTimeout(() => {
            movie.style.transform = 'scale(1.1)';
            movie.style.zIndex = '10';
            movie.style.transition = 'all 0.3s ease';
        }, 150);
    });

    movie.addEventListener('mouseleave', () => {
        movie.style.transform = 'scale(1)';
        movie.style.zIndex = '0';
        movie.style.transition = 'all 0.3s ease';
    });
});

// Play button functionality
const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
    alert('Playing Money Heist');
});

// More info button functionality
const moreInfoButton = document.querySelector('.more-info-button');
moreInfoButton.addEventListener('click', () => {
    const moreInfo = `
        Title: Money Heist (La Casa de Papel)
        Year: 2017-2021
        Seasons: 5
        Rating: TV-MA
        Description: A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.
    `;
    alert(moreInfo);
});

// Simulate content loading
document.addEventListener('DOMContentLoaded', () => {
    const movies = document.querySelectorAll('.movie');
    
    // Add a slight delay to each movie to create a staggered loading effect
    movies.forEach((movie, index) => {
        movie.style.opacity = '0';
        movie.style.transform = 'translateY(20px)';
        movie.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            movie.style.opacity = '1';
            movie.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Menu item click functionality
const menuItems = document.querySelectorAll('.menu-list li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all menu items
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
        });
        
        // Add active class to clicked menu item
        item.classList.add('active');
        
        // Show a message indicating which section was clicked
        alert(`Navigating to ${item.textContent} section`);
    });
});

// Profile click functionality
const profileContainer = document.querySelector('.profile-container');
profileContainer.addEventListener('click', () => {
    alert('Profile settings would open here');
});

// Simulate a featured content rotation for the hero section
function rotateFeaturedContent() {
    const featuredTitles = [
        { title: 'Money Heist', description: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.' },
        { title: 'Stranger Things', description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.' },
        { title: 'The Witcher', description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.' },
        { title: 'Squid Game', description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes.' }
    ];
    
    let currentIndex = 0;
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    
    // Change featured content every 10 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % featuredTitles.length;
        
        // Fade out
        heroTitle.style.opacity = '0';
        heroDescription.style.opacity = '0';
        
        setTimeout(() => {
            // Update content
            heroTitle.textContent = featuredTitles[currentIndex].title;
            heroDescription.textContent = featuredTitles[currentIndex].description;
            
            // Fade in
            heroTitle.style.opacity = '1';
            heroDescription.style.opacity = '1';
        }, 500);
    }, 10000);
}

// Initialize featured content rotation
rotateFeaturedContent();

// Add transition styles to hero content
const heroTitle = document.querySelector('.hero-title');
const heroDescription = document.querySelector('.hero-description');

heroTitle.style.transition = 'opacity 0.5s ease';
heroDescription.style.transition = 'opacity 0.5s ease';
