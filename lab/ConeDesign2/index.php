<?php

if(isset($_COOKIE['lang']))
{
    $lang = $_COOKIE['lang'];
    switch($lang)
    {
        case 'pl':
            header('location: pl');
            break;

        case 'en':
            header('location: en');
            break;
    }
}

else
{
    header('location: pl');
}
?>