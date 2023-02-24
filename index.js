//When we click on a button, this function will pass the corresponding address of the sound track to the playing function
function SoundByClicking(Letter){
    switch(Letter){
        case 'W' : playSound("sounds\\crash.mp3");break;
        case 'A' : playSound("sounds\\kick-bass.mp3");break;
        case 'S' : playSound("sounds\\snare.mp3");break;
        case 'D' : playSound("sounds\\tom-1.mp3");break;
        case 'J' : playSound("sounds\\tom-2.mp3");break;
        case 'K' : playSound("sounds\\tom-3.mp3");break;
        case 'L' : playSound("sounds\\tom-4.mp3");break;
        default: console.log("Error");break;
    }  
}


//This function will get the keyboard input as a key press and if that keyboard input matches the letter, 
//the PlaySound() function will be called bu passing the respective sound track address to it
document.addEventListener("keydown", event => {
    if     (event.keyCode == 87) {  //W = 87
        playSound("sounds\\crash.mp3");
    }
    else if (event.keyCode == 65) { //A = 65
        playSound("sounds\\kick-bass.mp3");
    }
    else if (event.keyCode == 83) { //S = 83
        playSound("sounds\\snare.mp3");
    }
    else if (event.keyCode == 68) { //D =68
        playSound("sounds\\tom-1.mp3");
    }
    else if (event.keyCode == 74) { //J =74
        playSound("sounds\\tom-2.mp3");
    }
    else if (event.keyCode == 75) { //K =75
        playSound("sounds\\tom-3.mp3");
    }
    else if (event.keyCode == 76) { //L =76
        playSound("sounds\\tom-3.mp3");
    }
    else{
        return;
    }
  });

//This function will get the address of the sound track and play it
function playSound(address){
    // Assigning the sound track to a variable
    var snd = new Audio(address);
    // Playing the sound track
    snd.play();
}