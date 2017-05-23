@echo off
title Hello World!
@chcp 852
cls
sass --watch styles.scss:../css/style_sass.css
