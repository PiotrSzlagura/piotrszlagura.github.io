<!doctype html>
<html>
	<head>
		<title><?php include("title.php"); ?></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>

		<link rel="Stylesheet" href="css/bootstrap.min.css" />

		<link rel="Stylesheet" href="css/style.css" />
		<link rel="Stylesheet" href="css/banners.css" />
		<link rel="Stylesheet" href="css/oferta.css" />
		
		<script src="js/jquery-2.1.3.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/rotate.js"></script>

		<script src="js/visual.js"></script>
<style>
.menu-inside .btn
{
	width: 100%;
	margin: 3px 0;
	font-weight: bolder;
}
</style>
	</head>
	<body>
<?php
if(isset($_GET['page'])) $page = $_GET['page'];
?>
<div class="sidebar-menu-slide">
	<div class="container">
		<div class="text-center">
			<h2>MENU</h2>
			<p class="menu-inside">
				<a <?php if(isset($page) && $page == 'o_firmie') echo 'class="btn btn-primary"'; else echo 'class="btn btn-default"'; ?> href="?page=o_firmie">O firmie</a><br>
				<a <?php
					if(isset($page) && $page == 'ekipa') echo 'class="btn btn-primary"';
					else if($page == 'team_piotr' || $page == 'team_maciej' || $page == 'team_marcin' || $page == 'team_michal') echo 'class="btn btn-success"';
					else echo 'class="btn btn-default"'; ?> href="?page=ekipa">Ekipa</a><br>
				<a <?php if(isset($page) && $page == 'oferta') echo 'class="btn btn-primary"'; else echo 'class="btn btn-default"'; ?> href="?page=oferta">Oferta</a><br>
				<a <?php if(isset($page) && $page == 'kontakt') echo 'class="btn btn-primary"'; else echo 'class="btn btn-default"'; ?> href="?page=kontakt">Kontakt</a><br>
				
			</p>
		</div>
	</div>
</div>
		<nav class="top-bar">
			<div class="container">
				<div class="pull-left">
					<a href="?page=main"><img src="img/logo_projekt_2.svg" class="top-bar-logo"></a>
				</div>
				<div class="pull-right">
					<div class="show-menu-button">
						<span class="icon-bar first"></span>
						<span class="icon-bar second"></span>
						<span class="icon-bar third"></span>
					</div>
				</div>
			</div>
		</nav>

<div style="margin-top: 60px;">		
<?php
if(isset($page))
{
	switch ($page) {
		case 'main':
			include("inc/main.php");
			break;

		case 'o_firmie':
			include("inc/o_firmie.php");
			break;

		case 'kontakt':
			include("inc/kontakt.php");
			break;

		case 'ekipa':
			include("inc/ekipa.php");
			break;
		
		case 'oferta':
			include("inc/oferta.php");
			break;

		
		case 'team_piotr':
			include("inc/ekipa/piotrek.php");
			break;

		case 'team_maciej':
			include("inc/ekipa/maciej.php");
			break;

		case 'team_marcin':
			include("inc/ekipa/marcin.php");
			break;

		case 'team_michal':
			include("inc/ekipa/michal.php");
			break;


		case 'oferta_admin':
			include("inc/oferta/administracja.php");
			break;

		case 'oferta_branding':
			include("inc/oferta/branding.php");
			break;

		case 'oferta_desktop':
			include("inc/oferta/desktop_publishing.php");
			break;

		case 'oferta_marketing':
			include("inc/oferta/marketing.php");
			break;

		case 'oferta_grafika':
			include("inc/oferta/projektowanie_graficzne.php");
			break;

		case 'oferta_webdesign':
			include("inc/oferta/web_design.php");
			break;


		default:
			echo "ERROR 404";
			break;
	}
}	
else include("inc/main.php");
?>
</div>
		



	</body>
</html>