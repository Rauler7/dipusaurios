window.onload = function() {
    request = new XMLHttpRequest();
	request.open('GET', 'data/dipusaurios.json', true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400){
	    var data = JSON.parse(request.responseText),
	    getTemplate = document.querySelector("#person-template").innerHTML,
        template    = Handlebars.compile(getTemplate),
        result      = template(data);
        document.querySelector(".content__people").innerHTML = result;

        var container = document.querySelector(".content__people");

		var isotope = new Isotope( container, {
		  itemSelector: '.person',
		  layoutMode: 'fitRows'
		});
	  }
	};

	request.send();

};


