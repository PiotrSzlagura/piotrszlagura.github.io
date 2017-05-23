<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>PajakSport</title>
    <link rel="stylesheet" href="skin/frontend/pajaksport/default/css/master.css">
</head>
<body class="over-category-view">
<div class="page-wrapper">
    <header>
        <nav class="main-navigation">
            <div class="mobile-menu-toggle visible-on-mobile-nav" data-toggle="mobile-menu">
                <div class="mobile-menu-lines"></div>
            </div>
            <ul class="header-links hidden-on-mobile-nav">
                <li class="active"><a href="#!">Mens</a></li>
                <li><a href="#!">Womens</a></li>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Team</a></li>
                <li><a href="#!">Journal</a></li>
                <li><a href="#!">Technology</a></li>
            </ul>
        </nav>
        <a href="/" class="site-logo">
            <img src="skin/frontend/pajaksport/default/img/pajak_logo.png" alt="Pająk Sport">
        </a>
        <div class="navigation-right-menu">
            <ul class="header-links">
                <li class="hidden-on-mobile-nav"><a href="#!">My account</a></li>
                <li class="hidden-on-mobile-nav"><a href="#!"><span>My basket</span> <img
                            src="skin/frontend/pajaksport/default/img/icons/shopping-cart.png" alt="Cart"
                            class="header-icon"></a></li>
                <li class="hidden"><a href="#!"><img src="skin/frontend/pajaksport/default/img/icons/search.png"
                                                     alt="Cart"
                                                     class="header-icon"></a></li>
            </ul>
        </div>
    </header>
    <div class="page-inside">
        <h1 class="category-name even">#Sleepingbags</h1>

        <div class="container-fluid">
            <div class="row">
                <?php foreach (range(0, 2) as $category): ?>
                    <div class="col-md-4 col-sm-12">
                        <div class="subcategory-box">
                            <h2 class="subcategory-name">
                                Core
                            </h2>
                            <p class="category-description">
                                As commandos we specialised in mountain and extreme cold weather warfare, often training in
                                the
                                high Arctic circle.
                            </p>
                            <img src="https://placehold.it/400x600/" alt="" class="category-image">
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="credits-heading awards">
                        <strong>Awards winning</strong> product
                    </h3>
                    <div class="credits-wrapper">
                        <?php foreach(range(0, 3) as $item): ?>
                            <div class="credits-box">
                                <img src="https://placehold.it/300x200" alt="">
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3 class="credits-heading technology">
                        Technology
                    </h3>
                    <div class="credits-wrapper">
                        <?php foreach(range(0, 5) as $item): ?>
                            <div class="credits-box">
                                <img src="https://placehold.it/300x200" alt="">
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>

<script src="skin/frontend/pajaksport/default/js/master.js"></script>
</body>
</html>