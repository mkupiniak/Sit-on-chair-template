document.addEventListener('DOMContentLoaded', function() {

    /////////// SLIDER ///////////
    //right arrow
    rightArrow = document.querySelector('#slider .rightArr');
    //left arrow
    leftArrow = document.querySelector('#slider .leftArr');
    //.slideImage image - the one to change after click
    image = document.querySelector('#slider .slideImage > img');

    counter = 1;
    rightArrow.addEventListener('click', function() {
        counter++;
        if (counter > 2) counter = 1;
        image.setAttribute('src', 'images/' + counter + '.png');
    });

    leftArrow.addEventListener('click', function() {
        counter--;
        if (counter < 1) counter = 2;
        image.setAttribute('src', 'images/' + counter + '.png');
    });



    /////////// CHECKBOX IMAGE ///////////

    //div#condition to click on
    var clickDiv = document.getElementById('condition');
    //image with check
    var checkboxImg = document.querySelector('#condition > img');
    //array
    checkboxImgClass = checkboxImg.classList;

    clickDiv.addEventListener('click', function() {

        //if the div is empty - add image
        if (checkboxImgClass[0] === 'invisible') {
            checkboxImg.classList.remove('invisible');
            checkboxImg.classList.add('visible');
            //if the image is visible - hide it
        } else {
            checkboxImg.classList.remove('visible');
            checkboxImg.classList.add('invisible');
        }
    });
});