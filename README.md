# Pixel-Party

##English

Pixel Party is a little project which provide a few methods to convert image into json and also to transform your images. (mirror, vertical symmetry...)
This program processes the image pixel by pixel to allow symmetry transformations. The transparency of png files is supported.

**WARNING: These methods make hard calculations and it is not a good idea to use them at the page loading.**

Install
Add the pixel_party.js file into your html page, and call the functions below:

* function image_to_json(image)
* function display_image(image, canvas, orientation)
* function display_image_from_json(json_data, canvas, width, height, orientation)

This project should use WebAssembly to improve performances.

**************************************************************************************

##Français

Pixel Party est un petit projet qui fournit quelques méthodes permettant de convertir des images en json, et aussi de transformer des images par de simples transformations (miroir, symétrie verticale...)
Ce programme traite les images pixel par pixel pour permettre des transformations telles que la symétrie. La transparence des fichiers png est supportée.

**ATTENTION: Ces méthodes font de lourds calculs et il n'est pas recommandé de les utiliser au chargement de la page.**

Installation
Ajouter simplement le fichier pixel_party.js dans votre page html, et appeler les fonctions à votre disposition:

* function image_to_json(image)
* function display_image(image, canvas, orientation)
* function display_image_from_json(json_data, canvas, width, height, orientation)

Ce projet devrait utiliser Webassembly pour améliorer les performances.
