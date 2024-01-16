const sections = $('.fullscreen');
const scrollDuration = 200;

let currentSection = 0;

$(window).on('wheel', (e) => {
    navigateSections(e.originalEvent.deltaY); 
});

const navigateSections = (deltaY) => {
    if (deltaY > 0) {
        currentSection++;
    } else {
        currentSection--;
    }
    currentSection = Math.min(Math.max(currentSection, 0), sections.length - 1);
    $('html, body').animate({
        scrollTop: $(sections[currentSection]).offset().top
    }, scrollDuration);
}
