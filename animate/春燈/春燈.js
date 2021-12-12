(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"春燈_atlas_1", frames: [[0,1147,333,314],[1119,433,82,229],[1119,0,79,431],[0,0,1117,1145]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,114.5), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,39.5,215.5), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-67.95,-273.05,0.9999,0.9999,29.0132,0,0,39.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-207,-103.8,0.9999,0.9999,29.0132,0,0,87.9,8.7);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-286.6,21.65,0.9999,0.9999,46.7852,0,0,20.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:46.7852,x:-286.6,y:21.65}},{t:this.ikNode_2,p:{rotation:29.0132,x:-207,y:-103.8,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:29.0132,y:-273.05,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:45.9918,x:-284.15,y:23.55}},{t:this.ikNode_2,p:{rotation:28.5214,x:-205.65,y:-102.6,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:28.5214,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:45.1991,x:-281.55,y:25.4}},{t:this.ikNode_2,p:{rotation:28.0305,x:-204.2,y:-101.3,regY:8.8,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:28.0305,y:-273.05,scaleX:0.9998,scaleY:0.9998,x:-68,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:44.4064,x:-279,y:27.25}},{t:this.ikNode_2,p:{rotation:27.5392,x:-202.6,y:-100.25,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:27.5392,y:-273,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:43.6136,x:-276.4,y:29.05}},{t:this.ikNode_2,p:{rotation:27.046,x:-201.15,y:-99.15,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:27.046,y:-273,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:42.8205,x:-273.8,y:30.8}},{t:this.ikNode_2,p:{rotation:26.5541,x:-199.75,y:-98,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.8}},{t:this.ikNode_1,p:{rotation:26.5541,y:-273.05,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:42.0264,x:-271.15,y:32.65}},{t:this.ikNode_2,p:{rotation:26.0637,x:-198.15,y:-96.85,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:26.0637,y:-273.05,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:41.2336,x:-268.55,y:34.35}},{t:this.ikNode_2,p:{rotation:25.5706,x:-196.6,y:-95.7,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:25.5706,y:-273.05,scaleX:0.9998,scaleY:0.9998,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:40.4412,x:-265.9,y:36.1}},{t:this.ikNode_2,p:{rotation:25.0785,x:-195.2,y:-94.55,regY:8.8,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:25.0785,y:-273.05,scaleX:0.9998,scaleY:0.9998,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:39.6474,x:-263.2,y:37.75}},{t:this.ikNode_2,p:{rotation:24.5867,x:-193.55,y:-93.6,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:24.5867,y:-273.15,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:38.8551,x:-260.55,y:39.45}},{t:this.ikNode_2,p:{rotation:24.096,x:-192,y:-92.5,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:24.096,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:38.0634,x:-257.85,y:41.05}},{t:this.ikNode_2,p:{rotation:23.6047,x:-190.45,y:-91.4,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:23.6047,y:-273.05,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:37.2699,x:-255.1,y:42.7}},{t:this.ikNode_2,p:{rotation:23.1124,x:-188.85,y:-90.35,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:23.1124,y:-273.05,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:36.4766,x:-252.45,y:44.25}},{t:this.ikNode_2,p:{rotation:22.6198,x:-187.3,y:-89.25,regY:8.8,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:22.6198,y:-273.05,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:35.683,x:-249.7,y:45.85}},{t:this.ikNode_2,p:{rotation:22.1281,x:-185.9,y:-88.35,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.8}},{t:this.ikNode_1,p:{rotation:22.1281,y:-273,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:34.8902,x:-246.9,y:47.4}},{t:this.ikNode_2,p:{rotation:21.6358,x:-184.1,y:-87.3,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:21.6358,y:-273.05,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:34.0965,x:-244.15,y:48.95}},{t:this.ikNode_2,p:{rotation:21.1449,x:-182.7,y:-86.4,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.8}},{t:this.ikNode_1,p:{rotation:21.1449,y:-273.05,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:33.304,x:-241.45,y:50.45}},{t:this.ikNode_2,p:{rotation:20.6537,x:-180.9,y:-85.35,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:20.6537,y:-272.85,scaleX:0.9998,scaleY:0.9998,x:-68,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:32.5104,x:-238.65,y:51.9}},{t:this.ikNode_2,p:{rotation:20.1609,x:-179.35,y:-84.4,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:20.1609,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:31.718,x:-235.85,y:53.35}},{t:this.ikNode_2,p:{rotation:19.6699,x:-177.85,y:-83.45,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.8}},{t:this.ikNode_1,p:{rotation:19.6699,y:-273.05,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:30.9249,x:-233,y:54.8}},{t:this.ikNode_2,p:{rotation:19.1785,x:-176.05,y:-82.55,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:19.1785,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:30.1319,x:-230.2,y:56.2}},{t:this.ikNode_2,p:{rotation:18.6866,x:-174.45,y:-81.55,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:18.6866,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:29.3387,x:-227.35,y:57.6}},{t:this.ikNode_2,p:{rotation:18.1936,x:-172.75,y:-80.65,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:18.1936,y:-273,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:28.547,x:-224.6,y:58.95}},{t:this.ikNode_2,p:{rotation:17.7019,x:-171.15,y:-79.8,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:17.7019,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:27.7532,x:-221.65,y:60.25}},{t:this.ikNode_2,p:{rotation:17.2113,x:-169.45,y:-78.9,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:17.2113,y:-273.05,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:26.9596,x:-218.85,y:61.55}},{t:this.ikNode_2,p:{rotation:16.7195,x:-167.8,y:-78,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:16.7195,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.85,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:26.1673,x:-215.95,y:62.85}},{t:this.ikNode_2,p:{rotation:16.227,x:-166.1,y:-77.2,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:16.227,y:-273.05,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:25.3738,x:-213.05,y:64.1}},{t:this.ikNode_2,p:{rotation:15.736,x:-164.4,y:-76.35,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:15.736,y:-273,scaleX:0.9998,scaleY:0.9998,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:24.5808,x:-210.15,y:65.35}},{t:this.ikNode_2,p:{rotation:15.2441,x:-162.75,y:-75.55,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:15.2441,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:23.7878,x:-207.25,y:66.55}},{t:this.ikNode_2,p:{rotation:14.751,x:-161,y:-74.7,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:14.751,y:-273,scaleX:0.9998,scaleY:0.9998,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:22.9947,x:-204.3,y:67.6}},{t:this.ikNode_2,p:{rotation:14.2596,x:-159.3,y:-73.8,regY:8.8,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:14.2596,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:22.2017,x:-201.4,y:68.95}},{t:this.ikNode_2,p:{rotation:13.7684,x:-157.55,y:-73.15,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:13.7684,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:21.4091,x:-198.4,y:70.05}},{t:this.ikNode_2,p:{rotation:13.2755,x:-155.9,y:-72.4,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:13.2755,y:-273,scaleX:0.9998,scaleY:0.9998,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:20.6161,x:-195.45,y:71.15}},{t:this.ikNode_2,p:{rotation:12.7838,x:-154.2,y:-71.55,regY:8.8,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:12.7838,y:-273.05,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:19.8229,x:-192.5,y:72.2}},{t:this.ikNode_2,p:{rotation:12.2927,x:-152.45,y:-70.95,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:12.2927,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:19.03,x:-189.55,y:73.25}},{t:this.ikNode_2,p:{rotation:11.8002,x:-150.7,y:-70.2,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:11.8002,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:18.2367,x:-186.6,y:74.3}},{t:this.ikNode_2,p:{rotation:11.3092,x:-148.95,y:-69.35,regY:8.8,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:11.3092,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:17.4436,x:-183.6,y:75.3}},{t:this.ikNode_2,p:{rotation:10.8164,x:-147.2,y:-68.8,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:10.8164,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:16.6508,x:-180.6,y:76.35}},{t:this.ikNode_2,p:{rotation:10.3247,x:-145.4,y:-68.15,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:10.3247,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:15.8575,x:-177.65,y:77.2}},{t:this.ikNode_2,p:{rotation:9.8336,x:-143.7,y:-67.5,regY:8.7,scaleX:0.9998,scaleY:0.9998,regX:87.9}},{t:this.ikNode_1,p:{rotation:9.8336,y:-273,scaleX:0.9998,scaleY:0.9998,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:15.0645,x:-174.55,y:78.15}},{t:this.ikNode_2,p:{rotation:9.3423,x:-141.9,y:-66.85,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:9.3423,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:14.2719,x:-171.5,y:79.1}},{t:this.ikNode_2,p:{rotation:8.8507,x:-140.15,y:-66.25,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:8.8507,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:13.4791,x:-168.45,y:80}},{t:this.ikNode_2,p:{rotation:8.3583,x:-138.3,y:-65.6,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:8.3583,y:-272.9,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:12.6856,x:-165.45,y:80.8}},{t:this.ikNode_2,p:{rotation:7.8662,x:-136.7,y:-65.05,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.8}},{t:this.ikNode_1,p:{rotation:7.8662,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:11.8927,x:-162.4,y:81.6}},{t:this.ikNode_2,p:{rotation:7.3757,x:-134.8,y:-64.3,regY:8.8,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:7.3757,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:11.0992,x:-159.35,y:82.45}},{t:this.ikNode_2,p:{rotation:6.8822,x:-133,y:-63.75,regY:8.8,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:6.8822,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:10.3063,x:-156.35,y:83.2}},{t:this.ikNode_2,p:{rotation:6.3919,x:-131.15,y:-63.3,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:6.3919,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:9.5136,x:-153.25,y:83.95}},{t:this.ikNode_2,p:{rotation:5.8995,x:-129.5,y:-62.8,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.8}},{t:this.ikNode_1,p:{rotation:5.8995,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:8.72,x:-150.2,y:84.65}},{t:this.ikNode_2,p:{rotation:5.4082,x:-127.55,y:-62.25,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:5.4082,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:7.9274,x:-147.1,y:85.35}},{t:this.ikNode_2,p:{rotation:4.9158,x:-125.8,y:-61.7,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:4.9158,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:7.1353,x:-144,y:86.1}},{t:this.ikNode_2,p:{rotation:4.4245,x:-123.9,y:-61.25,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:4.4245,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.85,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:6.342,x:-141,y:86.65}},{t:this.ikNode_2,p:{rotation:3.9317,x:-122.1,y:-60.75,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:3.9317,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:5.549,x:-137.85,y:87.3}},{t:this.ikNode_2,p:{rotation:3.4402,x:-120.25,y:-60.3,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:3.4402,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:4.7552,x:-134.7,y:87.9}},{t:this.ikNode_2,p:{rotation:2.948,x:-118.5,y:-59.9,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:2.948,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:3.9625,x:-131.65,y:88.4}},{t:this.ikNode_2,p:{rotation:2.4569,x:-116.65,y:-59.5,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:2.4569,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:3.1696,x:-128.55,y:89}},{t:this.ikNode_2,p:{rotation:1.9651,x:-114.75,y:-59.05,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:1.9651,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:2.3765,x:-125.4,y:89.5}},{t:this.ikNode_2,p:{rotation:1.4726,x:-112.95,y:-58.6,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:1.4726,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.85,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:1.5829,x:-122.3,y:89.95}},{t:this.ikNode_2,p:{rotation:0.9811,x:-111.25,y:-58.3,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.8}},{t:this.ikNode_1,p:{rotation:0.9811,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.85,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:0.7896,x:-119.2,y:90.4}},{t:this.ikNode_2,p:{rotation:0.4888,x:-109.25,y:-57.95,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:0.4888,y:-272.95,scaleX:0.9999,scaleY:0.9999,x:-67.85,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:0,x:-116.05,y:90.85}},{t:this.ikNode_2,p:{rotation:0,x:-107.4,y:-57.5,regY:8.7,scaleX:0.9999,scaleY:0.9999,regX:87.9}},{t:this.ikNode_1,p:{rotation:0,y:-273,scaleX:0.9999,scaleY:0.9999,x:-67.85,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-292.1,355.2,497.40000000000003);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-67.9,-273.15,0.9999,0.9999,-31.1836,0,0,39.5,-0.1);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(9.9,-68.25,0.9999,0.9999,-31.1836,0,0,88,8.7);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(79.25,63.2,0.9999,0.9999,-38.3115,0,0,20.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-38.3115,x:79.25,y:63.2,regX:20.5}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9999,scaleY:0.9999,rotation:-31.1836,x:9.9,y:-68.25,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-31.1836,y:-273.15,regX:39.5,x:-67.9,regY:-0.1}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-37.663,x:76.1,y:64.5,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-30.6542,x:8,y:-67.6,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-30.6542,y:-273.2,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-37.013,x:73,y:65.8,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-30.1259,x:6.05,y:-66.9,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-30.1259,y:-273.15,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-36.3638,x:69.9,y:67,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.599,x:4.15,y:-66.2,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-29.599,y:-273.2,regX:39.6,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-35.714,x:66.75,y:68.3,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.0697,x:2.25,y:-65.65,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-29.0697,y:-273.2,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-35.0643,x:63.6,y:69.5,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-28.541,x:0.35,y:-64.95,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-28.541,y:-273,regX:39.5,x:-67.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-34.4152,x:60.45,y:70.7,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-28.0132,x:-1.55,y:-64.3,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-28.0132,y:-273.15,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-33.7655,x:57.25,y:71.85,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-27.4833,x:-3.7,y:-63.65,regX:87.9}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.4833,y:-273.2,regX:39.6,x:-67.75,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-33.1158,x:54.05,y:72.95,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-26.9561,x:-5.45,y:-63.2,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-26.9561,y:-273.15,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-32.4662,x:50.9,y:74.1,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-26.4266,x:-7.4,y:-62.55,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-26.4266,y:-273.15,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-31.818,x:47.65,y:75.15,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-25.8975,x:-9.35,y:-62.1,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.8975,y:-273.2,regX:39.6,x:-67.75,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-31.1688,x:44.4,y:76.25,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-25.3691,x:-11.25,y:-61.5,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.3691,y:-273.05,regX:39.6,x:-67.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-30.519,x:41.2,y:77.25,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-24.8415,x:-13.25,y:-61,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.8415,y:-273.2,regX:39.6,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-29.8705,x:37.95,y:78.25,regX:20.6}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9998,scaleY:0.9998,rotation:-24.312,x:-15.1,y:-60.35,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.312,y:-273.1,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-29.2208,x:34.75,y:79.25,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-23.7832,x:-17.3,y:-60,regX:87.9}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.7832,y:-273.15,regX:39.6,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-28.5715,x:31.55,y:80.15,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-23.2561,x:-19.1,y:-59.55,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.2561,y:-273.2,regX:39.6,x:-67.75,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.9217,x:28.2,y:81.05,regX:20.6}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9998,scaleY:0.9998,rotation:-22.728,x:-21.2,y:-59,regX:87.9}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.728,y:-273.15,regX:39.6,x:-67.75,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.2717,x:25,y:81.9,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-22.1987,x:-23.1,y:-58.7,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-22.1987,y:-273.15,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-26.6229,x:21.65,y:82.75,regX:20.6}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9998,scaleY:0.9998,rotation:-21.6694,x:-25.05,y:-58.2,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.6694,y:-273.2,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.9726,x:18.45,y:83.6,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-21.1422,x:-27.05,y:-57.95,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.1422,y:-273.2,regX:39.6,x:-67.75,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.3242,x:15.15,y:84.35,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-20.6133,x:-29,y:-57.6,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.6133,y:-273.1,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.6744,x:11.85,y:85.1,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-20.0846,x:-31,y:-57.15,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-20.0846,y:-273.1,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.0255,x:8.55,y:85.8,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-19.5557,x:-33,y:-56.9,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-19.5557,y:-273.1,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.376,x:5.25,y:86.5,regX:20.6}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9999,scaleY:0.9999,rotation:-19.0275,x:-34.9,y:-56.5,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-19.0275,y:-273.15,regX:39.6,x:-67.75,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.7263,x:2,y:87.2,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-18.4985,x:-36.95,y:-56.3,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-18.4985,y:-273.15,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.0763,x:-1.4,y:87.8,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-17.9696,x:-39,y:-55.95,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-17.9696,y:-273.15,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.4276,x:-4.7,y:88.4,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-17.4414,x:-40.95,y:-55.7,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-17.4414,y:-273.15,regX:39.6,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.7779,x:-8.05,y:88.95,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-16.9126,x:-43,y:-55.45,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-16.9126,y:-273.1,regX:39.6,x:-67.75,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.1286,x:-11.4,y:89.45,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-16.3839,x:-45,y:-55.3,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.3839,y:-273.1,regX:39.6,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-19.4794,x:-14.7,y:90,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-15.8559,x:-47,y:-55.15,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.8559,y:-273.1,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.8298,x:-18.05,y:90.45,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-15.3268,x:-49.15,y:-54.85,regX:87.9}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-15.3268,y:-273.1,regX:39.6,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.1808,x:-21.45,y:90.9,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-14.797,x:-51.05,y:-54.7,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.797,y:-273.1,regX:39.6,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-17.5313,x:-24.75,y:91.3,regX:20.6}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9999,scaleY:0.9999,rotation:-14.2695,x:-53.15,y:-54.4,regX:87.9}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.2695,y:-273.1,regX:39.6,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-16.8822,x:-28.2,y:91.7,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-13.7404,x:-55.05,y:-54.5,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.7404,y:-273.1,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.2337,x:-31.55,y:92.05,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-13.2129,x:-57.1,y:-54.35,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.2129,y:-273.15,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.5827,x:-34.85,y:92.35,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-12.6833,x:-59.05,y:-54.25,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-12.6833,y:-273.05,regX:39.6,x:-67.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.9336,x:-38.3,y:92.7,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-12.1542,x:-61.25,y:-54.15,regX:87.9}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.1542,y:-273.1,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.2839,x:-41.8,y:92.95,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-11.6268,x:-63.1,y:-54.2,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.6268,y:-273.1,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.6344,x:-45.2,y:93.15,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-11.0988,x:-65.15,y:-54.1,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.0988,y:-273.1,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-12.9856,x:-48.55,y:93.3,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-10.5693,x:-67.15,y:-54.1,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.5693,y:-273.1,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.3358,x:-52,y:93.5,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-10.0414,x:-69.15,y:-54.15,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.0414,y:-273.1,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.6867,x:-55.35,y:93.65,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-9.5134,x:-71.2,y:-54.1,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.5134,y:-273.1,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.0366,x:-58.75,y:93.8,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-8.9845,x:-73.2,y:-54.15,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-8.9845,y:-273.1,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.3878,x:-62.05,y:93.8,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-8.4554,x:-75.25,y:-54.25,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.4554,y:-273.1,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-9.7377,x:-65.35,y:93.85,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-7.9263,x:-77.25,y:-54.3,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-7.9263,y:-273.1,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.089,x:-68.7,y:93.85,regX:20.6}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9999,scaleY:0.9999,rotation:-7.3986,x:-79.3,y:-54.3,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-7.3986,y:-273.1,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.4396,x:-72.25,y:93.85,regX:20.5}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9999,scaleY:0.9999,rotation:-6.8699,x:-81.25,y:-54.35,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.8699,y:-273.05,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-7.7904,x:-75.5,y:93.8,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-6.341,x:-83.3,y:-54.6,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.341,y:-273.1,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-7.1413,x:-78.85,y:93.75,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-5.8125,x:-85.3,y:-54.75,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.8125,y:-273.1,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.4914,x:-82.4,y:93.65,regX:20.5}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-5.2836,x:-87.35,y:-54.9,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.2836,y:-273.1,regX:39.6,x:-67.75,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.8423,x:-85.7,y:93.45,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-4.7551,x:-89.35,y:-55.15,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.7551,y:-273.05,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.1923,x:-89.1,y:93.3,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-4.2263,x:-91.35,y:-55.35,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.2263,y:-273.05,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.5438,x:-92.45,y:93.05,regX:20.6}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9999,scaleY:0.9999,rotation:-3.6977,x:-93.35,y:-55.45,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.6977,y:-273.1,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.8941,x:-95.8,y:92.85,regX:20.6}},{t:this.ikNode_2,p:{regY:8.7,scaleX:0.9999,scaleY:0.9999,rotation:-3.1695,x:-95.3,y:-55.6,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.1695,y:-273.05,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.244,x:-99.2,y:92.6,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9998,scaleY:0.9998,rotation:-2.6407,x:-97.3,y:-56,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.6407,y:-273,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.5943,x:-102.55,y:92.25,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-2.1121,x:-99.35,y:-56.3,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.1121,y:-273,regX:39.5,x:-67.9,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.945,x:-105.9,y:91.9,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-1.5837,x:-101.35,y:-56.65,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.5837,y:-273.05,regX:39.5,x:-67.85,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.296,x:-109.25,y:91.55,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-1.0555,x:-103.5,y:-56.9,regX:87.9}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.0555,y:-273.05,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.6471,x:-112.65,y:91.15,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:-0.5264,x:-105.3,y:-57.25,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.5264,y:-273,regX:39.5,x:-67.8,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:-115.95,y:90.75,regX:20.6}},{t:this.ikNode_2,p:{regY:8.6,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-107.3,y:-57.6,regX:88}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,y:-273.05,regX:39.5,x:-67.8,regY:-0.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.3,-273.1,361.6,483.20000000000005);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-67.85,-273.1,1,1,-0.8332,0,0,39.5,-0.1);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-104.15,-57.15,0.9999,0.9999,-72.3558,0,0,88,8.7);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(34.4,-3.8,0.9999,0.9999,-72.3558,0,0,20.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{regY:-0.1,rotation:-72.3558,x:34.4,y:-3.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:-72.3558,x:-104.15,y:-57.15,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.5,scaleX:1,scaleY:1,rotation:-0.8332,x:-67.85,y:-273.1}}]}).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-68.7544,x:29.9,y:6.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-67.9188,x:-104.25,y:-57.1,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.8035,x:-67.95,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-65.1534,x:24.4,y:17,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:-63.4823,x:-104.35,y:-57.15,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.7747,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-61.5521,x:18.2,y:26.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:87.9,rotation:-59.0448,x:-104.5,y:-57.15,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.7458,x:-67.95,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:-0.1,rotation:-57.9505,x:11.1,y:35.85,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-54.608,x:-104.6,y:-57.1,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.717,x:-67.9,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-54.3491,x:3.65,y:44.65,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-50.1716,x:-104.7,y:-57.2,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.6881,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-50.7492,x:-4.7,y:52.7,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-45.7339,x:-104.85,y:-57.1,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.6593,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-47.1472,x:-13.6,y:60.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-41.2963,x:-104.95,y:-57.1,scaleX:0.9998,scaleY:0.9998,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.6313,x:-67.9,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-43.545,x:-23.05,y:66.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-36.8596,x:-105.1,y:-57.1,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.6024,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-39.9439,x:-33,y:72.75,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-32.4228,x:-105.2,y:-57.1,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.5736,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-36.3433,x:-43.35,y:77.9,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-27.9862,x:-105.25,y:-57.15,scaleX:0.9998,scaleY:0.9998,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.5456,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-32.7406,x:-54.2,y:82.25,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:87.9,rotation:-23.5496,x:-105.4,y:-57.2,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.5159,x:-67.9,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-29.1401,x:-65.2,y:85.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:-19.1113,x:-105.5,y:-57.35,scaleX:0.9999,scaleY:0.9999,regY:8.6}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.487,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-25.5377,x:-76.5,y:88.45,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-14.674,x:-105.7,y:-57.2,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.4582,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-21.938,x:-88.05,y:90.3,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-10.2381,x:-105.75,y:-57.25,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.4302,x:-67.95,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-18.3368,x:-99.55,y:91.2,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-5.8008,x:-105.85,y:-57.3,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.4004,x:-67.9,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-14.7342,x:-111.2,y:91.2,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:-1.3633,x:-105.95,y:-57.3,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.3716,x:-67.95,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-11.1342,x:-122.8,y:90.3,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:3.0688,x:-106.1,y:-57.35,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.3427,x:-67.95,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-7.5317,x:-134.35,y:88.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:7.5069,x:-106.2,y:-57.35,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.3156,x:-67.95,y:-273.05}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-3.9307,x:-145.55,y:85.9,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:11.942,x:-106.25,y:-57.4,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.2859,x:-67.9,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:-0.3288,x:-156.7,y:82.45,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:16.3809,x:-106.45,y:-57.4,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.2579,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:3.2666,x:-167.5,y:78.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:20.8161,x:-106.45,y:-57.4,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.2282,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:6.8681,x:-177.9,y:72.95,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:25.253,x:-106.65,y:-57.5,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.1993,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:10.471,x:-187.85,y:67,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:29.6907,x:-106.7,y:-57.45,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.1705,x:-67.9,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:14.0708,x:-197.4,y:60.3,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:34.1273,x:-106.85,y:-57.45,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.1416,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:17.671,x:-206.35,y:52.95,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:38.5631,x:-107,y:-57.5,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.1128,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:21.2727,x:-214.7,y:44.9,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:43.0013,x:-107,y:-57.45,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.0839,x:-67.95,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:24.8751,x:-222.45,y:36.25,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:47.4386,x:-107.1,y:-57.5,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.0551,x:-67.9,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:28.476,x:-229.45,y:27.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:51.8758,x:-107.3,y:-57.55,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.0262,x:-67.95,y:-273.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:32.0767,x:-235.75,y:17.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:87.9,rotation:56.3119,x:-107.4,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:31.0074,x:-233.2,y:21.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:54.4343,x:-107.4,y:-57.55,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:29.9386,x:-230.6,y:25.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:88,rotation:52.5595,x:-107.3,y:-57.5,scaleX:0.9998,scaleY:0.9998,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:28.8693,x:-227.8,y:29.65,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:50.6821,x:-107.4,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:27.8,x:-224.85,y:33.5,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:48.8034,x:-107.3,y:-57.55,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:26.7301,x:-221.85,y:37.2,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:46.9269,x:-107.4,y:-57.6,scaleX:0.9998,scaleY:0.9998,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:25.6609,x:-218.65,y:40.95,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:45.0495,x:-107.3,y:-57.65,scaleX:0.9998,scaleY:0.9998,regY:8.6}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:24.5907,x:-215.35,y:44.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:43.172,x:-107.35,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:23.5241,x:-211.95,y:48,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:41.2951,x:-107.35,y:-57.6,scaleX:0.9998,scaleY:0.9998,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:22.4541,x:-208.45,y:51.4,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:39.4173,x:-107.35,y:-57.65,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:21.3838,x:-204.8,y:54.7,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:37.5397,x:-107.3,y:-57.7,scaleX:0.9999,scaleY:0.9999,regY:8.6}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:20.3141,x:-201.05,y:57.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:35.664,x:-107.35,y:-57.65,scaleX:0.9998,scaleY:0.9998,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:19.2446,x:-197.25,y:60.75,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:33.7863,x:-107.4,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:18.1756,x:-193.3,y:63.7,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:31.9093,x:-107.4,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:17.1074,x:-189.3,y:66.4,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:30.0329,x:-107.35,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:16.0373,x:-185.15,y:69.05,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:28.1548,x:-107.35,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:14.9694,x:-181,y:71.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:26.2784,x:-107.4,y:-57.65,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:13.8988,x:-176.7,y:73.9,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:24.3997,x:-107.35,y:-57.6,scaleX:0.9998,scaleY:0.9998,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:12.8291,x:-172.35,y:76.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:22.5243,x:-107.4,y:-57.65,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:11.7606,x:-168,y:78.15,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:20.6467,x:-107.35,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:10.6917,x:-163.45,y:80,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:18.7684,x:-107.45,y:-57.55,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:9.6232,x:-158.9,y:81.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:16.893,x:-107.35,y:-57.65,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:8.5534,x:-154.35,y:83.45,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:15.0154,x:-107.4,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:7.484,x:-149.7,y:84.9,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:88,rotation:13.1387,x:-107.35,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:6.4138,x:-144.95,y:86.25,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:11.2626,x:-107.45,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:5.345,x:-140.3,y:87.3,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:9.3846,x:-107.4,y:-57.55,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:4.2752,x:-135.5,y:88.35,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:7.5069,x:-107.45,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:3.2062,x:-130.65,y:89.2,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:5.6295,x:-107.45,y:-57.7,scaleX:0.9999,scaleY:0.9999,regY:8.6}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:2.1366,x:-125.85,y:89.85,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:3.7529,x:-107.35,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:1.0677,x:-121.05,y:90.45,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:1.8759,x:-107.4,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:0,x:-116.15,y:90.75,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{regX:87.9,rotation:0,x:-107.4,y:-57.6,scaleX:0.9999,scaleY:0.9999,regY:8.7}},{t:this.ikNode_1,p:{regX:39.4,scaleX:0.9999,scaleY:0.9999,rotation:0,x:-67.95,y:-273.15}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.8,-273.1,463.70000000000005,480.20000000000005);


