function bigger() {
    alert("Fancity Program");
    document.getElementById("Textbox").style.fontSize = "48pt";
}

function fancify() {

    document.getElementById("Textbox").style.fontWeight = "Bold";
    document.getElementById("Textbox").style.color = "Green";
    document.getElementById("Textbox").style.textDecoration = "underline";
}

function makeBoring() {
	document.getElementById("Textbox").style.fontWeight = "normal";
	document.getElementById("Textbox").style.color = "Black";
	document.getElementById("Textbox").style.textDecoration = "none";

}

function mooBtn(){
	var userText = document.getElementById("Textbox");
	userText.style.textTransform = "uppercase";
	var parts = userText.value.split(".");
	userText.value = parts.join("-Moo");
}
