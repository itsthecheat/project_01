# project_01

Peanut's Cat Chase!

Objective: Catch all the cats

Built with Javascript, jQuery, HTML and CSS

1. Move the dog image with the cursor to catch all the cats. 
   When cats are gone, the game is won.

The game relies on collision detection to determine whether 
the dog is touching the cat. Once able to determine the 
width, height and x, y coordinates of the elements to detect,
an if statement can be used to set certain actions to occur
when the elements collide. In the case of Peanut's Cat Chase,
when the cat and dog touch the cat changes to a "dead" cat face
and makes a cat noise, and the div is removed from the DOM. As 
each cat is caught, a small cat head appears in a score box in the upper right corner to 
keep tabs on the number caught. Collision detection was turned 
off on the "dead" cats in order to acheive one cat to appear in 
the score for each cat caught. A check winner function is called
after the dead cat is removed, if all of the dead cats are gone
the game is over.

