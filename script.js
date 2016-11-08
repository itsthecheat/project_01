"use strict";
$(document).ready(function() {

    console.log("linked");

    var yowl = new Audio('sounds/cat_scream.mp3');

    $('#start').click(function(event) {
        $('#splash').hide();
        $('#wrapper').show();
        countDown();
    });

    var $dog = $('#dog'); //global variables
    var body = $('#wrapper');
    var $cat = $('.cat');


    function newCat() { //creates a div w/ class cat, appends to body
        var cat = $('<div class="cat"></div>');
        body.append(cat);
        setInterval(function() { //moves cats randomly
            cat.css("top", Math.random() * window.innerHeight);
            cat.css("left", Math.random() * window.innerWidth);
        }, 1500)
    }

    for (var i = 0; i < 10; i++) { //create multiple cats
        newCat();
    }

    function getCollision(cat) { //collision detection for elements
        $(cat).each(function(index, cat) { //loops through each cat div
            var $dogH = $dog.outerHeight(true);
            var $dogW = $dog.outerWidth(true);
            var $dogX = $dog.position();
            var $dogY = $dog.position();

            var $catH = parseInt($(cat).css('height').replace('px', ''))
            var $catW = parseInt($(cat).css('width').replace('px', ''))
            var $catX = parseInt($(cat).css('left').replace('px', ''))
            var $catY = parseInt($(cat).css('top').replace('px', ''))

            if ($dogX.left < $catX + $catW &&
                $dogY.top < $catY + $catH &&
                $catX < $dogX.left + $dogW &&
                $catY < $dogY.top + $dogW) {
                $(cat).addClass('dead');
                yowl.play();
                $('.score').prepend('<img src="images/cat_dead_sm.png" />');
                setTimeout(function() {
                    $('.dead').remove(); //removes dead cat after 2s
                    checkWinner();
                }, 2000);
                console.log('boom');
            };
        });
    };
    $('#wrapper').mousemove(function(e) { //moves dog div to follow cursor
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        $('#dog').css({
            top: y,
            left: x,
        });
        $cat = $('.cat:not(.dead)');
        getCollision($cat); //calls function to check distance
    })();


    function checkWinner() {
        if ($('.cat').length === 0) {
            $('#wrapper').hide();
            $('#finish').show();
            $('#done').click(function(event) {
                document.location.reload()
            });
        };
    };



    function countDown() {
        var counter = 15;
        setInterval(function() {
            counter--;
            if (counter >= 0) {
                $('#timer').html(counter);
            }
            if (counter === 0) {
                $('#wrapper').hide();
                $('#finish').show();
                $('.end-title').text('Game Over!');
                $('#done').click(function(event) {
                    document.location.reload()
                });
                clearInterval(counter);
            }
        }, 1000);
    };

    // code help from following resources:
    // http://stackoverflow.com/questions/4847726/how-to-animate-following-the-mouse-in-jquery
    // http://stackoverflow.com/questions/3042092/using-jquery-animate-to-animate-a-div-from-right-to-left
    // https://css-tricks.com/how-to-resizeable-background-image/
    // https://gist.github.com/jaxxreal/7527349
    // https://www.jabari-holder.com/blog/how-to-detect-2-elements-colliding-or-overlapping-in-jquery/
    // http://stackoverflow.com/questions/8619619/creating-a-start-screen-for-a-html5-canvas-game
    // http://css3buttongenerator.com/
    // http://stackoverflow.com/questions/22795248/how-do-i-restart-content-without-refreshing-the-page
    // http://stackoverflow.com/questions/3089475/how-can-i-create-a-5-second-countdown-timer-with-jquery-that-ends-with-a-login-p

    //question on stack overflow re: scoreboard
    //http://stackoverflow.com/questions/40455352/adding-image-to-different-div-upon-change-removal-of-another-div




});
