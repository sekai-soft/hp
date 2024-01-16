let currentSection = 0;
let sections = $('.fullscreen');
$(window).on('wheel', function(e) {
    if (e.originalEvent.deltaY > 0) {
        currentSection++;
    } else {
        currentSection--;
    }
    currentSection = Math.min(Math.max(currentSection, 0), sections.length - 1);
    $('html, body').animate({
        scrollTop: $(sections[currentSection]).offset().top
    });
});
