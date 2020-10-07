const buttons = document.querySelectorAll(".drum");

for (const button of buttons) {
  button.addEventListener("click", handleClick);
}

document.addEventListener("keydown", function(event) {
  playDrumsBykey(event.key);
});

function handleClick() {
  playDrumsBykey(this.innerText);
}

function playDrumsBykey(key) {

  var soundFileName = "";
  switch (key) {
    case "w":
      soundFileName = "tom-1";
      break;
    case "a":
      soundFileName = "tom-2";
      break;
    case "s":
      soundFileName = "tom-3";
      break;
    case "d":
      soundFileName = "tom-4";
      break;
    case "j":
      soundFileName = "crash";
      break;
    case "k":
      soundFileName = "kick-bass";
      break;
    case "l":
      soundFileName = "snare";
      break;

    default:
      return;
  }

  animateButton(key);

  soundFilePath = "sounds/" + soundFileName + ".mp3";
  new Audio(soundFilePath).play();
}

function animateButton(key) {
  let keyButton = document.querySelector("." + key);
  keyButton.classList.add("pressed");
  setTimeout(function() {
    keyButton.classList.remove("pressed");
  }, 120)
}
