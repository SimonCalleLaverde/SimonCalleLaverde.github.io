/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	setTimeout(() => document.body.classList.remove('home-rendering'), 5700);//2200//60
	//setTimeout(() => document.body.classList.add('home-rendered'), 5700);//2200//60

	setTimeout(() => document.body.classList.remove('rendering'), 2800);//2200//60
	//setTimeout(() => document.body.classList.add('rendered'), 2800);//2200//60

	imagesLoaded('img, .bg-image', { background: true }, () => {
		document.body.classList.remove('loading');
		document.body.classList.add('imagesloaded');//imgloaded
	});
}