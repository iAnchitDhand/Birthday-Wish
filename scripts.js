// This file contains JavaScript code to implement interactive features and animations on the birthday wish website.

document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "Happy Birthday! May your wishes come true.",
        "Another year older, another year wiser!",
        "Celebrate your special day with joy and laughter!",
        "Here's to a year of new adventures and great memories!"
    ];

    const quoteElement = document.getElementById('quote');
    const quoteButton = document.getElementById('new-quote');

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    quoteButton.addEventListener('click', displayRandomQuote);

    // Initial quote display
    displayRandomQuote();

    // Media playback functionality
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
        video.addEventListener('play', function() {
            videoElements.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });

    // Animation effects for images
    const images = document.querySelectorAll('.fade-in');
    images.forEach(image => {
        image.style.opacity = 0;
        image.style.transition = 'opacity 1s ease-in-out';
        image.onload = () => {
            image.style.opacity = 1;
        };
    });
});