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
	setTimeout(() => document.body.classList.remove('home-rendering'), 5800);
	//setTimeout(() => document.body.classList.add('home-rendered'), 5800);

	setTimeout(() => document.body.classList.remove('rendering'), 4000);
	//setTimeout(() => document.body.classList.add('rendered'), 4000);

	imagesLoaded('img, .bg-image', { background: true }, () => {
		// document.body.classList.remove('loading');
		// document.body.classList.add('imagesloaded');//imgloaded
		
		setTimeout(() => document.body.classList.remove('loading') , 1000);
		setTimeout(() => document.body.classList.add('imagesloaded') , 1000);//imgloaded
	});
}