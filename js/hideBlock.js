function hideBlock(className){
	var arrBlock = $(".all");

	for(var i = 0; i < arrBlock.length; i++){
		removeHide(arrBlock[i]);
	}

	for(var i = 0; i < arrBlock.length; i++){
		chkClass(arrBlock[i], className);
	}
}

function chkClass(el, className){
	for(var i = 0; i < el.classList.length; i++){
		if(el.classList[i] == className){
			return;
		}
	}
	addHide(el);
}


function addHide(className){
	className.classList.add('hide-block');
}


function removeHide(className){
	className.classList.remove('hide-block');
}
