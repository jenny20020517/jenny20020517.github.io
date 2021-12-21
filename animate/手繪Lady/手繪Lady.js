(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"手繪Lady_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["手繪Lady_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["手繪Lady_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["手繪Lady_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["手繪Lady_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["手繪Lady_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["手繪Lady_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["手繪Lady_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["手繪Lady_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["手繪Lady_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9wXVMAAAgupMA7gAAAMAAAAupg");
	mask.setTransform(190.45,149.3);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.0497,0.0585);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,380.8,298.6), null);


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_12
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(53.35,40.15,1.7089,1.6696,0,0,0,190.4,149.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(-272,-208.9,650.9,498.5), null);


// stage content:
(lib.手繪Lady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pen11
	this.instance = new lib.手握筆();
	this.instance.setTransform(437.15,414.95,1,1,0,0,0,53.5,40.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175).to({_off:false},0).wait(1).to({x:444.15,y:429.95},0).wait(1).to({y:447.95},0).wait(1).to({x:437.15,y:463.95},0).wait(7));

	// 遮色片11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_175 = new cjs.Graphics().p("AglB2QgngMgZglQgZglAEgpQADgpAfghQAeggApgGQAogHAmAXQAnAWAPAmQAQAngNAqQgNAqgiAYQgXAQgeAFIgSABQgSAAgTgGg");
	var mask_graphics_176 = new cjs.Graphics().p("AgkDPQgogFgbgaQgcgagIgmQgJgnAPgjQAOgjAhgUIACgCQgWgjAEgoQADgpAfghQAeggAogGQApgHAmAXQAnAWAPAmQAQAngNArQgNAqgiAXIgGAEQAPAXADAdQAEAlgTAjQgTAigiARQgZANgaAAQgKAAgKgCg");
	var mask_graphics_177 = new cjs.Graphics().p("AAqEQQgngFgbgaQgbgagJgmQgDgRAAgQIgOgCQgngFgcgaQgbgagJgmQgIgnAOgiQAPgjAhgVIACgCQgWgjADgoQAEgpAeghQAeggApgGQAogHAnAXQAmAWAQAmQAPAngNArQgMAqgiAYIgGAEQAPAXADAcQABAJgBAKIABAAQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_178 = new cjs.Graphics().p("AAqFgQgngFgbgaQgbgagJgmQgIgnAOgjQAIgSAMgPQgTgWgHgfQgDgRAAgQIgOgCQgngFgcgaQgbgagJglQgIgnAOgjQAPgjAhgVIACgCQgWgjADgoQAEgpAeghQAeggApgGQAogHAnAXQAmAWAQAmQAPAngNArQgMAqgiAYIgGAEQAPAXADAdQABAJgBAKIABAAQAsABAjAhQAjAfAFAtQAEAlgTAjQgGALgJAKQAaAdAEAmQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_179 = new cjs.Graphics().p("AglGwQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAPgKAQgFIgFgPQgIgnAOgjQAIgSAMgPQgTgWgHgfQgDgRAAgPIgOgCQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVIACgCQgWgjADgoQAEgpAeghQAeggApgGQAogHAnAXQAmAWAQAmQAPAngNArQgMAqgiAYIgGAEQAPAXADAdQABAJgBAKIABAAQAsABAjAhQAjAgAFAtQAEAkgTAjQgGALgJAKQAaAdAEAmQAEAlgTAjQgTAigiARQgJAFgKADQAFAOACAPQAEAlgTAjQgTAigiARQgZANgbAAQgJAAgLgCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(175).to({graphics:mask_graphics_175,x:312.9246,y:281.9412}).wait(1).to({graphics:mask_graphics_176,x:310.9394,y:290.4304}).wait(1).to({graphics:mask_graphics_177,x:314.9527,y:296.9304}).wait(1).to({graphics:mask_graphics_178,x:314.9527,y:304.9304}).wait(1).to({graphics:mask_graphics_179,x:314.9527,y:312.9304}).wait(6));

	// lady11
	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(175).to({_off:false},0).wait(10));

	// pen10
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(293.1,371.95,1,1,0,0,0,53.5,40.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(170).to({_off:false},0).wait(1).to({_off:true},4).wait(10));

	// 遮色片10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_170 = new cjs.Graphics().p("AgRB6QgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AgRB6QgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(170).to({graphics:mask_1_graphics_170,x:170.9527,y:259.9484}).wait(1).to({graphics:mask_1_graphics_171,x:170.9527,y:259.9484}).wait(14));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(170).to({_off:false},0).wait(15));

	// pen09
	this.instance_3 = new lib.手握筆();
	this.instance_3.setTransform(355.4,379.25,1,1,0,0,0,53.5,40.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).wait(1).to({x:360.65},0).wait(1).to({x:367.15},0).wait(1).to({x:374.9},0).wait(1).to({x:379.4},0).wait(1).to({x:386.65,y:384.75},0).wait(1).to({x:355.65,y:387.75},0).wait(1).to({x:362.65,y:391.75},0).wait(1).to({x:369.9},0).wait(1).to({x:374.9},0).wait(1).to({x:380.9},0).wait(1).to({_off:true},5).wait(15));

	// 遮色片09 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_154 = new cjs.Graphics().p("AgaA1QgOgHgJgNIgFgLQgFgLAAgLQABgRAIgOQAJgNANgHQAOgIAPAAQAPAAAOAIQAOAIAIAOQAIANAAAQQAAAPgHANQgIAOgNAIQgOAJgPAAIgDABQgNAAgNgHg");
	var mask_2_graphics_155 = new cjs.Graphics().p("Ag0A5QgPgHgIgNIgGgLQgEgLAAgMQABgQAIgOQAIgNAOgHQAOgIAPAAQAQAAANAIIACACIACgCQAJgLAOgDQAOgDANAFQANAFAIANQAIAMgBAOQgBAOgJALQgKALgNADQgLAEgMgDIgEAHQgHAOgOAIQgMAJgQAAIgDAAQgOAAgMgGg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AhTBNQgPgHgIgNIgGgLQgEgLAAgMQABgRAIgNQAIgNAOgHQAOgIAPAAQAQAAAOAIIACACIACgCQAJgLANgDIABgBIAGgMQAIgNAOgIQAOgIAPABQAQAAAOAIQANAIAIANQAIANAAARQAAAQgHAMQgHAOgOAIQgOAIgPABQgKAAgJgDQgIAIgLADQgLAEgLgEIgEAIQgHAOgOAIQgNAJgQAAIgDAAQgOAAgMgGg");
	var mask_2_graphics_157 = new cjs.Graphics().p("Ah0BOQgOgHgJgNIgFgLQgFgLAAgMQABgRAIgNQAJgNANgHQAOgIAQAAQAPAAAOAIIADACIABgCQAJgLAPgDIAAAAIAGgNQAJgNANgIQANgIAQABQAPAAAOAIIABAAIAFgDQAOgIAQAAQAPAAAOAIQAOAIAIAOQAIANAAAQQAAAQgHANQgIANgNAIQgOAJgPAAQgQABgOgHIgDgCIgDACQgOAIgPABQgKABgJgDQgJAIgJACQgMAEgMgDIgDAHQgIAOgNAIQgOAJgPAAIgEABQgNAAgNgHg");
	var mask_2_graphics_158 = new cjs.Graphics().p("AiTBOQgPgHgIgNIgFgLQgFgLAAgMQABgRAIgNQAIgNAOgHQAOgIAQAAQAPAAAOAIIACACIACgCQAJgLAOgDIABAAIAGgNQAJgNANgIQAOgIAQABQAOAAAOAIIABAAIAFgDQAOgIAQAAQAPAAAOAIIABABIACgBQAOgIAQAAQAPAAAPAIQANAIAIAOQAIANAAAQQAAAQgHANQgIANgNAIQgOAJgPAAQgPABgOgHIgFgCQgOAIgOAAQgQABgOgHIgEgCIgDACQgNAIgOABQgKABgKgDQgIAIgKACQgMAEgMgDIgDAHQgIAOgOAIQgNAJgPAAIgEABQgOAAgMgHg");
	var mask_2_graphics_159 = new cjs.Graphics().p("Ai3BOQgPgHgIgNIgGgLQgEgLAAgMQABgRAIgNQAIgNAOgHQAOgIAPAAQAQAAAOAIIACACIACgCQAJgLAOgDIABAAIAGgNQAIgNAOgIQAOgIAPABQAQAAAOAIIAAAAIAGgDQANgIAPAAQAQAAAOAIIABABIACgBQAOgIAQAAQAPAAAOAIQAJAGAHAIQANgHAOAAQAQAAAOAIQANAIAIAOQAIANAAAQQAAAPgHANQgHAOgOAIQgNAJgQAAQgPABgOgHQgMgGgHgJQgMAGgMAAQgQABgOgHIgEgCQgOAIgPAAQgPABgNgHIgEgCIgDACQgOAIgPABQgKABgJgDQgIAIgLACQgLAEgMgDIgEAHQgHAOgOAIQgNAJgQAAIgDABQgOAAgMgHg");
	var mask_2_graphics_160 = new cjs.Graphics().p("ACtBkQgQgDgMgJQgPgMgGgSQgEgMABgNQgMgBgMgGQgLgFgIgKQgLAGgNABQgPABgOgIIgEgCQgOAIgOABQgQABgOgIIgDgCIgDACQgOAJgPAAQgKABgJgDQgIAIgLADQgMADgMgDIgDAIQgIANgNAJQgOAIgPABQgQABgOgIQgOgHgJgNIgFgKQgFgLAAgMQABgQAIgOQAJgNANgIQAOgIAQABQAPAAAOAIIADABIABgCQAJgKAPgEIABAAIAFgNQAJgNANgHQAOgIAQAAQAPAAAOAIIABAAIAFgDQAOgIAQABQAOAAAOAIIACAAIACgBQAOgIAPABQAQAAAOAIQAJAFAHAIQANgHAOABQAPAAAOAIQAOAIAIANQAIANAAAQIAGAAQAPABANAIQAOAIAIAMQAIANACAPQACAQgGAOQgFAOgMALQgMAKgOAEQgIACgJAAIgNgBg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AiMBuQgQgEgMgJQgPgMgGgRIgCgKQgNAAgNgGQgOgHgJgNIgFgLQgFgLAAgLQABgRAIgOQAJgNANgHQAOgIAQAAQAPAAAOAIIADACIABgCQAJgLAPgDIABgBIAFgMQAJgNANgIQAOgIAQABQAPAAAOAIIABAAIAFgDQAOgIAQAAQAOAAAOAIIACABIACgBQAOgIAPAAQAQAAAOAIQAJAGAHAHQANgGAOAAQAPAAAOAIQAOAIAIAOQAIAMAAAQIAGAAQAPABANAIQAOAJAIAMQAIAMACAQQACAPgGAOQgFAPgMAKQgMALgOAEQgPAEgPgDQgQgDgMgKQgPgLgGgSQgEgMABgOQgMAAgMgGQgLgGgIgJQgLAGgNAAQgPABgOgHIgEgCQgOAIgOAAQgQABgOgHIgDgCIgDACQgOAIgPABIgBAAIAAAAQAIANACAQQACAPgGAPQgFAOgMAKQgMALgOAEQgIACgJAAIgNgBg");
	var mask_2_graphics_162 = new cjs.Graphics().p("AhKB9QgQgDgMgJQgJgIgGgKQgLABgMgCQgQgDgMgKQgPgMgGgRIgCgJQgNAAgNgHQgOgHgJgNIgFgKQgFgKAAgMQABgRAIgOQAJgNANgIQAOgIAQABQAPAAAOAIIADABIABgCQAJgKAPgEIABAAIAFgNQAJgNANgHQAOgIAQAAQAPAAAOAIIABAAIAFgDQAOgIAQABQAOAAAOAIIACAAIACgBQAOgIAPABQAQAAAOAIQAJAFAHAIQANgHAOABQAPAAAOAIQAOAIAIANQAIANAAAQIAGAAQAPABANAIQAOAIAIANQAIANACAOQACAQgGAOQgFAOgMALQgMAKgOAEQgPAEgPgDQgQgDgMgJQgPgMgGgSQgEgMABgNQgMgBgMgGQgLgEgIgKQgLAGgNABQgPABgOgIIgEgCQgOAIgOABQgQABgOgIIgDgCIgDACQgOAJgPAAIgBAAIAAABIACACIAOgBQAPABANAHQAOAIAIAMQAIANABAQQACAQgFAOQgFAOgMALQgLAKgPAEQgIACgJAAIgNgBg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AgBCFQgQgDgMgKIgHgGIgIACQgPAEgPgDQgQgDgMgJQgJgIgGgKQgLACgMgDQgQgDgMgKQgPgMgGgRIgCgJQgNAAgNgHQgOgHgJgNIgFgJQgFgLAAgMQABgRAIgOQAJgNANgIQAOgIAQABQAPAAAOAIIADABIABgCQAJgKAPgEIABAAIAFgNQAJgNANgHQAOgIAQAAQAPAAAOAIIABABIAFgEQAOgIAQABQAOAAAOAIIACABIACgCQAOgIAPABQAQAAAOAIQAJAFAHAIQANgHAOABQAPAAAOAIQAOAIAIANQAIANAAAQIAGAAQAPABANAIQAOAIAIANQAIANACAPQACAPgGAOQgFAOgMALQgMAKgOAEQgPAEgPgDQgQgDgMgJQgPgMgGgSQgEgMABgNQgMAAgMgGQgLgFgIgJQgLAFgNABQgPABgOgIIgEgCQgOAIgOABQgQABgOgIIgDgBIgDABQgOAJgPAAIgBAAIAAABIACACIAOgBQAPABANAIQAJAEAGAGQAOgGAPABQAPABANAIQAOAIAIANQAJANABAPQACAQgGAOQgFAOgMALQgLALgPAEQgIACgJAAIgMgBg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AgBCFQgQgDgMgKIgHgGIgIACQgPAEgPgDQgQgDgMgJQgJgIgGgKQgLACgMgDQgQgDgMgKQgPgMgGgRIgCgJQgNAAgNgHQgOgHgJgNIgFgJQgFgLAAgMQABgRAIgOQAJgNANgIQAOgIAQABQAPAAAOAIIADABIABgCQAJgKAPgEIABAAIAFgNQAJgNANgHQAOgIAQAAQAPAAAOAIIABABIAFgEQAOgIAQABQAOAAAOAIIACABIACgCQAOgIAPABQAQAAAOAIQAJAFAHAIQANgHAOABQAPAAAOAIQAOAIAIANQAIANAAAQIAGAAQAPABANAIQAOAIAIANQAIANACAPQACAPgGAOQgFAOgMALQgMAKgOAEQgPAEgPgDQgQgDgMgJQgPgMgGgSQgEgMABgNQgMAAgMgGQgLgFgIgJQgLAFgNABQgPABgOgIIgEgCQgOAIgOABQgQABgOgIIgDgBIgDABQgOAJgPAAIgBAAIAAABIACACIAOgBQAPABANAIQAJAEAGAGQAOgGAPABIAKACIAJgFQAPgFAPABQAgACASAbQAJANABAPQACAQgGAOQgFAOgMALQgLAKgPAEQgPAEgPgDIgBAAQgIAFgKADQgIACgJAAIgMgBg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AgBCFQgQgDgMgKIgHgGIgIACQgPAEgPgDQgQgDgMgJQgJgIgGgKQgLACgMgDQgQgDgMgKQgPgMgGgRIgCgJQgNAAgNgHQgOgHgJgNIgFgJQgFgLAAgMQABgRAIgOQAJgNANgIQAOgIAQABQAPAAAOAIIADABIABgCQAJgKAPgEIABAAIAFgNQAJgNANgHQAOgIAQAAQAPAAAOAIIABABIAFgEQAOgIAQABQAOAAAOAIIACABIACgCQAOgIAPABQAQAAAOAIQAJAFAHAIQANgHAOABQAPAAAOAIQAOAIAIANQAIANAAAQIAGAAQAPABANAIQAOAIAIANQAIANACAPQACAPgGAOQgFAOgMALQgMAKgOAEQgHACgHABQAAALgFALQgFAOgMALQgLAKgPAEQgPAEgPgDQgOgDgLgIIgJADQgPAEgPgDIgBAAQgIAFgKADQgIACgJAAIgMgBgAg5gKQAPABANAIQAJAEAGAGQAOgGAPABIAKACIAJgFQAPgFAPABQAUABAOAKIAAAAQALgFAMAAIAAgDQgMAAgMgGQgLgFgIgJQgLAFgNABQgPABgOgIIgEgCQgOAIgOABQgQABgOgIIgDgBIgDABQgOAJgPAAIgBAAIAAABIACACIAMgBIACAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(154).to({graphics:mask_2_graphics_154,x:224.725,y:267.7544}).wait(1).to({graphics:mask_2_graphics_155,x:227.3556,y:267.3746}).wait(1).to({graphics:mask_2_graphics_156,x:230.475,y:265.3794}).wait(1).to({graphics:mask_2_graphics_157,x:233.725,y:265.2544}).wait(1).to({graphics:mask_2_graphics_158,x:236.85,y:265.2544}).wait(1).to({graphics:mask_2_graphics_159,x:240.475,y:265.2544}).wait(1).to({graphics:mask_2_graphics_160,x:243.8017,y:266.9378}).wait(1).to({graphics:mask_2_graphics_161,x:243.8017,y:267.8878}).wait(1).to({graphics:mask_2_graphics_162,x:243.8017,y:269.4378}).wait(1).to({graphics:mask_2_graphics_163,x:243.8017,y:270.2128}).wait(1).to({graphics:mask_2_graphics_164,x:243.8017,y:270.2128}).wait(1).to({graphics:mask_2_graphics_165,x:243.8017,y:270.2128}).wait(20));

	// lady09
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhhBNQgWgWgpghIgsgjQgJgJACgHQABgEAGgDQAxgVAmgUQBKgoAjAAQAGABATAHQATAIAKAAQADAAAXgIQASgGARAHQAZALAiAmQAmArAHAmQAEAEgHAIIgWAWIgkAmQgdAYggAAQiSAAgogpgAhWgdIg0AKQAYAAA7ARQBEATANACQAYAEAsgEIA8gGQgwgvgMABQglAEgWAAQgKAAgQgFQgPgFgLgBQgOAAg3ALg");
	this.shape_1.setTransform(243.4226,270.45);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(154).to({_off:false},0).wait(31));

	// pen08
	this.instance_4 = new lib.手握筆();
	this.instance_4.setTransform(414.55,471.5,1,1,0,0,0,53.5,40.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140).to({_off:false},0).wait(1).to({x:400.6,y:478.8},0).wait(1).to({x:386.6,y:485.5},0).wait(1).to({x:371,y:497.2},0).wait(1).to({x:355.35,y:502.8},0).wait(1).to({x:338.6},0).wait(1).to({x:325.5,y:512.3},0).wait(1).to({x:305.95},0).wait(1).to({x:286.4,y:520.1},0).wait(1).to({_off:true},5).wait(31));

	// 遮色片08 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_140 = new cjs.Graphics().p("AgcB4QgigIgZgaQgagagHgiQgHghAMgiQAMgiAcgWQAbgVAkgEQAkgDAfAPQAoAUASAoQAMAbgCAeQgCAngZAgQgWAbgiALQgUAHgUAAQgOAAgOgDg");
	var mask_3_graphics_141 = new cjs.Graphics().p("AhkCJQgngJgcgiQgMgOgHgSQgHgSgBgVQgBgUAEgQQAKgsAmgbQAlgaAtAEQAVACATAIQAIgJAKgIQAbgWAkgDQAkgEAfAQQAoATASApQAMAbgBAfQgDAmgZAfQgVAbgjAMQgiAMgigJQgMgDgKgEQgJALgMAJQgVAQgbAGQgMACgNAAQgOAAgOgDg");
	var mask_3_graphics_142 = new cjs.Graphics().p("AjICXQgggTgQgfQgQggACggQACgkAWgdQAWgeAigNQAhgMAlAIIACAAQAMgVAWgQQAlgaAsAEQAVACATAIQAIgJAKgIQAcgWAkgDQAkgEAfAQQAoATASApQAMAbgBAfQgDAmgZAfQgVAbgjAMQgiAMgigJQgLgCgLgFQgJALgMAJQgWAQgbAGQgaAFgagGQgMAUgVAPQgeAWgkACIgGAAQggAAgegRg");
	var mask_3_graphics_143 = new cjs.Graphics().p("AkKDJQghgPgUghQgUggACgkQAAgJADgQQADgOAHgOQARggAhgSQAhgSAkACQAMABAKADQAGgWAPgUQAWgeAhgNQAigNAkAIIACABQANgWAVgPQAlgbAtAEQAVACASAJQAJgKAKgIQAbgVAkgEQAlgDAfAPQAoAUASAoQAMAbgCAfQgCAngZAgQgWAagiALQgjAMgigIQgLgDgKgEQgJALgMAIQgWAQgbAGQgbAGgagHQgNAUgUAPQgdAWgkACQgUABgTgFIAAABQgJAlgbAYQgbAYgmAGIgTABQgbAAgYgLg");
	var mask_3_graphics_144 = new cjs.Graphics().p("Ak1D2QglgJgYgZQgWgWgIgfQgJgfAHgeQAHgfAWgZQAXgZAegJQAdgJAfAFIAEgHQAQggAigTQAhgTAkADQALABALACQAGgWAOgUQAWgeAigNQAhgMAkAIIACAAQAMgVAWgQQAlgaAtAEQAVACATAIQAIgJAKgIQAcgWAkgDQAkgEAfAQQAoATASApQAMAbgBAfQgDAngZAfQgVAbgjAMQgiALgigIQgLgCgLgFQgJALgMAIQgWAQgbAGQgbAFgagGQgMAUgVAPQgeAWgkACQgSABgTgGIAAABQgKAlgbAYQgaAZgmAFQgVADgTgDQgHARgNAOQgVAageALQgUAHgVAAQgPAAgOgDg");
	var mask_3_graphics_145 = new cjs.Graphics().p("AmREbQglgJgZgbQgXgbgGgmQgGgmAQggQAPghAhgUQAhgUAkACQAcABAZANQAHgcAVgYQAWgYAfgJQAdgKAfAGIAEgIQAQggAigTQAhgTAjADQAMABALADQAFgXAPgUQAVgeAigNQAhgMAlAIIABAAQANgVAWgQQAlgaAtAEQAVACATAJQAIgKAKgIQAcgWAkgDQAkgEAfAQQAoATASApQAMAbgBAfQgDAngZAfQgVAbgjAMQgiAMgigJQgMgCgKgFQgJALgMAJQgWAQgbAGQgbAFgagGQgMATgVAPQgeAWgkACQgUABgSgFIAAAAQgKAlgbAYQgZAZgnAFQgUADgTgDQgHARgNAOQgVAageALQgiAMgkgIQgRgEgOgHQgGAXgPAUQgXAegjAMQgTAHgTAAQgQAAgRgFg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AnDE5QgfAAgagPQgagOgRgaQgRgagDgdIgBgTQABgOADgKQAIgmAegaQAegaAngEQAbgCAaAJIAJADQAPgaAcgQQAhgUAkACQAcAAAZAOQAHgdAVgWQAXgZAegJQAdgKAfAGIAEgIQAQggAigTQAhgTAjADQALAAALADQAGgWAOgUQAWgeAigNQAhgMAlAIIABAAQANgVAWgQQAlgaAtAEQAVACATAIQAIgJAKgIQAcgWAkgDQAkgEAfAQQAoATASApQAMAbgBAfQgDAngZAfQgVAbgjAMQgiAMgigJQgMgDgKgEQgJALgMAJQgWAQgbAGQgbAFgagGQgMAUgVAPQgeAVgkACQgTABgTgGIAAABQgKAlgbAYQgaAZgmAFQgVADgSgDQgHAQgNAPQgVAageALQgiAMgkgIQgRgEgOgHQgGAXgPAUQgXAegjAMQgiAMglgKIgTgGIgHALQgSAZgbANQgZAMgeAAIgCAAg");
	var mask_3_graphics_147 = new cjs.Graphics().p("Ao4FQQgcgKgUgVQgUgUgIgdQgJgcAFgdQAFgcARgYQASgYAZgNQAngUAtAJIARAGQALgXAUgRQAdgaAngEQAbgCAaAJIAKAEQAPgaAbgRQAhgTAkACQAcABAZANQAIgcAVgYQAWgZAfgJQAdgKAeAGIAEgIQAQggAhgTQAhgTAkADQALABALADQAGgXAPgUQAWgeAhgNQAigMAkAIIACAAQAMgVAWgQQAmgaAtAEQAVACASAJQAIgKALgIQAbgWAkgDQAlgEAfAQQAoATASApQAMAbgCAfQgCAngZAfQgWAbgiAMQgjAMgigJQgLgCgKgFQgKALgLAJQgWAQgbAGQgbAFgagGQgNAUgUAPQgeAWgkACQgUABgTgFIAAAAQgJAkgbAYQgbAZgmAFQgUADgUgDQgHARgMAOQgWAageALQggAMglgIQgQgEgOgHQgGAXgQAUQgXAegiAMQgiAMglgKIgTgGIgHALQgTAZgaANQgbANgfgBQgWAAgUgIIgEAHQgOAZgZARQgZAQgcAEIgPABQgVAAgVgIg");
	var mask_3_graphics_148 = new cjs.Graphics().p("ApwFrQgegEgagRQgagSgOgbQgHgNgEgRQgDgMAAgQIADgWQAEgaAQgWQAPgXAXgNQAWgOAbgDQAcgCAYAIQAOAFALAHIAFgGQARgZAagNQAngUAsAKIASAFQAKgWAUgSQAegZAngEQAbgDAaAJIAJAEQAPgaAcgPQAhgUAkABQAcABAZAOQAHgdAVgXQAXgZAdgKQAdgJAfAFIAEgIQAQggAigTQAhgSAkACQALABALADQAGgWAOgUQAWgeAigNQAhgNAlAIIABABQANgWAWgPQAlgbAtAEQAVACATAJQAIgKAKgIQAcgVAkgEQAkgDAfAPQAoAUASAoQAMAbgBAfQgDAngZAgQgVAbgjALQgiAMgigIQgMgDgKgEQgJALgMAIQgWAQgbAGQgbAGgagHQgMAUgVAPQgeAWgkACQgTABgTgFIAAABQgKAkgbAYQgaAYgmAGQgVADgTgDQgHAQgNAPQgVAZgeALQgiAMgkgIQgRgEgNgHQgGAXgPAVQgXAegjAMQgiALglgJIgTgGIgHAKQgSAZgbANQgaANgfAAQgXgBgUgHIgDAHQgOAZgZAQQgZARgdADQgcAEgcgKQgMgEgLgHIgJAOQgUAXgdALQgXAJgYAAIgMAAg");
	var mask_3_graphics_149 = new cjs.Graphics().p("ArqFxQgigLgXgdQgYgdgEgjIAAgTQAAgLACgOQAEgQAKgSQAPgZAagQQAagQAegDQAdgCAcAMQAZAKARASIAFgHQAQgXAWgNQAXgOAbgDQAbgCAZAIQANAEAMAIIAEgGQASgZAZgNQAngUAtAKIASAFQAKgXAUgRQAdgZAngEQAbgDAaAJIAKAEQAPgZAbgQQAhgUAkABQAcABAYANQAIgcAVgXQAWgZAfgKQAdgJAfAFIADgIQARggAhgTQAhgSAkACQAMABALADQAFgXAPgTQAWgeAhgNQAigNAkAIIACABQANgWAVgPQAmgbAtAEQAVACASAJQAJgKAKgIQAbgVAkgEQAlgDAfAPQAoAUASAoQAMAbgCAfQgCAngZAgQgWAbgiALQgjAMgigIQgLgDgKgFQgJALgMAJQgWAQgbAGQgbAGgagHQgNAUgUAPQgeAWgkACQgUABgTgFIAAABQgJAlgbAXQgbAYgmAGQgUADgTgEQgIARgMAPQgWAZgeALQghAMglgIQgQgEgOgHQgGAXgQAVQgXAegiAMQghALglgJIgTgHIgHALQgTAZgaANQgbANgfAAQgWgBgUgIIgEAIQgOAZgZAQQgZARgcADQgdAEgcgKQgMgFgKgGIgKAOQgTAXgdALQgeAMgegDQgegEgagRQgLgIgJgJQgGAKgIAKQgUAWgcALQgWAIgWAAQgSAAgTgGg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(140).to({graphics:mask_3_graphics_140,x:304.3677,y:354.769}).wait(1).to({graphics:mask_3_graphics_141,x:297.1492,y:356.4438}).wait(1).to({graphics:mask_3_graphics_142,x:290.4219,y:359.2273}).wait(1).to({graphics:mask_3_graphics_143,x:282.8781,y:363.6648}).wait(1).to({graphics:mask_3_graphics_144,x:276.1175,y:367.3278}).wait(1).to({graphics:mask_3_graphics_145,x:267.2496,y:371.2076}).wait(1).to({graphics:mask_3_graphics_146,x:259.4333,y:373.7437}).wait(1).to({graphics:mask_3_graphics_147,x:251.594,y:376.8131}).wait(1).to({graphics:mask_3_graphics_148,x:243.2333,y:378.7738}).wait(1).to({graphics:mask_3_graphics_149,x:233.475,y:379.8945}).wait(36));

	// lady08
	this.instance_5 = new lib.CachedBmp_2();
	this.instance_5.setTransform(153.35,351.75,0.5,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).wait(45));

	// pen07
	this.instance_6 = new lib.手握筆();
	this.instance_6.setTransform(398.95,415.6,1,1,0,0,0,53.5,40.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({_off:false},0).wait(1).to({y:432.35},0).wait(1).to({x:405.65,y:447.45},0).wait(1).to({x:417.4,y:459.2},0).wait(1).to({x:432.5},0).wait(1).to({x:448.7},0).wait(1).to({x:462.15},0).wait(1).to({x:478.35,y:452.5},0).wait(1).to({x:495.65},0).wait(1).to({x:510.75,y:462.55},0).wait(1).to({x:518.55,y:469.8},0).wait(1).to({x:533.65,y:482.1},0).wait(1).to({x:540.9,y:500.55},0).wait(1).to({_off:true},7).wait(45));

	// 遮色片07 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_120 = new cjs.Graphics().p("AgpB0QghgLgWgdQgWgdgEgiQgBgIABgKQAAgMADgMQAEgTANgTQATgdAhgPQAhgPAhAEQAjAFAbAXQAcAXALAhQALAhgIAiQgJAkgZAYQgZAYgjAIQgOADgMAAQgVAAgUgIg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AgaDNQgdgBgagPQgbgPgQgXQgPgXgEgbQgFgbAHgaQAHgZASgWQAOgOAQgLQgLgUgCgXQgCgIABgLQAAgMADgMQAFgTAMgTQATgdAhgPQAggPAjAEQAiAFAcAXQAcAXALAhQALAhgJAjQgJAkgYAXQgKAJgMAHQAIAOADAQQAGAbgGAcQgHAcgRAVQgSAXgbANQgZALgaAAIgEAAg");
	var mask_4_graphics_122 = new cjs.Graphics().p("AgtEfQgbgFgXgQQgXgQgOgYQgOgZgBgcQgBgMABgJQADgeATgbQAGgJAHgHIgJgMQgPgWgEgbQgFgaAHgaQAHgaASgVQANgQARgKQgLgVgCgWQgCgJABgKQAAgMADgMQAFgUAMgTQATgdAhgPQAggPAjAFQAiAFAcAXQAcAXALAhQALAggJAkQgJAjgYAYQgKAKgMAHQAIAOADAQQAGAbgGAbQgHAbgRAWIgIAJQAHAJAGAKQAQAcABAfQABAbgMAaQgLAagVASQgVASgbAHQgQAFgQAAQgLAAgKgCg");
	var mask_4_graphics_123 = new cjs.Graphics().p("AgHFuQgZgCgWgMQgmgTgRgnQgRgmAKgqQAEgRAJgPQgSgPgLgUQgOgZgBgcQgBgMABgJQADgeATgbQAGgJAHgHIgJgLQgPgWgEgbQgFgbAHgaQAHgaASgVQANgPARgLQgLgUgCgXQgCgJABgKQAAgMADgMQAFgUAMgTQATgdAhgPQAggPAjAFQAiAFAcAXQAcAXALAhQALAggJAkQgJAjgYAYQgKAKgMAHQAIAOADAQQAGAbgGAcQgHAbgRAWIgIAJQAHAIAGAKQAQAcABAfQABAbgMAaIgGAMQAJAIAIAKQASAVAGAbQALArgUAoQgLAXgTARQgTAQgYAIQgSAGgTAAIgLgBg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AANGPQghgUgQglQgFgMgDgNIgOAAQgZgDgXgLQglgUgRgnQgRglAJgqQAFgSAJgPQgSgPgLgUQgOgZgCgcQgBgLACgJQADgeASgaQAGgJAHgIIgIgLQgPgXgFgbQgEgbAHgaQAHgZASgWQANgPAQgKQgLgVgCgXQgBgIABgLQAAgMADgMQAEgTANgTQATgdAhgPQAhgPAiAEQAiAFAbAXQAcAXALAhQALAhgIAjQgJAkgZAYQgKAJgLAHQAHAOAEAQQAGAbgHAcQgGAcgRAVIgJAKQAHAJAGAKQARAaAAAfQABAcgLAZIgHANQAKAHAIAKQARAWAHAbIABAGQAbgCAZALQAfANAVAdQAVAcACAiQADAigQAgQgQAfgdASQgdASgkAAQgjAAgdgSg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AByGkQgdgLgUgZIgGADQgdASgiAAQgjAAgegRQgigUgPgmQgGgMgCgMIgPgBQgZgCgWgMQgmgTgRgnQgRgmAKgqQAEgRAJgPQgSgPgLgUQgOgZgBgcQgBgMABgJQADgdATgbQAGgJAHgHIgJgMQgPgWgEgbQgFgbAHgaQAHgaASgVQANgQARgKQgLgUgCgXQgCgJABgKQAAgMADgMQAFgUAMgTQATgdAhgPQAhgPAjAFQAiAFAcAXQAcAXAKAhQALAggJAkQgJAjgXAYQgKAKgMAHQAIAOADAQQAGAbgGAcQgHAbgRAWIgIAKQAHAIAGAKQAQAcABAeQABAbgMAaIgGAMQAJAIAIAKQASAVAGAbIABAGQAbgBAZAKQAbAMATAXQATgNAZgGQAdgHAdAIQAcAHAXAVQAXAUAKAbQANAigIAkQgIAlgZAZQgaAZglAIQgNADgNAAQgXAAgVgIg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AAeGkQgdgLgTgZIgGADQgdASgjAAQgjAAgegRQgigUgPgmQgGgMgCgMIgPgBQgZgCgWgMQgmgTgRgnQgRgmAKgqQAEgRAJgPQgRgPgMgUQgOgZgBgcQgBgMABgJQADgdATgbQAGgJAHgHIgJgMQgPgWgEgbQgFgbAHgaQAHgaASgVQAOgQAQgKQgLgUgCgXQgCgJABgKQAAgMADgMQAFgUAMgTQATgdAhgPQAhgPAjAFQAiAFAcAXQAcAXALAhQALAggJAkQgJAjgYAYQgKAKgMAHQAIAOADAQQAGAbgGAcQgHAbgRAWIgIAKQAHAIAGAKQAQAcABAeQABAbgMAaIgGAMQAJAIAIAKQASAVAGAbIACAGQAbgBAZAKQAbAMASAXQAUgNAYgGQAdgHAdAIQAXAGAUAPIAMgKQAXgTAegGQAegGAdAIQAZAHAVARQAVARAMAXQAMAXABAbQACAbgKAYQgRAsgqAVQgpAWgvgLQgVgEgTgMIgIgGQgaAZglAIQgNADgNAAQgXAAgVgIg");
	var mask_4_graphics_127 = new cjs.Graphics().p("AgkGkQgdgLgUgZIgGADQgdASgjAAQgjAAgegRQgigUgPgmQgGgMgCgMIgPgBQgZgCgWgMQgmgTgRgnQgRgmAKgqQAEgRAJgPQgSgPgLgUQgOgZgBgcQgBgMABgJQADgdATgbQAGgJAHgHIgJgMQgPgWgEgbQgFgbAHgaQAHgaASgVQANgQARgKQgLgUgCgXQgCgJABgKQAAgMADgMQAFgUAMgTQATgdAhgPQAhgPAjAFQAiAFAcAXQAcAXALAhQALAggJAkQgJAjgYAYQgKAKgMAHQAIAOADAQQAGAbgGAcQgHAbgRAWIgIAKQAHAIAGAKQAQAcABAeQABAbgMAaIgGAMQAJAIAIAKQASAVAGAbIABAGQAcgBAZAKQAbAMATAXQATgNAZgGQAcgHAdAIQAXAGAUAPIAMgKQAXgTAegGQAegGAdAIIABABIAMgPQAVgXAcgKQAcgJAfAEQAfAEAYASQAkAbALAqQALAqgSAoQgLAZgWASQgVASgaAHQgaAHgcgEIgKgCQgSAZgdAPQgpAWgvgLQgVgEgTgMIgIgGQgaAZglAIQgNADgNAAQgWAAgVgIg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AhsGkQgegLgUgZIgFADQgdASgkAAQgjAAgdgRQgigUgQgmQgFgMgDgMIgOgBQgZgCgXgMQglgTgRgnQgRgmAJgqQAFgRAJgPQgSgPgLgUQgOgZgCgcQgBgMACgJQADgdASgbQAGgJAHgHIgIgMQgPgWgFgbQgEgbAHgaQAHgaASgVQANgQAQgKQgLgUgCgXQgBgJABgKQAAgMADgMQAEgUANgTQATgdAhgPQAhgPAiAFQAjAFAbAXQAcAXALAhQALAggIAkQgJAjgZAYQgKAKgLAHQAHAOAEAQQAGAbgHAcQgGAbgRAWIgJAKQAHAIAGAKQARAcAAAeQABAbgLAaIgHAMQAKAIAIAKQARAVAHAbIABAGQAbgBAZAKQAbAMATAXQAUgNAYgGQAegHAcAIQAYAGASAPIAMgKQAXgTAfgGQAegGAcAIIABABIAMgPQAWgXAcgKQAcgJAfAEQAeAEAYASIAAAAQASgNAXgGQAggJAfAIQAfAIAXAXQAYAXAJAeQALAkgLAkQgMAlgcAXQgYATgfAGQgfAGgdgJQgUgGgQgMQgSAOgWAFQgaAHgbgEIgLgCQgRAZgdAPQgpAWgvgLQgWgEgTgMIgIgGQgYAZglAIQgOADgNAAQgWAAgVgIg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AjGGkQgdgLgUgZIgGADQgdASgjAAQgjAAgegRQgigUgPgmQgGgMgCgMIgPgBQgZgCgWgMQgmgTgRgnQgRgmAKgqQAEgRAJgPQgSgPgLgUQgOgZgBgcQgBgMABgJQADgdATgbQAGgJAHgHIgJgMQgPgWgEgbQgFgbAHgaQAHgaASgVQANgQARgKQgLgUgCgXQgCgJABgKQAAgMADgMQAFgUAMgTQATgdAhgPQAhgPAjAFQAiAFAcAXQAcAXALAhQALAggJAkQgJAjgYAYQgKAKgMAHQAIAOADAQQAGAbgGAcQgHAbgRAWIgIAKQAHAIAGAKQAQAcABAeQABAbgMAaIgGAMQAJAIAIAKQASAVAGAbIABAGQAcgBAZAKQAbAMATAXQATgNAZgGQAdgHAdAIQAXAGAUAPIAMgKQAXgTAegGQAdgGAdAIIABABIAMgPQAVgXAcgKQAcgJAfAEQAfAEAYASIAAAAQASgNAWgGQAhgJAeAIQAfAIAYAXIAMANQAMgJAPgHQAogRAsALQAnAKAZAeQAWAZAGAiQAGAhgMAfQgJAZgUAUQgUAUgaAJQgkANgmgJQgngKgZgcIgGgHQgXASgeAFQgfAGgdgJQgTgGgQgMQgSAOgWAFQgaAHgcgEIgKgCQgSAZgdAPQgpAWgugLQgVgEgTgMIgIgGQgaAZglAIQgNADgNAAQgXAAgVgIg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AHxGjQgfgPgTgeIgNAGQgjANgngKQgmgKgZgbIgGgIQgXASgeAGQgfAGgdgJQgTgGgRgMQgSANgWAGQgaAHgbgFIgLgCQgRAagcAPQgpAVgvgKQgWgFgTgMIgIgFQgZAZglAIQglAHghgNQgdgLgUgZIgGAEQgdASgkAAQgjAAgdgSQgigUgQglQgFgMgDgNIgOAAQgZgDgXgLQglgUgRgnQgRglAJgqQAFgSAJgPQgSgPgLgUQgOgZgCgcQgBgLACgJQADgeASgaQAGgJAIgIIgJgLQgPgXgFgbQgEgbAHgaQAHgZASgWQANgPARgLQgLgUgDgXQgBgIABgLQAAgMADgMQAEgTANgTQATgdAhgPQAhgPAiAEQAjAFAbAXQAcAXALAhQALAhgIAjQgJAkgZAYQgKAJgLAHQAHAOAEAQQAGAbgHAcQgGAcgRAVIgJAKQAHAIAGALQARAbAAAeQABAcgLAZIgGAMQAJAIAIAKQARAWAHAbIABAFQAcgBAYALQAbALAUAXQATgNAYgGQAegGAcAHQAYAGAUAPIALgKQAXgSAfgGQAegGAcAIIABAAIAMgPQAVgWAcgKQAcgKAfAFQAeAEAYARIABAAQARgMAXgGQAggJAfAIQAfAIAXAXIANANQAMgKAPgGQAogRArALQAoAKAZAeIAKANQAegPAhADQAkADAeAYQAdAYAMAiQALAigKAlQgKAlgbAYQgbAXgmAGIgSABQgcAAgYgMg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AI4HeQghgKgYgdQgXgcgFgiQgWgBgUgKQgfgPgTgeIgMAGQgkANgmgKQgngKgZgbIgGgIQgXASgeAGQgfAGgdgJQgTgGgQgMQgSANgWAGQgaAHgbgFIgKgCQgSAagdAPQgpAVgvgKQgVgFgTgMIgIgFQgaAZglAIQglAHghgNQgdgLgUgZIgGAEQgdASgjAAQgjAAgegSQgigUgPglQgGgMgCgNIgPAAQgZgDgWgLQgmgUgRgnQgRglAKgqQAEgSAJgPQgSgPgLgUQgOgZgBgbQgBgLABgJQADgfATgaQAGgJAHgIIgJgLQgPgXgEgbQgFgbAHgaQAHgZASgWQANgPARgLQgLgUgCgXQgCgIABgLQAAgMADgMQAFgTAMgTQATgdAhgPQAhgPAjAEQAiAFAcAXQAcAXALAhQALAhgJAjQgJAkgYAYQgKAJgMAHQAIAOADAQQAGAbgGAcQgHAcgRAVIgIAKQAHAIAGALQAQAbABAfQABAcgMAYIgGAMQAJAIAIAKQASAWAGAbIABAFQAcgBAZALQAbALATAXQATgNAZgGQAdgGAdAHQAXAGAUAPIAMgKQAXgSAegGQAegGAdAIIABAAIAMgPQAVgWAcgKQAbgKAfAFQAfAEAYARIAAAAQASgMAWgGQAhgJAeAIQAfAIAYAXIAMANQAMgKAPgGQAogRAsALQAnAKAZAeIAKANQAfgPAgADQAkADAeAYQAeAYALAiQAEAKABALQAgADAcAUQAeAVAOAgQANAhgGAkQgHAlgYAaQgYAagkAJQgQAEgQAAQgTAAgSgGg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AJhISQgkgRgTghQgNgYgCgaIAAgFQgOgCgNgEQghgKgYgdQgXgcgEgiQgXgBgUgKQgegPgTgeIgNAGQgkANgmgKQgngKgZgbIgGgIQgXASgeAGQgfAGgdgJQgTgGgQgMQgSANgVAGQgaAHgcgFIgKgCQgRAageAPQgpAVgvgKQgVgFgTgMIgIgFQgaAZglAIQglAHghgNQgdgLgUgZIgGAEQgdASgjAAQgjAAgegSQgigUgPglQgGgMgCgNIgPAAQgZgDgWgLQgmgUgRgnQgRglAKgqQAEgSAJgPQgSgOgLgUQgOgZgBgcQgBgLABgJQADgfATgaQAGgJAHgIIgJgLQgPgXgEgbQgFgbAHgaQAHgZASgWQAOgPAQgLQgLgUgCgXQgCgIABgLQAAgMADgMQAFgTAMgTQATgdAhgPQAhgPAjAEQAiAFAcAXQAcAXALAhQALAhgJAjQgJAkgYAYQgKAJgMAHQAIAOADAQQAGAbgGAcQgHAcgRAVIgIAKQAHAJAGAKQAQAbABAfQABAcgMAZIgGAMQAJAIAIAKQASAVAGAbIACAFQAbgBAZALQAbALATAXQAUgNAYgGQAdgGAdAHQAXAGAUAPIAMgKQAXgSAegGQAegGAdAIIABAAIAMgPQAVgWAcgKQAcgKAfAFQAeAEAYARIAAAAQASgMAWgGQAhgJAeAIQAfAIAYAXIAMANQAMgKAPgGQAogRAsALQAnAKAZAeIALANQAegOAgACQAkADAeAYQAeAYALAiQAEALABAKQAgADAcAUQAeAVAOAgQAIAUABAWQARACARAHQAbALATAVQATAVAIAcQAIAdgGAcQgHAlgcAbQgdAcglAGQgJACgKAAQgbAAgbgNg");
	var mask_4_graphics_133 = new cjs.Graphics().p("AKNJsQgbgNgSgYQgRgXgGgeQgFgdAIgcQADgLAGgLQgQgCgQgIQgkgSgTggQgOgZgCgaIAAgFQgOgBgMgEQgigLgXgcQgXgcgFgiQgWgBgUgKQgfgPgTgeIgNAFQgjANgngJQgmgKgZgcIgGgHQgYASgdAFQgfAGgdgJQgUgGgPgMQgSAOgWAFQgaAHgbgEIgLgCQgRAZgdAPQgpAWgvgLQgWgEgTgMIgIgGQgZAZglAIQglAIghgNQgegLgUgZIgFADQgdASgkAAQgjAAgdgRQgigUgQgmQgFgLgDgNIgOgBQgZgCgXgMQglgTgRgnQgRglAJgqQAFgRAJgPQgSgPgLgUQgOgZgCgcQgBgMACgJQADgeASgbQAGgIAHgIIgIgMQgPgWgFgbQgEgbAHgaQAHgaASgVQANgPAQgLQgLgUgCgXQgBgJABgKQAAgMADgMQAEgUANgTQATgdAhgPQAhgPAiAFQAjAFAbAXQAcAXALAhQALAggIAkQgJAjgZAYQgKAKgLAHQAHAOAEAQQAGAbgHAcQgGAbgRAWIgJAKQAHAIAGAKQARAcAAAfQABAbgLAaIgHAMQAKAIAIAKQARAVAHAbIABAGQAbgBAZAKQAbAMATAXQAUgNAYgGQAegHAcAIQAYAGATAOIAMgJQAXgTAfgGQAegGAcAIIABABIAMgPQAWgXAcgKQAcgJAfAEQAeAEAYASIAAAAQARgNAXgGQAggJAfAIQAfAIAXAXIAMANQAMgJAQgHQAogRArALQAoAKAZAeIAKAOQAegPAhADQAkADAeAWQAdAYAMAiQADALACALQAfADAcATQAfAVANAhQAIAUABAWQASACARAGQAbALATAVQATAWAIAcQAHAcgFAcQgEASgIAQIAOADQAgAJAXAXQAWAXAJAhQAIAggJAfQgHAbgTAVQgTAWgZALQgXAKgXAAIgFAAQgaAAgagMg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_4_graphics_120,x:281.5153,y:284.8673}).wait(1).to({graphics:mask_4_graphics_121,x:279.2722,y:292.9769}).wait(1).to({graphics:mask_4_graphics_122,x:278.9903,y:301.3481}).wait(1).to({graphics:mask_4_graphics_123,x:278.9903,y:309.2028}).wait(1).to({graphics:mask_4_graphics_124,x:284.1469,y:314.1731}).wait(1).to({graphics:mask_4_graphics_125,x:292.3861,y:315.3103}).wait(1).to({graphics:mask_4_graphics_126,x:300.7652,y:315.3103}).wait(1).to({graphics:mask_4_graphics_127,x:307.4886,y:315.3103}).wait(1).to({graphics:mask_4_graphics_128,x:314.7364,y:315.3103}).wait(1).to({graphics:mask_4_graphics_129,x:323.6829,y:315.3103}).wait(1).to({graphics:mask_4_graphics_130,x:331.5126,y:315.5841}).wait(1).to({graphics:mask_4_graphics_131,x:337.0856,y:320.8932}).wait(1).to({graphics:mask_4_graphics_132,x:342.6713,y:326.7763}).wait(1).to({graphics:mask_4_graphics_133,x:347.1489,y:335.7016}).wait(52));

	// lady07
	this.instance_7 = new lib.CachedBmp_3();
	this.instance_7.setTransform(270.45,282.15,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).wait(65));

	// pen06
	this.instance_8 = new lib.手握筆();
	this.instance_8.setTransform(409,385.5,1,1,0,0,0,53.5,40.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(105).to({_off:false},0).wait(1).to({x:401.15,y:400.6},0).wait(1).to({x:392.8,y:415.15},0).wait(1).to({x:381.1,y:425.2},0).wait(1).to({x:361},0).wait(1).to({x:341.45,y:420},0).wait(1).to({x:325.5,y:408.3},0).wait(1).to({x:320.1,y:395},0).wait(1).to({x:310.05,y:380.5},0).wait(1).to({x:305.85,y:362.9},0).wait(1).to({_off:true},5).wait(65));

	// 遮色片06 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_105 = new cjs.Graphics().p("AgZB4QgigHgZgZQgagYgJghQgIghALgjQALgjAagWQAbgWAkgFQAjgFAgAOQAoASATAnQAPAdgCAgQgCAogZAfQgVAbgiAMQgVAHgUAAQgMAAgNgDg");
	var mask_5_graphics_106 = new cjs.Graphics().p("AhBDFQgggNgWgcQgWgdgEgjIAAgSQAAgMAEgNQAFgVANgSQAPgUAWgNQgHgNgDgNQgJgiALgjQALgjAbgWQAagWAjgFQAkgFAgAOQAoASAUAnQAOAdgBAhQgDAogYAfQgOAQgSALQAFAJADALQALAhgJAjQgKAjgZAYQgZAXgjAIQgMACgNAAQgWAAgUgHg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AhQEcQgegDgYgPQgZgQgPgZQgQgagCgdQgBgTADgPQAGgcARgWQASgXAZgMQAQgIARgDQgEgOgCgOIAAgSQAAgMAEgNQAFgVANgSQAOgUAXgOQgHgMgDgOQgJgiALgiQALgjAbgWQAZgXAkgFQAkgFAgAPQAoASAUAnQAOAdgBAgQgDAogYAgQgOARgSAKQAFAKADAKQALAhgJAiQgKAkgZAXQgZAYgjAHIgCABIACAJQAIAegIAgQgIAcgTAWQgUAXgaAKQgWAJgYAAIgLgBg");
	var mask_5_graphics_108 = new cjs.Graphics().p("AiNFZQgxgGgfgkQgSgVgIgcQgHgcAFgbQAGgeATgYQATgYAcgMQAUgJAWgBQABgNACgKQAFgcASgWQARgXAZgLQAQgJASgDQgFgNgBgOIgBgTQABgMADgNQAGgVAMgSQAPgVAVgNQgGgMgEgOQgIgiALgiQALgjAagWQAbgXAkgFQAkgFAgAPQAoASATAnQAPAdgCAgQgCAogZAgQgNAQgSALQAFAKADAKQAKAhgJAjQgJAjgZAXQgZAYgkAHIgCABIADAJQAIAegJAgQgHAcgUAWQgUAXgbAKQgSAHgTABQAAAagMAYQgNAcgYASQghAZgoAAIgPAAg");
	var mask_5_graphics_109 = new cjs.Graphics().p("AjpF/QgjgOgVgiQgWghABgmQAAgLAEgPQAJglAegaQAVgSAcgIQAPgEAPAAQAHgZARgVQATgZAbgMQAUgJAWgBQABgMACgLQAGgbARgWQASgWAZgNQAPgIARgDQgEgOgCgOIAAgSQAAgMAEgNQAFgVANgSQAPgVAWgOQgHgMgDgNQgJgiALgjQALgjAbgWQAagWAkgFQAkgFAgAOQAoASAUAnQAOAdgBAhQgDAogYAfQgOARgSALQAFAJADALQALAhgJAjQgKAjgZAYQgZAWgjAIIgCAAIACAJQAIAfgIAgQgIAcgTAWQgUAWgbALQgTAHgUABQAAAZgLAZQgOAcgYASQgfAZgpAAQgIAfgVAXQgZAbgnAJQgOADgOAAQgYAAgVgJg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AktGMQgcgEgYgRQgYgQgOgZQgTgfADglQACgfAQgbQARgbAagPQAbgQAgAAQAfgBAcANQAWALAQAUQAJgNAMgKQAVgTAcgHQAPgEAPAAQAHgaARgVQATgYAbgMQAUgJAVgBQABgMACgLQAGgbARgWQASgXAZgMQAQgIARgDQgEgOgCgOIAAgTQAAgMAEgNQAFgVANgSQAOgVAXgNQgHgMgDgOQgJgiALgiQALgjAbgWQAagXAkgFQAkgFAgAPQAoASAUAnQAOAdgBAgQgDAogYAgQgOAQgSALQAFAKADAKQALAhgJAjQgKAkgZAXQgZAXgjAHIgCABIACAJQAIAegIAgQgIAcgTAWQgUAXgbAKQgTAHgUACQAAAZgLAYQgOAcgYASQggAZgpABQgIAegVAXQgYAcgnAIQgnAJgigPQgcgLgTgXQgHAKgIAIQgUAUgcAJQgUAHgTAAIgRgBg");
	var mask_5_graphics_111 = new cjs.Graphics().p("AjYGMQgdgEgYgRQgYgQgOgZIgNAHQgfANgjgFQgjgFgbgVQgagWgLgiQgMghAHghQAFgXAOgVQAOgUAUgNQAUgNAXgFQAYgEAXAEQAvAIAcAlIAKAPIABAAQAagQAgAAQAggBAbANQAWALAQAUQAJgNAMgKQAVgTAdgHQAPgEAPAAQAFgaARgVQATgYAcgMQAUgJAWgBQAAgMADgLQAFgbASgWQARgXAZgMQAQgIASgDQgFgOgBgOIgBgTQABgMADgNQAGgVAMgSQAPgVAWgNQgGgMgEgOQgIgiALgiQALgjAagWQAbgXAkgFQAkgFAgAPQAoASATAnQAPAdgCAgQgCAogZAgQgNAQgSALQAFAKADAKQAKAhgJAjQgJAkgZAXQgZAXgkAHIgCABIADAJQAIAegJAgQgHAcgUAWQgUAXgbAKQgSAHgUACQgBAZgLAYQgNAcgYASQghAZgoABQgIAegVAXQgaAcgmAIQgmAJgjgPQgbgLgTgXQgHAKgIAIQgUAUgcAJQgUAHgUAAIgQgBg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AiWGMQgcgEgYgRQgYgQgOgZIgNAHQgfANgkgFQgjgFgagVQgagWgMgiQgGgTgBgTQgdADgbgMQgcgMgTgWQgTgVgHgdQgHgcAGgcQAHggAXgZQAXgZAggKQAfgJAiAIQAhAIAYAWQASARAKAYQAJAWABAYQAPgBAQADQAvAIAcAlIAKAPIAAAAQAbgQAgAAQAfgBAcANQAWALAQAUQAJgNAMgKQAUgTAcgHQAPgEAPAAQAHgaARgVQATgYAbgMQAUgJAWgBQABgMACgLQAGgbARgWQASgXAZgMQAQgIARgDQgEgOgCgOIAAgTQAAgMAEgNQAFgVANgSQAPgVAWgNQgHgMgDgOQgJgiALgiQALgjAbgWQAagXAkgFQAkgFAgAPQAoASAUAnQAOAdgBAgQgDAogYAgQgOAQgSALQAFAKADAKQALAhgJAjQgKAkgZAXQgZAXgjAHIgCABIACAJQAIAegIAgQgIAcgTAWQgUAXgbAKQgTAHgUACQAAAZgLAYQgOAcgYASQggAZgpABQgIAegVAXQgZAcgnAIQgnAJgigPQgbgLgTgXQgGAKgJAIQgUAUgcAJQgUAHgTAAIgRgBg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AhhGMQgdgEgXgRQgZgQgOgZIgMAHQgfANgkgFQgjgFgagVQgagWgMgiQgHgTAAgTQgdADgcgMQgbgMgUgWQgSgVgHgdQgDgMgBgMIgNgDQgggIgXgWQgXgWgJgfQgJgfAGgfQAGggAYgZQAWgZAggKQAegKAiAIQAgAHAYAWQAaAXAJAjQAEAOABAOIAMACQAhAIAXAWQATARAKAYQAJAWAAAYQAQgBAQADQAuAIAcAlIAKAPIABAAQAbgQAgAAQAfgBAbANQAWALAQAUQAIgNAMgKQAWgTAcgHQAPgEAPAAQAGgaARgVQAUgYAbgMQAUgJAWgBQABgMACgLQAFgbASgWQARgXAagMQAPgIASgDQgFgOgBgOIAAgTQAAgMADgNQAGgVAMgSQAPgVAWgNQgGgMgEgOQgIgiALgiQALgjAbgWQAagXAkgFQAkgFAgAPQAoASAUAnQAOAdgCAgQgCAogZAgQgNAQgSALQAFAKADAKQALAhgJAjQgKAkgZAXQgZAXgkAHIgCABIADAJQAIAegJAgQgHAcgUAWQgTAXgcAKQgSAHgUACQAAAZgLAYQgOAcgYASQggAZgpABQgIAegVAXQgZAcgnAIQgnAJgigPQgcgLgTgXQgHAKgIAIQgTAUgcAJQgUAHgTAAIgRgBg");
	var mask_5_graphics_114 = new cjs.Graphics().p("Ag0GMQgdgEgYgRQgYgQgOgZIgNAHQgfANgjgFQgjgFgbgVQgagWgLgiQgHgTAAgTQgdADgcgMQgcgMgTgWQgSgVgHgdQgDgMgBgMIgNgDQgggIgXgWQgXgWgJgfQgKgfAHgfIABgFIgOgFQgbgKgUgWQgTgWgIgbQgFgRAAgUIACgWQAHgeAVgZQAVgZAdgLQAdgLAgAFQAgAEAZATQAZATAOAeQANAegDAfQgBAKgDALQAfAIAWAUQAaAXAJAjQAEAOABAOIALACQAiAIAXAWQATARAKAYQAJAWAAAYQAQgBAPADQAvAIAcAlIAKAPIABAAQAagQAgAAQAggBAaANQAWALAQAUQAJgNAMgKQAVgTAdgHQAPgEAPAAQAGgaARgVQATgYAcgMQAUgJAWgBQAAgMADgLQAFgbASgWQARgXAZgMQAQgIASgDQgFgOgBgOIgBgTQABgMADgNQAGgVAMgSQAPgVAWgNQgGgMgEgOQgIgiALgiQALgjAagWQAbgXAkgFQAkgFAgAPQAoASATAnQAPAdgCAgQgCAogZAgQgNAQgTALQAFAKAEAKQAKAhgJAjQgJAkgZAXQgZAXgkAHIgCABIADAJQAIAegJAgQgHAcgUAWQgUAXgbAKQgSAHgUACQgBAZgLAYQgNAcgYASQghAZgoABQgIAegVAXQgaAcgmAIQgnAJgjgPQgbgLgTgXQgHAKgIAIQgUAUgcAJQgTAHgUAAIgQgBg");
	var mask_5_graphics_115 = new cjs.Graphics().p("AgbGdQgdgEgYgRQgYgQgOgZIgNAHQgfANgjgFQgjgFgbgVQgagWgLgiQgHgTAAgTQgdADgcgMQgcgMgTgWQgSgVgHgdQgDgMgBgNIgNgCQgggIgXgWQgXgWgJgfQgKggAHgeIABgGIgOgEQgbgKgUgWQgTgWgIgbQgFgRAAgUIACgWIAFgQQgSgMgNgSQgWgdgEgiIAAgSQAAgMAEgNQAFgXAOgSQAUgcAhgNQAigOAiAGQAhAFAcAYQAbAYAKAhQAKAhgKAjIgCAIIAIAGQAZATAOAeQANAegDAfQgBAKgDALQAfAHAWAVQAaAXAJAjQAEAOABAMIALADQAiAIAXAXQATARAKAYQAJAWAAAYQAQgBAPADQAvAIAcAlIAKAPIABAAQAagQAgAAQAfgBAbANQAWALAQATQAJgMAMgKQAVgTAdgHQAPgEAPgBQAGgZARgVQATgYAcgMQAUgJAWgBQAAgNADgKQAFgcASgVQARgXAZgMQAQgIASgEQgFgNgBgOIgBgTQABgMADgNQAGgVAMgSQAPgVAWgNQgGgMgEgOQgIgiALgiQALgjAagWQAbgXAkgFQAkgFAgAPQAoASATAnQAPAdgCAgQgCAogZAgQgNAQgTALQAFAKAEAKQAKAhgJAjQgJAkgZAXQgZAXgkAHIgCABIADAJQAIAegJAgQgHAcgUAWQgUAXgbAKQgSAHgUABQgBAagLAYQgNAcgYASQghAZgoAAQgIAfgVAXQgaAcgmAIQgnAJgjgPQgbgLgTgXQgHAKgIAIQgUAUgcAJQgUAHgTAAIgQgBg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_5_graphics_105,x:292.1718,y:255.8551}).wait(1).to({graphics:mask_5_graphics_106,x:289.907,y:263.9648}).wait(1).to({graphics:mask_5_graphics_107,x:285.1459,y:272.0099}).wait(1).to({graphics:mask_5_graphics_108,x:279.3529,y:278.0471}).wait(1).to({graphics:mask_5_graphics_109,x:273.4298,y:282.693}).wait(1).to({graphics:mask_5_graphics_110,x:263.6422,y:283.2202}).wait(1).to({graphics:mask_5_graphics_111,x:255.1746,y:283.2202}).wait(1).to({graphics:mask_5_graphics_112,x:248.536,y:283.2202}).wait(1).to({graphics:mask_5_graphics_113,x:243.25,y:283.2202}).wait(1).to({graphics:mask_5_graphics_114,x:238.782,y:283.2202}).wait(1).to({graphics:mask_5_graphics_115,x:236.282,y:281.5297}).wait(70));

	// lady06
	this.instance_9 = new lib.CachedBmp_4();
	this.instance_9.setTransform(179.55,246.75,0.5,0.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(105).to({_off:false},0).wait(80));

	// pen05
	this.instance_10 = new lib.手握筆();
	this.instance_10.setTransform(308.05,408,1,1,0,0,0,53.5,40.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90).to({_off:false},0).wait(1).to({x:311.05,y:426},0).wait(1).to({x:311.5,y:445},0).wait(1).to({y:458},0).wait(1).to({y:478},0).wait(1).to({x:297.5,y:494},0).wait(1).to({x:282.5,y:507},0).wait(1).to({x:258.5},0).wait(1).to({x:246.5,y:518.05},0).wait(1).to({x:229.5,y:531.05},0).wait(1).to({x:218.5,y:542.05},0).wait(1).to({_off:true},4).wait(80));

	// 遮色片05 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_90 = new cjs.Graphics().p("AgRB6QgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AgMDAQgngFgcgaQgbgagJgmQgIgnAOgjIAIgPQgRgVgHgdQgIgnAOgjQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAbAEAkQAEAlgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AACEfQgmgFgcgaQgbgagJgmQgIgnAOgjQAJgUAOgPQgMgHgLgKQgbgagJgmQgIgmAOgjIAIgPQgRgWgHgdQgIgnAOgjQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAkgTAjQgHANgKALQAMAHAKAKQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AAHGDQgmgFgcgaQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAJgTAOgPQgMgHgLgKQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgHANgKALQAMAHAKAKQAjAfAFAtQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_6_graphics_94 = new cjs.Graphics().p("AAHHnQgmgFgcgaQgbgagJgmQgIgnAOgjQAOggAcgUIgMgKQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJglQgIgnAOgjQAJgUAOgPQgMgHgLgKQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgHANgKALQAMAHAKAKQAjAgAFAtQAEAlgTAiQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjQgOAZgWAQIALAKQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AgMJGQgngFgcgaQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgjQAOggAcgUIgMgKQgbgagJgmQgIgnAOgjQANgcAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAJgUAOgPQgMgHgLgKQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgHANgKALQAMAHAKAKQAjAgAFAtQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAfAFAtQAEAlgTAjQgOAZgWAQIALAKQAjAgAFAtQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAlgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AhhKMQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACIAOABQgFgiAMgfQAPgiAggWQgZgZgIgjQgIgnAOgjQAOggAbgUIgLgKQgbgagJgmQgIgmAOgjQANgdAXgUQgIgGgIgHQgbgagJgmQgIgnAOgjQAJgUAOgPQgMgHgLgKQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgHANgKALQAMAHAKAKQAjAgAFAtQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAkgTAjQgOAZgWAQIALAKQAjAgAFAtQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAlgTAjQgTAigiARQgiARgngGIAAAAIABAGQAEAlgTAjQgTAighARQgZANgcAAQgJAAgLgCg");
	var mask_6_graphics_97 = new cjs.Graphics().p("Ai2LIQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAWAAAUAJQgBgcAKgZQAPgjAhgVQAhgWAlACIAOABQgFgiAMgfQAPgiAggWQgZgZgIgjQgIgnAOgjQAOggAcgUIgMgKQgbgagJglQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAJgUAOgPQgMgHgLgKQgbgagJgmQgHgnANgjIAIgPQgRgWgGgdQgIgnANgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgHANgKALQAMAHAKAKQAjAgAFAtQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAiQgOAZgWAQIALAKQAjAgAFAtQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAlgTAjQgTAigiARQgiARgngGIAAAAIABAGQAEAlgTAjQgTAigiARQgiARgmgGQgPgCgOgFQACAhgRAgQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_6_graphics_98 = new cjs.Graphics().p("AkVLmQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAlAAAfAYIADgIQAPgjAhgVQAhgWAmACQAWAAAUAJQgBgcAKgZQAOgjAhgVQAhgWAmACIAOABQgFgiAMgfQAPgiAggWQgZgZgIgjQgIgnAOgjQAOggAcgUIgMgKQgbgZgJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAJgUAOgPQgMgHgLgKQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgHANgKALQAMAHAKAKQAjAgAFAtQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjQgOAZgWAPIALAKQAjAgAFAtQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAlgTAjQgTAigiARQgiARgngGIAAAAIABAGQAEAlgTAjQgTAigiARQgiARgngGQgPgCgOgFQACAhgRAgQgTAighARQgiARgngGQgfgEgYgSQgEAKgFAKQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_6_graphics_99 = new cjs.Graphics().p("AlgMOQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQAPAAANAEIADgIQAPgjAhgVQAhgWAmACQAlAAAfAYIADgIQAPgjAhgVQAhgWAlACQAWAAAUAJQgBgcAKgZQAPgjAhgVQAhgWAmACIAOABQgFgiAMgfQAPgiAggWQgZgZgIgjQgIgnAOgjQAOgfAcgUIgMgKQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAJgUAOgPQgMgHgLgKQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgHANgKALQAMAHAKAKQAjAgAFAtQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjQgOAZgWAQIALAKQAjAfAFAtQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAlgTAjQgTAigiARQgiARgngGIAAAAIABAGQAEAlgTAjQgTAigiARQgiARgngGQgPgCgOgFQACAhgRAgQgTAigiARQgiARgmgGQgfgEgYgSQgEAKgFAKQgTAigiARQgiARgngGIgPgDQgEAKgFALQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_6_graphics_100 = new cjs.Graphics().p("AmwNFQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAhgWAmACQARAAAPAFQACgUAHgTQAPgjAhgVQAhgWAmACQAPAAANAEIADgIQAPgjAhgVQAhgWAmACQAlAAAfAYIADgIQAPgjAggVQAhgWAmACQAWAAAUAJQgBgcAKgZQAPgjAhgVQAhgWAmACIAOABQgFgiAMgfQAPgiAggWQgZgZgIgjQgIgnAOgiQAOggAcgUIgMgKQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAJgUAOgPQgMgHgLgKQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgHANgKALQAMAHAKAKQAjAgAFAtQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjQgOAZgWAQIALAKQAjAgAFAsQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAlgTAjQgTAigiARQgiARgngGIAAAAIABAGQAEAlgTAjQgTAigiARQgiARgngGQgPgCgOgFQACAhgRAgQgTAigiARQgiARgngGQgfgEgYgSQgEAKgFAKQgSAigiARQgiARgngGIgPgDQgEAKgFALQgTAigiARQgiARgngGIgTgEQgBAagOAaQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_6_graphics_101 = new cjs.Graphics().p("AnnN3QgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAagRAdgDQADgMAEgMQAPgjAhgVQAhgWAmACQARAAAPAFQACgUAHgTQAPgjAhgVQAhgWAmACQAPAAANAEIADgIQAPgjAhgVQAhgWAmACQAlAAAeAYIADgIQAPgjAhgVQAhgWAmACQAWAAAUAJQgBgcAKgZQAPgjAhgVQAhgWAmACIAOABQgFgiAMgfQAPgiAggWQgZgZgIgiQgIgnAOgjQAOggAcgUIgMgKQgbgagJgmQgIgnAOgjQANgdAYgUQgJgGgIgHQgbgagJgmQgIgnAOgjQAJgUAOgPQgMgHgLgKQgbgagJgmQgIgnAOgjIAIgPQgRgWgHgdQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjIgCAEQAXAcAEAkQAEAlgTAjQgHANgKALQAMAHAKAKQAjAgAFAtQAEAlgTAjQgMAWgTAPQAIAGAIAIQAjAgAFAtQAEAlgTAjQgOAZgWAQIALAKQAjAgAFAtQAEAlgTAiQgPAcgaAQQAgAfAEArQAEAlgTAjQgTAigiARQgiARgngGIAAAAIABAGQAEAlgTAjQgTAigiARQgiARgngGQgPgCgOgFQACAhgRAgQgTAigiARQgiARgngGQgfgEgYgSQgEAKgFAKQgTAigiARQghARgngGIgPgDQgEAKgFALQgTAigiARQgiARgngGIgTgEQgBAagOAaQgTAigiARQgVALgXABQgDATgKASQgTAigiARQgZANgcAAQgJAAgLgCg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_6_graphics_90,x:183.9527,y:274.9484}).wait(1).to({graphics:mask_6_graphics_91,x:184.4527,y:281.9484}).wait(1).to({graphics:mask_6_graphics_92,x:185.9527,y:291.4484}).wait(1).to({graphics:mask_6_graphics_93,x:186.4527,y:301.4484}).wait(1).to({graphics:mask_6_graphics_94,x:186.4527,y:311.4484}).wait(1).to({graphics:mask_6_graphics_95,x:186.4527,y:320.9484}).wait(1).to({graphics:mask_6_graphics_96,x:180.9527,y:327.9484}).wait(1).to({graphics:mask_6_graphics_97,x:172.4527,y:333.9484}).wait(1).to({graphics:mask_6_graphics_98,x:162.9527,y:336.9484}).wait(1).to({graphics:mask_6_graphics_99,x:155.4527,y:340.9484}).wait(1).to({graphics:mask_6_graphics_100,x:147.4527,y:346.4484}).wait(1).to({graphics:mask_6_graphics_101,x:141.9527,y:351.4484}).wait(84));

	// lady05
	this.instance_11 = new lib.CachedBmp_5();
	this.instance_11.setTransform(96.75,268.65,0.5,0.5);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90).to({_off:false},0).wait(95));

	// pen04
	this.instance_12 = new lib.手握筆();
	this.instance_12.setTransform(292.1,283,1,1,0,0,0,53.5,40.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(69).to({_off:false},0).wait(1).to({x:272.1},0).wait(1).to({x:247.1},0).wait(1).to({x:237.1,y:302},0).wait(1).to({x:226.1,y:319},0).wait(1).to({y:341},0).wait(1).to({x:237.1,y:357},0).wait(1).to({x:250.1,y:367},0).wait(1).to({x:264.1,y:382},0).wait(1).to({x:252.1,y:394},0).wait(1).to({x:242.1,y:413},0).wait(1).to({x:254.1,y:427},0).wait(1).to({x:267.1,y:437},0).wait(1).to({y:458},0).wait(1).to({x:255.1,y:473},0).wait(1).to({x:272.1,y:487},0).wait(1).to({x:284.1,y:501},0).wait(2).to({_off:true},3).wait(95));

	// 遮色片04 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_69 = new cjs.Graphics().p("AgRB6QgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_7_graphics_70 = new cjs.Graphics().p("AhfCQQgaAAgWgKQgXgKgRgRQgSgSgJgXQgNgiAIglQAIglAagaQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAcgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgVAggiAOQgVAJgYAAIgCAAg");
	var mask_7_graphics_71 = new cjs.Graphics().p("AkCCXQghgTgSgkQgSgkAEgmQADgfASgcQASgdAfgRQAfgQAhACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAlgHAhAOQARAHAOAMQAPgdAdgTQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAiQgTAigiARQgiARgngGQgkgFgagVIgIANQgWAggiAOQgWAJgZAAQgZAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEIgPABQgfAAgcgPg");
	var mask_7_graphics_72 = new cjs.Graphics().p("Ak9C2QgngFgcgaQgbgagJgmQgIgnAOgjQAPgiAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAhACQAZACAWANQAXAMAPATIACACQAIgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAiQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgTASQgcAZgoAEQgoAFgigTQgQgJgMgNIgEAIQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_73 = new cjs.Graphics().p("Al0EGQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgmAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAhACQAZACAVANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAfgiAOQgWAJgZAAQgaAAgWgKQgXgKgRgQIgDgEIgFANQgLAYgUASQgcAZgnAEQgoAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_74 = new cjs.Graphics().p("AmhFRQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgiAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiAQQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_75 = new cjs.Graphics().p("AmrGwQgngFgcgaQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgjQAPgjAhgVQASgMATgFIgBgCQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAiQgTAigiARQgMAGgNADIADASQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_76 = new cjs.Graphics().p("AllIFQgngFgcgaQgbgagJgmQgIgnAOgjIADgGQgYgJgTgRQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgiQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAFgNADIADASQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAhgQAhQAXAIATATQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_77 = new cjs.Graphics().p("AjtI3QgngFgcgaQgbgagJgmIAAgDIgRgCQgngFgcgaQgbgagJgmQgIgnAOgjIADgGQgYgJgTgRQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgmAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAkgTAjQgPAcgaAQQAgAfAEArQAEAhgQAhQAXAIATATQAfAcAHAmIADAAQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AhXKMQgngFgcgaQgbgagJgmQgIgnAOgjIADgFQgaAIgegEQgngFgcgaQgbgagJgmIAAgDIgRgCQgngFgcgaQgbgagJgmQgIgnAOgjIADgGQgYgJgTgRQgbgagJgmQgIgnAOgjQAPgiAggVQgZgZgIgjQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgPAcgaAPQAgAfAEArQAEAhgQAhQAXAIATATQAfAcAHAmIADAAQAsABAjAhQAjAgAFAtQAEAhgQAgQAVgHAWABQAsABAiAhQAjAgAFAtQAEAlgTAjQgTAighARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_79 = new cjs.Graphics().p("AjILLQgtgEgigjQghgjgDgtQgCgtAegmQAegmAtgIIATgCQABgXAIgVIADgFQgaAIgegEQgngGgcgZQgbgagJgnIAAgDIgRgBQgngGgcgZQgbgagJgnQgIgnAOgiIADgHQgYgIgTgRQgbgagJgnQgIgnAOghQAPgjAggVQgZgZgIgkQgIgnAOgiQAPgjAhgWQASgLATgFIgBgEQgIgnAOgiQAPgjAhgWQAcgSAfgCIgDgKQgIgnAOgiQAPgjAhgWQAhgVAmABQAsABAjAhQAFgNAIgNQASgdAfgQQAfgRAgADQAZACAWAMQAXAMAPAUIACACQAJgYASgSQAagaAmgHQAmgHAhAPQARAHAOAMQAPgeAdgTQAhgVAmABQAsABAjAhQAjAhAFAsQAEAlgTAjQgTAjgiARQgiARgngGQgkgFgagWIgIAOQgWAggiANQgWAKgZgBQgaAAgWgJQgXgKgRgSIgDgDIgFAMQgLAagUARQgcAagoAEQgnAEgigTQgQgJgMgNIgEAIQgTAjgiARQgWALgZABQAEAMABAMQAEAlgTAjQgTAjgiARQgMAGgNADIADARQAEAlgTAjQgPAcgaARQAgAfAEApQAEAigQAgQAXAJATASQAfAdAHAlIADAAQAsABAjAhQAjAhAFAsQAEAigQAfQAVgHAWABQAsABAiAhQAjAhAFAsQAEAlgTAjQgTAjghARQgYAMgaAAQAAARgFAQQgLAngdAYQgiAdguAAIgLgBg");
	var mask_7_graphics_80 = new cjs.Graphics().p("AkfMiQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQASgMASgFQgNgYgCgbQgCgtAegmQAegmAtgJIATgCQABgXAIgVIADgFQgaAIgegEQgngFgcgaQgbgagJgmIAAgDIgRgCQgngFgcgaQgbgagJgmQgIgnAOgjIADgGQgYgJgTgRQgbgagJglQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAhgQAhQAXAHATATQAfAcAHAmIADAAQAsABAjAhQAjAgAFAtQAEAhgQAgQAVgHAWABQAsABAiAhQAjAgAFAtQAEAlgTAjQgTAighARQgYAMgaABQAAAQgFARQgLAmgdAYQgXATgbAHQALATACAYQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_81 = new cjs.Graphics().p("AjFNyQgngFgcgaQgbgagJgmQgHgjALggQgigHgYgWQgbgagJgmQgIgnAOgjQAPgjAhgVQASgMASgFQgNgYgCgbQgCgtAegmQAegmAtgJIATgCQABgXAIgVIADgFQgaAIgegEQgngFgcgaQgbgagJgmIAAgDIgRgCQgngFgcgaQgbgagJgmQgIgnAOgiIADgGQgYgJgTgRQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAhgQAhQAXAIATATQAfAcAHAlIADAAQAsABAjAhQAjAgAFAtQAEAhgQAgQAVgHAWABQAsABAiAhQAjAgAFAtQAEAlgTAjQgTAighARQgYAMgaABQAAAQgFARQgLAmgdAYQgXATgbAHQALATACAYQADAagJAZQAeAHAaAZQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_82 = new cjs.Graphics().p("AgTOhQgpgFgfgfQgdgdgHgmQggAPgmgGQgngFgcgaQgbgagJgmQgHgjALgfQgigHgYgXQgbgagJgmQgIgnAOgjQAPgjAhgVQASgLASgFQgNgYgCgcQgCgtAegmQAegmAtgJIATgCQABgWAIgWIADgEQgaAIgegFQgngFgcgaQgbgagJgmIAAgDIgRgCQgngFgcgaQgbgagJgmQgIgmAOgjIADgGQgYgIgTgSQgbgagJgmQgIgnAOgjQAPgiAggVQgZgZgIgkQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgSAfgCIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAIAOALQAPgdAdgTQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagVIgIANQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWAMgZABQAEALABANQAEAlgTAjQgTAigiARQgMAHgNADIADARQAEAlgTAjQgPAcgaAQQAgAgAEAqQAEAigQAgQAXAIATATQAfAcAHAmIADAAQAsABAjAhQAjAfAFAtQAEAhgQAgQAVgHAWABQAsABAiAhQAjAgAFAtQAEAlgTAjQgTAighARQgYAMgaABQAAAQgFARQgLAmgdAYQgXAUgbAGQALAUACAXQADAagJAaQAeAHAaAYQAfAcAHAmQAcgNAgABQArACAgAaQAfAaAKAqQAKArgQAlQgQAlgmAWQgeARgfAAIgQgBg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AhXP+QgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVQAPgKAPgFQgQgWgFgbQggAPgmgGQgngFgcgaQgbgagJgmQgHgjALggQgigHgYgWQgbgagJgmQgIgnAOgjQAPgjAhgVQASgMASgFQgNgYgCgbQgCgtAegmQAegmAtgJIATgCQABgXAIgVIADgFQgaAIgegEQgngFgcgaQgbgagJgmIAAgDIgRgCQgngFgcgZQgbgagJgmQgIgnAOgjIADgGQgYgJgTgRQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAhgQAhQAXAIATATQAfAcAHAmIADAAQAsABAjAhQAjAgAFAtQAEAggQAgQAVgHAWABQAsABAiAhQAjAgAFAtQAEAlgTAjQgTAighARQgYAMgaABQAAAQgFARQgLAmgdAYQgXATgbAHQALATACAYQADAagJAZQAeAHAaAZQAfAcAHAmQAcgOAgACQArACAgAaQAfAaAKAqQAKArgQAlQgQAlgmAWQgNAHgNAEQASAZADAgQAEAlgTAjQgTAighARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AhrRiQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVIAFgEIgDgCQgbgagJgmQgIgnAOgjQAPgjAhgVQAPgKAPgFQgQgWgFgbQggAPgmgGQgngFgcgaQgbgagJgmQgHgjALggQgigHgYgWQgbgagJgmQgIgnAOgjQAPgjAhgVQASgMASgFQgNgYgCgbQgCgtAegmQAegmAtgJIATgCQABgXAIgVIADgFQgaAIgegEQgngFgcgZQgbgagJgmIAAgDIgRgCQgngFgcgaQgbgagJgmQgIgnAOgjIADgGQgYgJgTgRQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAhgQAhQAXAIATATQAfAcAHAmIADAAQAsABAjAhQAjAgAFAtQAEAhgQAgQAVgHAWABQAsABAiAhQAjAfAFAtQAEAlgTAjQgTAighARQgYAMgaABQAAAQgFARQgLAmgdAYQgXATgbAHQALATACAYQADAagJAZQAeAHAaAZQAfAcAHAmQAcgOAgACQArACAgAaQAfAaAKAqQAKArgQAlQgQAlgmAWQgNAHgNAEQASAZADAgQAEAlgTAjQgRAfgdARIACADQAiAgAFAtQAEAlgTAjQgSAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_85 = new cjs.Graphics().p("AAqSeQgngFgbgaQgbgagJgmQgCgNgBgNQgVAFgXgEQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVIAFgEIgDgCQgbgagJgmQgIgnAOgjQAPgjAhgVQAPgKAPgFQgQgWgFgbQggAPgmgGQgngFgcgaQgbgagJgmQgHgjALggQgigHgYgWQgbgagJgmQgIgnAOgjQAPgjAhgVQASgMASgFQgNgYgCgbQgCgtAegmQAegmAtgIIATgCQABgXAIgVIADgFQgaAIgegEQgngFgcgaQgbgagJgmIAAgDIgRgCQgngFgcgaQgbgagJgmQgIgnAOgjIADgGQgYgJgTgRQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAhgQAhQAXAIATATQAfAcAHAmIADAAQAsABAjAhQAjAgAFAtQAEAhgQAgQAVgHAWABQAsABAiAhQAjAgAFAtQAEAkgTAjQgTAighARQgYAMgaABQAAAQgFARQgLAmgdAYQgXATgbAHQALATACAYQADAagJAZQAeAHAaAZQAfAcAHAmQAcgOAgACQArACAgAaQAfAaAKAqQAKArgQAlQgQAlgmAWQgNAHgNAEQASAZADAgQAEAlgTAjQgRAfgdARIACADQAiAgAFAtIABALQAOgDAQABQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_86 = new cjs.Graphics().p("ACOTkQgngFgcgaQgbgagJgmQgFgYADgWQgkgGgZgYQgbgagJgmQgCgNgBgNQgVAFgXgEQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVIAFgEIgDgCQgbgagJgmQgIgnAOgjQAPgjAhgVQAPgKAPgFQgQgWgFgbQggAPgmgGQgngFgcgaQgbgagJgmQgHgjALggQgigHgYgWQgbgagJgmQgIgnAOgjQAPgjAhgVQASgMASgFQgNgYgCgbQgCgtAeglQAegmAtgJIATgCQABgXAIgVIADgFQgaAIgegEQgngFgcgaQgbgagJgmIAAgDIgRgCQgngFgcgaQgbgagJgmQgIgnAOgjIADgGQgYgJgTgRQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAhgQAhQAXAIATATQAfAcAHAmIADAAQAsABAjAhQAjAgAFAtQAEAhgQAgQAVgHAWABQAsABAiAhQAjAgAFAtQAEAlgTAjQgTAhghARQgYAMgaABQAAAQgFARQgLAmgdAYQgXATgbAHQALATACAYQADAagJAZQAeAHAaAZQAfAcAHAmQAcgOAgACQArACAgAaQAfAaAKAqQAKArgQAlQgQAlgmAWQgNAHgNAEQASAZADAgQAEAlgTAjQgRAfgdARIACADQAiAgAFAtIABALQAOgDAQABQAsABAjAhQAjAgAFAtQACAPgDAPQAiAHAbAaQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_7_graphics_87 = new cjs.Graphics().p("ACOTkQgngFgcgaQgbgagJgmQgFgYADgWQgkgGgZgYQgbgagJgmQgCgNgBgNQgVAFgXgEQgngFgcgaQgbgagJgmQgIgnAOgjQAPgjAhgVIAFgEIgDgCQgbgagJgmQgIgnAOgjQAPgjAhgVQAPgKAPgFQgQgWgFgbQggAPgmgGQgngFgcgaQgbgagJgmQgHgjALggQgigHgYgWQgbgagJgmQgIgnAOgjQAPgjAhgVQASgMASgFQgNgYgCgbQgCgtAeglQAegmAtgJIATgCQABgXAIgVIADgFQgaAIgegEQgngFgcgaQgbgagJgmIAAgDIgRgCQgngFgcgaQgbgagJgmQgIgnAOgjIADgGQgYgJgTgRQgbgagJgmQgIgnAOgjQAPgiAggWQgZgZgIgjQgIgnAOgjQAPgjAhgVQASgMATgFIgBgDQgIgnAOgjQAPgjAhgVQAcgTAfgBIgDgKQgIgnAOgjQAPgjAhgVQAhgWAmACQAsABAjAgQAFgNAIgMQASgdAfgRQAfgQAgACQAZACAWANQAXAMAPATIACACQAJgYASgSQAagZAmgHQAmgHAhAOQARAHAOAMQAPgeAdgSQAhgWAmACQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgiARgngGQgkgFgagWIgIAOQgWAggiAOQgWAJgZAAQgaAAgWgKQgXgKgRgRIgDgEIgFANQgLAZgUASQgcAZgoAEQgnAFgigTQgQgJgMgNIgEAIQgTAigiARQgWALgZACQAEALABANQAEAlgTAjQgTAigiARQgMAGgNADIADASQAEAlgTAjQgPAcgaAQQAgAfAEArQAEAhgQAhQAXAIATATQAfAcAHAmIADAAQAsABAjAhQAjAgAFAtQAEAhgQAgQAVgHAWABQAsABAiAhQAjAgAFAtQAEAlgTAjQgTAhghARQgYAMgaABQAAAQgFARQgLAmgdAYQgXATgbAHQALATACAYQADAagJAZQAeAHAaAZQAfAcAHAmQAcgOAgACQArACAgAaQAfAaAKAqQAKArgQAlQgQAlgmAWQgNAHgNAEQASAZADAgQAEAlgTAjQgRAfgdARIACADQAiAgAFAtIABALQAOgDAQABQAsABAjAhQAjAgAFAtQACAPgDAPQAiAHAbAaQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_7_graphics_69,x:184.9527,y:161.9484}).wait(1).to({graphics:mask_7_graphics_70,x:175.4574,y:163.9464}).wait(1).to({graphics:mask_7_graphics_71,x:164.8563,y:166.2132}).wait(1).to({graphics:mask_7_graphics_72,x:154.9527,y:167.9484}).wait(1).to({graphics:mask_7_graphics_73,x:149.4527,y:175.9484}).wait(1).to({graphics:mask_7_graphics_74,x:144.9527,y:183.4484}).wait(1).to({graphics:mask_7_graphics_75,x:143.9527,y:192.9484}).wait(1).to({graphics:mask_7_graphics_76,x:143.9527,y:201.4484}).wait(1).to({graphics:mask_7_graphics_77,x:143.9527,y:206.4484}).wait(1).to({graphics:mask_7_graphics_78,x:143.9527,y:214.9484}).wait(1).to({graphics:mask_7_graphics_79,x:143.9527,y:221.167}).wait(1).to({graphics:mask_7_graphics_80,x:143.9527,y:229.9484}).wait(1).to({graphics:mask_7_graphics_81,x:143.9527,y:237.9484}).wait(1).to({graphics:mask_7_graphics_82,x:143.9527,y:242.6011}).wait(1).to({graphics:mask_7_graphics_83,x:143.9527,y:251.9484}).wait(1).to({graphics:mask_7_graphics_84,x:143.9527,y:261.9484}).wait(1).to({graphics:mask_7_graphics_85,x:143.9527,y:267.9484}).wait(1).to({graphics:mask_7_graphics_86,x:143.9527,y:274.9484}).wait(1).to({graphics:mask_7_graphics_87,x:143.9527,y:274.9484}).wait(98));

	// lady04
	this.instance_13 = new lib.CachedBmp_6();
	this.instance_13.setTransform(99.25,158.25,0.5,0.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(69).to({_off:false},0).wait(116));

	// pen03
	this.instance_14 = new lib.手握筆();
	this.instance_14.setTransform(311.5,312.95,1,1,0,0,0,53.5,40.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(54).to({_off:false},0).wait(1).to({x:276.55,y:330.95},0).wait(1).to({x:256.55},0).wait(1).to({y:355.95},0).wait(1).to({x:275.55,y:368.95},0).wait(1).to({x:289.55,y:385.8},0).wait(1).to({y:407.8},0).wait(1).to({x:279.55,y:428.8},0).wait(1).to({x:292.55,y:443.8},0).wait(1).to({x:282.55,y:462.8},0).wait(1).to({y:470.8},0).wait(1).to({x:281.15,y:470.1},0).wait(2).to({_off:true},2).wait(116));

	// 遮色片03 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_54 = new cjs.Graphics().p("AgcCSQgygJgigrQgjgqgBgzQAAgyAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPAzQgPA1gpAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_8_graphics_55 = new cjs.Graphics().p("AgwEAQgygJgigrQgjgqgBgzQAAgzAigqQASgWAWgNQghgpgBgyQAAgzAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAcIgJAGQAMAPAIASQAUAvgPA0QgPA1gpAdQgZASgeAGQgPADgPAAQgPAAgOgDg");
	var mask_8_graphics_56 = new cjs.Graphics().p("AhJFzQgygJgigrQgjgqgBgzQAAgzAigqQAXgdAegOIgBgBQgjgqgBgyQAAgzAigqQASgXAWgNQghgpgBgyQAAgzAigqQAigrAxgLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPAzQgPA1gpAdQgLAHgLAGQAOAQAJAUQAUAvgPA0QgPA1gpAdQgZASgdAGQgQADgPAAQgPAAgOgDg");
	var mask_8_graphics_57 = new cjs.Graphics().p("AjpGZQgqgYgTgqQgTgqAKgwQAJgvAiggQAhgfAwgHQAwgHApAWIALAGQAEgrAegmQAXgcAcgOIgBgBQgigpAAgzQgBgzAigrQASgWAWgNQgigqAAgxQgBgzAjgrQAigrAygKQAygLAwAaQAxAZAUAuQAVAvgPA1QgPA1gqAdIgJAGQANAOAHASQAVAvgPA1QgPA0gqAdQgKAHgLAFQAOAQAIAUQAVAvgPA1QgPA1gqAdQgZARgeAGQgeAHgdgGQgcgGgXgQIgBALQgGArgeAiQgTAVgZANQgaANgcACIgMAAQgnAAgkgVg");
	var mask_8_graphics_58 = new cjs.Graphics().p("AkaHSQgygJgjgrQgjgqAAgzQgBgzAjgqQAigrAygLQAsgJArATQALgcAWgUQAiggAwgGQAwgHAnAVIAMAHQADgsAeglQAXgdAdgNIAAgBQgjgqgBgzQAAgzAigqQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPA0QgPA1gpAcQgLAHgLAGQAOAQAJAUQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgcgFgYgQIgBAKQgGArgeAiQgSAVgaANQgYANgcACQgkADghgOQgRAnghAXQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_8_graphics_59 = new cjs.Graphics().p("AlvIJQgygJgjgrQgjgqAAgzQgBgzAjgqQAigrAygLQAcgGAcAGQAIgeAWgaQAigrAygLQAsgJArATQALgcAWgUQAiggAvgGQAwgHAoAVIAMAHQADgsAegkQAXgdAdgOIAAgBQgjgqgBgzQAAgzAigqQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPA0QgPA1gpAdQgLAHgLAGQAOAQAJATQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgcgFgYgQIgBAKQgGArgeAiQgSAVgaANQgZANgcACQgjADghgOQgRAnghAXQgZASgeAGQgdAGgcgFIgBADQgPA1gqAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_8_graphics_60 = new cjs.Graphics().p("AllJZQgygJgjgrQgjgqAAgzQgBgnAVgjQgegnAAgvQgBgzAjgqQAigrAygLQAcgGAcAGQAIgeAWgaQAigrAygLQAsgJArATQALgcAWgUQAigfAvgGQAwgHAoAVIAMAHQADgsAeglQAXgdAdgOIAAgBQgjgqgBgzQAAgzAigqQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPA0QgPA1gpAdQgLAHgLAGQAOAQAJAUQAUAvgPAzQgPA1gpAdQgZASgeAGQgfAGgdgGQgcgFgYgQIgBAKQgGArgeAiQgSAVgaANQgZANgcACQgjADghgOQgRAnghAXQgZASgeAGQgdAGgcgFIgBADQgFARgIAPQAKANAHAQQAVAvgPA0QgPA1gqAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_8_graphics_61 = new cjs.Graphics().p("AjtKkQgygJgjgrQgjgqAAgzIAAgFQgygJgjgrQgjgqAAgzQgBgnAVgjQgegnAAgvQgBgzAjgqQAigrAygLQAcgGAcAGQAIgeAWgaQAigqAygLQAsgJArATQALgcAWgUQAiggAvgGQAwgHAoAVIAMAHQADgsAeglQAXgdAdgOIAAgBQgjgqgBgzQAAgzAigqQASgXAWgNQghgpgBgyQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdIgJAGQAMAPAIASQAUAvgPA0QgPA1gpAdQgLAHgLAGQAOAQAJAUQAUAvgPA0QgPA0gpAdQgZASgeAGQgfAGgdgGQgcgFgYgQIgBAKQgGArgeAiQgSAVgaANQgZANgcACQgjADghgOQgRAnghAXQgZASgeAGQgdAGgcgFIgBADQgFARgIAPQAKANAHAQQANAegBAhQAUAFATAKQAxAZAUAvQAVAvgPA0QgPA1gqAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_8_graphics_62 = new cjs.Graphics().p("AhIL/Qg4gFglgmQgkglgEg4QgCgWAEgTQgSAAgQgDQgygKgjgqQgjgqAAgzIAAgFQgygKgjgqQgjgqAAgzQgBgnAVgjQgegnAAgvQgBgzAjgrQAigpAygLQAcgGAcAGQAIgeAWgbQAigqAygLQAsgJArASQALgbAWgVQAigfAvgHQAwgHAoAWIAMAHQADgsAegmQAXgcAdgOIAAgBQgjgqgBgzQAAgzAigrQASgWAWgNQghgpgBgyQAAgzAigrQAigrAygKQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgJAGQAMAOAIASQAUAvgPA1QgPA1gpAdQgLAHgLAFQAOAQAJAUQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgcgFgYgRIgBALQgGAqgeAiQgSAVgaANQgZANgcACQgjADghgOQgRAnghAXQgZARgeAGQgdAHgcgGIgBAEQgFARgIAPQAKANAHAPQANAfgBAhQAUAFATAKQAxAZAUAuQATArgLAwQATgBASAEQAqAKAfAgQAgAgAIArQAJAqgRAqQgRAqgkAZQgkAZguAAIgPgBg");
	var mask_8_graphics_63 = new cjs.Graphics().p("Ah5NOQgugYgVg0QgVgzAQgxQAIgZAPgUQgggkgDg0QgCgWAEgUQgSABgQgDQgygKgjgqQgjgqAAgzIAAgFQgygKgjgqQgjgqAAgzQgBgoAVgiQgegnAAgvQgBgyAjgrQAigqAygLQAcgGAcAFQAIgdAWgbQAigqAygLQAsgKArATQALgbAWgVQAigfAvgHQAwgHAoAWIAMAGQADgrAegmQAXgcAdgOIAAgBQgjgqgBgzQAAgzAigrQASgWAWgOQghgpgBgxQAAgzAigrQAigrAygKQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgJAFQAMAPAIASQAUAvgPA1QgPA1gpAdQgLAHgLAFQAOAQAJAUQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgcgGgYgQIgBALQgGArgeAiQgSAVgaANQgZANgcACQgjACghgNQgRAlghAYQgZARgeAGQgdAGgcgFIgBAEQgFARgIAOQAKAOAHAPQANAfgBAhQAUAEATALQAxAZAUAuQATArgLAwQATgBASAEQAqAKAfAgQAgAgAIArQAJAqgRAqQgIATgMAQQAjAoADAyQADA4gjAsQggAog1AMQgSADgQAAQgjAAgfgQg");
	var mask_8_graphics_64 = new cjs.Graphics().p("AibO0QgtgWgWgxQgXgxAMgxQAMgxArggIADgDQgHgMgGgOQgVgzAQgxQAIgZAPgUQgggjgDg1QgCgWAEgTQgSAAgQgDQgygKgjgqQgjgqAAgzIAAgFQgygKgjgqQgjgqAAgzQgBgoAVgiQgegmAAgvQgBgzAjgrQAigqAygLQAcgGAcAGQAIgeAWgbQAigqAygLQAsgJArASQALgbAWgVQAigfAvgHQAwgHAoAWIAMAHQADgsAegmQAXgcAdgOIAAgBQgjgqgBgzQAAgzAigrQASgWAWgNQghgpgBgyQAAgzAigrQAigrAygKQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgJAGQAMAOAIASQAUAvgPA1QgPA1gpAdQgLAHgLAFQAOAQAJAUQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgcgGgYgQIgBALQgGArgeAiQgSAVgaANQgZANgcACQgjADghgOQgRAnghAXQgZARgeAGQgdAHgcgGIgBAEQgFARgIAOQAKANAHAPQANAfgBAhQAUAFATAKQAxAZAUAuQATArgLAwQATgBASAEQAqAKAfAgQAgAgAIArQAJAqgRAqQgIAUgMAPQAjAoADAyQADA4gjAsQgNAQgQAMQAQAXAGAdQAGAggIAhQgIAhgVAZQgfAng0ALQgSAEgRAAQghAAgegPg");
	var mask_8_graphics_65 = new cjs.Graphics().p("AhaQLQgsgdgQg3QgPgyARgsIgHgEQgtgWgWgxQgXgxAMgxQAMgxArggIADgDQgHgMgGgOQgVgzAQgxQAIgZAPgUQgggjgDg1QgCgWAEgTQgSAAgQgDQgygKgjgqQgjgqAAgzIAAgFQgygKgjgqQgjgqAAgzQgBgmAVgjQgegnAAgvQgBgzAjgrQAigqAygLQAcgGAcAGQAIgeAWgbQAigqAygLQAsgJArASQALgbAWgVQAigfAvgHQAwgHAoAWIAMAHQADgsAegmQAXgcAdgOIAAgBQgjgqgBgzQAAgzAigrQASgWAWgNQghgpgBgyQAAgzAigrQAigrAygKQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgJAGQAMAOAIASQAUAvgPA1QgPA1gpAdQgLAHgLAFQAOARAJATQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgcgFgYgRIgBALQgGArgeAiQgSAVgaANQgZANgcACQgjADghgOQgRAnghAXQgZARgeAGQgdAHgcgGIgBAEQgFARgIAPQAKANAHAPQANAfgBAgQAUAFATAKQAxAZAUAuQATArgLAwQATgBASAEQAqAKAfAgQAgAgAIArQAJAqgRAqQgIAUgMAPQAjAoADAyQADA4gjAsQgNAQgQAMQAQAYAGAcQAGAggIAhIgGASQAoARAaAoQAeAwgHA1QgHAsgdAgQgjAog5AIQgLACgLAAQgrAAgjgXg");
	var mask_8_graphics_66 = new cjs.Graphics().p("AibRtQgtgWgWgxQgXgxAMgxQAMgxArggQAOgLAPgHIgBgEQgPgyARgsIgHgEQgtgWgWgxQgXgxAMgxQAMgxArggIADgDQgHgMgGgOQgVgzAQgxQAIgZAPgUQgggjgDg1QgCgWAEgTQgSAAgQgDQgygKgjgqQgjgqAAgzIAAgFQgygKgjgqQgjgpAAgzQgBgoAVgiQgegnAAgvQgBgzAjgrQAigqAygLQAcgGAcAGQAIgeAWgbQAigqAygLQAsgJArASQALgbAWgVQAigfAvgHQAwgHAoAWIAMAHQADgsAegmQAXgcAdgOIAAgBQgjgqgBgzQAAgzAigrQASgWAWgNQghgpgBgyQAAgzAigrQAigrAygKQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgJAGQAMAOAIASQAUAvgPA1QgPA1gpAdQgLAHgLAFQAOAQAJAUQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgcgGgYgQIgBALQgGArgeAiQgSAVgaANQgZANgcACQgjADghgOQgRAnghAXQgZARgeAGQgdAHgcgGIgBAEQgFARgIAPQAKANAHAPQANAfgBAhQAUAFATAKQAxAZAUAtQATArgLAwQATgBASAEQAqAKAfAgQAgAgAIArQAJAqgRAqQgIAUgMAPQAjAoADAyQADA4gjAsQgNAQgQAMQAQAXAGAdQAGAggIAhIgGASQAoARAaAoQAeAwgHA1QgHAsgdAgQgVAYgdANIAFAQQAGAggIAhQgIAhgVAZQgfAng0ALQgSAEgRAAQghAAgegPg");
	var mask_8_graphics_67 = new cjs.Graphics().p("AibRtQgtgWgWgxQgXgxAMgxQAMgxArggQAOgLAPgHIgBgEQgPgyARgsIgHgEQgtgWgWgxQgXgxAMgxQAMgxArggIADgDQgHgMgGgOQgVgzAQgxQAIgZAPgUQgggjgDg1QgCgWAEgTQgSAAgQgDQgygKgjgqQgjgqAAgzIAAgFQgygKgjgqQgjgpAAgzQgBgoAVgiQgegnAAgvQgBgzAjgrQAigqAygLQAcgGAcAGQAIgeAWgbQAigqAygLQAsgJArASQALgbAWgVQAigfAvgHQAwgHAoAWIAMAHQADgsAegmQAXgcAdgOIAAgBQgjgqgBgzQAAgzAigrQASgWAWgNQghgpgBgyQAAgzAigrQAigrAygKQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdIgJAGQAMAOAIASQAUAvgPA1QgPA1gpAdQgLAHgLAFQAOAQAJAUQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgcgGgYgQIgBALQgGArgeAiQgSAVgaANQgZANgcACQgjADghgOQgRAnghAXQgZARgeAGQgdAHgcgGIgBAEQgFARgIAPQAKANAHAPQANAfgBAhQAUAFATAKQAxAZAUAtQATArgLAwQATgBASAEQAqAKAfAgQAgAgAIArQAJAqgRAqQgIAUgMAPQAjAoADAyQADA4gjAsQgNAQgQAMQAQAXAGAdQAGAggIAhIgGASQAoARAaAoQAeAwgHA1QgHAsgdAgQgVAYgdANIAFAQQAGAggIAhQgIAhgVAZQgfAng0ALQgSAEgRAAQghAAgegPg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_8_graphics_54,x:201.6665,y:151.0409}).wait(1).to({graphics:mask_8_graphics_55,x:199.6665,y:162.0409}).wait(1).to({graphics:mask_8_graphics_56,x:197.1665,y:173.5409}).wait(1).to({graphics:mask_8_graphics_57,x:185.8057,y:179.1749}).wait(1).to({graphics:mask_8_graphics_58,x:176.1915,y:183.0409}).wait(1).to({graphics:mask_8_graphics_59,x:167.6915,y:188.5409}).wait(1).to({graphics:mask_8_graphics_60,x:167.6915,y:196.5409}).wait(1).to({graphics:mask_8_graphics_61,x:167.6915,y:204.0409}).wait(1).to({graphics:mask_8_graphics_62,x:167.6915,y:212.9581}).wait(1).to({graphics:mask_8_graphics_63,x:167.6915,y:222.3806}).wait(1).to({graphics:mask_8_graphics_64,x:167.6915,y:232.4664}).wait(1).to({graphics:mask_8_graphics_65,x:167.6915,y:241.9572}).wait(1).to({graphics:mask_8_graphics_66,x:167.6915,y:250.9664}).wait(1).to({graphics:mask_8_graphics_67,x:167.6915,y:250.9664}).wait(118));

	// lady03
	this.instance_15 = new lib.CachedBmp_7();
	this.instance_15.setTransform(128,146.85,0.5,0.5);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54).to({_off:false},0).wait(131));

	// pen02
	this.instance_16 = new lib.手握筆();
	this.instance_16.setTransform(335.05,213.1,1,1,0,0,0,53.5,40.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(34).to({_off:false},0).wait(1).to({x:360.05,y:198.1},0).wait(1).to({x:377.05},0).wait(1).to({x:400.05},0).wait(1).to({x:419.05,y:213.1},0).wait(1).to({x:438.05,y:226.1},0).wait(1).to({x:449.05,y:236.1},0).wait(1).to({x:459.05,y:249.35},0).wait(1).to({y:275.35},0).wait(1).to({x:449.05,y:291.35},0).wait(1).to({y:305.35},0).wait(1).to({x:439.05,y:321.35},0).wait(1).to({x:426.05},0).wait(1).to({x:407.05,y:307.4},0).wait(1).to({x:390.05,y:297.4},0).wait(1).to({x:377.05,y:282.45},0).wait(2).to({_off:true},3).wait(131));

	// 遮色片02 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_34 = new cjs.Graphics().p("AgcB9QgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXQAkgYAsAEQAtADAgAdQAfAdAIAsQAIAsgUAmQgTAlgqATQgaANgbAAQgOAAgOgEg");
	var mask_9_graphics_35 = new cjs.Graphics().p("AiZDhQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgWQAigWAqACIAEgOQAPgrAjgXQAegUAjgBIAEgNQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqASQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgDAQgIAPQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_36 = new cjs.Graphics().p("AjzEEQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgNQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAjgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgpASgpgJQgQgDgOgIIgHAQQgTAkgqATQgXALgYACQgEAQgIAPQgTAlgpATQgcAOgdgBQgEAQgIAPQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_37 = new cjs.Graphics().p("AlIEYQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgqAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAVALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgUAlgpATQgpATgpgKQgSgEgQgJQgTAcgjAPQgpATgpgKQgQgDgOgHIgHAPQgTAlgqATQgWALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_38 = new cjs.Graphics().p("AmxEYQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgqAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAsAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAgAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqASQgpATgpgKQgggHgZgWQgZgWgKgeQgPAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAPQgpATgogKQgQgDgOgHIgHAPQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_39 = new cjs.Graphics().p("AoGEYQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgqAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAXAOQAOgWAVgOQAkgYAtAEQAtADAgAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQAIAsgUAmQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgWQgZgWgKgeQgPAOgVAJQgpATgpgKQgSgEgQgJQgTAcgiAPQgpATgpgKQgQgDgOgHIgHAPQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_40 = new cjs.Graphics().p("AplEYQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgqAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAsAEQAtADAgAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAANQAggQAnADQAtACAgAdQAfAdAIAsQAIAtgUAmQgUAlgpATQgpATgpgKQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgWQgZgWgKgeQgPAOgVAJQgpATgogKQgSgEgQgJQgTAcgjAPQgpATgpgKQgQgDgOgHIgHAPQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_41 = new cjs.Graphics().p("AJjFKQgggHgZgXQgagXgKgfQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgeQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgPAOgVAJQgoATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAkgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgWQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAsADAgAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAcAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_42 = new cjs.Graphics().p("AKQGfQgggHgZgXQgagXgKgfQgOgoAPgrIABgDQgfgIgZgWQgagXgKgfQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgYIgIAEQgpASgpgJQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAkgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAZQAfAdAIAsQAHAkgMAgQAgAHAYAWQAfAdAIAsQAIAtgUAmQgUAlgpATQgbANgbAAQgOAAgOgEg");
	var mask_9_graphics_43 = new cjs.Graphics().p("AJ8IDQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXIABgBQgWgWgKgcQgOgoAPgrIABgDQgfgIgZgWQgagXgKgfQgHgWAAgWIgKgCQgggHgZgWQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAkgqATQgpATgpgKQgggHgZgXQgagWgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAHAjgMAgQAgAHAYAWQAfAdAIAsQAIAtgUAmQgPAdgdASQAdAcAHAqQAIAtgUAmQgUAlgpATQgbANgbAAQgOAAgOgEg");
	var mask_9_graphics_44 = new cjs.Graphics().p("AJeJYQgggHgZgXQgagXgKgfQgOgoAPgrQANglAdgXQgIgNgFgOQgOgoAPgrQAPgrAjgXIABgBQgWgWgKgcQgOgoAPgrIABgDQgfgIgZgWQgagXgKgeQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAHAkgMAgQAgAHAYAVQAfAdAIAsQAIAtgUAmQgPAdgdASQAdAcAHAqQAIAtgUAmQgNAYgWARQANAUAEAaQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_45 = new cjs.Graphics().p("AI2KoQgggHgZgXQgagXgKgfQgOgoAPgrQAOgnAfgYIgGgOQgOgoAPgrQANglAdgXQgIgNgFgOQgOgoAPgrQAPgrAjgXIABgBQgWgWgKgcQgOgoAPgqIABgDQgfgIgZgWQgagXgKgfQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAHAkgMAgQAgAHAYAWQAfAdAIArQAIAtgUAmQgPAdgdASQAdAcAHAqQAIAtgUAmQgNAYgWARQANAUAEAaQAIAtgUAmQgNAagZASQAHAPADASQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_46 = new cjs.Graphics().p("AH6MCQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAJgGAJgEQgFgKgEgLQgOgoAPgrQAOgnAfgYIgGgOQgOgoAPgrQANglAdgXQgIgNgFgOQgOgoAPgrQAPgrAjgXIABgBQgWgWgKgbQgOgoAPgrIABgDQgfgIgZgWQgagXgKgfQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAHAkgMAgQAgAHAYAWQAfAdAIAsQAIAtgUAmQgPAcgdASQAdAcAHAqQAIAtgUAmQgNAYgWARQANAUAEAaQAIAtgUAmQgNAagZASQAHAPADASQAIAtgUAmQgTAlgqATIAAABQAJASAEAWQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_47 = new cjs.Graphics().p("AH6MCQgggHgZgXQgKgJgIgLIgDABQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAKAJAHALIADgCQgFgKgEgLQgOgoAPgrQAOgnAfgYIgGgOQgOgoAPgrQANglAdgXQgIgNgFgOQgOgoAPgrQAPgrAjgXIABgBQgWgWgKgbQgOgoAPgrIABgDQgfgIgZgWQgagXgKgfQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAHAkgMAgQAgAHAYAWQAfAdAIAsQAIAtgUAmQgPAcgdASQAdAcAHAqQAIAtgUAmQgNAYgWARQANAUAEAaQAIAtgUAmQgNAagZASQAHAPADASQAIAtgUAmQgTAlgqATIAAABQAJASAEAWQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_48 = new cjs.Graphics().p("AH6MCQgggHgZgXQgKgJgIgLIgDABQgpATgpgKQgggHgZgXQgagXgKgfQgLggAHgiQgJAGgMAFQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAFAYgEAXIACgCQAkgYAtAEQAtADAgAdQAKAJAHALIADgCQgFgKgEgLQgOgoAPgrQAOgnAfgYIgGgOQgOgoAPgrQANglAdgXQgIgNgFgOQgOgoAPgrQAPgrAjgXIABgBQgWgWgKgbQgOgoAPgrIABgDQgfgIgZgWQgagXgKgfQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAHAkgMAgQAgAHAYAWQAfAdAIAsQAIAtgUAmQgPAcgdASQAdAcAHAqQAIAtgUAmQgNAYgWARQANAUAEAaQAIAtgUAmQgNAagZASQAHAPADASQAIAtgUAmQgTAlgqATIAAABQAJASAEAWQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_49 = new cjs.Graphics().p("AH6MCQgggHgZgXQgKgJgIgLIgDABQgpATgpgKQgggHgZgXQgagXgKgfQgLggAHgiQgJAGgMAFQgpATgpgKQgggHgZgXQgagXgKgfQgEgKgBgKQgkANgjgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAsAEQAtADAgAdQAfAdAIAsIABABQAZgIAcACQAtADAgAdQAfAdAIAsQAFAYgEAXIACgCQAkgYAtAEQAtADAgAdQAKAJAHALIADgCQgFgKgEgLQgOgoAPgrQAOgnAfgYIgGgOQgOgoAPgrQANglAdgXQgIgNgFgOQgOgoAPgrQAPgrAjgXIABgBQgWgWgKgbQgOgoAPgrIABgDQgfgIgZgWQgagXgKgfQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAHAkgMAgQAgAHAYAWQAfAdAIAsQAIAtgUAmQgPAcgdASQAdAcAHAqQAIAtgUAmQgNAYgWARQANAUAEAaQAIAtgUAmQgNAagZASQAHAPADASQAIAtgUAmQgTAlgqATIAAABQAJASAEAWQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_50 = new cjs.Graphics().p("AH6MCQgggHgZgXQgKgJgIgLIgDABQgpATgpgKQgggHgZgXQgagXgKgfQgLggAHgiQgJAGgMAFQgpATgpgKQgggHgZgXQgagXgKgfQgEgKgBgKQgkANgjgJQgggHgZgXQgagXgKgfIgCgEIgFgCQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAZAYAKAjQAlAGAbAZQAfAdAIAsIABABQAZgIAcACQAtADAgAdQAfAdAIAsQAFAYgEAXIACgCQAkgYAtAEQAtADAgAdQAKAJAHALIADgCQgFgKgEgLQgOgoAPgrQAOgnAfgYIgGgOQgOgoAPgrQANglAdgXQgIgNgFgOQgOgoAPgrQAPgrAjgXIABgBQgWgWgKgbQgOgoAPgrIABgDQgfgIgZgWQgagXgKgfQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAHAkgMAgQAgAHAYAWQAfAdAIAsQAIAtgUAmQgPAcgdASQAdAcAHAqQAIAtgUAmQgNAYgWARQANAUAEAaQAIAtgUAmQgNAagZASQAHAPADASQAIAtgUAmQgTAlgqATIAAABQAJASAEAWQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_51 = new cjs.Graphics().p("AH6MCQgggHgZgXQgKgJgIgLIgDABQgpATgpgKQgggHgZgXQgagXgKgfQgLggAHgiQgJAGgMAFQgpATgpgKQgggHgZgXQgagXgKgfQgEgKgBgKQgkANgjgJQgggHgZgXQgagXgKgfIgCgEIgFgCQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAZAYAKAjQAlAGAbAZQAfAdAIAsIABABQAZgIAcACQAtADAgAdQAfAdAIAsQAFAYgEAXIACgCQAkgYAtAEQAtADAgAdQAKAJAHALIADgCQgFgKgEgLQgOgoAPgrQAOgnAfgYIgGgOQgOgoAPgrQANglAdgXQgIgNgFgOQgOgoAPgrQAPgrAjgXIABgBQgWgWgKgbQgOgoAPgrIABgDQgfgIgZgWQgagXgKgfQgHgWAAgWIgKgCQgggHgZgXQgagXgKgfQgIgYABgZIgIAEQgpATgpgKQgggHgZgXQgagXgKgfQgFgPgBgPQgkANgjgJQgggHgZgXQgZgWgKgeQgOAOgVAJQgpATgpgKQgSgEgQgJQgTAcgjAQQgpATgpgKQgQgDgOgIIgHAQQgTAlgqATQgXALgYACQgEAQgIAPQgTAlgqATQgcAOgdgBQgEAQgIAPQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAigWAqACIAEgOQAPgrAjgXQAegUAkgBIAEgNQAPgrAjgXQAkgYAtAEQAcACAWALQAPgoAigXQAkgYAtAEQAeACAYAOQAOgWAVgOQAkgYAtAEQAtADAfAdQAYAWAKAfQAJgJAJgGQAkgYAtAEQAtADAgAdQAfAdAIAsIACALQAYgIAcACQAtADAgAdQAfAdAIAsQADAPAAAOQAggRAnADQAtADAgAdQAfAdAIAsQADANAAANQAnAFAdAaQAfAdAIAsQAHAkgMAgQAgAHAYAWQAfAdAIAsQAIAtgUAmQgPAcgdASQAdAcAHAqQAIAtgUAmQgNAYgWARQANAUAEAaQAIAtgUAmQgNAagZASQAHAPADASQAIAtgUAmQgTAlgqATIAAABQAJASAEAWQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_9_graphics_34,x:195.6514,y:111.0747}).wait(1).to({graphics:mask_9_graphics_35,x:208.1514,y:101.0747}).wait(1).to({graphics:mask_9_graphics_36,x:217.1514,y:97.5747}).wait(1).to({graphics:mask_9_graphics_37,x:225.6514,y:95.5747}).wait(1).to({graphics:mask_9_graphics_38,x:236.1514,y:95.5747}).wait(1).to({graphics:mask_9_graphics_39,x:244.6514,y:95.5747}).wait(1).to({graphics:mask_9_graphics_40,x:254.1514,y:95.5747}).wait(1).to({graphics:mask_9_graphics_41,x:259.6514,y:100.5747}).wait(1).to({graphics:mask_9_graphics_42,x:264.1514,y:109.0747}).wait(1).to({graphics:mask_9_graphics_43,x:264.1514,y:119.0747}).wait(1).to({graphics:mask_9_graphics_44,x:264.1514,y:127.5747}).wait(1).to({graphics:mask_9_graphics_45,x:264.1514,y:135.5747}).wait(1).to({graphics:mask_9_graphics_46,x:264.1514,y:144.5747}).wait(1).to({graphics:mask_9_graphics_47,x:264.1514,y:144.5747}).wait(1).to({graphics:mask_9_graphics_48,x:264.1514,y:144.5747}).wait(1).to({graphics:mask_9_graphics_49,x:264.1514,y:144.5747}).wait(1).to({graphics:mask_9_graphics_50,x:264.1514,y:144.5747}).wait(1).to({graphics:mask_9_graphics_51,x:264.1514,y:144.5747}).wait(134));

	// lady02
	this.instance_17 = new lib.CachedBmp_8();
	this.instance_17.setTransform(195.3,77.3,0.5,0.5);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(34).to({_off:false},0).wait(151));

	// pen01
	this.instance_18 = new lib.手握筆();
	this.instance_18.setTransform(204.15,286.95,1,1,0,0,0,53.5,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({x:193.15,y:256.75},0).wait(1).to({x:204.45,y:236.35},0).wait(1).to({x:217.8,y:216.45},0).wait(1).to({x:232.8,y:204.45},0).wait(1).to({x:251.8},0).wait(1).to({x:273.8},0).wait(1).to({x:287.8,y:216.45},0).wait(1).to({x:307.75,y:229.45},0).wait(1).to({x:320.75,y:240.45},0).wait(1).to({x:335.7,y:256.75},0).wait(1).to({x:348.7,y:276.75},0).wait(1).to({x:360.7,y:293.75},0).wait(1).to({x:374.7,y:314.75},0).wait(1).to({x:384.35,y:331.7},0).wait(1).to({x:394.85,y:343.7},0).wait(1).to({x:409.85,y:363.7},0).wait(1).to({x:423.85,y:378.7},0).wait(1).to({x:441.85,y:395.7},0).wait(1).to({x:455.85,y:408.7},0).wait(1).to({x:476.85,y:418.7},0).wait(1).to({x:494.85},0).wait(1).to({x:502.85,y:397.7},0).wait(1).to({x:492.85,y:375.7},0).wait(1).to({x:478.85,y:351.7},0).wait(1).to({x:464.85,y:331.7},0).wait(1).to({_off:true},8).wait(151));

	// 遮色片01 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("AgkEXQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgNQgmgMgcgjQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAvAZAVAvQAQAmgGAqQAMAAANACQA7AJAvAoQAvApARA4QARA5gRA8QgRA8gtAoQgrAmg8ALQgTADgSAAQgnAAgkgPg");
	var mask_10_graphics_1 = new cjs.Graphics().p("AgGGAQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgOQgmgMgcgjQgjgqgBgyQAAgqAXgkQgagNgVgaQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAwAZAUAvQAUAvgPA0QgGAVgJARIACABQAvAZAVAvQAQAmgGAqQAMAAANACQA7AJAvAnQAvApARA5QARA5gRA8QgRA8gtAoQgrAmg8ALQgTADgSAAQgoAAgjgPg");
	var mask_10_graphics_2 = new cjs.Graphics().p("AgBHpQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgOQgmgMgcgjQgjgqgBgzQAAgqAXgjQgagNgVgaQgjgqgBgzQAAgzAigqIAHgIIgPgQQgjgqgBgzQAAgzAigqQAigrAygLQAygKAxAZQAwAZAUAvQAUAvgPA0QgJAkgWAZQAYAUAMAeQAUAvgPA0QgGAVgKARIACABQAwAZAVAuQAQAmgGAqQAMAAANACQA7AJAvAoQAvApARA5QARA5gRA8QgRA8gtAoQgrAmg8ALQgTADgSAAQgoAAgjgPg");
	var mask_10_graphics_3 = new cjs.Graphics().p("AgBJDQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgOQgmgMgcgjQgjgqgBgzQAAgqAXgkQgagNgVgaQgjgpgBgzQAAgzAigqIAHgIIgPgQQgjgqgBgzQAAgzAigqQAOgRAPgMQgMgbgBgfQAAgzAigqQAigrAygLQAygKAxAZQAvAZAVAvQAUAvgPA0QgPA0goAdQAUAvgPA0QgJAkgWAZQAYAUAMAeQAUAvgPA0QgGAUgKARIACABQAwAZAVAvQAQAmgGAqQAMAAANACQA7AJAvAoQAvApARA5QARA5gRA8QgRA8gtAoQgrAmg8ALQgTADgSAAQgoAAgjgPg");
	var mask_10_graphics_4 = new cjs.Graphics().p("AgBKYQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgOQgmgMgcgjQgjgqgBgzQAAgqAXgkQgagNgVgaQgjgqgBgzQAAgyAigqIAHgIIgPgQQgjgqgBgzQAAgzAigqQAOgRAPgMQgMgbgBgfQAAgzAigqQAigrAygLIAEgBQgCgKAAgMQAAgzAigqQAigrAxgLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGIgEAAQAFAfgKAhQgPA0goAdQAUAvgPA0QgJAkgWAZQAYAUAMAeQAUAugPA0QgGAVgKARIACABQAwAZAVAvQAQAmgGAqQAMAAANACQA7AJAvAoQAvApARA5QARA5gRA8QgRA8gtAoQgrAmg8ALQgTADgSAAQgoAAgjgPg");
	var mask_10_graphics_5 = new cjs.Graphics().p("AgeLUQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgOQgmgMgcgjQgjgqgBgzQAAgqAXgkQgagNgVgaQgjgqgBgzQAAgzAigpIAHgIIgPgQQgjgqgBgzQAAgzAigqQAOgRAPgMQgMgbgBgfQAAgzAigqQAigrAygLIAEgBQgCgKAAgMQAAgzAigqQAigrAygLQAXgFAVADQAHgiAYgeQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgXAFgXgDIgDAMQgPA1gpAdQgZASgeAGIgEAAQAFAfgKAhQgOA0goAdQAUAvgPA0QgKAkgWAZQAYATANAeQATAvgOA0QgGAVgKARIACABQAvAZAVAvQARAmgHAqQAMAAANACQA7AJAvAoQAvApARA5QARA5gRA8QgRA8gtAoQgrAmg8ALQgTADgSAAQgoAAgjgPg");
	var mask_10_graphics_6 = new cjs.Graphics().p("AiCL3Qg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgOQgmgMgcgjQgjgqgBgzQAAgqAXgkQgagNgVgaQgjgqgBgzQAAgzAigqIAHgIIgPgQQgjgpgBgzQAAgzAigqQAOgRAPgMQgMgbgBgfQAAgzAigqQAigrAygLIAEgBQgCgKAAgMQAAgzAigqQAigrAygLQAXgFAWADQAHgiAYgeQAigrAxgLQAxgKAwAYQAHgQAMgOQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgUgEgRgJQgQAlggAWQgZASgeAGQgXAFgXgDIgDAMQgPA1goAdQgZASgeAGIgEAAQAFAfgKAhQgOA0gpAdQAUAvgPA0QgKAkgWAYQAYAUANAeQAUAvgPA0QgGAVgKARIACABQAwAZAVAvQARAmgHAqQAMAAANACQA6AJAvAoQAvApARA5QARA5gRA8QgRA8gtAoQgrAmg7ALQgTADgSAAQgoAAgkgPg");
	var mask_10_graphics_7 = new cjs.Graphics().p("AjcL3Qg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgOQgmgMgcgjQgjgqgBgzQAAgqAXgkQgagNgVgaQgjgqgBgzQAAgzAigqIAHgIIgPgQQgjgpgBgzQAAgzAigqQAOgRAPgMQgMgbgBgfQAAgzAigqQAigrAygLIAEgBQgCgKAAgMQAAgzAigqQAigrAygLQAXgFAWADQAHgiAYgeQAigrAygLQAxgKAvAYQAHgQAMgOQAigrAygLQAygKAxAZQAhARAUAbQANgGAPgDQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgygJgigrIgGgIQgPAHgPADQgfAGgdgGQgUgEgRgJQgQAlggAWQgZASgeAGQgWAFgXgDIgDAMQgPA1gpAdQgZASgeAGIgEAAQAFAfgKAhQgOA0gpAdQAUAvgPA0QgKAkgWAYQAYAUANAeQAUAvgPA0QgGAVgKARIACABQAwAZAVAvQARAmgHAqQAMAAANACQA7AJAvAoQAuApARA5QARA5gRA8QgRA8gsAoQgrAmg8ALQgTADgSAAQgoAAgkgPg");
	var mask_10_graphics_8 = new cjs.Graphics().p("AlAL3Qg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAFgOAGgOQgngMgcgjQgjgqAAgzQgBgqAYgkQgbgNgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgpAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgKAAgMQgBgzAjgqQAigrAygLQAWgFAXADQAGgiAZgeQAigrAygLQAxgKAvAYQAIgQAMgOQAigrAxgLQAygKAwAZQAhARAVAbQANgGAPgDQAygKAwAZQAnAUAVAhQAmgWAqACQA5ADAoAnQAlAlAFA3QAFA3gdArQgdArg1APQg2APgvgVQgogRgYgoQgVAMgYAFQgeAGgdgGQgygJgjgrIgGgIQgOAHgQADQgeAGgdgGQgUgEgRgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgDAAQAEAfgJAhQgPA0goAdQAUAvgPA0QgKAkgWAYQAYAUAMAeQAVAvgPA0QgGAVgKARIABABQAxAZAUAvQARAmgHAqQANAAAMACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQgTADgTAAQgnAAglgPg");
	var mask_10_graphics_9 = new cjs.Graphics().p("AmVL3Qg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgOQgngMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgpAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgKAAgMQgBgzAjgqQAigrAygLQAWgFAWADQAHgiAZgeQAigrAygLQAxgKAvAYQAIgQAMgOQAigrAygLQAxgKAwAZQAhARAUAbQAOgGAPgDQAygKAwAZQAnAUAUAhQAmgWArACQA5ADAoAnQAaAaAKAiQAmgHAoAOQAxARAbApQAbApgEA0QgFA0ggAkQgaAdgmAMQgmANgmgIQgwgJgigoQgVgYgKgcQguAKgqgTQgogRgZgoQgUAMgYAFQgeAGgdgGQgygJgjgrIgGgIQgOAHgQADQgdAGgdgGQgUgEgSgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgEAAQAFAfgJAhQgPA0gpAdQAVAvgPA0QgKAkgXAYQAYAUANAeQAVAvgPA0QgGAVgKARIABABQAxAZAUAvQARAmgHAqQANAAAMACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQgTADgTAAQgnAAglgPg");
	var mask_10_graphics_10 = new cjs.Graphics().p("AnRL3Qg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgOQgngMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgpAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgKAAgMQgBgzAjgqQAigrAygLQAWgFAWADQAHgiAZgeQAigrAygLQAwgKAwAYQAIgQAMgOQAigrAygLQAygKAwAZQAgARAUAbQAOgGAPgDQAygKAwAZQAmAUAVAhQAmgWArACQA5ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgygJgigrQgjgqgBgzIABgPIgBAAQgwgJgigoQgVgYgKgcQguAKgqgTQgogRgZgoQgUAMgYAFQgeAGgdgGQgygJgigrIgGgIQgOAHgQADQgeAGgdgGQgUgEgSgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgEAAQAFAfgJAhQgPA0gpAdQAUAvgOA0QgLAkgWAYQAYAUANAeQAVAvgPA0QgGAVgKARIABABQAxAZAUAvQARAmgHAqQAMAAANACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQgTADgTAAQgnAAglgPg");
	var mask_10_graphics_11 = new cjs.Graphics().p("AohL3Qg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgOQgngMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgpAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgKAAgMQgBgzAjgqQAigrAygLQAWgFAWADQAHgiAZgeQAigrAygLQAwgKAwAYQAIgQAMgOQAigrAygLQAygKAwAZQAhARAUAbQAOgGAOgDQAygKAwAZQAmAUAVAhQAmgWArACQA5ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0IAAACQArgFArAWQAwAZAVAvQAUAvgPA0QgPA0gpAdQgZASgeAGQgfAGgdgGQgygJgigrQgjgpgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgjgqgBgzIABgPIgBAAQgwgJgigoQgVgYgKgcQguAKgqgTQgogRgZgoQgUAMgYAFQgeAGgdgGQgxgJgjgrIgGgIQgOAHgQADQgeAGgdgGQgUgEgSgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgEAAQAFAfgJAhQgPA0gpAdQAUAvgOA0QgLAkgWAYQAYAUANAeQAVAvgPA0QgGAVgKARIABABQAxAZAUAvQARAmgHAqQAMAAANACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQgTADgTAAQgnAAglgPg");
	var mask_10_graphics_12 = new cjs.Graphics().p("ApdL3Qg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgOQgngMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgpAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgKAAgMQgBgzAjgqQAigrAygLQAWgFAWADQAHgiAZgeQAigrAygLQAwgKAwAYQAIgQAMgOQAigrAygLQAygKAwAZQAhARAUAbQAOgGAPgDQAygKAvAZQAmAUAVAhQAmgWArACQA5ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0IAAACQArgFArAWQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAuQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgygJgigrQgjgqgBgzIABgPIgBAAQgygJgigrQgjgpgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgjgqgBgzIABgPIgBAAQgwgJgigoQgVgYgKgcQguAKgqgTQgogRgZgoQgUAMgYAFQgdAGgdgGQgygJgjgrIgGgIQgOAHgQADQgeAGgdgGQgUgEgSgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgEAAQAFAfgJAhQgPA0gpAdQAUAvgOA0QgLAkgWAYQAYAUANAeQAVAvgPA0QgGAVgKARIABABQAxAZAUAvQARAmgHAqQAMAAANACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQgTADgTAAQgnAAglgPg");
	var mask_10_graphics_13 = new cjs.Graphics().p("AqjL3Qg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgOQgngMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgpAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgKAAgMQgBgzAjgqQAigrAygLQAWgFAWADQAHgiAZgeQAigrAygLQAwgKAwAYQAIgQAMgOQAigrAygLQAygKAwAZQAhARAUAbQAOgGAPgDQAygKAwAZQAlAUAVAhQAmgWArACQA5ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0IAAACQArgFArAWQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAuQAUAvgPA0IgHAVQAlgBAkATQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgygJgigrQgjgqgBgzQAAghAOgdQgRABgRgEQgygJgigrQgjgqgBgzIABgPIgBAAQgygJgigrQgjgpgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgjgqgBgzIABgPIgBAAQgwgJgigoQgVgYgKgcQguAKgqgTQgogRgYgoQgUAMgYAFQgeAGgdgGQgygJgjgrIgGgIQgOAHgQADQgeAGgdgGQgUgEgSgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgEAAQAFAfgJAhQgPA0gpAdQAUAvgOA0QgLAkgWAYQAYAUANAeQAVAvgPA0QgGAVgKARIABABQAxAZAUAvQARAmgHAqQAMAAANACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQgTADgTAAQgnAAglgPg");
	var mask_10_graphics_14 = new cjs.Graphics().p("ArfL3Qg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgOQgngMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgpAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgKAAgMQgBgzAjgqQAigrAygLQAWgFAWADQAHgiAZgeQAigrAygLQAwgKAwAYQAIgQAMgOQAigrAygLQAygKAwAZQAhARAUAbQAOgGAPgDQAygKAwAZQAmAUAVAhQAlgWArACQA5ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0IAAACQArgFArAWQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAuQAUAvgPA0IgHAVQAlgBAkATQAwAZAVAvQATAsgMAxQAWAEAWALQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgfAGgdgGQgygJgigrQgjgqgBgzQAAgRAEgRIgEgBQgygJgigrQgjgqgBgzQAAghAOgdQgRABgRgEQgygJgigrQgjgqgBgzIABgPIgBAAQgygJgigrQgjgpgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgjgqgBgzIABgPIgBAAQgwgJgigoQgVgYgKgcQguAKgpgTQgogRgZgoQgUAMgYAFQgeAGgdgGQgygJgjgrIgGgIQgOAHgQADQgeAGgdgGQgUgEgSgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgEAAQAFAfgJAhQgPA0gpAdQAUAvgOA0QgLAkgWAYQAYAUANAeQAVAvgPA0QgGAVgKARIABABQAxAZAUAvQARAmgHAqQAMAAANACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQgTADgTAAQgnAAglgPg");
	var mask_10_graphics_15 = new cjs.Graphics().p("AOFMIQgygJgigrQgjgqgBgzIABgPIgBAAQgygJgigrQgjgqgBgzQAAgSAEgQIgEgBQgygJgigrQgjgqgBgzQAAghAOgdQgRABgRgEQgygJgigrQgjgqgBgzIABgPIgBAAQgygJgigrQgjgpgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgjgqgBgzIABgPIgBAAQgwgJgigoQgVgYgKgcQgtAKgqgTQgogSgZgnQgUAMgYAFQgeAGgdgGQgygJgjgrIgGgIQgOAGgQAEQgeAGgdgGQgUgEgSgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgEAAQAFAfgJAhQgPA0gpAdQAUAvgOA0QgLAkgWAYQAYAUANAeQAVAvgPA0QgGAVgKARIABABQAxAZAUAvQARAmgHAqQAMAAANACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQg8AKg2gWQg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgOQgngMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgpAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgLAAgLQgBgzAjgqQAigrAygLQAWgFAWADQAHgiAZgeQAigrAygLQAwgKAwAYQAIgQAMgOQAigrAygLQAygKAwAZQAhARAUAbQAOgGAPgDQAygKAwAZQAmAUAVAhQAmgWArACQA4ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0IAAACQArgFArAWQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAuQAUAvgPA0IgHAVQAlgBAkATQAwAZAVAvQATAsgMAxQAWAEAWALQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgQADgQAAQgOAAgOgDg");
	var mask_10_graphics_16 = new cjs.Graphics().p("AOyNTQgygJgigrQgjgqgBgzIABgOQgggOgXgdQgjgqgBgzIABgPIgBAAQgygJgigrQgjgqgBgzQAAgSAEgQIgEgBQgygJgigrQgjgqgBgzQAAghAOgdQgRABgRgEQgygJgigrQgjgqgBgzIABgOIgBAAQgygJgigrQgjgqgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgjgqgBgzIABgPIgBAAQgwgJghgoQgVgYgKgcQguAKgqgTQgogSgZgnQgUAMgYAFQgeAGgdgGQgygJgjgrIgGgIQgOAGgQAEQgeAGgdgGQgUgEgSgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgEAAQAFAfgJAhQgPA0gpAdQAUAvgOA0QgLAkgWAZQAYAUANAeQAVAugPA0QgGAVgKARIABABQAxAZAUAvQARAmgHAqQAMAAANACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQg8AKg2gWQg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgOQgngMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgaQgjgqAAgzQgBgyAjgqIAGgIIgPgQQgjgqAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgLAAgLQgBgzAjgqQAigrAygLQAWgFAWADQAHgiAZgeQAigrAygLQAwgKAwAYQAIgQAMgOQAigrAygLQAygKAwAZQAhARAUAbQAOgGAPgDQAygKAwAZQAmAUAVAhQAmgWArACQA4ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0IAAACQArgFArAWQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAvQAUAvgPAzIgHAVQAlgBAkATQAwAZAVAvQATAsgMAxQAWAEAWALQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAvQAPAjgFAmIALAFQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgQADgQAAQgOAAgOgDg");
	var mask_10_graphics_17 = new cjs.Graphics().p("AQCOjQgygJgigrQgjgqgBgzIABgNQgVACgUgEQgygJgigrQgjgqgBgzIABgOQgggOgXgdQgjgqgBgzIABgPIgBAAQgygJgigrQgjgqgBgzQAAgSAEgQIgEgBQgygJgigrQgjgqgBgzQAAghAOgdQgRABgRgEQgygJgigrQgjgpgBgzIABgPIgBAAQgygJgigrQgjgqgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgigqgBgzIABgPIgBAAQgwgJgigoQgVgYgKgcQguAKgqgTQgogSgZgnQgUAMgYAFQgeAGgdgGQgygJgjgrIgGgIQgOAGgQAEQgeAGgdgGQgUgEgSgJQgQAlggAWQgZASgeAGQgXAFgWgDIgDAMQgPA1gqAdQgZASgeAGIgEAAQAFAfgJAhQgPA0gpAdQAUAvgOA0QgLAkgWAZQAYAUANAeQAVAvgPAzQgGAVgKARIABABQAxAZAUAvQARAmgHAqQAMAAANACQA7AJAwAoQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQg8AKg2gWQg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgOQgngMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgaQgjgqAAgyQgBgzAjgqIAGgIIgPgQQgjgqAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEgBQgCgLAAgLQgBgzAjgqQAigrAygLQAWgFAWADQAHgiAZgeQAigrAygLQAwgKAwAYQAIgQAMgOQAigrAygLQAygKAwAZQAhARAUAbQAOgGAPgDQAygKAwAZQAmAUAVAhQAmgWArACQA5ADAoAnQAZAaALAiQAlgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0IAAACQArgFArAWQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAvQAUAvgPA0IgHAVQAlgBAkASQAwAZAVAvQATAsgMAxQAWAEAWALQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAvQAPAjgFAmIALAFQAwAZAVAvQAOAigDAkQAogDAoAVQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgQADgQAAQgOAAgOgDg");
	var mask_10_graphics_18 = new cjs.Graphics().p("ARLP4QgvgKgjgoQgigogCgyQgBgOACgNQgPAAgQgDQgygJgjgrQgigqgBgzIAAgNQgUACgUgEQgygJgjgrQgjgqAAgzIABgOQgggNgYgeQgjgqAAgzIABgPIgBAAQgygJgjgrQgigqgBgzQAAgRAEgRIgEgBQgygJgjgrQgjgqAAgzQAAghAOgcQgRABgRgEQgygJgjgrQgigqgBgzIAAgPIAAAAQgygJgjgrQgjgqAAgzQAAgWAGgVQgXADgXgFQgxgJgjgrQgigqgBgzIAAgPIgBAAQgvgJgjgoQgVgYgJgcQguAKgqgTQgogRgZgoQgUAMgYAFQgfAGgdgGQgygJgigrIgGgIQgOAHgQADQgfAGgdgGQgTgEgSgJQgQAlggAWQgZASgeAGQgXAFgXgDIgDAMQgPA1gpAdQgZASgeAGIgEAAQAFAfgKAhQgOA0gpAdQAUAvgPA0QgKAkgWAZQAYAUANAeQAUAvgPA0QgFAVgKARIABABQAwAZAVAuQARAmgHAqQAMAAANACQA7AJAvAoQAwApAQA5QARA5gRA8QgRA8gtAoQgrAmg8ALQg8AKg1gWQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgOQgmgMgcgjQgjgqAAgzQgBgqAXgkQgagNgVgZQgjgqgBgzQAAgzAigqIAHgIIgPgQQgjgqgBgzQAAgzAjgqQANgRAPgMQgMgbgBgfQAAgzAigqQAigrAzgLIADgBQgBgKgBgMQAAgzAjgqQAhgrAygLQAXgFAWADQAHgiAYgeQAigrAzgLQAwgKAwAYQAIgQAMgOQAhgrAygLQAzgKAwAZQAhARAUAbQAOgGAOgDQAzgKAwAZQAmAUAVAhQAmgWArACQA4ADAoAnQAaAaALAiQAmgHAoAOQAwARAaApQAbApgEA0IAAACQAUAFAUAKQAxAZAUAvQAVAvgPA0IgBACQAsgFAqAWQAxAZAVAvQAPAjgFAmQAVAFATAKQAxAZAUAvQAVAvgPA0IgHAVQAkgBAkATQAxAZAVAvQATArgMAxQAWAEAVALQAxAZAUAvQAQAjgFAmQAVAFAUAKQAwAZAUAvQAQAjgFAmIALAFQAwAZAUAvQAPAigEAkQApgDAnAVQAxAZAUAvQARAmgHAqQAdAAAcALQAxATAaArQATAhABApQABAogTAiQgXApgtAVQgfAPggAAQgPAAgPgDg");
	var mask_10_graphics_19 = new cjs.Graphics().p("AR2QsQgtgcgSg3QgGgUgBgTQgfAHgggHQgwgKgigoQgigogCgxQgBgOACgNQgQAAgPgDQgygKgjgqQgjgqAAgzIAAgNQgUACgUgEQgygKgjgqQgjgqAAgzIAAgOQgfgOgYgdQgjgqAAgzIAAgPIAAAAQgygKgjgqQgjgqAAgzQAAgSAEgQIgEgBQgygKgjgqQgjgqAAgyQAAghAOgdQgRAAgRgDQgygKgjgqQgjgqAAgzIAAgPIAAAAQgygKgjgqQgigqAAgzQAAgXAGgUQgXADgXgFQgygKgjgqQgjgqAAgzIAAgPIgBAAQgvgKgjgnQgVgZgJgcQguAKgqgSQgpgSgYgnQgUAMgYAEQgfAHgdgGQgygKgigqIgGgIQgOAGgQADQgfAHgdgGQgTgEgSgJQgQAlggAWQgZARgeAGQgXAFgXgCIgDAMQgPA1gpAdQgZARgeAGIgEABQAFAfgKAhQgOA0gpAdQAUAvgPA0QgKAkgWAYQAYAVANAdQAUAvgPA1QgFAVgLARIACABQAwAZAVAuQARAmgHAqQAMAAANACQA7AIAvApQAvApARA5QARA5gRA8QgRA8gtAnQgrAng8AKQg8AKg1gVQg2gWgkgxQgkgxgEg6QgBgPABgRQACgWAHgYQAEgNAGgOQgmgNgcgiQgjgqgBgzQAAgpAXgkQgagOgVgZQgjgqgBgzQAAgzAigrIAHgHIgPgQQgjgqgBgzQAAgzAigrQAOgQAPgMQgMgcgBgeQAAgzAigrQAigrAygKIAEgBQgBgLgBgLQAAgzAigrQAigqAygLQAXgFAWADQAHgjAYgeQAigrAygKQAxgKAwAYQAIgQALgPQAigqAygLQAygLAxAaQAhARAUAbQAOgGAOgDQAygLAxAaQAmAUAVAhQAmgXArACQA4ADAoAoQAaAZALAjQAmgIAoAOQAxARAaApQAaApgEA0IAAADQAUAEAUALQAxAZAUAuQAVAvgPA1IgBACQAsgGAqAXQAxAZAUAuQAQAkgFAmQAUAEAUALQAxAZAUAuQAVAvgPA1IgHAVQAkgBAkATQAxAZAUAuQAUAsgMAwQAWAEAVAMQAxAZAUAuQAQAkgFAmQAUAEAUALQAxAZAUAuQAQAkgFAmIAKAFQAxAZAUAuQAPAigEAlQApgDAnAVQAxAZAUAuQARAngHAqQAdAAAcALQAxATAZAqQAUAhABAnQAjgJAjAKQA0AOAgAvQAgAvgHA1QgFArgbAiQgiApg5AKQgOACgOAAQgoAAgigUg");
	var mask_10_graphics_20 = new cjs.Graphics().p("AT3R6QgygKgigqQgagfgHgkQgyAFgpgZQgugcgRg2QgHgUgBgUQgfAIgfgHQgwgKgigoQgigogDgyQAAgNACgOQgQABgQgEQgygJgigrQgjgqgBgzIABgMQgVABgUgEQgygJgigrQgjgqgBgzIABgOQgggNgXgeQgjgqgBgzIABgOIgBgBQgygJgigrQgjgqgBgzQAAgRAEgRIgEgBQgygJgigrQgjgpgBgzQAAghAOgdQgRABgRgEQgygJgigrQgjgqgBgzIABgOIgBgBQgxgJgigrQgjgqgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgjgqgBgzIABgOIgBgBQgwgJgigoQgVgYgKgcQguAKgqgTQgogRgZgoQgUAMgYAFQgeAGgdgGQgygJgjgrIgGgHQgOAGgQADQgeAGgdgGQgUgDgSgJQgQAkggAWQgZASgeAGQgXAFgWgCIgDALQgPA1gqAdQgZASgeAGIgEABQAFAegJAhQgPA1gpAcQAUAvgOA0QgLAkgWAZQAYAVANAdQAVAvgPA0QgGAVgKASIABAAQAxAZAUAvQARAmgHAqQAMABANABQA7AJAwAnQAvApARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQg8AKg2gWQg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgNQgngNgcgjQgjgqAAgyQgBgpAXgkQgagOgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgqAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEAAQgCgLAAgMQgBgzAjgqQAigrAygLQAWgEAWACQAHgiAZgeQAigrAygLQAwgKAwAYQAIgPAMgPQAigrAygLQAygKAwAZQAhARAUAcQAOgHAPgDQAygKAwAZQAmAUAVAhQAmgWArACQA5ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAvAZAVAvQAUAvgPA0IAAACQArgFArAWQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAvQAUAvgPA0IgHAVQAlgBAkATQAwAZAVAvQATAsgMAxQAWAEAWALQAwAZAVAuQAPAjgFAmQAVAFAUAKQAwAZAVAvQAPAjgFAmIALAFQAwAZAVAvQAOAigDAlQAogDAoAUQAwAZAVAvQAQAmgHAqQAdAAAdALQAxATAZArQATAgACAnQAjgIAjAJQAzAOAgAwQASAaAGAbQApgDApAVQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgQAEgQAAQgOAAgOgDg");
	var mask_10_graphics_21 = new cjs.Graphics().p("AVRSxQgygKgigqQgYgcgIggIgEABQgfAHgdgGQgygKgigqQgagfgHgkQgyAFgpgZQgugcgRg2QgHgUgBgUQgfAIgfgHQgwgKgigoQgigogDgyQAAgNACgOQgQABgQgEQgygJgigrQgjgqgBgzIABgMQgVABgUgEQgygJgigrQgjgqgBgzIABgOQgggNgXgeQgjgqgBgzIABgOIgBgBQgygJgigrQgjgqgBgzQAAgRAEgRIgEgBQgygJgigqQgjgqgBgzQAAghAOgdQgRABgRgEQgygJghgrQgjgqgBgzIABgOIgBgBQgygJgigrQgjgqgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgjgqgBgzIABgOIgBgBQgwgJgigoQgVgYgKgcQguAKgqgTQgogRgZgoQgUAMgYAFQgeAGgdgGQgygJgjgrIgGgHQgOAGgQADQgeAGgdgGQgUgDgSgJQgQAkggAWQgZASgeAGQgXAFgWgCIgDALQgPA1gqAdQgZASgeAGIgEABQAFAegJAhQgPA1gpAcQAUAvgOA0QgLAkgWAZQAYAVANAdQAVAvgPA0QgGAVgKASIABAAQAxAZAUAvQARAmgHAqQAMABANABQA7AJAwAoQAvAoARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQg8AKg2gWQg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgNQgngNgcgiQgjgqAAgzQgBgpAXgkQgagOgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgqAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEAAQgCgLAAgMQgBgzAjgqQAigrAygLQAWgEAWACQAHgiAZgeQAigrAygLQAwgKAwAYQAIgPAMgPQAigrAygLQAygKAwAZQAhARAUAcQAOgHAPgDQAygKAwAZQAmAUAVAhQAmgWArACQA5ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0IAAACQArgFAqAWQAwAZAVAvQAPAjgFAmQAVAFAUAKQAwAZAVAvQAUAvgPA0IgHAVQAlgBAkATQAwAZAVAvQATAsgMAxQAWAEAWALQAwAZAVAvQAPAigFAmQAVAFAUAKQAwAZAVAvQAPAjgFAmIALAFQAwAZAVAvQAOAigDAlQAogDAoAUQAwAZAVAvQAQAmgHAqQAdAAAdALQAxATAZArQATAgACAnQAjgIAjAJQAzAOAgAwQASAaAGAbQApgDApAVQAwAZAVAuQAFAMADANIAEgBQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgQAEgQAAQgOAAgOgDg");
	var mask_10_graphics_22 = new cjs.Graphics().p("AT3SxQgygKgigqQgYgcgIggIgEABQgfAHgdgGQgygKgigqQgagfgHgkQgyAFgpgZQgugcgRg2QgHgUgBgUQgfAIgfgHQgwgKgigoQgigogDgyQAAgNACgOQgQABgQgEQgygJgigrQgjgqgBgzIABgMQgVABgUgEQgygJgigrQgjgqgBgzIABgOQgggNgXgeQgjgqgBgzIABgOIgBgBQgygJgigrQgjgqgBgzQAAgRAEgRIgEgBQgygJgigqQgigqgBgzQAAghANgdQgQABgRgEQgygJgigrQgjgqgBgzIABgOIgBgBQgygJgigrQgjgqgBgzQAAgWAGgVQgXADgXgFQgygJgigrQgjgqgBgzIABgOIgBgBQgwgJgigoQgVgYgKgcQguAKgqgTQgogRgZgoQgUAMgYAFQgeAGgdgGQgygJgjgrIgGgHQgOAGgQADQgeAGgdgGQgUgDgSgJQgQAkggAWQgZASgeAGQgXAFgWgCIgDALQgPA1gqAdQgZASgeAGIgEABQAFAegJAhQgPA1gpAcQAUAvgOA0QgLAkgWAZQAYAVANAdQAVAvgPA0QgGAVgKASIABAAQAxAZAUAvQARAmgHAqQAMABANABQA7AJAwAoQAvAoARA5QARA5gRA8QgSA8gsAoQgrAmg8ALQg8AKg2gWQg1gVgkgxQgkgxgEg6QgCgQACgQQABgXAHgXQAEgOAHgNQgngNgcgiQgjgqAAgzQgBgpAXgkQgagOgVgaQgjgqAAgzQgBgzAjgqIAGgIIgPgQQgjgqAAgzQgBgzAjgqQANgRAQgMQgNgbAAgfQgBgzAjgqQAigrAygLIAEAAQgCgLAAgMQgBgzAjgqQAigrAygLQAWgEAWACQAHgiAZgeQAigrAygLQAwgKAwAYQAIgPAMgPQAigrAygLQAygKAwAZQAhARAUAcQAOgHAPgDQAygKAwAZQAmAUAVAhQAmgWArACQA5ADAoAnQAZAaALAiQAmgHAoAOQAxARAbApQAbApgEA0IgBACQAVAFAUAKQAwAZAVAvQAUAvgPA0IAAACQArgFArAWQAwAZAUAvQAPAjgFAmQAVAFAUAKQAwAZAVAvQAUAvgPA0IgHAVQAlgBAkATQAwAZAVAvQATAsgMAxQAWAEAWALQAwAZAVAvQAPAigFAmQAVAFAUAKQAwAZAVAvQAPAjgFAmIALAFQAwAZAVAvQAOAigDAlQAogDAoAUQAwAZAVAvQAQAmgHAqQAdAAAdALQAxATAZArQATAgACAnQAjgIAjAJQAzAOAgAwQASAaAGAbQApgDApAVQAwAZAVAuQAFAMADANIAEgBQAygLAxAaIAPAJQAdgaAlgIQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgfAHgdgGQgegGgYgRIgLAJQgZARgeAGQgQAEgQAAQgOAAgOgDg");
	var mask_10_graphics_23 = new cjs.Graphics().p("ATPSxQgygKgjgqQgXgcgIggIgFABQgeAHgdgGQgygKgjgqQgagfgHgkQgyAFgpgZQgtgcgSg2QgGgUgBgUQgfAIgggHQgwgKgigoQgigogCgyQgBgNACgOQgQABgPgEQgygJgjgrQgjgqAAgzIAAgMQgUABgUgEQgygJgjgrQgjgqAAgzIAAgOQgfgNgYgeQgjgqAAgzIAAgOIAAgBQgygJgjgrQgjgqAAgzQAAgRAEgRIgEgBQgygJgigqQgjgqAAgzQAAghAOgdQgRABgRgEQgygJgjgrQgjgqAAgzIAAgOIAAgBQgygJgjgrQgjgqAAgzQAAgWAGgVQgXADgXgFQgygJgjgrQgjgqAAgzIAAgOIgBgBQgvgJgjgoQgVgYgJgcQgvAKgpgTQgpgRgYgoQgUAMgYAFQgfAGgdgGQgygJgigrIgGgHQgPAGgPADQgfAGgdgGQgUgDgRgJQgQAkggAWQgZASgeAGQgXAFgXgCIgDALQgPA1gpAdQgZASgeAGIgEABQAFAegKAhQgOA1gpAcQAUAvgPA0QgKAkgWAZQAYAVANAdQAUAvgPA0QgGAVgKASIACAAQAwAZAVAvQARAmgHAqQAMABANABQA7AJAvAoQAvAoARA5QARA5gRA8QgRA8gtAoQgrAmg8ALQg8AKg1gWQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgNQgmgNgcgiQgjgqgBgzQAAgpAXgkQgagOgVgaQgjgqgBgzQAAgzAigqIAHgIIgPgQQgjgqgBgzQAAgzAigqQAOgRAPgMQgMgbgBgfQAAgzAigqQAigrAygLIAEAAQgCgLAAgMQAAgzAigqQAigrAygLQAXgEAWACQAHgiAYgeQAigrAygLQAxgKAwAYQAHgPAMgPQAigrAygLQAygKAxAZQAhARAUAcQANgHAPgDQAygKAxAZQAmAUAVAhQAmgWArACQA4ADAoAnQAaAaALAiQAmgHAoAOQAxARAaApQAbApgEA0IAAACQAUAFAUAKQAxAZAUAvQAVAvgPA0IgBACQAsgFAqAWQAxAZAUAvQAQAjgFAmQATAFAUAKQAxAZAUAvQAVAvgPA0IgHAVQAkgBAkATQAxAZAUAvQAUAsgMAxQAWAEAVALQAxAZAUAvQAQAigFAmQAUAFAUAKQAxAZAUAvQAQAjgFAmIAKAFQAxAZAUAvQAPAigEAlQApgDAnAUQAxAZAUAvQARAmgHAqQAdAAAcALQAxATAZArQAUAgABAnQAjgIAjAJQA0AOAgAwQARAaAGAbQAqgDAoAVQAxAZAUAuQAGAMADANIAEgBQAygLAwAaIAQAJQAQgOASgJQgOg1AWguQAXgwA0gXQA1gXAyAQQAkALAbAbQAbAcAKAkQAKAkgJAmQgJAmgZAcQgTAWgbAMQAJAkgLAoQgPA1gqAdQgZARgeAGQgeAHgdgGQgegGgYgRIgMAJQgZARgeAGQgPAEgQAAQgOAAgOgDg");
	var mask_10_graphics_24 = new cjs.Graphics().p("ATPSxQgygKgjgqQgXgcgIggIgFABQgeAHgdgGQgygKgjgqQgagfgHgkQgyAFgpgZQgtgcgSg2QgGgUgBgUQgfAIgggHQgwgKgigoQgigogCgyQgBgNACgOQgQABgPgEQgygJgjgrQgjgqAAgzIAAgMQgUABgUgEQgygJgjgrQgjgqAAgzIAAgOQgfgNgYgeQgjgqAAgzIAAgOIAAgBQgygJgjgrQgjgqAAgzQAAgRAEgRIgEgBQgygJgigqQgjgqAAgzQAAghAOgdQgRABgRgEQgygJgjgrQgjgqAAgzIAAgOIAAgBQgygJgjgrQgjgqAAgzQAAgWAGgVQgXADgXgFQgygJgjgrQgjgqAAgzIAAgOIgBgBQgvgJgjgoQgVgYgJgcQgvAKgpgTQgpgRgYgoQgUAMgYAFQgfAGgdgGQgygJgigrIgGgHQgPAGgPADQgfAGgdgGQgUgDgRgJQgQAkggAWQgZASgeAGQgXAFgXgCIgDALQgPA1gpAdQgZASgeAGIgEABQAFAegKAhQgOA1gpAcQAUAvgPA0QgKAkgWAZQAYAVANAdQAUAvgPA0QgGAVgKASIACAAQAwAZAVAvQARAmgHAqQAMABANABQA7AJAvAoQAvAoARA5QARA5gRA8QgRA8gtAoQgrAmg8ALQg8AKg1gWQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgNQgmgNgcgiQgjgqgBgzQAAgpAXgkQgagOgVgaQgjgqgBgzQAAgzAigqIAHgIIgPgQQgjgqgBgzQAAgzAigqQAOgRAPgMQgMgbgBgfQAAgzAigqQAigrAygLIAEAAQgCgLAAgMQAAgzAigqQAigrAygLQAXgEAWACQAHgiAYgeQAigrAygLQAxgKAwAYQAHgPAMgPQAigrAygLQAygKAxAZQAhARAUAcQANgHAPgDQAygKAxAZQAmAUAVAhQAmgWArACQA4ADAoAnQAaAaALAiQAmgHAoAOQAxARAaApQAbApgEA0IAAACQAUAFAUAKQAxAZAUAvQAVAvgPA0IgBACQAsgFAqAWQAxAZAUAvQAQAjgFAmQATAFAUAKQAxAZAUAvQAVAvgPA0IgHAVQAkgBAkATQAxAZAUAvQAUAsgMAxQAWAEAVALQAxAZAUAvQAQAigFAmQAUAFAUAKQAxAZAUAvQAQAjgFAmIAKAFQAxAZAUAvQAPAigEAlQApgDAnAUQAxAZAUAvQARAmgHAqQAdAAAcALQAxATAZArQAUAgABAnQAjgIAjAJQA0AOAgAwQARAaAGAbQAqgDAoAVQAxAZAUAuQAGAMADANIAEgBQAygLAwAaIAQAJQAQgOASgJQgOg1AWguQAIgRANgOQgMgDgLgEQgsgSgagqQgagrAEguQAEgvAggmQAggmAtgLQAugLAuATQAuATAYAoQAZAogEAyQgEAwgdAjIAJADQAkALAbAbQAbAcAKAkQAKAkgJAmQgJAmgZAcQgTAWgbAMQAJAkgLAoQgPA1gqAdQgZARgeAGQgeAHgdgGQgegGgYgRIgMAJQgZARgeAGQgPAEgQAAQgOAAgOgDg");
	var mask_10_graphics_25 = new cjs.Graphics().p("ATPSxQgygKgjgqQgXgcgIggIgFABQgeAHgdgGQgygKgjgqQgagfgHgkQgyAFgpgZQgtgcgSg2QgGgUgBgUQgfAIgggHQgwgKgigoQgigogCgyQgBgNACgOQgQABgPgEQgygJgjgrQgjgqAAgzIAAgMQgUABgUgEQgygJgjgrQgjgqAAgzIAAgOQgfgNgYgeQgjgqAAgzIAAgOIAAgBQgygJgjgrQgjgqAAgzQAAgRAEgRIgEgBQgygJgigqQgjgqAAgzQAAghAOgdQgRABgRgEQgygJgjgrQgjgqAAgzIAAgOIAAgBQgygJgjgrQgjgqAAgzQAAgWAGgVQgXADgXgFQgygJgjgrQgjgqAAgzIAAgOIgBgBQgvgJgjgoQgVgYgJgcQgvAKgpgTQgpgRgYgoQgUAMgYAFQgfAGgdgGQgygJgigrIgGgHQgPAGgPADQgfAGgdgGQgUgDgRgJQgQAkggAWQgZASgeAGQgXAFgXgCIgDALQgPA1gpAdQgZASgeAGIgEABQAFAegKAhQgOA1gpAcQAUAvgPA0QgKAkgWAZQAYAVANAdQAUAvgPA0QgGAVgKASIACAAQAwAZAVAvQARAmgHAqQAMABANABQA7AJAvAoQAvAoARA5QARA5gRA8QgRA8gtAoQgrAmg8ALQg8AKg1gWQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgNQgmgNgcgiQgjgqgBgzQAAgpAXgkQgagOgVgaQgjgqgBgzQAAgzAigqIAHgIIgPgQQgjgqgBgzQAAgzAigqQAOgRAPgMQgMgbgBgfQAAgzAigqQAigrAygLIAEAAQgCgLAAgMQAAgzAigqQAigrAygLQAXgEAWACQAHgiAYgeQAigrAygLQAxgKAwAYQAHgPAMgPQAigrAygLQAygKAxAZQAhARAUAcQANgHAPgDQAygKAxAZQAmAUAVAhQAmgWArACQA4ADAoAnQAaAaALAiQAmgHAoAOQAxARAaApQAbApgEA0IAAACQAUAFAUAKQAxAZAUAvQAVAvgPA0IgBACQAsgFAqAWQAxAZAUAvQAQAjgFAmQATAFAUAKQAxAZAUAvQAVAvgPA0IgHAVQAkgBAkATQAxAZAUAvQAUAsgMAxQAWAEAVALQAxAZAUAvQAQAigFAmQAUAFAUAKQAxAZAUAvQAQAjgFAmIAKAFQAxAZAUAvQAPAigEAlQApgDAnAUQAxAZAUAvQARAmgHAqQAdAAAcALQAxATAZArQAUAgABAnQAjgIAjAJQA0AOAgAwQARAaAGAbQAqgDAoAVQAxAZAUAuQAGAMADANIAEgBQAygLAwAaIAQAJQAQgOASgJQgOg1AWguQAIgRANgOQgMgDgLgEQgsgSgagqQgagrAEguQADgiARgdIgBAAQgeAGgdgGQgygJgjgrQgjgqAAgzIAAgMIgUgDQgygJgjgrQgjgqAAgzQgBgzAjgqQAigrAygLQAygKAwAZQAxAZAUAvQAPAigEAlQAfACAdAPQAxAZAUAvQAVAvgPA0QgFATgJAQQAsgKAsASQAuATAYAoQAZAogEAyQgEAwgdAjIAJADQAkALAbAbQAbAcAKAkQAKAkgJAmQgJAmgZAcQgTAWgbAMQAJAkgLAoQgPA1gqAdQgZARgeAGQgeAHgdgGQgegGgYgRIgMAJQgZARgeAGQgPAEgQAAQgOAAgOgDg");
	var mask_10_graphics_26 = new cjs.Graphics().p("ATPSxQgygKgjgqQgXgcgIggIgFABQgeAHgdgGQgygKgjgqQgagfgHgkQgyAFgpgZQgtgcgSg2QgGgUgBgUQgfAIgggHQgwgKgigoQgigogCgyQgBgNACgOQgQABgPgEQgygJgjgrQgjgqAAgzIAAgMQgUABgUgEQgygJgjgrQgjgqAAgzIAAgOQgfgNgYgeQgjgqAAgzIAAgOIAAgBQgygJgjgrQgjgqAAgzQAAgRAEgRIgEgBQgygJgigqQgjgqAAgzQAAghAOgdQgRABgRgEQgygJgjgrQgjgqAAgzIAAgOIAAgBQgygJgjgrQgjgqAAgzQAAgWAGgVQgXADgXgFQgygJgjgrQgjgqAAgzIAAgOIgBgBQgvgJgjgoQgVgYgJgcQgvAKgpgTQgpgRgYgoQgUAMgYAFQgfAGgdgGQgygJgigrIgGgHQgPAGgPADQgfAGgdgGQgUgDgRgJQgQAkggAWQgZASgeAGQgXAFgXgCIgDALQgPA1gpAdQgZASgeAGIgEABQAFAegKAhQgOA1gpAcQAUAvgPA0QgKAkgWAZQAYAVANAdQAUAvgPA0QgGAVgKASIACAAQAwAZAVAvQARAmgHAqQAMABANABQA7AJAvAoQAvAoARA5QARA5gRA8QgRA8gtAoQgrAmg8ALQg8AKg1gWQg2gVgkgxQgkgxgEg6QgBgQABgQQACgXAHgXQAEgOAGgNQgmgNgcgiQgjgqgBgzQAAgpAXgkQgagOgVgaQgjgqgBgzQAAgzAigqIAHgIIgPgQQgjgqgBgzQAAgzAigqQAOgRAPgMQgMgbgBgfQAAgzAigqQAigrAygLIAEAAQgCgLAAgMQAAgzAigqQAigrAygLQAXgEAWACQAHgiAYgeQAigrAygLQAxgKAwAYQAHgPAMgPQAigrAygLQAygKAxAZQAhARAUAcQANgHAPgDQAygKAxAZQAmAUAVAhQAmgWArACQA4ADAoAnQAaAaALAiQAmgHAoAOQAxARAaApQAbApgEA0IAAACQAUAFAUAKQAxAZAUAvQAVAvgPA0IgBACQAsgFAqAWQAxAZAUAvQAQAjgFAmQATAFAUAKQAxAZAUAvQAVAvgPA0IgHAVQAkgBAkATQAxAZAUAvQAUAsgMAxQAWAEAVALQAxAZAUAvQAQAigFAmQAUAFAUAKQAxAZAUAvQAQAjgFAmIAKAFQAxAZAUAvQAPAigEAlQApgDAnAUQAxAZAUAvQARAmgHAqQAdAAAcALQAxATAZArQAUAgABAnQAjgIAjAJQA0AOAgAwQARAaAGAbQAqgDAoAVQAxAZAUAuQAGAMADANIAEgBQAygLAwAaIAQAJQAQgOASgJQgOg1AWguQAIgRANgOQgMgDgLgEQgsgSgagqQgagrAEguQADgiARgdIgBAAQgeAGgdgGQgygJgjgrQgjgqAAgzIAAgMIgUgDQgygJgjgrQgjgqAAgzQgBgzAjgqQAigrAygLQAygKAwAZQAxAZAUAvQAPAigEAlQAfACAdAPQAxAZAUAvQAVAvgPA0QgFATgJAQQAsgKAsASQAuATAYAoQAZAogEAyQgEAwgdAjIAJADQAkALAbAbQAbAcAKAkQAKAkgJAmQgJAmgZAcQgTAWgbAMQAJAkgLAoQgPA1gqAdQgZARgeAGQgeAHgdgGQgegGgYgRIgMAJQgZARgeAGQgPAEgQAAQgOAAgOgDg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:90.8246,y:202.5306}).wait(1).to({graphics:mask_10_graphics_1,x:87.8246,y:192.0306}).wait(1).to({graphics:mask_10_graphics_2,x:87.3246,y:181.5306}).wait(1).to({graphics:mask_10_graphics_3,x:87.3246,y:172.5306}).wait(1).to({graphics:mask_10_graphics_4,x:87.3246,y:164.0306}).wait(1).to({graphics:mask_10_graphics_5,x:90.2165,y:158.0306}).wait(1).to({graphics:mask_10_graphics_6,x:100.2165,y:154.5306}).wait(1).to({graphics:mask_10_graphics_7,x:109.2165,y:154.5306}).wait(1).to({graphics:mask_10_graphics_8,x:119.1614,y:154.5306}).wait(1).to({graphics:mask_10_graphics_9,x:127.6754,y:154.5306}).wait(1).to({graphics:mask_10_graphics_10,x:133.6915,y:154.5306}).wait(1).to({graphics:mask_10_graphics_11,x:141.6915,y:154.5306}).wait(1).to({graphics:mask_10_graphics_12,x:147.6915,y:154.5306}).wait(1).to({graphics:mask_10_graphics_13,x:154.6915,y:154.5306}).wait(1).to({graphics:mask_10_graphics_14,x:160.6915,y:154.5306}).wait(1).to({graphics:mask_10_graphics_15,x:166.6915,y:155.0409}).wait(1).to({graphics:mask_10_graphics_16,x:171.1915,y:162.5409}).wait(1).to({graphics:mask_10_graphics_17,x:179.1915,y:170.5409}).wait(1).to({graphics:mask_10_graphics_18,x:186.7003,y:179.0306}).wait(1).to({graphics:mask_10_graphics_19,x:195.7045,y:185.9688}).wait(1).to({graphics:mask_10_graphics_20,x:203.6915,y:192.0159}).wait(1).to({graphics:mask_10_graphics_21,x:212.6915,y:197.5159}).wait(1).to({graphics:mask_10_graphics_22,x:221.6915,y:197.5159}).wait(1).to({graphics:mask_10_graphics_23,x:225.7128,y:197.5159}).wait(1).to({graphics:mask_10_graphics_24,x:225.7128,y:197.5159}).wait(1).to({graphics:mask_10_graphics_25,x:225.7128,y:197.5159}).wait(1).to({graphics:mask_10_graphics_26,x:225.7128,y:197.5159}).wait(159));

	// lady01
	this.instance_19 = new lib.CachedBmp_9();
	this.instance_19.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(185));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(104.7,201.8,761.5999999999999,589.5);
// library properties:
lib.properties = {
	id: 'E07F3560AC1A854688146498BF84B9ED',
	width: 474,
	height: 506,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/手繪Lady_atlas_1.png", id:"手繪Lady_atlas_1"}
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
an.compositions['E07F3560AC1A854688146498BF84B9ED'] = {
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