// stage content:
(lib.春燈 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 斷圖春
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353225").s().p("AjXbDQA0hYBPg6QhrAbhnglQAxCNhnA4QiAgShEjnQg7jJACkpQABkZA0jRQA3jeBRgCQhBB3gYCGQA0idBbiZQASAKAbASQgOgFAbBaQAiBtgUhYQE5iGC4gUQE9gkByDoQAeA8AqAoQAtApA2AOIggADIAqgBIgKgCQBzgPBTgTQARgJAWgOQBAgsjOiLQhqhIiVhPQjeh3jkgsQjWgqkJAOQkBHrkUEQQmeGamYiGQgwAjhKhwQgdgtgSgvQgSgxAEgbQATiACUiKQBnhhCoheQBXgwDShlQgIAEBTgeQkLBujKCMQjpCfhMCZQgTAlAHA9QAHA6AbA1QAdA3AoAXQAsAaAugYIEgibQCZhbBshtQFAlBC2k3QiLATjEBHQBBgbAQgLQAQgMgrAIQEig+AagwQjkBUg9AQQivAwh/gcIhAgZQhJggAUgPQBtBpC8glQBAgMBegiICTg0QkABNiAgGQjQgKhsi4QA0ArBDgKQhFgMBKgUQEwABDCg0QE1hTA3jVQhpADh0gNQjBgVAHg5QB5BSCTgJQh3gUg9gYQhggmgwhKQAVgBCIAAQBpABA/gKQC9ggAaigQhuAQiEgWQhFgMifgsQAhgWBcgkICohBQDVhYAGhRIgFkXQgFkKAEgLIAAgOQgFgHABgKQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQgBhzA8gDQCegUBzEYQAtBrAYB5QAXBwgEBCQAmgJBQgJQBkgKBGAFQDPAOiZCFQg4AxhOAjQhYAkgoASQhHAegpAlQg2AwgfBPQA/gQBQAEQBUAEA3AZQA+AdgCAuQgCA3haBHQg1AqhEANQgSADhfAIQhAAFgjAUQgxAcggBGQERg9EhgTQEvgUEIAeQKCBKkuC7QhbA4iOADQhrADirgdQjDglhegOQiigXhmAMQi2ALhzARQjYAggoBQQD+goEoAVQE8AXEaBYQE4BiDbCkQD1C4BqD6QA6CIiDARQhnANjsg+Qhfgak4hiQjfhGg4gBQAXBwAJCZQAKCugNCfQghGbioCFQhSBBhehcQgbgbgvg8Qgug7gUgTQg5g2jNCuQhLBAhGBKQhBBEgPAcQADhcA5hegAhGYVQhaAdhegTQBeAjBagtgACuQiQh1CGhuBHQAfgLBWgLQBggMApgLQCZgqgwiGIAljxQgtB0h8CNgAkWNwQgOD0gBBTQCRg5AzgdQBqg8AuhWIgFABQANgMAAgRQinBAhfgoQhwgvBSi0QAAAmBSgKQArgGCMgjQCGgiA9gFQBfgIAUApQgchoAghjQAKgRADgLQALAfAFAhQgDgpgLghQAEgagVgNQALATAGAUIgCAKQgNgggPgXQAGACAHAEQgbgvgygRQAlASAbAoQhKgbkDA/Qj7BEgUgBQADCGgMDMgA1ROWQhiA2iEA9QB4gkBwhBQBzhDBkhVQhgBHh5BDgABHOwIgFANIAMgDQACAAABgFQgGgFgDAAIgBAAgAoXKwQgIAggDAYQAKgvAJgkIgIAbgAOqJsQgRgJhxgLQhwgKABAGQB2gBB7AZIAAAAgAM3JLQA2ALA6gQQBJgDA8gtQgJAHgwAKQgoAWgkAJIgRAAIhfAFgAs+HDQgnArgRAjQA8hDA+hPQgUAWguAugAiTH1Qg9AVgyAAQAaAVBVgqgAgRG4QBdguBngVIAEgBQhbAIhtA8gAM3EEQg+gogygcQishiirgqIC/BHQCFA7CDBOIAAAAgAEWATQCKAYB+A2QgzgahugmQiFgth5gbQlVhNg7BxQAigCDrABQDDABgEgIgApcgRQA3gIAsgaQi0ApBRgHgATWieQAtgDAegRQgmAPglAFgAjwtTIgYCEQAOgtAJgmQAOg4gGAAQgCAAgFAHgAl+t1Qh8ACASADQAlAJBZACQBpACADgTIiAABgApRt7IgfgFQAWAIAJgDgACNvHQgCAGAMgKgAjS2uQAGDIgFBkQA6gPgXjhQgokMgHhdQACBSAJDbgAkHcgIgJA1QgGgRAPgkgAjKP/QhEgHAEgyQARATA9ANQA+AMA/gCQhGAQgvAAIgWgBgAAyPQQgfAdhSADQAzgLA+gVgAmYEqQAEACgCADQgDAEABACQgFgHAFgEgAmXEdQgEgIAFgBQAHARgFACQABgBgEgJgAzSAHQgGgBgEgGQACgDAFAEQAGAGADAAIgGAAgAzvgNQgNAAgCgJQAjgDgGASQgBgFgNgBgACGgNQASgKAHAEQgCgBgKAGQgEAEgEAAQgDAAgCgDgACngOQAAgEAGACQAFACADgBIgFADIgDAAQgDAAgDgCgArxpBQACgEADADQADADACgBQgEACgCAAQgDAAgBgDgAsGpGQAYgLgGAMIgHABQgGAAgFgCgAjq8jQgIgJAEgIQAOARAAAOQgBgEgJgKg");
	this.shape.setTransform(381.8894,340.5422,0.8678,0.8696);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 小燈籠
	this.instance = new lib.小燈籠();
	this.instance.setTransform(184.8,115,0.5559,0.5108,0,0,0,5.6,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 中燈籠
	this.instance_1 = new lib.中燈籠();
	this.instance_1.setTransform(205,213.05,0.6843,0.7193,0,-41.6736,-44.9991,-226,-88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 大燈籠
	this.instance_2 = new lib.大燈籠();
	this.instance_2.setTransform(128.7,303.1,0.8017,0.7588,0,14.9987,13.8831,25.2,-53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 背景
	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(1.55,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 底稿顏色
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape_1.setTransform(279.925,287.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,287.5,280.6,287.5);
// library properties:
lib.properties = {
	id: 'CCDC52F29C2A654598BE9592AEA31CDF',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/春燈_atlas_1.png", id:"春燈_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CCDC52F29C2A654598BE9592AEA31CDF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;