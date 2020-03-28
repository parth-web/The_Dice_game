        /* For Player 1 image*/



var randomNumber01= Math.floor((Math.random()*6)+1);  //creating a random number...

 var randomDice= "dice"+ randomNumber01+ ".png";       // Linking a random number to a dice image...

var randomImage= "images/"+ randomDice;                  // Linking a random number to a dice image...

var image1=document.querySelectorAll("img")[0];         //Selecting the image query and storiing it into a variable...

image1.setAttribute("src",randomImage);               // Changing the setAttribute to the randomimage...

          // for Player 2 image

var randomNumber02= Math.floor((Math.random()*6)+1);

var random_dice= "dice"+ randomNumber02+".png";

var random_image="images/"+ random_dice;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", random_image);
                      /*      .............*/

if(randomNumber01>randomNumber02){
  document.querySelector("h1").innerHTML=" 🚩Player 1 Wins!";
  }
else if (randomNumber01===randomNumber02) {
  document.querySelector("h1").innerHTML="Opps, It's a Draw😞😞";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
