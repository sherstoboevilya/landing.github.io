$( document ).ready(function() {

	var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://reqres.in/api/users', false);
		xhr.send();

	var data = xhr.responseText;
		data = JSON.parse(data);
		data = data["data"];

	for(var i = 0; i < $(".Avatar").length; i++){
		$(".Avatar")[i].setAttribute("src", data[i]["avatar"]);
	}
});
