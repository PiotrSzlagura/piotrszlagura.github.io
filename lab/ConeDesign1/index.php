<?php
if(!isset($_GET['test']))
{
	$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
	$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
	$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
	$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
	$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");

	if ($iphone || $android || $palmpre || $ipod || $berry == true)
	{
	header('Location: http://m.conedesign.pl/');
	}
}
?>

<!doctype html>
<html onresize="return false;">
	<head>
		<title>ConeDesign</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
		<meta name="description" content="ConeDesign. Nasza oferta to pełen pakiet usług których potrzebuje firma aby wyróżnić się na rynku. W skład oferty wchodzą: Web design, grafika, reklama, branding, administracja." />

		<link rel="Stylesheet" href="css/bootstrap.min.css" />

		<link rel="Stylesheet" href="css/style.css" />
		<link rel="Stylesheet" href="css/main_page.css" />
		<link rel="Stylesheet" href="css/top_bars.css" />
		<link rel="Stylesheet" href="css/banners.css" />
		<link rel="Stylesheet" href="css/ekipa.css" />
		<link rel="Stylesheet" href="css/oferta.css" />
		<link rel="Stylesheet" href="css/infos.css" />
		<link rel="Stylesheet" href="css/offer_page.css" />
		<link rel="Stylesheet" href="css/teammate_page.css" />
		<link rel="Stylesheet" href="css/portfolio.css" />

		<link rel="Shortcut icon" href="img/ikona.png" />

		<script src="js/jquery-2.1.3.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/easing.js"></script>
		<script src="js/colors.js"></script>
		<script src="js/rotate.js"></script>

		<script src="js/visual.js"></script>
		<script src="js/ekipa.js"></script>
		<script src="js/oferta.js"></script>
		<script src="js/scroll.js"></script>
		<script src="js/offer_page.js"></script>
		<script src="js/title.js"></script>
		<script src="js/cookie_control.js"></script>
		<script src="js/jquery.custom-scrollbar.js"></script>
		<script src="js/portfolio.js"></script>

	</head>
<?php
if(isset($_COOKIE['lang']))
{
	$lang = $_COOKIE['lang'];
	switch($lang)
	{
		case 'pl':
			$language = "polish";
			break;

		case 'en':
			$language = "english";
			break;

		default:
			$language = "polish";
			break;
	}
}
else $language = "polish";
?>
	<body class="<?php echo $language ?>" style="/*width: 20000px; height: 20000px;*/">
<!-- COPYRIGHTS BY PIOTR SZLAGURA -->
<!-- ALL RIGHTS RESERVED -->
<!-- © 2015 -->
<div class="loading-show">
	<h2 style="font-size: 40px; color: white; margin-top: 250px;" class="text-center">
		<span class="pl">Ładowanie, proszę czekać</span>
		<span class="en">Please wait while the page is loading</span>
	</h2>

	<div class="loading-rotate-logo" style="margin: 0 auto; width: 200px; height: 200px; margin-top: 100px;">
		<img src="img/logo_projekt_2.svg" style="width: 150px; position: relative; top: 15px; left: 22.5px;">
	</div>
</div>
<?php
if(isset($_COOKIE['cookie']))
{
	$cookie = $_COOKIE['cookie'];
	if($cookie == 1)
	{
		$cookie_check = true;
	}
	else $cookie_check = false;
}
else $cookie_check = false;

?>
	<div class="cookie-alert" <?php if($cookie_check) echo 'style="display: none;"' ?>>
		<div class="alert-inside">
			<div class="text-center">
				<span class="pl">
				Ta strona wykorzystuje pliki cookie.<br>
				<span style="color: #aaa;">Kliknij w to okienko aby zamknąć powiadomienie</span>
				</span>
				<span class="en">
				This page uses cookie files.<br>
				<span style="color: #aaa;">Click this window to close the notification.</span>
				</span>
			</div>
		</div>
	</div>

