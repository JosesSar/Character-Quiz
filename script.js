$( document ).ready(function() {
   


var rigby = "https://www.kindpng.com/picc/m/332-3326206_thumb-image-rigby-regular-show-png-transparent-png.png";

var mordecai = "https://pbs.twimg.com/profile_images/469274971886612481/MHmShswq.jpeg";

var benson = "https://sites.google.com/site/regularshowfanpagedbrowning/_/rsrc/1413901123008/benson/Benson_Be_Gone_Screen_021.png";
var pops = "https://www.clipartkey.com/mpngs/m/181-1812136_regular-show-wiki-pops-mordecai-and-rigby.png"; 
var error = "https://memegenerator.net/img/images/300x300/12328318.jpg";
var counter = 0;

$(".btn1") .click(function(){
   
    counter = counter + 1;
    $(".counter").text("The quiz was taken " + counter + " times");
	var adventure = $(".adventure").val() ;        
    var food = $(".food").val();
  if(adventure < 5 && food.toUpperCase() === "NO") {
    $(".results").text("You are Benson!");
    $(".results").append("<img src=https://sites.google.com/site/regularshowfanpagedbrowning/_/rsrc/1413901123008/benson/Benson_Be_Gone_Screen_021.png>");
    }else if(adventure > 5 && food.toUpperCase() === "NO") {
    $(".results").text("You are Pops!"); 
    $(".results").append("<img src=https://www.clipartkey.com/mpngs/m/181-1812136_regular-show-wiki-pops-mordecai-and-rigby.png>");
    }else if(adventure < 5 && food.toUpperCase() === "YES") {
    $(".results").text("You are Mordecai!");
    $(".results").append("<img src=https://pbs.twimg.com/profile_images/469274971886612481/MHmShswq.jpeg>");
    }else if(adventure > 5 && food.toUpperCase() === "YES") {
    $(".results").text("You are Rigby!");
    $(".results").append("<img src= https://www.kindpng.com/picc/m/332-3326206_thumb-image-rigby-regular-show-png-transparent-png.png>");
    }else {
	$(".results").text("Oops! Insert some values to continue!");
    $(".results").append("<img src=https://memegenerator.net/img/images/300x300/12328318.jpg>");
             }
});
});
