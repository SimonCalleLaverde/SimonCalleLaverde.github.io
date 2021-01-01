//---------------------------------PROJECTS TRAIL IMAGE EFFECT | ORIGINAL (UN-MINIFIED)---------------------------------//

/**
* demo3.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/
{
    // body element
    const body = document.body;

    // helper functions
    const MathUtils = {
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b,
        // distance between two points
        distance: (x1,y1,x2,y2) => Math.hypot(x2-x1, y2-y1)
    }

    // calculate the viewport size
    let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    // and recalculate on resize
    window.addEventListener('resize', calcWinsize);

    // get the mouse position
    const getMousePos = (ev) => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
            posx = ev.pageX;
            posy = ev.pageY;
        }
        else if (ev.clientX || ev.clientY) 	{
            posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
            posy = ev.clientY + body.scrollTop + docEl.scrollTop;
        }
        return {x: posx, y: posy};
    }

    // mousePos: current mouse position
    // cacheMousePos: previous mouse position
    // lastMousePos: last last recorded mouse position (at the time the last image was shown)
    let mousePos = lastMousePos = cacheMousePos = {x: 0, y: 0};
    
    // update the mouse position
    window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));
    
    // gets the distance from the current mouse position to the last recorded mouse position
    const getMouseDistance = () => MathUtils.distance(mousePos.x,mousePos.y,lastMousePos.x,lastMousePos.y);

    class Image {
        constructor(el) {
            this.DOM = {el: el};
            // image deafult styles
            this.defaultStyle = {
                x: 0,
                y: 0,
                opacity: 0
            };
            // get sizes/position
            this.getRect();
            // init/bind events
            this.initEvents();
        }
        initEvents() {
            // on resize get updated sizes/position
            window.addEventListener('resize', () => this.resize());
        }
        resize() {
            // reset styles
            TweenMax.set(this.DOM.el, this.defaultStyle);
            // get sizes/position
            this.getRect();
        }
        getRect() {
            this.rect = this.DOM.el.getBoundingClientRect();
        }
        isActive() {
            // check if image is animating or if it's visible
            return TweenMax.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
        }
    }

    class ImageTrail {
        constructor() {
            // images container
            this.DOM = {trailImgsWrap: document.querySelector('.trail-images-wrap')};
            // array of Image objs, one per image element
            this.images = [];
            [...this.DOM.trailImgsWrap.querySelectorAll('img')].forEach(img => this.images.push(new Image(img)));
            // total number of images
            this.imagesTotal = this.images.length;
            // upcoming image index
            this.imgPosition = 0;
            // zIndex value to apply to the upcoming image
            this.zIndexVal = 1;
            // mouse distance required to show the next image
            this.threshold = 50;
            // render the images
            requestAnimationFrame(() => this.render());
        }
        render() {
            // get distance between the current mouse position and the position of the previous image
            let distance = getMouseDistance();
            // cache previous mouse position
            cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
            cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

            // if the mouse moved more than [this.threshold] then show the next image
            if ( distance > this.threshold ) {
                this.showNextImage();

                ++this.zIndexVal;
                this.imgPosition = this.imgPosition < this.imagesTotal-1 ? this.imgPosition+1 : 0;
                
                lastMousePos = mousePos;
            }

            // check when mousemove stops and all images are inactive (not visible and not animating)
            let isIdle = true;
            for (let img of this.images) {
                if ( img.isActive() ) {
                    isIdle = false;
                    break;
                }
            }
            // reset z-index initial value
            if ( isIdle && this.zIndexVal !== 1 ) {
                this.zIndexVal = 1;
            }

            // loop..
            requestAnimationFrame(() => this.render());
        }
        showNextImage() {
            // show image at position [this.imgPosition]
            const img = this.images[this.imgPosition];
            // kill any tween on the image
            TweenMax.killTweensOf(img.DOM.el);

            new TimelineMax()
            // show the image
            .set(img.DOM.el, {
                startAt: {opacity: 0},
                opacity: 1,
                zIndex: this.zIndexVal,
                x: cacheMousePos.x - img.rect.width/2,
                y: cacheMousePos.y - img.rect.height/2
            }, 0)
            // animate position
            .to(img.DOM.el, 1.6, {
                ease: Expo.easeOut,
                x: mousePos.x - img.rect.width/2,
                y: mousePos.y - img.rect.height/2
            }, 0)
            // then make it disappear
            .to(img.DOM.el, 1, {
                ease: Power1.easeOut,
                opacity: 0
            }, 0.4)
            // translate down the image
            .to(img.DOM.el, 1, {
                ease: Quint.easeInOut,
                y: `+=${winsize.height + img.rect.height/2}`
            }, 0.4);
        }
    }

    /***********************************/
    /********** Preload stuff **********/

    // Preload images
    const preloadImages = () => {
        return new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll('.trail-img'), resolve);
        });
    };
    
    // And then..
    preloadImages().then(() => {
        // Remove the loader
        document.body.classList.remove('loading-optional');
        new ImageTrail();
    });
}

