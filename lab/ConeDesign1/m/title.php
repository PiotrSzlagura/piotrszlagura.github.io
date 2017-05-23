<?php

if(isset($_GET['page']))
{
	$page = $_GET['page'];

	switch($page)
	{
		case 'main':
			echo "Strona główna";
			break;

		case 'ekipa':
			echo "Ekipa";
			break;

		case 'o_firmie':
			echo "O firmie";
			break;

		case 'oferta':
			echo "Oferta";
			break;

		case 'kontakt':
			echo "Kontakt";
			break;

		case 'team_piotr':
			echo "Piotr Szlagura";
			break;

		case 'team_maciej':
			echo "Maciej Szatanik";
			break;

		case 'team_marcin':
			echo "Marcin Sztekiet";
			break;


		case 'team_michal':
			echo "Michał Staśkiewicz";
			break;


		case 'oferta_admin':
			echo "Administracja i hosting";
			break;

		case 'oferta_branding':
			echo "Branding";
			break;

		case 'oferta_desktop':
			echo "Desktop publishing";
			break;

		case 'oferta_marketing':
			echo "Marketing";
			break;

		case 'oferta_grafika':
			echo "Projektowanie graficzne";
			break;

		case 'oferta_webdesign':
			echo "Web design";
			break;

		default:
			echo "404";
			break;
	}
} 

else echo "Strona główna";






?>