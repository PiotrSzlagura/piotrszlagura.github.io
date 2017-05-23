// Przydatne funkcje

function openNextDropdown(nextElement){
	setTimeout(function(){
		nextElement.parents(".dropdown-menu").dropdown("toggle");
		nextElement.siblings(".search").focus();
	}, 1);
}

function changeDropdownCaptions(baseElement, caption){
	if(baseElement == "car")
	{
		$("#nocar-carfinder-cars-list").parents(".dropdown-menu").siblings("button").children(".description").html(caption);
		$("#nocar-carfinder-models-list").parents(".dropdown-menu").siblings("button").children(".description").html("Model");
		$("#nocar-carfinder-engines-list").parents(".dropdown-menu").siblings("button").children(".description").html("Silnik");
	}
	else if(baseElement == "model")
	{
		$("#nocar-carfinder-models-list").parents(".dropdown-menu").siblings("button").children(".description").html(caption);
		$("#nocar-carfinder-engines-list").parents(".dropdown-menu").siblings("button").children(".description").html("Silnik");
	}
	else if(baseElement == "engine")
	{
		$("#nocar-carfinder-engines-list").parents(".dropdown-menu").siblings("button").children(".description").html(caption);
	}
}

function fillFormInputs(baseElement, value){
	if(baseElement == "car")
	{
		$("input[name=car-brand]").val(value);
		$("input[name=car-model]").val("");
		$("input[name=car-engine]").val("");
	}
	else if(baseElement == "model")
	{
		$("input[name=car-model]").val(value);
		$("input[name=car-engine]").val("");
	}
	else if(baseElement == "engine")
	{
		$("input[name=car-engine]").val(value);
	}
}

