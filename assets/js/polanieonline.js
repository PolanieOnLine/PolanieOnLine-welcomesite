var btn = $('.unique-btn');

let main = $('.nk-main');
let feature = $('.feature');
let tales = $('.tales');

btn.on('click', function(e) {
    main.addClass('scaleDown');
    e.stopPropagation();

    setTimeout(function() {
        feature.addClass('position-absolute animate__animated animate__fadeOutRight');
        
        tales.removeClass('d-none');
        tales.addClass('animate__animated animate__backInUp animate__delay-1s');

        setTimeout(function() {
            feature.addClass('d-none');
            feature.removeClass('position-absolute animate__animated animate__fadeOutRight');
            //tales.removeClass('animate__animated animate__backInUp');
            main.removeClass('scaleDown');
        }, 800);
    }, 1000);
});