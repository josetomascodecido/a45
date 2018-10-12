	var asdf = [{
			"completed":false,
			"id":1,
			"title":"Delectus aut autem",
		},
		{
			"completed":false,
			"id":2,
			"title":"Quis ut nam facilis et officia qui",
		},
		{
			"completed":false,
			"id":3,
			"title":"Fugiat veniam minus",
		},
		{
			"completed":true,
			"id":4,
			"title":"Et porro tempora",
		},
		{
			"completed":false,
			"id":5,
			"title":"Laboriosam mollitia et enim quasi adipisci quia provident illum",
		},
		{
			"completed":false,
			"id":6,
			"title":"Qui ullam ratione quibusdam voluptatem quia omnis",
		},
		{
			"completed":false,
			"id":7,
			"title":"Illo expedita consequatur quia in",
			"userId":1
		},
		{
			"completed":true,
			"id":8,
			"title":"Quo adipisci enim quam ut ab",
		},
		{
			"completed":false,
			"id":9,
			"title":"Molestiae perspiciatis ipsa",
		},
		{
			"completed":true,
			"id":10,
			"title":"Illo est ratione doloremque quia maiores aut",
		}];
var line = document.createElement("li")
var sortList = function() {
	for (var i = 0; i < asdf.length; i++) {
		if (asdf[i].completed == true ){
			console.log(asdf[i])
			var check = document.getElementById('done')
			var line = document.createElement("li")
			var node = document.createTextNode(asdf[i].title)
			line.appendChild(node)
				check.appendChild(line)
		}
		if (asdf[i].completed == false ){
			console.log(asdf[i])
			var check = document.getElementById('todo')
			var line = document.createElement("li")
			var node = document.createTextNode(asdf[i].title)
			line.appendChild(node)
				check.appendChild(line)
		}
	}
}
sortList()
