let num = 1;
let tag = document.getElementById('asd');
let inputTextTag = document.getElementById("myText");	
let resultTag = document.getElementById('texts');
let list = [];
let sampleList = [
	'sample',
	'eggs',
	'sheeeesh',
	'pull'
];
let shufflerActive = true;

let shuffler = setInterval(shuffleText, 10);

function myFunction() {
	if (inputTextTag.value !== '') {
		let el = document.createElement("li");
		let text = document.createTextNode(setText(inputTextTag.value, num));
		el.appendChild(text);

		tag.appendChild(el)

		num++;

		list.push(inputTextTag.value);

		console.log('list', list);


		inputTextTag.value = '';
	} else {
		console.log('Empty Value');
	}
	
}

function remove() {
	if (tag.hasChildNodes) {
		tag.removeChild(tag.lastElementChild);
		list.unshift();
		num--;
	} else {
		alert("Empty Child Nodes");
	}
}

function setText(strText, num) {
	return strText + " " + num
}

function shuffleText() {
	if(list.length > 1){
		resultTag.innerHTML = list[Math.floor(Math.random() * list.length)];
	} else {
		resultTag.innerHTML = sampleList[Math.floor(Math.random() * sampleList.length)];
	}
}

function startShuffle() {
	if(!shufflerActive) {
		shuffler = setInterval(shuffleText, 10);
		shufflerActive = true;
	}
}

function stopShuffle() {
	if(shufflerActive) {
		clearInterval(shuffler);
		shufflerActive = false;
	}
	
}
