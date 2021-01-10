function getRandomPeriod() {
	return Math.round(Math.random() * (1000 - 500)) + 500;
}

function sendMessage (message) {
  window.InputEvent = window.Event || window.InputEvent;

  var event = new InputEvent('input', {
    bubbles: true
  });

  var textbox = document.getElementsByClassName("_1awRl copyable-text selectable-text")[1];

  textbox.innerHTML = message;
  textbox.dispatchEvent(event);

  document.querySelector("button._2Ujuu").click();
}

var message = prompt("Digite a mensagem que deseja enviar:", "Salve!");
if (menssage == null || menssage == "") {
  txt = "User cancelled the prompt.";
} else {
  var count = parseInt(prompt("Quantas vezes deseja enviar a mensagem? (Cuidado, números exorbitantes podem travar seu computador)", "100"));
  for (let i = 0; i < count; i++) { 
  	let randomPeriod = getRandomPeriod();
  	setTimeout(function () {
    	this.sendMessage(message)
    }, randomPeriod);
	}
}
