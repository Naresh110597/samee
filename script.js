// Add this JavaScript for menu toggle functionality
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.right').classList.toggle('active');
});