$(document).ready(function(){
	var cars = [],
		models = [],
		engines = [],
		carsListArray = [],
		modelsListArray = [],
		enginesListArray = [];

	var carsList = "",
		modelsList = "",
		enginesList = "";

	// Interpretacja danych z JSON-a

	$.each(carsData.engines, function(key, value){
		var _car = key;
		var _models = value;

		cars.push(_car);

		$.each(_models, function(key, value){
			var _model = key;
			var _engines = value;

			var _modelObj = {
				brand: _car,
				model: _model
			};
		
			models.push(_modelObj);

			$.each(_engines, function(x){
				var _brand_model = _car + "," + _model;

				var _engineObj = {
					brand_model: _brand_model,
					engine: _engines[x]
				};

				engines.push(_engineObj);
			});
		});
	});

	var listOptions = {
		valueNames: ['name']
	};

	// Dodanie marek, modeli i silników do odpowiednich list

	$.each(cars, function(x){
		var _car = cars[x];
		var _tempLi = "<li class='select-content' data-car='" + _car + "'><a href='javascript:void(0)'><span class='name'>" + _car + "</span></a></li>\n";
		carsList += _tempLi;
		carsListArray.push(_tempLi);
	});

	$.each(models, function(x){
		var _model = models[x];

		var _brand = _model.brand;
		var _modelName = _model.model;

		var _tempLi = "<li class='select-content' data-include-brand='" + _brand + "' data-model='" + _modelName + "'><a href='javascript:void(0)'><span class='name'>" + _modelName + "</span></a></li> \n";

		modelsList += _tempLi;
		modelsListArray.push(_tempLi);
	});

	$.each(engines, function(x){
		var _engine = engines[x];
		var _brand_model = _engine.brand_model.split(",");
		var _brand = _brand_model[0];
		var _model = _brand_model[1];
		var _engineName = _engine.engine;

		var _tempLi = "<li class='select-content' data-include-car-brand='" + _brand + "' data-include-model='" + _model + "' data-engine='" + _engineName + "'><a href='javascript:void(0)'><span class='name'>" + _engineName + "</span></a></li> \n";
	
		enginesList += _tempLi;
		enginesListArray.push(_tempLi);
	});

	carsList = "<li class='dropdown-description'>Popularne marki</li>" + carsList;
	modelsList = "<li class='dropdown-description'>Popularne modele</li>" + modelsList;
	enginesList = "<li class='dropdown-description'>Popularne silniki</li>" + enginesList;

	$("#nocar-carfinder-cars-list").html(carsList);

	// Autofocus na syszukiwanie na liście po jej otwarciu

	$(".dropdown").click(function(){
		var self = $(this);

		setTimeout(function(){
			self.children(".dropdown-menu").children("li").children("input.search").focus();
		}, 10);
	});

	// Otwarcie pierwszej dostępnej listy po wybraniu niedostępnej

	$(".dropdown > button.disabled").click(function(){
		if($(this).hasClass("disabled"))
		{
			var wrapper = $(this).parents(".dropdown")

			if(wrapper.prev().children("button").hasClass("disabled"))
			{
				var _element = wrapper.prev().prev();
			}
			else
			{
				var _element = wrapper.prev();
			}

			setTimeout(function(){
				_element.children(".dropdown-menu").dropdown("toggle");
				_element.children(".dropdown-menu").children("li").children("input.search").focus();
			}, 1);
		}	
	});

	// Otwarcie listy po próbie wysłania niewypełnionego formularza

	$(".button-send-form").click(function(){
		// $("input[name=car-brand]").val(value);
		// $("input[name=car-model]").val("");
		// $("input[name=car-engine]").val("");

		var _carInput = $("input[name=car-brand]").val();
		var _modelInput = $("input[name=car-model]").val();
		var _engineInput = $("input[name=car-engine]").val();

		if(_carInput.length < 1)
		{
			openNextDropdown($("#nocar-carfinder-cars-list"));
		}
		else if(_modelInput.length < 1)
		{
			openNextDropdown($("#nocar-carfinder-models-list"));
		}
		else if(_engineInput.length < 1)
		{
			openNextDropdown($("#nocar-carfinder-engines-list"));
		}
	});

	// Obsługa sterowania klawiaturą

	$("input.search").keydown(function(event){

		if(event.which == 40) // Strzałka w dół -> zaznaczenie pierwszego elementu z listy
		{
			$(this).siblings("ul.list").children("li.select-content:visible:first").children("a").focus();
		}

		if(event.which == 38) // Strzałka w górę -> zaznaczenie ostatniego elementu z listy
		{
			$(this).siblings("ul.list").children("li.select-content:visible:last").children("a").focus();
		}

		if(event.which == 13) // Enter -> wybranie pierwszego elementu z listy
		{
			$(this).siblings("ul.list").children("li.select-content:visible:first").children("a").click();
		}

		if(event.which == 27) // Esc -> wyczyszczenie pola tekstowego
		{
			$(this).val("");
		}
	});

	$("ul.list li.select-content a").keydown(function(event){
		var _li = $(this).parents("li");
		var self = $(this);

		if(event.which == 40)
		{
			if(typeof _li.next()[0] == 'undefined' || !_li.next().is(":visible"))
			{
				self.blur();
				setTimeout(function(){
					_li.parents("ul.list").children("li.select-content:visible:first").children("a").focus();
				}, 1);
			}
		}

		if(event.which == 38)
		{
			if(_li.prev().hasClass("dropdown-description") || !_li.prev().is(":visible"))
			{
				self.blur();
				setTimeout(function(){
					_li.parents("ul.list").children("li.select-content:visible:last").children("a").focus();
				}, 1);
			}
		}
	});

	// Focus na pole wyszukiwania po kliknięciu litery na liście

	$("ul.list").keydown(function(event){
		var input = String.fromCharCode(event.keyCode);
		if (/[a-zA-Z0-9-_ ]/.test(input))
		{
		    $(this).siblings("input.search").focus();
		}
	});

	// Obsługa wyboru marki

	var selectedCar, selectedModel, selectedEngine;

	$("#nocar-carfinder-cars-list").on('click', '[data-car]', function(){
		var _self = $(this);
		var _car = _self.attr('data-car');

		$("[data-car]").removeClass("selected");
		$(this).addClass("selected");

		if(!selectedCar || selectedCar != _car)
		{
			selectedCar = _car;

			changeDropdownCaptions("car", _car);


			$("#nocar-carfinder-models-list").parents(".dropdown-menu").siblings("button").removeClass("disabled");
			$("#nocar-carfinder-engines-list").parents(".dropdown-menu").siblings("button").addClass("disabled");

			var modelsChoosenArray = [];

			$.each(modelsListArray, function(x){
				var _model = modelsListArray[x];
				
				var checkingString = "data-include-brand='"+_car+"'";

				if(_model.indexOf(checkingString) != -1)
				{
					modelsChoosenArray.push(_model);
				}
			});

			$("#nocar-carfinder-models-list").html(modelsChoosenArray);
			var modelsListSearch = new List('nocar-carfinder-models', listOptions);

			fillFormInputs("car", _car);
		}

		openNextDropdown($("#nocar-carfinder-models-list"));
	});

	// Obsługa wyboru modelu

	$("#nocar-carfinder-models-list").on('click', '[data-model]', function(){
		var _model = $(this).attr('data-model');

		$("[data-model]").removeClass("selected");
		$(this).addClass("selected");

		if(!selectedModel || selectedModel != _model)
		{
			selectedModel = _model;

			changeDropdownCaptions("model", _model);

			var enginesChoosenArray = [];

			$.each(enginesListArray, function(x){
				var _engine = enginesListArray[x];
				
				var checkingString = "data-include-car-brand='"+ selectedCar +"' data-include-model='"+_model+"' ";

				if(_engine.indexOf(checkingString) != -1)
				{
					enginesChoosenArray.push(_engine);
				}
			});

			$("#nocar-carfinder-engines-list").html(enginesChoosenArray);
			var enginesListSearch = new List('nocar-carfinder-engines', listOptions);

			fillFormInputs("model", _model);
		}

		$("#nocar-carfinder-engines-list").parents(".dropdown-menu").siblings("button").removeClass("disabled");

		openNextDropdown($("#nocar-carfinder-engines-list"));
	});

	$("#nocar-carfinder-engines-list").on('click', '[data-engine]', function(){
		var _engine = $(this).attr('data-engine');

		$("[data-engine]").removeClass("selected");
		$(this).addClass("selected");

		changeDropdownCaptions("engine", _engine);

		fillFormInputs("engine", _engine);
	});

	var carsListSearch = new List('nocar-carfinder-cars', listOptions);
});





