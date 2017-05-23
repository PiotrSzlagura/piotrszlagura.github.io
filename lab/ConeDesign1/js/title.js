$(document).ready(function(){
	$("a").click(function(){
		var title = $(this).attr("data-scroll").replace("#", "");
		switch(title)
		{
			case 'main-page':
				document.title = "Strona główna";
				break;

			case 'o_firmie':
				document.title = "O firmie";
				break;

			case 'ekipa':
				document.title = "Ekipa";
				break;

			case 'oferta':
				document.title = "Oferta";
				break;

			case 'kontakt':
				document.title = "Kontakt";
				break;

			case 'branding':
				document.title = "Branding";
				break;

			case 'projektowanie_graficzne':
				document.title = "Projektowanie Graficzne";
				break;

			case 'marketing':
				document.title = "Reklama";
				break;

			case 'administracja':
				document.title = "Administracja i hosting";
				break;

			case 'desktop_publishing':
				document.title = "Desktop Publishing";
				break;

			case 'piotrek':
				document.title = "Piotr Szlagura";
				break;
				
			case 'marcin':
				document.title = "Marcin Sztekiet";
				break;

			case 'maciej':
				document.title = "Maciej Szatanik";
				break;

			case 'michal':
				document.title = "Michał Staśkiewicz";
				break;	
		}
	});

	$(".box-link-always-on").click(function(){
		var title = $(this).attr("data-scroll").replace("#", "");
		switch(title)
		{
			case 'main-page':
				document.title = "Strona główna";
				break;

			case 'o_firmie':
				document.title = "O firmie";
				break;

			case 'ekipa':
				document.title = "Ekipa";
				break;

			case 'oferta':
				document.title = "Oferta";
				break;

			case 'kontakt':
				document.title = "Kontakt";
				break;

			case 'branding':
				document.title = "Branding";
				break;

			case 'projektowanie_graficzne':
				document.title = "Projektowanie Graficzne";
				break;

			case 'marketing':
				document.title = "Reklama";
				break;

			case 'administracja':
				document.title = "Administracja i hosting";
				break;

			case 'desktop_publishing':
				document.title = "Desktop Publishing";
				break;

			case 'piotrek':
				document.title = "Piotr Szlagura";
				break;
				
			case 'marcin':
				document.title = "Marcin Sztekiet";
				break;

			case 'maciej':
				document.title = "Maciej Szatanik";
				break;

			case 'michal':
				document.title = "Michał Staśkiewicz";
				break;	
		}
	})

	$(".box-link").click(function(){
		if($(this).hasClass("box-link")){
			var title = $(this).attr("data-scroll").replace("#", "");
			switch(title)
			{
				case 'main-page':
					document.title = "Strona główna";
					break;

				case 'o_firmie':
					document.title = "O firmie";
					break;

				case 'ekipa':
					document.title = "Ekipa";
					break;

				case 'oferta':
					document.title = "Oferta";
					break;

				case 'kontakt':
					document.title = "Kontakt";
					break;

				case 'branding':
					document.title = "Branding";
					break;

				case 'projektowanie_graficzne':
					document.title = "Projektowanie Graficzne";
					break;

				case 'marketing':
					document.title = "Reklama";
					break;

				case 'administracja':
					document.title = "Administracja i hosting";
					break;

				case 'desktop_publishing':
					document.title = "Desktop Publishing";
					break;

				case 'piotrek':
					document.title = "Piotr Szlagura";
					break;
					
				case 'marcin':
					document.title = "Marcin Sztekiet";
					break;

				case 'maciej':
					document.title = "Maciej Szatanik";
					break;

				case 'michal':
					document.title = "Michał Staśkiewicz";
					break;	
			}
		}
	})
});