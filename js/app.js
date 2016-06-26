document.addEventListener('DOMContentLoaded', function() {

    /////////// ---- SLIDER ---- ///////////
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

    /////////// END - SLIDER ///////////

    /////////// ---- MAKE UP YOUR CHAIR ---- ///////////

    /////////// ADD CLICK EVENT ON TRANSPORT DIV ///////////

    var transportCheck = document.getElementById('transport');
    var values = document.getElementById('values');

    transportCheck.addEventListener('click', function() {
        tickTransport();
    });

    /////////// ADD CLICK EVENT ON TRANSPORT SPAN SO IT TICKS THE BOX ///////////

    var spanTransport = document.querySelector('#transport + span');
    spanTransport.addEventListener('click', function() {
        tickTransport();
    });

    var shippingCost = document.querySelector('#values > p:nth-of-type(3)');
    var shippingCostTxt = document.querySelector('#properties > p:nth-of-type(3)');


    /////////// ON CLICKING OPTION TAGS ADD NAME TO SUMMARY TABLE ///////////
    // <select> 1st tag
    var selectChair = document.getElementById('chairSort');
    // h3 tag to hold chair name in summary table
    var chairHeadingName = document.querySelector('#properties > h3');
    // h3 tag to hold chair price in summary table
    var chairHeadingPrice = document.querySelector('#values > h3');
    // select summary span
    var summarySpan = document.getElementById('summarySum');

    ///// CHAIR ---NAME--- OPTION /////
    // chair price list
    var chairPriceList = ['200 zł', '350 zł', '499 zł'];
    // add change listener to <select> tag

    selectChair.addEventListener('change', function() {
        // holds selected option index
        var selectedChairIndex = selectChair.options.selectedIndex;
        //put chair name inside h3 tag
        chairHeadingName.innerHTML = selectChair.children[selectedChairIndex].text;
        //put chair price inside h3 tag
        chairHeadingPrice.innerHTML = chairPriceList[selectedChairIndex - 1];
        totalPrice();
    });

    ///// CHAIR ---COLOR--- OPTION /////
    // <select> 2nd tag
    var selectColor = document.getElementById('chairColor');
    //holds 1st p tag where the color name goes
    var chairColor = document.querySelector('#properties > p:nth-of-type(1)');
    // p tag to hold chair price in summary table
    var chairColorPrice = document.querySelector('#values > p:nth-of-type(1)');
    // add change listener to <select> tag
    // color price list
    var colorPriceList = ['10 zł', '20 zł', '30 zł', '0 zł'];

    selectColor.addEventListener('change', function() {
        // holds selected option index
        var selectedColorIndex = selectColor.options.selectedIndex;
        //put chair color inside p tag
        chairColor.innerHTML = selectColor.children[selectedColorIndex].text;
        //put chair price inside p tag
        chairColorPrice.innerHTML = colorPriceList[selectedColorIndex - 1];
        totalPrice();
    });

    ///// CHAIR ---FABRIC--- OPTION /////
    // <select> 3rd tag
    var selectFabric = document.getElementById('chairFabric');
    //holds 2nd p tag where the color name goes
    var chairFabric = document.querySelector('#properties > p:nth-of-type(2)');
    // p tag to hold chair price in summary table
    var chairFabricPrice = document.querySelector('#values > p:nth-of-type(2)');
    // add change listener to <select> tag
    // fabric price list
    var fabricPriceList = ['100 zł', '500 zł', '200 zł'];

    selectFabric.addEventListener('change', function() {
        // holds selected option index
        var selectedFabricIndex = selectFabric.options.selectedIndex;
        //put chair color inside p tag
        chairFabric.innerHTML = selectFabric.children[selectedFabricIndex].text;
        //put chair price inside p tag
        chairFabricPrice.innerHTML = fabricPriceList[selectedFabricIndex - 1];
        totalPrice();
    });

    /////////// ---- END MAKE UP YOUR CHAIR ---- ///////////

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

    /////////// END CHECKBOX IMAGE ///////////

    /////-----FUNCTIONS-----/////
    function tickTransport() {
        //if the p element is not empty (so the box is ticked)
        if (transportCheck.className.indexOf('transportCheck') > -1) {
            transportCheck.classList.remove('transportCheck');
            //remove shipping price from table
            shippingCost.innerHTML = '';
            //remove transport text from table
            shippingCostTxt.innerHTML = '';
            // upadte summary
            totalPrice();
        } else {
            //id you dont find add the class
            transportCheck.classList.add('transportCheck');
            //add shipping price to table
            shippingCost.innerHTML = '80 zł';
            //add transport text to table
            shippingCostTxt.innerHTML = 'transport';
            //update summary
            totalPrice();
        }
    }

    function totalPrice() {
        // create var to store total price
        var totalPrice = 0;
        //find #shippingCost
        if (chairHeadingPrice.innerHTML != "") {
            //get chair price from h3 tag
            totalPrice += parseInt(chairHeadingPrice.innerHTML);
        }
        if (chairColorPrice.innerHTML != "") {
            //get chair color from 1st p tag
            totalPrice += parseInt(chairColorPrice.innerHTML);
        }
        if (chairFabricPrice.innerHTML != "") {
            //get chair fabric from 2nd p tag
            totalPrice += parseInt(chairFabricPrice.innerHTML);
        }
        if (shippingCost.innerHTML != "") {
            //get transport cost from 3nd p tag
            totalPrice += parseInt(shippingCost.innerHTML);
        }
        //put total price to summary span
        summarySpan.innerHTML = totalPrice;
    }

});
