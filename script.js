// Code editable onclick

function clrs_code(){
	var controls = document.getElementsByTagName('pre');
	for(var i=0; i<controls.length; i++){
		controls[i].spellcheck = false;
		controls[i].setAttribute("contenteditable","true")
	};
	var controls = document.getElementsByTagName('code');
	for(var i=0; i<controls.length; i++){
		controls[i].spellcheck = false;
		controls[i].setAttribute("contenteditable","true");
	};
}

// A theme analytics script to Dimpurr, you can remove it, or better left.

function sendTj() {
	$.get("http://work.dimpurr.com/theme/theme_tj.php?theme_name=ClearisionX&blog_url=" + window.location.host + "&t=" + Math.random());
}
sendTj();

window.onload = clrs_code;

console.log('Theme ClearisionX by Dimpurr')
console.log('http://blog.dimpurr.com/clearision')