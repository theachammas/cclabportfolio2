// Page navigation
const pages = {
    'optical-illusion': 'opticalIllusionPage',
    'face-generator': 'faceGeneratorPage',
    'experimental-clock': 'experimentalClockPage',
    'autobiographical-game': 'autobiographicalGamePage'
};

// Show specific page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Project card click handlers
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const pageId = pages[projectId];
        if (pageId) {
            showPage(pageId);
        }
    });
});

// Back button click handlers
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        showPage('homePage');
    });
});

// Menu button (optional functionality)
document.getElementById('menuBtn').addEventListener('click', function() {
    // Add your menu functionality here
    console.log('Menu clicked');
});

// Initialize - show home page
showPage('homePage');
