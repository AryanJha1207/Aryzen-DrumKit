let numberOfButtons = document.querySelectorAll(".drum").length;

// Add click event listeners
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let key = this.classList[1];
    playSound(key);
    buttonAnimation(key);
    activateVisualizer();
  });
}

// Add keyboard event listener
document.addEventListener("keypress", function (event) {
  let key = event.key.toLowerCase();
  
  if (['w', 'a', 's', 'd', 'j', 'k', 'l'].includes(key)) {
    playSound(key);
    buttonAnimation(key);
    activateVisualizer();
  }
});

// Sound function
function playSound(key) {
  try {
    let audio;
    switch (key) {
      case "w":
        audio = new Audio("./sounds/tom-1.mp3");
        break;
      case "a":
        audio = new Audio("./sounds/tom-2.mp3");
        break;
      case "s":
        audio = new Audio("./sounds/tom-3.mp3");
        break;
      case "d":
        audio = new Audio("./sounds/tom-4.mp3");
        break;
      case "j":
        audio = new Audio("./sounds/snare.mp3");
        break;
      case "k":
        audio = new Audio("./sounds/crash.mp3");
        break;
      case "l":
        audio = new Audio("./sounds/kick-bass.mp3");
        break;
      default:
        return;
    }
    
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.log("Audio play failed:", error);
    });
    
  } catch (error) {
    console.log("Error playing sound:", error);
  }
}

// Button animation
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  
  if (activeButton) {
    activeButton.classList.remove("pressed");
    void activeButton.offsetWidth;
    activeButton.classList.add("pressed");
    
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 150);
  }
}

// Sound Reactive Visualizer
function activateVisualizer() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    // Reset to small height
    bar.style.height = '10px';
    
    // Create random height for each bar
    const randomHeight = Math.floor(Math.random() * 40) + 15;
    
    // Animate to random height
    bar.style.transition = 'height 0.1s ease-out';
    bar.style.height = randomHeight + 'px';
    
    // Return to small height after delay
    setTimeout(() => {
      bar.style.height = '10px';
    }, 120);
  });
}

// Initialize visualizer with small bars
document.addEventListener('DOMContentLoaded', function() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    bar.style.height = '10px';
  });
});