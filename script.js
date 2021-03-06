function getRandomPeriod() {
	return Math.round(Math.random() * (1000 - 500)) + 500;
}

function sendMessage (message) {
  window.InputEvent = window.Event || window.InputEvent;

  var event = new InputEvent('input', {
    bubbles: true
  });

  var textbox = document.getElementsByClassName("_2_1wd copyable-text selectable-text")[1];

  textbox.innerHTML = message;
  textbox.dispatchEvent(event);

  document.querySelector("button._1E0Oz").click();
}

var message = prompt("Type the message you want to send:", "Hello!");
if (message == null || message == "") {
  txt = "User cancelled the prompt.";
} else {
  var count = parseInt(prompt("How many times do you want to send it? (Be careful)", "100"));
  for (let i = 0; i < count; i++) { 
  	let randomPeriod = getRandomPeriod();
		setTimeout(function () {
			this.sendMessage(message)
		}, randomPeriod);
	}
}
