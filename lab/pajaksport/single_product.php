<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>PajakSport</title>
    <link rel="stylesheet" href="skin/frontend/pajaksport/default/css/master.css">
</head>
<body class="catalog-product-view">
<div class="page-wrapper">
    <header>
        <nav class="main-navigation">
            <div class="mobile-menu-toggle visible-on-mobile-nav" data-toggle="mobile-menu">
                <div class="mobile-menu-lines"></div>
            </div>
            <ul class="header-links hidden-on-mobile-nav">
                <li><a href="#!">Mens</a></li>
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

    <div class="top-banner"
         style="background: url('skin/frontend/pajaksport/default/img/single_product_heading_image.jpg') no-repeat center; background-size: cover;">
        <div class="description container">
            <h1>#PHANTOM</h1>
            <p>
                When the mountains are your second home, you must be ready to go whenever they call you; to step into
                the unknown, to forge your own path, to take in the view and just feel at home.
            </p>
        </div>
    </div>

    <div>
        <div class="product-options owl-carousel">
            <?php foreach (range(0, 3) as $i): ?>
                <div class="option <?php if ($i == 0): ?>active<?php endif; ?>" data-go-to="<?php echo $i; ?>">
                    <img src="skin/frontend/pajaksport/default/img/kurtka.png" alt="Product x">
                </div>
            <?php endforeach; ?>
        </div>
        <div class="product-details product-view-data-container">
            <div class="col-1">
                <h2 class="product-name no-margin">Phantom down jacket</h2>
            </div>
            <div class="col-2">
                <div class="price">zł 760</div>
            </div>
            <div class="col-3">
                <?php
                $colors = ['silver', 'red', 'black', '#ADA176'];
                ?>
                <div class="options-pagination">
                    <?php foreach (range(0, 3) as $i): ?>
                        <div class="option-circle <?php if ($i == 0): ?>active<?php endif; ?>"
                             data-go-to="<?php echo $i; ?>" style="background-color: <?php echo $colors[$i] ?>">

                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <div class="product-options-select product-view-data-container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="dropdown">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span>Choose size</span>
                            <i class="fa fa-angle-down"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="dropdown last color-selection-dropdown">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span>Choose color</span>
                            <i class="fa fa-angle-down"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <?php foreach (range(0, 3) as $i): ?>
                                <li data-go-to="<?php echo $i ?>" <?php if ($i == 0): ?>class="active"<?php endif; ?>>
                                    <a href="#!">Color <?php echo $i + 1; ?></a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-view-data-container add-to-cart-wrapper">
            <div class="row">
                <div class="col-sm-6">
                    <div class="sizing-charts-link-wrapper">
                        <a href="#">View sizing charts</a>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="add-to-cart-button-wrapper">
                        <button class="add-to-cart">
                            Add to basket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="product-details-carousel">
        <?php foreach (range(0, 3) as $i): ?>
            <div class="product-details-carousel-item">
                <div class="carousel-image"
                     style="background: url('skin/frontend/pajaksport/default/img/single_product_carousel_image.jpg') no-repeat center; background-size: cover;"></div>
                <div class="description-wrapper">
                    <div class="description-wrapper-before"></div>
                    <div class="description-wrapper-inner">
                        <h3>DETAILS OF THE PRODUCT</h3>
                        <p>
                            When the mountains are your second home, you must be ready to go whenever they call you; to
                            step
                            into the unknown, to forge your own path, to take in the view and just feel at home.
                        </p>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    <div class="container">
        <div class="ps-product-tabs">
            <h2>
                Specifications
            </h2>
            <div class="row">
                <div class="col-sm-5">
                    <p class="ps-product-tabs-toggle active" data-ps-pt-toggle="0">
                        Design & construction
                    </p>
                    <p class="ps-product-tabs-toggle" data-ps-pt-toggle="1">
                        Features & Components
                    </p>
                    <p class="ps-product-tabs-toggle" data-ps-pt-toggle="2">
                        Technical data
                    </p>
                </div>
                <div class="col-sm-7">
                    <div class="ps-product-tabs-content open" data-ps-pt-content="0">
                        <p>Waterproof, breathable, stretch, 3 layer, 80 denier Polartec® Neoshell®</p>
                        <p>Streamlined, articulated cut</p>
                        <p>Helmet compatible hood</p>
                        <p>VELCRO<sup>TM</sup> adjustable cuffs with triple reinforced stitching and elasticated cinch
                        </p>
                        <p>Hypalon® cuff tabs</p>
                        <p>Scooped drop-back hem</p>
                        <p>Colours: Digital Blue, Salamander Red, Eucalyptus Yellow</p>
                        <p>Sizes: S, M, L, XL</p>
                    </div>
                    <div class="ps-product-tabs-content" data-ps-pt-content="1">
                        <p>Content 2</p>
                        <p>Content 2</p>
                        <p>Content 2</p>
                        <p>Content 2</p>
                        <p>Content 2</p>
                    </div>
                    <div class="ps-product-tabs-content" data-ps-pt-content="2">
                        <p>Content 3</p>
                        <p>Content 3</p>
                        <p>Content 3</p>
                        <p>Content 3</p>
                        <p>Content 3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img src="skin/frontend/pajaksport/default/img/single_product_image.jpg" alt="" class="img-responsive center-block">
    <div class="credits-wrapper-outer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="credits-heading awards">
                        <strong>Awards winning</strong> product
                    </h3>
                    <div class="credits-wrapper">
                        <?php foreach (range(0, 3) as $item): ?>
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
                        <?php foreach (range(0, 5) as $item): ?>
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