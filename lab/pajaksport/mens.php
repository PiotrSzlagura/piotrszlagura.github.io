<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>PajakSport</title>
    <link rel="stylesheet" href="skin/frontend/pajaksport/default/css/master.css">
</head>
<body class="category-view">
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
    <?php

    $categories = array(
        "0" => array(
            "name" => "Down jackets",
            "description" => "As commandos we specialised in mountain and extreme cold weather warfare, often training in the high Arctic
            circle. We were together in the Norwegian mountains during a fierce Arctic winter when inspiration took
            hold: the development of technical outdoor clothing that would protect against the raging brutality around
            us, whilst capturing the purity and elegance of the Scandinavian landscape."
        ),
        "1" => array(
            "name" => "Back packs",
            "description" => "As commandos we specialised in mountain and extreme cold weather warfare, often training in the high Arctic
            circle. We were together in the Norwegian mountains during a fierce Arctic winter when inspiration took
            hold: the development of technical outdoor clothing that would protect against the raging brutality around
            us, whilst capturing the purity and elegance of the Scandinavian landscape."
        ),
        "2" => array(
            "name" => "Sleeping bags",
            "description" => "As commandos we specialised in mountain and extreme cold weather warfare, often training in the high Arctic
            circle. We were together in the Norwegian mountains during a fierce Arctic winter when inspiration took
            hold: the development of technical outdoor clothing that would protect against the raging brutality around
            us, whilst capturing the purity and elegance of the Scandinavian landscape."
        )
    )

    ?>
    <div class="page-inside">
        <h1 class="category-name even">Mens</h1>
        <?php foreach($categories as $category): ?>
            <h2 class="subcategory-name"><?php echo $category["name"] ?></h2>
            <p class="category-description">
                <?php echo $category["description"] ?>
            </p>

            <div class="custom-container">
                <div class="category-products">
                    <ul class="products-list">
                        <?php foreach(range(0, 8) as $item): ?>
                            <li>
                                <div class="product-image">
                                    <div class="overlay">
                                        <div class="overlay-inside">
                                            <p class="product-description">
                                                As commandos we specialised in mountain and extreme cold weather warfare.
                                            </p>
                                            <p class="text-center">
                                                <a href="#!" class="ps-default-button">
                                                    View Product
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <img src="https://placehold.it/400x500" alt="Product Name">
                                </div>
                                <div class="product-details">
                                    <div class="product-colors">
                                        <div class="product-color"></div>
                                        <div class="product-color"></div>
                                        <div class="product-color"></div>
                                    </div>
                                    <h3 class="product-name">PHANTOM DOWN JACKET</h3>
                                    <div class="price">zł 760</div>
                                </div>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>

            <div class="divider"></div>
        <?php endforeach; ?>

    </div>


</div>

<script src="skin/frontend/pajaksport/default/js/master.js"></script>
</body>
</html>