//----------------------------------CLOSURE COMPILE SERVICE (MINIFIED)----------------------------------//

// var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
// $jscomp.arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};var body=document.body,MathUtils={lerp:function(a,b,c){return(1-c)*a+c*b},distance:function(a,b,c,d){return Math.hypot(c-a,d-b)}},winsize,calcWinsize=function(){return winsize={width:window.innerWidth,height:window.innerHeight}};calcWinsize();window.addEventListener("resize",calcWinsize);
// var getMousePos=function(a){var b=0,c=0;a||(a=window.event);if(a.pageX||a.pageY)b=a.pageX,c=a.pageY;else if(a.clientX||a.clientY)b=a.clientX+body.scrollLeft+docEl.scrollLeft,c=a.clientY+body.scrollTop+docEl.scrollTop;return{x:b,y:c}},mousePos=lastMousePos=cacheMousePos={x:0,y:0};window.addEventListener("mousemove",function(a){return mousePos=getMousePos(a)});
// var getMouseDistance=function(){return MathUtils.distance(mousePos.x,mousePos.y,lastMousePos.x,lastMousePos.y)},Image=function(a){this.DOM={el:a};this.defaultStyle={x:0,y:0,opacity:0};this.getRect();this.initEvents()};Image.prototype.initEvents=function(){var a=this;window.addEventListener("resize",function(){return a.resize()})};Image.prototype.resize=function(){TweenMax.set(this.DOM.el,this.defaultStyle);this.getRect()};Image.prototype.getRect=function(){this.rect=this.DOM.el.getBoundingClientRect()};
// Image.prototype.isActive=function(){return TweenMax.isTweening(this.DOM.el)||0!=this.DOM.el.style.opacity};var ImageTrail=function(){var a=this;this.DOM={trailImgsWrap:document.querySelector(".trail-images-wrap")};this.images=[];[].concat($jscomp.arrayFromIterable(this.DOM.trailImgsWrap.querySelectorAll("img"))).forEach(function(b){return a.images.push(new Image(b))});this.imagesTotal=this.images.length;this.imgPosition=0;this.zIndexVal=1;this.threshold=50;requestAnimationFrame(function(){return a.render()})};
// ImageTrail.prototype.render=function(){var a=this,b=getMouseDistance();cacheMousePos.x=MathUtils.lerp(cacheMousePos.x||mousePos.x,mousePos.x,.1);cacheMousePos.y=MathUtils.lerp(cacheMousePos.y||mousePos.y,mousePos.y,.1);b>this.threshold&&(this.showNextImage(),++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0,lastMousePos=mousePos);b=!0;for(var c=$jscomp.makeIterator(this.images),d=c.next();!d.done;d=c.next())if(d.value.isActive()){b=!1;break}b&&1!==this.zIndexVal&&
// (this.zIndexVal=1);requestAnimationFrame(function(){return a.render()})};
// ImageTrail.prototype.showNextImage=function(){var a=this.images[this.imgPosition];TweenMax.killTweensOf(a.DOM.el);(new TimelineMax).set(a.DOM.el,{startAt:{opacity:0},opacity:1,zIndex:this.zIndexVal,x:cacheMousePos.x-a.rect.width/2,y:cacheMousePos.y-a.rect.height/2},0).to(a.DOM.el,1.6,{ease:Expo.easeOut,x:mousePos.x-a.rect.width/2,y:mousePos.y-a.rect.height/2},0).to(a.DOM.el,1,{ease:Power1.easeOut,opacity:0},.4).to(a.DOM.el,1,{ease:Quint.easeInOut,y:"+="+(winsize.height+a.rect.height/2)},.4)};
// var preloadImages=function(){return new Promise(function(a,b){imagesLoaded(document.querySelectorAll(".trail-img"),a)})};preloadImages().then(function(){document.body.classList.remove("loading-optional");new ImageTrail});