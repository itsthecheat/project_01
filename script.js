"use strict";
$(document).ready(function() {

    console.log("linked");

    var yowl = new Audio('sounds/cat_scream.mp3');

$('#start').click(function(event) {
$('#splash').hide();
$('#wrapper').show();
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

      for(var i=0; i<10; i++) { //create multiple cats
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

            // if ($dogX.left + 5 < $catX + $catW ||
            //     $dogY.top  + 5 < $catY + $catH ||
            //     $catX + 5 < $dogX.left + $dogW ||
            //     $catY + 5 < $dogY.top + $dogW) {
            //     cat.css("left", + 10);
            //     cat.css("top", + 10);
            // }

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
      };
    };







});
