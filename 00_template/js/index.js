/* Demo */

// set element text
function main(){
	console.log(getFuncName());
	document.getElementById('demo').innerHTML = "hello world";
}

// get method
function getFuncName() { 
	return getFuncName.caller.name + "()";
} 




 