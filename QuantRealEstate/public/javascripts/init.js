document.addEventListener('DOMContentLoaded', init);

function init(evt) {
	if(window.location.pathname === '/contact') {
		var button = document.getElementById('sendMessage');
		button.addEventListener('click', sendMessage);
	}
}

function sendMessage(evt) {
	evt.preventDefault();
	console.log("Send message.");
}

