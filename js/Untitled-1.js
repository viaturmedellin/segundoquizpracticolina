(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 200,
	height: 300,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Logovert20añosfac.png", id:"Logovert20añosfac"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Logovert20añosfac = function() {
	this.initialize(img.Logovert20añosfac);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1021,1600);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Logovert20añosfac();
	this.instance.setTransform(0,0,0.185,0.185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.2,296.5);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(100.2,-174.9,1,1,0,0,0,94.6,148.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:100,y:-147.9},0).wait(1).to({x:99.7,y:-120.9},0).wait(1).to({x:99.5,y:-93.9},0).wait(1).to({x:99.3,y:-67},0).wait(1).to({x:99,y:-40},0).wait(1).to({x:98.8,y:-13},0).wait(1).to({x:98.6,y:14},0).wait(1).to({x:98.3,y:41},0).wait(1).to({x:98.1,y:68},0).wait(1).to({x:97.9,y:95},0).wait(1).to({x:97.6,y:121.9},0).wait(1).to({x:97.4,y:148.9},0).wait(1).to({x:97.2,y:175.9},0).wait(1).to({x:96.9,y:202.8},0).wait(1).to({x:96.7,y:229.8},0).wait(1).to({x:96.5,y:256.8},0).wait(1).to({x:96.2,y:283.8},0).wait(1).to({x:96,y:310.8},0).wait(1).to({x:95.8,y:337.8},0).wait(1).to({x:95.5,y:364.8},0).wait(1).to({x:95.3,y:391.7},0).wait(1).to({x:95.1,y:418.7},0).wait(1).to({x:94.8,y:445.7},0).wait(1).to({x:94.6,y:472.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105.6,-173.1,189.2,296.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;