<div class="additional-offer-menu fixed-position initial-hidden text-center">
	<a class="scroll-to" data-scroll="#web_design">WEB DESIGN</a> |
	<a class="scroll-to" data-scroll="#branding">BRANDING</a> |
	<a class="scroll-to" data-scroll="#marketing">MARKETING</a> |
	<a class="scroll-to" data-scroll="#projektowanie_graficzne"><span class="pl">PROJEKTOWANIE GRAFICZNE</span><span class="en">GRAPHICS DESIGN</span></a> |
	<a class="scroll-to" data-scroll="#administracja"><span class="pl">ADMINISTRACJA I HOSTING</span><span class="en">ADMINISTRATION & HOSTING</span></a> |
	<a class="scroll-to" data-scroll="#desktop_publishing">DESKTOP PUBLISHING</a>
</div>
		<div class="content-box">
			<?php include("inc/oferta/branding.php") ?>
		</div>
		<div class="content-box" style="position: absolute; top: 0px; left: 3000px;">
			<div class="content-box-inner">
				<?php include("inc/o_firmie.php") ?>
			</div>
		</div>
		<div class="content-box" style="position: absolute; top: 0px; left: 6000px;">
			<div class="content-box-inner">
				<?php include("inc/oferta/web_design.php") ?>
			</div>
		</div>
		<div class="content-box" style="position: absolute; top: 0px; left: 9000px;">
			<div class="content-box-inner">
				<?php include("inc/ekipa/piotrek.php") ?>
			</div>
		</div>
		<div class="content-box" style="position: absolute; top: 2000px; left: 0px;">
			<div class="content-box-inner">
				<?php include("inc/oferta.php") ?>
			</div>
		</div>
		<!-- OFERTA -->
		<div class="content-box" style="position: absolute; top: 2000px; left: 3000px;">
			<div class="content-box-inner">
				<?php include("inc/main.php") ?>
			</div>
		</div>
		<div class="content-box" style="position: absolute; top: 2000px; left: 6000px;">
			<div class="content-box-inner">
				<?php include("inc/ekipa.php") ?>
			</div>
		</div>
		<div class="content-box" style="position: absolute; top: 2000px; left: 9000px;">
			<div class="content-box-inner">
				<?php include("inc/ekipa/marcin.php") ?>
			</div>
		</div>
		<div class="content-box" style="position: absolute; top: 4000px; left: 0px;">
			<div class="content-box-inner">
				<?php include("inc/oferta/marketing.php") ?>
			</div>
		</div>
		<div class="content-box" style="position: absolute; top: 4000px; left: 3000px;">
			<div class="content-box-inner">
				<?php include("inc/kontakt.php") ?>
			</div>
		</div>
		<div class="content-box" style="position: absolute; top: 4000px; left: 6000px;">
			<div class="content-box-inner">
				<?php include("inc/oferta/projektowanie_graficzne.php") ?>
			</div>
		</div>

		<div class="content-box" style="position: absolute; top: 4000px; left: 9000px;">
			<div class="content-box-inner">
				<?php include("inc/ekipa/michal.php") ?>
			</div>
		</div>

		<div class="content-box" style="position: absolute; top: 6000px; left: 0px;">
			<div class="content-box-inner">
				<?php include("inc/oferta/administracja.php") ?>
			</div>
		</div>

		<div class="content-box" style="position: absolute; top: 6000px; left: 3000px;">
			<div class="content-box-inner">
				<?php include("inc/oferta/desktop_publishing.php") ?>
			</div>
		</div>

		<div class="content-box" style="position: absolute; top: 6000px; left: 9000px;">
			<div class="content-box-inner">
				<?php include("inc/ekipa/maciej.php") ?>
			</div>
		</div>

		<div class="content-box" style="position: absolute; top: 8000px; left: 0px;">
			<div class="content-box-inner">
				<?php include("inc/portfolio.php") ?>
			</div>
		</div>

	</body>
</html>
