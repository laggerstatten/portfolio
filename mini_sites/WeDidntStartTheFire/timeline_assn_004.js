(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"timeline_assn_004_atlas_1", frames: [[0,0,2000,1112]]}
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



(lib.WorldMap = function() {
	this.initialize(ss["timeline_assn_004_atlas_1"]);
	this.gotoAndStop(0);
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


(lib.world_join = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WorldMap();
	this.instance.setTransform(0,0,0.2025,0.2023);

	this.instance_1 = new lib.WorldMap();
	this.instance_1.setTransform(405,0,0.2025,0.2023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.world_join, new cjs.Rectangle(0,0,810,225), null);


(lib.title2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6C86F").s().p("AgfCAIAAgxIAOAAQAPAAANgGQANgGAKgLQAKgLAGgOQAGgPAAgQQAAgPgGgOQgGgPgKgLQgKgKgNgGQgNgHgPAAIgOAAIAAgxIAVAAQAZAAAXAKQAXAKAQARQARASAKAXQAKAXAAAaQAAAbgKAXQgKAXgRASQgQARgXAKQgXAKgZAAgAhxCAIAAj/IA8AAIAAD/g");
	this.shape.setTransform(50.025,-11.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// L
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AAECAIAAgxIBKAAIAAAxgAhNCAIAAj/IA8AAIAAD/g");
	this.shape_1.setTransform(27.275,-11.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// R
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00C86F").s().p("AAtCAIgqhSIgZAAIAAgxIAcAAQAQAAAJgLQAKgKAAgQQAAgIgDgHQgDgGgFgGQgEgFgGgDQgGgDgIAAIgcAAIAAgxIAjAAQASAAAPAGQAPAHANAMQAKAMAIAQQAGAQAAASQAAAYgLASQgLAUgTALIAwBfgAhoCAIAAj/IA8AAIAAD/g");
	this.shape_2.setTransform(5.05,-11.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// O
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("Ag1B6QgSgLgNgRQgOgSgIgYQgHgXAAgdQAAgcAHgYQAIgYAOgRQAMgSAUgKQATgKAXgCIAAAzQgMACgIAJQgJAIgGAMQgEALgDAOQgDANABANQgBAMADAOQADAOAEAMQAGALAJAJQAIAJAMADIAAAyQgXgCgUgKgAALBUQAMgDAIgJQAJgJAFgLQAFgMADgNQADgOgBgMQABgNgDgNQgDgOgGgMQgEgMgJgIQgJgJgLgCIAAgzQAWACATALQASALAOARQAOASAIAXQAIAYAAAbQAAAdgIAXQgIAYgOARQgOASgTAKQgTAKgVADg");
	this.shape_3.setTransform(-21.1,-11.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// W
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33FF33").s().p("AAZCAIgZh9IgPBSIgahVIAbh/IAZAAIA8D/gAhNCAIhRj/IA6AAIBLD/gAA/ABIAmiAIA6AAIhJDlg");
	this.shape_4.setTransform(-50.225,-11.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// E
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0033").s().p("AgHCAIAAgxIBhAAIAAAxgAhZCAIAAj/IA8AAIAAD/gAgHAVIAAgxIBJAAIAAAxgAgHhOIAAgxIBhAAIAAAxg");
	this.shape_5.setTransform(21.825,-55.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// H
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B6C86F").s().p("AAqCAIAAj/IA8AAIAAD/gAhlCAIAAj/IA8AAIAAD/gAgTATIAAgwIAnAAIAAAwg");
	this.shape_6.setTransform(-2.575,-55.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// T
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00C86F").s().p("AgdCAIAAi7IA7AAIAAC7gAhlhOIAAgxIDLAAIAAAxg");
	this.shape_7.setTransform(-25.825,-55.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-68.4,127.5,70.30000000000001);


(lib.title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFE8AD").s().p("Ag9C5QgLAAgBgMIgOlYQAAgFADgEQAEgEAFABICXATQANABgBALIgcFFQgBAMgLAAgAgDCMQAfAAAOg+QAKgnAAgrQAAgrgKgoQgPg/geAAQgSAAgNAVIgBgEQAAgNgMAAQgOAAABANIABBnIAAANIAAANIAAAOIAAAUIADBbQAAANANAAQAKAAACgIQAMAOAQAAgAgPBoQgUgbgBgzIAAg8QgBgcALgkQAKgdAIAAQADAAAEAEQAWAfAABTQAAA0gMAlQgJAcgIAAQgDAAgEgEg");
	this.shape.setTransform(-91.4714,-8.2031);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// L
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8A5AF").s().p("ABIC2IiOgdQgNgCABgKIATkLQAAgHAMgFIBxgrQAFgBAEAEQADAEAAAFIAKFTQAAAFgEAEQgDADgEAAIgBAAgAg1hqIAPDcQABAMAPAAQAKAAAYgIIAugNQAKgDAAgKQAAgNgNAAIgEAAIhAARIgOjMQAAgMgNAAQgOAAABAOg");
	this.shape_1.setTransform(-109.751,-8.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// R
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9BDBC1").s().p("ABIC7IiOgnQgNgDABgJIATkLQAAgHAMgFIBxgrQAFgBAEAEQADAEAAAFIAKFdQAAAFgEAEQgDADgDAAIgCAAgAAgCYQADAGAHAAQAFAAAFgEQAEgEAAgFQAAgEgCgEIgwhJQAZgBAPggQANgcAAgjQAAglgOgcQgQgggaAAQgTAAgPAUQgEgEgGAAQgOAAABANIACA8IAAAIQAAAMABALIAGB+QABAMAMAAQAOAAgBgNIgCgtgAgLAaQgKgOgDgVIgCggQACgcAKgSQAKgQAHAAQAJAAAKASQALAVAAAgQAAAggLAUQgKARgJAAQgGAAgIgLg");
	this.shape_2.setTransform(-127.551,-8.4395);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// O
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC2D30").s().p("ABIC7IiOgnQgNgDABgJIATkLQAAgHAMgFIBxgrQAFgBAEAEQADAEAAAFIAKFdQAAAFgEAEQgDADgDAAIgCAAgAgmhUQgOAkAAAwQAAApALAkQAPA0AfAAQAgAAAPg0QALgkAAgpQAAgmgLgkQgPg1ggAAQgbAAgQArgAgOBNQgMgfAAguQAAgsAMgfQALgZAIAAQAJAAAKAZQANAfAAAsQAAAugNAfQgKAZgJAAQgIAAgLgZg");
	this.shape_3.setTransform(-145.351,-8.4395);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// W
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AADD96").s().p("AhJCsIgOlJQgBgLANgCICXgOQAFAAAEADQAEAEgBAFIgcFKQgBAKgLACIhtAOIgCABQgJAAgBgNgAAJBwQADAMAKAAQAMAAABgOIAUjyQABgOgOAAQgNAAgBAMIgMCfIgThPQgDgNgKABQgLAAgCANIgDAeIgJhTQgBgMgMAAQgPAAACAPIAUDIQABAOAMAAQAMAAACgOIAJhLg");
	this.shape_4.setTransform(-163.3732,-8.1956);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// E
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8A5AF").s().p("AhJCsIgOlJQgBgLANgCICXgOQAFAAAEADQAEAEgBAFIgcFKQgBAKgLACIhtAOIgCABQgJAAgBgNgAgPiMQgXAEgPAaQgPAbAAAlQgDAfAAAXQAABiA4AFIAHABQAcAAATgSQASgTAFgiQABgPgOAAQgMAAgBAMQgHAvglAAIgHAAQgNgDgHgMQgHgNgDgaQANAPARADIAHAAQAbAAARgeQAQgbAAglQAAglgQgcQgRgfgbAAIgHABgAgPAVQgIgDgHgMQgMgTAAggIAAgBQAAgTAIgUQAHgWAMgFQADgCAFAAQAKAAAKASQANAUAAAfQAAAggNATQgKARgKAAQgEAAgEgCg");
	this.shape_5.setTransform(-107.2732,-55.4456);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// H
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFE8AD").s().p("AhJCsIgOlJQgBgLANgCICXgOQAFAAAEADQAEAEgBAFIgcFKQgBAKgLACIhtAOIgCABQgJAAgBgNgAANCGQgBAOAOAAQANAAAAgNIAGj9QAAgNgNAAQgNAAAAAMIgEB2IgoACIgJiBQAAgMgMAAQgOAAABAOIAHCCQgJACAAALQAAAMALABIAFBYQABAMANAAQANAAgBgOIgFhYIAngEg");
	this.shape_6.setTransform(-125.7732,-55.4456);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// T
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9BDBC1").s().p("AhJCsIgOlJQgBgLANgCICXgOQAFAAAEADQAEAEgBAFIgcFKQgBAKgLACIhtAOIgCABQgJAAgBgNgAghBXQAAAWAKASQALAVARAAQAUAAALgVQAJgSAAgWQAAgOgOAAQgNAAAAAOQAAARgFAKQgFAHgDAAQgCAAgDgHQgGgKAAgSIgCiRIAjgDQAMAAAAgMQAAgPgNABIgiADIAAgvQAAgNgNAAQgOAAAAANIAAAwIgXACQgMABAAAMQAAAPANgBIAWgCg");
	this.shape_7.setTransform(-144.2732,-55.4456);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.2,-73.9,89.6,84.2);


(lib.subtitle2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA5IAMgOIgGhcIgGgSIAvAJIgJAJIgGBjIAFASgAgeAyIgMhfIgEgNIAogEIgIANIAEBhIAFAFIgfAPg");
	this.shape.setTransform(116.375,-12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcChQgOgGgGgIQgOgTAAgsIAAgMIgLgSIA1AIIgLAMIAAAKQAAAVAHANQAFALANADQAIADAHAAQAXAAAFgWQADgMgBgrIAAgvQgSAbgdAAQgiAAgRgbQgRgZAAgpQAAgmAPgaQASggAjAAQAhAAAOARIAAgGIgLgZIAxAJIgIAGIgIDcQgBAsgFARQgFASgUAJQgQAIgTAAQgLAAgMgFgAgIh8QgZABgLAXQgJATABAbQACA+AvgBQAWgBAKgUQAKgVgBgUIAAgRQgBgTgNgRQgMgQgTAAIgBAAg");
	this.shape_1.setTransform(99.225,10.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPBxIAJiYQACgVgDgIQgFgVgPAAIgMAAQgGADgDADQgFAFgDAFQgFAMgCAMIAAANIAGB9IAPAUIg3gDIAJgTIAIjDIgRgUIAvAFIgMANIgEATQASglAWAAQAbAAAJAiQADAIADAsIAKCTIAMAQIg/AIg");
	this.shape_2.setTransform(80.55,4.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCCBIgNi2IgTgGIBAgPIgJAMIgDDBIAJAJIgpAJgAgYhjQgKgJAAgLQAAgMAKgJQAKgHAOAAQAPAAAKAHQAJAJABAMQgBALgJAJQgKAHgPABQgOgBgKgHg");
	this.shape_3.setTransform(65.65,-0.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPBxIAJiYQABgVgCgIQgFgVgPAAIgLAAQgHADgCADQgGAFgDAFQgFAMgCAMIgBANIAHB9IAQAUIg5gDIAKgTIAHjDIgRgUIAwAFIgNANIgCATQARglAWAAQAcAAAIAiQADAIACAsIAKCTIAOAQIg/AIg");
	this.shape_4.setTransform(51.25,4.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBkIABjKIgMgPIAwADIgMATIgDAVQADgOAJgNQAKgQAMAAIABAAIAPAAIALAyIgPgKIgJAAIgDAAQgRAAgHASQgKAWABAVIAIBfIATASIg5AVg");
	this.shape_5.setTransform(35.3,2.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBjIAAgSQgNApgZAAQgbgBgKggQgEgPgCgfIgChxIgNgVIAygLIgKARIgDB8QAAAYABAFQAGATANABQAZAAAJgkQAEgVAAgfIAAhlIgKgKIAygJIgKAUIgJDDIAJAUIgtAHg");
	this.shape_6.setTransform(19.75,3.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtChIgHlDIgJgQIA0AFIgNAIIgFCIQAOghAXAAQAfAAANAtQAIAcAAAoQAAApgJAhQgPAygeAAQgNAAgKgMQgGgIgGgPIAAAQIAOARIgpAGgAgQAIQgGAUgCAdQgCBZAjABQAhABADhaQABgbgFgVQgHghgUAAIgBAAQgTAAgKAfg");
	this.shape_7.setTransform(2.45,-1.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBaQgGgPgBgSIgNgMIAtgKIgMATQABALAEAIQAHAPARAAQAZAAAAgeQAAgXgXgKIgMgGQgXgKgJgJQgMgOABggQgBgdALgTQAOgZAbAAQAtAAAGBGIAKAYIgrgGIALgYQgFgggZAAQgPAAgHAMQgIAKAAAPQAAAPAIAHQAEAFAOAGIAQAIQAPAHAIAIQAOAPAAAcQAAAbgKATQgNAZgYAAQgdAAgMgeg");
	this.shape_8.setTransform(-25.1,2.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDA1IgEhnIgOgTIArAEIgJAPIgEBrIAGAJIgfAEg");
	this.shape_9.setTransform(-38.125,-12.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAChQgUAAgIgTQgEgNAAgWIAAhRIgLABIgQALIAKgpIAHAFIAKAAIAAiKIgSgYIA/AEIgNAVIgGCIIAvgBIAJgLIAKA1IgUgNIgvgFIgBA1QgCAlABADQACAJAJAAIACAAIANAAIAVgSIgFAxIgdAEIgEAAg");
	this.shape_10.setTransform(-50.75,-1.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCCBIgNi2IgTgGIBAgPIgIAMIgEDBIAIAJIgoAJgAgYhjQgJgJgBgLQABgMAJgJQALgHANAAQAOAAALAHQAKAJgBAMQABALgKAJQgLAHgOABQgNgBgLgHg");
	this.shape_11.setTransform(-63.75,-0.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA5IAMgOIgGhcIgGgSIAvAJIgJAJIgGBjIAFASgAgeAyIgMhfIgEgNIAogEIgIANIAEBhIAFAFIgfAPg");
	this.shape_12.setTransform(-76.875,-12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,-30.1,211.79999999999998,60.2);


(lib.subtitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA5IAMgOIgGhcIgGgSIAvAJIgJAJIgGBjIAFASgAgeAyIgMhfIgEgNIAogEIgIANIAEBhIAFAFIgfAPg");
	this.shape.setTransform(115.375,-12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcChQgOgGgGgIQgOgTAAgsIAAgMIgLgSIA1AIIgLAMIAAAKQAAAVAHANQAFALANADQAIADAHAAQAXAAAFgWQADgMgBgrIAAgvQgSAbgdAAQgiAAgRgbQgRgZAAgpQAAgmAPgaQASggAjAAQAhAAAOARIAAgGIgLgZIAxAJIgIAGIgIDcQgBAsgFARQgFASgUAJQgQAIgTAAQgLAAgMgFgAgIh8QgZABgLAXQgJATABAbQACA+AvgBQAWgBAKgUQAKgVgBgUIAAgRQgBgTgNgRQgMgQgTAAIgBAAg");
	this.shape_1.setTransform(98.225,10.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPBxIAJiYQACgVgDgIQgFgVgPAAIgMAAQgGADgDADQgFAFgDAFQgFAMgCAMIAAANIAGB9IAPAUIg3gDIAJgTIAIjDIgRgUIAvAFIgMANIgEATQASglAXAAQAaAAAKAiQACAIACAsIALCTIANAQIhAAIg");
	this.shape_2.setTransform(79.55,4.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCCBIgNi2IgSgGIA/gPIgJAMIgCDBIAIAJIgpAJgAgYhjQgKgJABgLQgBgMAKgJQALgHANAAQAOAAALAHQAJAJABAMQgBALgJAJQgLAHgOABQgNgBgLgHg");
	this.shape_3.setTransform(64.65,-0.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPBxIAJiYQABgVgCgIQgFgVgPAAIgLAAQgHADgCADQgGAFgDAFQgFAMgCAMIgBANIAHB9IAPAUIg4gDIAKgTIAHjDIgRgUIAwAFIgNANIgCATQARglAWAAQAcAAAIAiQADAIADAsIAJCTIANAQIg/AIg");
	this.shape_4.setTransform(50.25,4.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBkIACjKIgMgPIAwADIgMATIgDAVQADgOAJgNQAKgQAMAAIACAAIAOAAIAMAyIgQgKIgJAAIgDAAQgRAAgHASQgKAWABAVIAJBfIASASIg5AVg");
	this.shape_5.setTransform(34.3,2.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBjIAAgSQgMApgaAAQgbgBgKggQgEgPgCgfIgChxIgNgVIAygLIgKARIgDB8QAAAYABAFQAGATANABQAaAAAHgkQAFgVAAgfIAAhlIgKgKIAygJIgKAUIgJDDIAJAUIgtAHg");
	this.shape_6.setTransform(18.75,3.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAChQgUAAgHgTQgFgNAAgWIAAhRIgMABIgQALIAMgpIAGAFIAKAAIAAiKIgTgYIBAAEIgNAVIgGCIIAwgBIAJgLIAKA1IgVgNIgvgFIgCA1QgBAlABADQACAJAIAAIADAAIANAAIAUgSIgEAxIgdAEIgEAAg");
	this.shape_7.setTransform(1.85,-1.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBaQgGgPgBgSIgNgMIAtgKIgMATQABALAEAIQAHAPARAAQAZAAAAgeQAAgXgXgKIgMgGQgXgKgJgJQgMgOABggQgBgdALgTQAOgZAbAAQAtAAAGBGIAKAYIgrgGIALgYQgFgggZAAQgPAAgHAMQgIAKAAAPQAAAPAIAHQAEAFAOAGIAQAIQAPAHAIAIQAOAPAAAcQAAAbgKATQgNAZgYAAQgdAAgMgeg");
	this.shape_8.setTransform(-25.1,2.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDA1IgEhnIgOgTIArAEIgJAPIgEBrIAGAJIgfAEg");
	this.shape_9.setTransform(-38.125,-12.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAChQgUAAgIgTQgEgNAAgWIAAhRIgLABIgQALIAKgpIAHAFIAKAAIAAiKIgSgYIA/AEIgNAVIgGCIIAvgBIAJgLIAKA1IgUgNIgvgFIgBA1QgCAlABADQACAJAJAAIACAAIANAAIAVgSIgFAxIgdAEIgEAAg");
	this.shape_10.setTransform(-50.75,-1.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCCBIgNi2IgTgGIBAgPIgIAMIgEDBIAIAJIgoAJgAgYhjQgJgJgBgLQABgMAJgJQALgHANAAQAOAAALAHQAKAJgBAMQABALgKAJQgLAHgOABQgNgBgLgHg");
	this.shape_11.setTransform(-63.75,-0.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA5IAMgOIgGhcIgGgSIAvAJIgJAJIgGBjIAFASgAgeAyIgMhfIgEgNIAogEIgIANIAEBhIAFAFIgfAPg");
	this.shape_12.setTransform(-76.875,-12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,-30.1,210.8,60.2);


(lib.Panel1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("EhLnAqlMAAAhVJMCXPAAAMAAABVJg");
	this.shape.setTransform(484,272.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Panel1, new cjs.Rectangle(0,0,968,545), null);


(lib.text_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAArQgVAAgOgEQgOgEgHgKQgIgJABgQQgBgPAIgJQAHgKAOgEQAOgEAVAAIABAAQAVAAAOAEQAOAEAHAKQAHAJAAAPQAAAQgHAJQgHAKgOAEQgOAEgVAAgAgegcQgLAEgEAHQgFAHgBAKQABALAFAHQAEAHALAEQALADATAAIABAAQATAAALgDQALgEAEgHQAGgHgBgLQABgKgGgHQgEgHgLgEQgLgDgTAAIgBAAQgTAAgLADg");
	this.shape.setTransform(13.55,-6.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAnQgOgEgHgJQgHgJAAgOQAAgNAIgLQAIgKAOgFQAOgGASAAQANAAAIABQAJACAFADIAIADIADADIgCAEIgCABIgDABIgEgBIgGgCIgMgCIgRgCQgNAAgLAEQgLAEgHAHQgGAHgBAJQAJgDAOgDQAMgCAPAAQALAAAJABQAKACAHADQAHACAEAEQADAFABAHQgBAJgGAGQgHAGgMADQgNADgRAAQgSAAgNgEgAgPADIgQAEIgMADQADAMAMAFQALAEAUAAQAOAAAJgCQAJgCAFgDQAEgDAAgEQAAgHgKgEQgKgEgUAAIgTABg");
	this.shape_1.setTransform(0.175,-6.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(-12.575,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(-22.375,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(-30.875,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZApIgRgDQgHgCgDgDQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgDIABgDIADgCIADABIAIACQAGADAKABQAKABANAAQAVAAAKgEQALgDAAgIQgBgFgFgEQgFgDgKgCQgJgBgNAAQgPAAgKACIgQADIgIgDIgCgBIAAgCIAAgmIABgCIADgBIBcAAIADABIACACIAAAEIgCADIgDAAIhUAAIAAAbQAIgDAKgBQAJgCAMAAQAKAAAKACQAKABAIADQAIADAFAFQAEAFAAAHQAAAOgOAHQgOAFgbAAQgOABgLgCg");
	this.shape_5.setTransform(-38.525,-6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAqIgCgBIABgDIANgTIgBgCIgBgBIgmg2IgBgCIACgBIAIAAIACABIACABIAhAuIAAABIABgBIAhguIABgBIADgBIAHAAIADABIgBACIgnA2IAAABIAAAAIgPAXIgCABIgBABg");
	this.shape_6.setTransform(-53.4,-4.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAqIgCgBIgBgCIAAhNIABgDIACAAIAFAAIACAAIABADIAABNIgBACIgCABg");
	this.shape_7.setTransform(-59.85,-6.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAbQgIgDgEgHQgDgGAAgLIAAgbIABgCIACgBIAGAAIACABIABACIAAAbQAAALAHAFQAGAFAPAAQAOAAAIgFQAHgFAAgLIAAgbIABgCIACgBIAGAAIACABIABACIAAA2IgBACIgCABIgGAAIgCgBIgBgCIAAgIIAAgBIgBABQgEAFgIADQgIAEgMAAQgNAAgIgEg");
	this.shape_8.setTransform(-65.975,-5.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaApIgRgEIgJgEIgCgCIABgEIACgDIADgCIADABIAIADIAOADQAJACAMAAQAPAAAKgDQAKgEAEgHQAFgHAAgKIAAgmIABgDIADgBIAEAAIADABQABABAAAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAmQgBAQgGAJQgHAKgNAEQgMAEgSAAQgOAAgKgCg");
	this.shape_9.setTransform(-77.025,-6.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_10.setTransform(110.9771,-35.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgCAyIgPAAIgOgDQgHgCgEgEQgFgEgBgFQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQAAgCAFAAIAKAAIAEAAIAEACIAEADIAHABIALABIAIAAIAJgCQAFgBADgEQAEgDgBgGIAAgKQgBADgDADQgEACgGABIgOABQgSAAgKgEQgKgEgFgHQgFgHABgLQgBgLAFgHQAFgIAKgEQAKgEASAAQAMAAAHACQAHACACAEIAAgDIABgCIADgBIARAAIADABIABACIAAA+QgBAMgHAHQgGAIgNADQgKAEgNAAIgDgBgAgNgdQgGABgDADQgDADgBAGQABAGADADQADADAGACIAOABIAPgBQAGgCADgDQAEgDAAgGQAAgGgEgDQgDgDgGgBIgPgBIgOABg");
	this.shape_11.setTransform(99.35,-33.8969);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdAkIgDgBIgBgCIAAghQAAgJgGgDQgGgFgNABQgMgBgHAFQgFADAAAJIAAAhIgBACIgDABIgRAAIgCgBIgBgCIAAg/IABgDIACgBIARAAIADABIABADIAAAJIAAABIABAAQACgHAJgEQAHgEAPAAQAOAAAJAEQAJAEADAIQAEAIAAALIAAAhIgBACIgDABg");
	this.shape_12.setTransform(88.1,-35.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_13.setTransform(76.5771,-35.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkAuQgSgFgIgMQgJgKAAgTQAAgSAJgKQAIgMASgFQARgFAaAAQASABANABQANACAIADQAHACADACQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgGALQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAIgEgBIgLgEIgPgCIgXAAQgOgBgLACQgKACgGADQgGADgCAGQgDAFAAAFQAAAHADAEQACAFAGAEQAGAEAKABQALACAOAAIAXgCIAPgCIALgDIAEAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAIAFAJIACAFIABACIgBABIgCABQgDADgHADQgIACgNACQgMABgTAAIgFABQgWAAgQgFg");
	this.shape_14.setTransform(62.975,-36.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAFgIALgEQAMgEARgBQASABAMAEQALAEAFAIQAFAHAAAKIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABAAAAIgHAAIhCAAQAEAHAHACQAIACAKAAIAPgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIACAEIAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgHAEgKACQgJADgOAAQgbAAgMgKgAAcgFQgCgGgGgDQgGgCgOAAQgMAAgGACQgGADgCAGIA2AAIAAAAg");
	this.shape_15.setTransform(45.25,-35.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAdAxIgDgBIgBgCIAAgiQABgJgHgDQgGgEgNABQgMgBgGAEQgHADABAJIAAAiIgBACIgDABIgQAAIgDgBIgBgCIAAhaIABgDIADgBIAQAAIADABIABADIAAAkIAAABIABAAQADgHAHgEQAJgEAOAAQAOAAAJAEQAJAEAEAIQADAHAAALIAAAiIgBACIgCABg");
	this.shape_16.setTransform(33.95,-36.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAvQgGgCgDgFQgDgFAAgJIAAgbIAAgBIgBAAIgQAAIgCgBIgBgDIAAgMIABgCIACgBIAQAAIABgBIAAgBIAAgWIABgCIACgBIAQAAIADABIABACIAAAWIAAABIABABIATAAIACABIABACIAAAMIgBADIgCABIgTAAIgBAAIAAABIAAAZQAAADACACIADABIAEAAIAFAAIAEgBIADAAIABACIADALIABACIgCACIgLADIgLAAIgCAAQgHAAgEgCg");
	this.shape_17.setTransform(24.2083,-36.5708);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdAkIgDgBIgBgCIAAghQABgJgHgDQgGgFgNABQgNgBgGAFQgFADAAAJIAAAhIgBACIgDABIgRAAIgCgBIgBgCIAAg/IABgDIACgBIARAAIADABIABADIAAAJIAAABIABAAQADgHAIgEQAIgEAOAAQAOAAAJAEQAJAEAEAIQADAIAAALIAAAhIgBACIgCABg");
	this.shape_18.setTransform(10.35,-35.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAyIgDgBIgBgDIAAg/IABgCIADgBIAPAAIADABIABACIAAA/IgBADIgDABgAgJgfQgDgCAAgEIAAgFQAAgDADgCQADgCAGAAQAHAAADACQADACAAADIAAAFQAAAEgDACQgDABgHAAQgGAAgDgBg");
	this.shape_19.setTransform(2.575,-36.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAkQgIgBgHgCIgIgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAIABgDIAFgJQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADABIAJACIALABIANABIADAAIAHAAIAHgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIgHgCIgLgCIgQgCIgMgDQgHgDgDgDQgDgEgBgGQAAgIAGgFQAFgFAJgCQAJgDAMAAIASACIANACIAHADIADACIgBAEIgDAIIgCACIgEAAIgIgCIgMgCIgKgBIgEAAIgFAAIgGACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIABACIAGABIAMADIAOACIAOADQAHACAEAEQAFAEAAAHQAAAHgFAEQgDAEgHADIgNADIgPABIgTgBg");
	this.shape_20.setTransform(-8.5,-35.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAdAkIgDgBIgBgCIAAghQABgJgHgDQgGgFgNABQgMgBgGAFQgHADABAJIAAAhIgBACIgDABIgQAAIgDgBIgBgCIAAg/IABgDIADgBIAQAAIADABIABADIAAAJIAAABIABAAQADgHAHgEQAJgEAOAAQAOAAAJAEQAJAEAEAIQADAIAAALIAAAhIgBACIgCABg");
	this.shape_21.setTransform(-19.15,-35.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_22.setTransform(-30.375,-35.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAyIgDgBIgBgDIAAg/IABgCIADgBIAPAAIADABIABACIAAA/IgBADIgDABgAgJgfQgDgCAAgEIAAgFQAAgDADgCQADgCAGAAQAHAAADACQADACAAADIAAAFQAAAEgDACQgDABgHAAQgGAAgDgBg");
	this.shape_23.setTransform(-38.175,-36.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAyIgPAAIgOgDQgHgCgFgEQgEgEgBgFQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQAAgCAEAAIALAAIAEAAIADACIAFADIAHABIALABIAIAAIAJgCQAFgBADgEQAEgDgBgGIAAgKQgBADgDADQgEACgGABIgOABQgSAAgKgEQgKgEgFgHQgFgHABgLQgBgLAFgHQAFgIAKgEQAKgEASAAQAMAAAHACQAHACACAEIAAgDIABgCIADgBIARAAIADABIABACIAAA+QgBAMgHAHQgGAIgNADQgKAEgNAAIgDgBgAgNgdQgGABgDADQgEADAAAGQAAAGAEADQADADAGACIAOABIAPgBQAGgCADgDQAEgDAAgGQAAgGgEgDQgDgDgGgBIgPgBIgOABg");
	this.shape_24.setTransform(-46.1,-33.8969);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHAxIgDgBIgBgCIAAhaIABgDIADgBIAPAAIADABIABADIAABaIgBACIgDABg");
	this.shape_25.setTransform(-53.725,-36.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAFgIALgEQAMgEARgBQASABAMAEQALAEAFAIQAFAHAAAKIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABAAAAIgHAAIhCAAQAEAHAHACQAIACAKAAIAPgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIACAEIAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgHAEgKACQgJADgOAAQgbAAgMgKgAAcgFQgCgGgGgDQgGgCgOAAQgMAAgGACQgGADgCAGIA2AAIAAAAg");
	this.shape_26.setTransform(-61.4,-35.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhAAxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIBVAAQAMAAAIADQAIACAEAEQAFAEABAEQACAEAAAEQAAAIgEAFQgDAEgHADQAMADAFAFQAGAGAAAKQAAAIgEAHQgEAGgKAEQgKADgQAAgAgrAKIAAAOIAAABIABAAIBDAAQAIABAGgDQAFgBAAgFQAAgEgCgCQgDgCgEAAQgFgBgFABIhDAAIgBAAIAAABgAgrgXIAAANIAAABIABABIA8AAQAKAAAEgCQAEgCAAgEQAAgFgEgCQgEgBgKAAIg8AAIgBAAIAAABg");
	this.shape_27.setTransform(-74.775,-36.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_28.setTransform(64.025,43.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_29.setTransform(58.525,40.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAFgEQAEgDAKAAIAAAMQgLABgGAFQgGAEABAIIAAArg");
	this.shape_30.setTransform(53.25,40.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgPAkQgGgDgFgGQgGgKgBgOIABgIIADgJQACgJAFgFQAFgEAHgDQAFgEAGAAQAFAAAFACQAGACADAEQAFAEACAEQAHAMAAAPIg1AAQAAAMAFAGQAFAHAKAAQAFgBAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAABIgFABQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgHgKABQgFAAgEADQgFADgDAFQgCAGAAAEIAnAAIAAAAg");
	this.shape_31.setTransform(46.5,40.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHAlIgGgCIgFgDQgGgEgDgIQgDgIAAgLIAAgGIACgKQABgEADgEQAEgHAHgEQAHgEAJAAQAGAAAGACQAHADAEAFQAEAHABAKIgLAAQgCgIgEgEQgFgEgHAAQgKAAgEAIQgGAIAAANQABAHACAFQABAFACADQAGAGAHAAQAHAAAFgFQAGgFABgIIALAAQgBAJgEAGQgEAHgGADQgHAEgIAAQgEAAgEgCg");
	this.shape_32.setTransform(39.15,40.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_33.setTransform(34.025,38.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGAzIAAg+IgKAAIAAgKIAKAAIAAgLQAAgGABgDQABgDADgCQACgEAIAAIAIAAIAAAMIgEAAQgEAAgCABQgCACAAAEIAAAKIAMAAIAAAKIgMAAIAAA+g");
	this.shape_34.setTransform(30.525,38.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAzIAAg+IgKAAIAAgKIAKAAIAAgLQAAgGABgDQABgDADgCQACgEAIAAIAIAAIAAAMIgEAAQgEAAgCABQgCACAAAEIAAAKIAMAAIAAAKIgMAAIAAA+g");
	this.shape_35.setTransform(26.625,38.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQADAHAEAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_36.setTransform(20.8,40.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_37.setTransform(9.075,40.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_38.setTransform(1.325,40.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_39.setTransform(-4.175,38.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgMA0QgHgCgFgFQgFgGAAgIIAMAAQAAAFAFADIAFADIAGAAQAIAAAHgFQAFgGAAgMIAAgDQgJAKgMgBQgGAAgFgCQgFgDgFgFQgEgFgCgHQgCgGAAgIQAAgJADgJQACgIAFgFQAEgFAGgDQAFgDAHAAQAGAAAEAEIAFADIADAEIAAgJIANAAIAABGQAAATgJAIQgKAIgNAAQgGAAgGgCgAgJgkQgEADgDAGQgCAFAAAIQAAAKACAFQADAHAEAEQAFADAEAAIABAAQAIgCAGgHQAEgHAAgMQAAgJgCgGQgDgGgFgDQgFgCgEAAQgFABgEACg");
	this.shape_40.setTransform(-9.85,41.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_41.setTransform(-15.075,38.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPAkQgGgDgEgGQgIgKAAgOIABgIIACgJQADgJAFgFQAFgEAGgDQAGgEAGAAQAGAAAEACQAFACAEAEQAFAEADAEQAFAMAAAPIg1AAQAAAMAGAGQAGAHAJAAQAFgBAFgCQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBABIgEABQgEABgHAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgEgHgLABQgFAAgEADQgFADgCAFQgDAGgBAEIAoAAIAAAAg");
	this.shape_42.setTransform(-20.5,40.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgmAyIAAhjIAtAAQAHAAAGADQAHADADAGQAEAGAAAIIgCAJQgBAEgDADQgDADgEABQAIADAFAEQAFAGAAAJQAAAJgEAIQgFAHgHAEQgHADgIAAgAgYAnIAfAAQAGAAAEgCQAEgDACgEQACgEAAgEQAAgJgFgEQgEgGgOAAIgaAAgAgYgGIAZAAQALgBAEgEQAEgFAAgFQAAgJgEgDQgFgFgKAAIgZAAg");
	this.shape_43.setTransform(-28.875,38.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_44.setTransform(-39.725,39.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_45.setTransform(-45.075,40.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_46.setTransform(-52.475,40.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_47.setTransform(-57.925,38.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_48.setTransform(-63.325,40.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMA0QgHgCgFgFQgFgGAAgIIAMAAQAAAFAFADIAFADIAGAAQAIAAAHgFQAFgGAAgMIAAgDQgJAKgMgBQgFAAgGgCQgFgDgEgFQgEgFgDgHQgCgGAAgIQAAgJADgJQACgIAFgFQAEgFAGgDQAFgDAHAAQAGAAAEAEIAFADIADAEIAAgJIANAAIAABGQAAATgJAIQgKAIgNAAQgGAAgGgCgAgJgkQgEADgDAGQgCAFAAAIQAAAKACAFQADAHAEAEQAEADAFAAIABAAQAIgCAGgHQAEgHAAgMQAAgJgDgGQgCgGgFgDQgFgCgEAAQgFABgEACg");
	this.shape_49.setTransform(-71.4,41.65);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_50.setTransform(-78.925,40.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaAzIAAgLIAHABIAGgBIADgFIAFgLIgbhKIANAAIATA6IAUg6IANAAIgKAcIgGARIgCAFIgCAGIgGAOIgHATQgCAGgCACQgEADgDABIgJABIgGgBg");
	this.shape_51.setTransform(68.65,23.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_52.setTransform(61.225,21.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_53.setTransform(55.775,20.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAAAABQABAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_54.setTransform(52.175,20.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgXAgQgFgFAAgKIAAg3IAMAAIAAA1QAAAGADAEQAEADAFABIADAAQAHgCAFgGQAGgGAAgJIAAgsIAMAAIAABKIgMAAIAAgIQgFAFgHADQgGACgHAAQgJABgGgHg");
	this.shape_55.setTransform(46.475,21.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAlAmIAAgvQAAgRgOAAQgEAAgFADQgEADgBAFQgDAEAAAFIAAAsIgMAAIAAgyQABgGgDgEQgCgEgHAAQgEAAgEADQgFACgDAFQgDAGAAAIIAAAoIgNAAIAAhIIAMAAIAAAKQAJgNANAAQAJAAAFAEQADADACAFQAGgGAEgDQAEgDAJAAQAEAAAGADQAFABAEAGQADAFAAAKIAAAyg");
	this.shape_56.setTransform(36.75,21.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_57.setTransform(23.475,21.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgfA0IAAhlIAMAAIAAALQABgEADgDIAIgFQAEgBAFAAQAJAAAHAFQAHAGAEAJQADAJAAAJQAAAKgDAIQgEAJgHAGQgIAGgKAAQgFAAgFgDQgEgCgFgGIAAAlgAgLgkQgFAFgCAGQgBAIAAAIQAAAGABAEQACAEADAEQAGAGAHAAQAGAAAEgEQAFgEACgGQACgGAAgJIgBgMIgEgIQgFgGgJAAQgHAAgEAEg");
	this.shape_58.setTransform(16.225,23.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgFAJgBAKQAAAGADAGQABAHAFAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_59.setTransform(8.3,21.725);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGACAGQACAHAEAEQAFAFAHAAQAIAAAEgFQAGgEABgHIACgMIgCgMQgBgHgGgEQgEgEgIAAQgKAAgGAIg");
	this.shape_60.setTransform(0.5,21.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAEgDQAGgEAJAAIAAAOQgLAAgGAEQgFAFgBAJIAAArg");
	this.shape_61.setTransform(-5.2,21.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAAAABQABAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_62.setTransform(-10.125,20.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgGgKgBgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAFACQAGABADAEQAFAEACAEQAHAMAAAQIg1AAQgBALAGAHQAFAFAKAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_63.setTransform(-19.75,21.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_64.setTransform(-27.175,21.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgOAkQgHgEgEgGQgIgKABgOIAAgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAGAAAFACQAFABAEAEQAEAEADAEQAFAMAAAQIg1AAQAAALAGAHQAFAFAKAAQAFABAFgDQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgDAGgGAEIgEACIgBAAIgDACQgEABgIAAQgIAAgGgDgAAVgFQgBgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgCAFQgEAFAAAFIApAAIAAAAg");
	this.shape_65.setTransform(-34.55,21.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_66.setTransform(-40.025,20.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAFgEACgHIABgMIgBgMQgCgHgFgEQgFgEgIAAQgLAAgEAIg");
	this.shape_67.setTransform(-45.45,21.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgMA0QgHgBgFgGQgFgGAAgIIAMAAQAAAFAFADIAFADIAGAAQAIABAHgGQAFgFAAgMIAAgFQgJALgMAAQgGgBgFgDQgFgCgFgFQgEgFgCgHQgCgHAAgHQAAgJADgJQACgIAFgFQAEgGAGgCQAFgDAHAAQAGAAAEADIAFAEIADAEIAAgJIANAAIAABGQAAATgJAIQgKAIgNAAQgGAAgGgCgAgJgjQgEADgDAFQgCAFAAAIQAAAKACAGQADAGAEADQAFAEAEAAIABAAQAIgCAGgHQAEgHAAgNQAAgHgCgHQgDgGgFgCQgFgEgEAAQgFABgEAEg");
	this.shape_68.setTransform(-53.5,23.15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_69.setTransform(-61.075,21.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAFgEACgHIABgMIgBgMQgCgHgFgEQgFgEgIAAQgLAAgEAIg");
	this.shape_70.setTransform(-68.85,21.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgSAxQgIgEgGgHQgFgHgDgKIgDgKIgBgKIAAgBIAAgBQAAgNAFgLQAEgLALgIQAFgDAHgDQAGgCAHAAQAJAAAJADQAIACAIAIQAHAHACANIgOAAQgCgKgHgGQgHgFgLAAIgDABIgEAAQgHACgGAFQgGAFgDAIQgDAIAAALQAAAKACAIQACAIAFAFQAEAFAFADIAGACIAFAAIAAAAQAOAAAIgHQAHgIACgNIAOAAQgBALgGAJQgGAJgJAGIgKAEQgFABgGAAQgLAAgJgEg");
	this.shape_71.setTransform(-77.775,20.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CCCCCC").s().p("AwZJYQjIAAAAjIIAAsfQAAjIDIAAMAgzAAAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_72.setTransform(15,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-59.5,250,120);


(lib.text_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAArQgVAAgOgEQgOgEgIgKQgGgJAAgQQAAgPAGgJQAIgKAOgEQAOgEAVAAIACAAQAUAAAOAEQAOAEAHAKQAHAJABAPQgBAQgHAJQgHAKgOAEQgOAEgUAAgAgegcQgLAEgEAHQgGAHAAAKQAAALAGAHQAEAHALAEQALADATAAIACAAQASAAALgDQAKgEAGgHQAEgHAAgLQAAgKgEgHQgGgHgKgEQgLgDgSAAIgCAAQgTAAgLADg");
	this.shape.setTransform(65.9,-6.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAnQgOgEgHgJQgHgJAAgOQAAgNAIgLQAIgKAOgFQAOgGASAAQANAAAIABQAJACAFADIAIADIADADIgCAEIgCABIgDABIgEgBIgGgCIgMgCIgRgCQgNAAgLAEQgLAEgHAHQgGAHgBAJQAJgDAOgDQAMgCAPAAQALAAAJABQAKACAHADQAHACAEAEQADAFABAHQgBAJgGAGQgHAGgMADQgNADgRAAQgSAAgNgEgAgPADIgQAEIgMADQADAMAMAFQALAEAUAAQAOAAAJgCQAJgCAFgDQAEgDAAgEQAAgHgKgEQgKgEgUAAIgTABg");
	this.shape_1.setTransform(52.525,-6.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(39.775,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(29.975,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(21.475,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqAlQgOgGAAgNQAAgIAFgFQAGgFAKgCQgIgCgEgFQgEgEAAgGQAAgMANgFQANgGAZAAQAaAAANAGQANAFAAAMQAAAGgEAEQgEAFgJACQALACAGAFQAGAFAAAIQAAANgPAGQgPAGgcAAQgbAAgPgGgAgZAFQgJACgFADQgFADAAAFQAAAEAFADQAFADAJACQALABAOAAQAPAAAKgBQALgCAEgDQAFgDgBgEQABgFgFgDQgEgDgLgCQgKgCgPAAQgOAAgLACgAgWgeQgJACgEACQgEADAAAEQAAAEAEADQAEADAJABQAJACANAAQAOAAAJgCQAJgBAEgDQAEgDAAgEQAAgEgEgDQgEgCgJgCQgJgBgOAAQgNAAgJABg");
	this.shape_5.setTransform(13.75,-6.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAfIgCgBIgBgCIAAg2IABgCIACgBIAGAAIADABIAAACIAAAHIACABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQADgEAIgEQAGgDALAAIAMABIAHACQABABABAAQAAAAAAABQABAAAAABQAAAAAAAAIACAEIAAACIgCACIgDAAIgJgDIgLAAQgJAAgHABQgGACgDAFQgEAFgBAGIAAAcIAAACIgDABg");
	this.shape_6.setTransform(-0.15,-5.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAIAFQAJADAEAHQAEAGAAAIQAAADgCABQgCACgEAAIg8AAQABAHAEADQAEAEAGACQAHABAIAAQAIAAAHgBQAGgCAFgCIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMgBQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHADgBAJIA4AAIAAAAg");
	this.shape_7.setTransform(-8.7025,-5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAoQgHgEgEgFIAAAIIAAABIgDABIgGAAIgCgBIgBgBIAAhOIABgCIACAAIAGAAIADAAIAAACIAAAfQAEgFAHgDQAIgEAMAAQAPAAAJAFQAJADADAHQAEAGAAAKQAAAKgEAHQgDAHgJAEQgJADgPAAQgMAAgIgCgAgPgHQgHACgDAEQgDAEAAAIQAAAIADAEQADAFAHACQAHACAJAAQAKAAAGgCQAHgCADgFQADgEAAgIQAAgIgDgEQgDgEgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_8.setTransform(-17.9222,-6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA1AfIgCgBIgBgCIAAgcQAAgKgFgFQgGgEgKAAQgMAAgGAEQgFAFAAAKIAAAcIgBACIgCABIgFAAIgCgBIgBgCIAAgcQAAgKgFgFQgGgEgLAAQgMAAgGAEQgEAFAAAKIAAAcIgBACIgCABIgGAAIgCgBIgBgCIAAg2IABgCIACgBIAGAAIACABIABACIAAAFIAAACIABgBQAEgFAFgDQAHgCAKAAQAKAAAGADQAGADADAGIAAABIABgBQAEgFAGgEQAIgDALAAQAPAAAIAIQAGAIAAAOIAAAcIAAACIgDABg");
	this.shape_9.setTransform(-29.7,-5.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAIAFQAJADAEAHQAEAGAAAIQAAADgCABQgCACgEAAIg8AAQABAHAEADQAEAEAGACQAHABAIAAQAIAAAHgBQAGgCAFgCIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMgBQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHADgBAJIA4AAIAAAAg");
	this.shape_10.setTransform(-41.1525,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAGAqQgGAAgDgDQgDgDAAgHIAAgkIAAAAIgCgBIgNAAIgCgBIgBgCIAAgEIABgCIACgBIANAAIACgBIAAAAIAAgTIABgDIACAAIAFAAIACAAIABADIAAATIAAAAIAAABIARAAIACABIABACIAAAEIgBACIgCABIgRAAIAAABIAAAAIAAAhQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQACACAEAAIAIgBIADAAIABACIAAADIAAACIgBACIgGABIgFABIgGAAg");
	this.shape_11.setTransform(-48.7,-6.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgmArIgCgBIgBgDIAAhMIABgDIACgBIAGAAIADABIAAADIAAAIQAEgHAHgCQAIgEAMAAQAPAAAJAFQAJADADAHQAEAHAAAKQAAAKgEAGQgDAHgJAEQgJADgPAAQgMAAgIgCQgHgDgEgGIAAAeIAAADIgDABgAgPgdQgHACgDAEQgDAFAAAIQAAAIADADQADAFAHACQAHACAJAAQAKAAAGgCQAHgCADgFQADgDAAgIQAAgIgDgFQgDgEgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_12.setTransform(-56.2722,-4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAIAFQAJADAEAHQAEAGAAAIQAAADgCABQgCACgEAAIg8AAQABAHAEADQAEAEAGACQAHABAIAAQAIAAAHgBQAGgCAFgCIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMgBQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHADgBAJIA4AAIAAAAg");
	this.shape_13.setTransform(-65.6525,-5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBAsQgOgBgMgBIgRgEIgKgEIgCgDIABgDIABgCIADgCIADAAIAJADIARADQAJABANAAIAAAAQAQAAAJgBQAKgBAFgDQADgDAAgEQABgEgEgCQgDgCgHgCIgPgCIgQgCIgTgDIgSgCQgIgDgEgFQgFgFAAgGQAAgMANgFQANgHAZAAIADAAQANABALABIARAEIAJAEQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgBAEIgBACQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgDgBIgJgCIgPgDQgKgCgMAAIgCAAQgUABgIADQgJACAAAGQAAADADACIAJAEIAOACIAPACIAVACIATAEQAIACAFAFQAFAFAAAHQAAAMgPAGQgOAHgcAAg");
	this.shape_14.setTransform(-76.5,-6.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_15.setTransform(-17.7729,-35.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAdAxIgDgBIgBgCIAAgiQABgJgHgDQgGgEgNABQgMgBgHAEQgFADAAAJIAAAiIgBACIgDABIgQAAIgDgBIgBgCIAAhaIABgDIADgBIAQAAIADABIABADIAAAkIAAABIABAAQADgHAHgEQAJgEAOAAQAOAAAJAEQAJAEAEAIQADAHAAALIAAAiIgBACIgCABg");
	this.shape_16.setTransform(-29.15,-36.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAgQgKgEgGgIQgFgIAAgMQAAgKAFgJQAGgIAKgEQALgEARgBQAPABAKADQALADAHAFQAAABAAAAQAAAAABAAQAAABAAAAQAAAAgBABIgBACIgFAGIgEADIgEgBIgJgDIgJgCIgIAAQgJAAgGABQgGACgEAEQgDADAAAGQAAAHADAEQAEADAGACQAGABAJAAIAIAAIAJgCIAJgDIAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIAFAGIABADIAAACQgHAGgLADQgKADgPAAQgRAAgLgFg");
	this.shape_17.setTransform(-40.0917,-35.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAxIgDgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIATgcIgrg9QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAUAAIACABIACACIAdAqIAAABIABgBIAegqIABgCIADgBIATAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADIguA/IAAABIgBABIgSAaIgCABIgCABg");
	this.shape_18.setTransform(-51.4117,-33.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAkQgJgBgGgCIgIgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIAFgJQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIACABIAJACIALABIANABIADAAIAHAAIAHgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgHgCIgNgCIgOgCIgOgDQgFgDgEgDQgDgEAAgGQAAgIAEgFQAGgFAJgCQAJgDAMAAIARACIAOACIAIADIACACIgBAEIgDAIIgDACIgDAAIgIgCIgLgCIgMgBIgDAAIgGAAIgFACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIACACIAEABIANADIAOACIAPADQAGACAEAEQAEAEABAHQgBAHgEAEQgDAEgHADIgNADIgPABIgTgBg");
	this.shape_19.setTransform(-62.35,-35.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag/AxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIBZAAQAPAAAKAFQAJAFAFAHQAEAIAAAIQAAAJgEAGQgFAIgJAEQgKAGgPAAIhDAAIgBAAIAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAgqgXIAAABIAAAPIAAAAIABAAIBCAAQAKABAEgCQADgCAAgFQAAgFgDgCQgEgCgKAAIhCAAIgBABg");
	this.shape_20.setTransform(-74.8975,-36.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_21.setTransform(-38.025,43.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcAsQgLgJAAgSIANAAQAAAJAEAGQAEAFAGACQAGACAHAAIAMgBQAGgCAEgEQAEgDAAgHQAAgFgCgDQgCgEgFgCIgNgDIgOgEIgNgDQgGgDgEgFQgEgFAAgIQAAgIAEgIQADgGAIgEQAIgFAMAAQAPAAAJAFQAIAGADAGIACAHIAAABIABAHIgMAAIgBgHIgDgFQgEgEgGgCQgGgCgFAAQgIAAgHADQgIAEAAAKQAAAKANADIAbAGQAXAFAAAWQAAAKgGAHQgGAHgJADQgJADgJAAQgSAAgLgJg");
	this.shape_22.setTransform(-44.675,38.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAvQgJgEgFgIQgGgIAAgLIAAhDIAOAAIAABBQAAAHADAGQADAGAFADQAGAEAIAAQAHAAAGgEQAHgDADgGQADgGAAgHIAAhBIAOAAIAABDQAAAKgGAIQgFAJgJAEQgKAFgLAAQgKAAgIgFg");
	this.shape_23.setTransform(-54.375,38.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOAkQgHgDgFgGQgGgKAAgOIAAgIIADgJQACgJAFgFQAFgEAGgDQAGgEAGAAQAFAAAGACQAEACAFAEQAEAEACAEQAHAMgBAPIg1AAQABAMAFAGQAGAHAJAAQAFgBAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIgBABIgDABQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgEgHgLABQgFAAgEADQgFADgDAFQgDAGAAAEIApAAIAAAAg");
	this.shape_24.setTransform(-67.25,40.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_25.setTransform(-75.075,38.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_26.setTransform(-81.025,39.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_27.setTransform(62.375,21.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_28.setTransform(55.375,21.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgQgTQgEAJgBAKQABAGACAGQACAHAEAEQAFAFAHAAQAIAAAEgFQAGgEACgHIABgMIgBgMQgCgHgGgEQgEgEgIAAQgLAAgFAIg");
	this.shape_29.setTransform(48,21.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAFgDQAEgEAKAAIAAAOQgKAAgHAEQgFAFAAAJIAAArg");
	this.shape_30.setTransform(42.3,21.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHAlIgGgCIgFgDQgGgEgDgIQgDgIgBgLIABgGIACgKQABgEADgEQAEgHAHgEQAHgEAJAAQAGAAAGACQAHADAEAFQAEAHABAKIgLAAQgCgIgFgEQgEgEgHAAQgKAAgEAIQgGAIAAANQABAHACAFQABAFACADQAGAGAHAAQAHAAAFgFQAGgFABgIIALAAQgBAJgEAGQgEAHgGADQgHAEgIAAQgEAAgEgCg");
	this.shape_31.setTransform(36,21.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_32.setTransform(28.575,21.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_33.setTransform(16.675,20.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgGgKgBgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAFACQAGABADAEQAFAEACAEQAHAMAAAQIg1AAQgBALAGAHQAFAFAKAAQAFABAEgDQAFgCADgEQACgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_34.setTransform(9.05,21.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_35.setTransform(1.625,21.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_36.setTransform(-5.725,21.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgHgKAAgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAGABADAEQAFAEACAEQAGAMABAQIg1AAQgBALAGAHQAFAFAKAAQAFABAEgDQAFgCADgEQACgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_37.setTransform(-13.55,21.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_38.setTransform(-19.025,20.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgPAkQgGgEgEgGQgIgKAAgOIABgIIACgJQADgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAFABAEAEQAFAEADAEQAFAMABAQIg1AAQgBALAGAHQAGAFAJAAQAFABAEgDQAFgCADgEQACgDAAgDIAMAAQAAAEgEAGQgDAGgGAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFAAAFIAnAAIAAAAg");
	this.shape_39.setTransform(-24.45,21.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAFgDQAEgEAKAAIAAAOQgKAAgHAEQgFAFAAAJIAAArg");
	this.shape_40.setTransform(-30.15,21.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQADAHAEAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMIgCgMQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_41.setTransform(-40.8,21.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_42.setTransform(-48.625,20.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHAlIgGgCIgFgDQgGgEgDgIQgEgIAAgLIABgGIACgKQABgEACgEQAEgHAIgEQAHgEAIAAQAIAAAGACQAGADAEAFQAFAHAAAKIgMAAQAAgIgGgEQgEgEgIAAQgJAAgEAIQgGAIABANQAAAHABAFQACAFACADQAGAGAHAAQAHAAAFgFQAFgFABgIIAMAAQgBAJgEAGQgEAHgGADQgGAEgJAAQgEAAgEgCg");
	this.shape_43.setTransform(-55.95,21.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZAzIAAgLIAGABIAGgBIADgFIAFgLIgbhKIANAAIAUA6IATg6IANAAIgKAcIgGARIgDAFIgBAGIgGAOIgHATQgCAGgCACQgEADgDABIgKABIgEgBg");
	this.shape_44.setTransform(-63,23.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_45.setTransform(-70.025,21.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkAzIAAhlIAsAAQAIABAIAEQAGADAEAGQADAIAAAHQAAAIgCAGQgDAHgHADQgHAFgKAAIgfAAIAAArgAgXgCIAaAAQAUgBABgSQAAgQgVAAIgaAAg");
	this.shape_46.setTransform(-77.9,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_47.setTransform(-7,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-57.5,200,120);


(lib.text_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBArQgUAAgOgEQgOgEgIgKQgHgJAAgQQAAgPAHgJQAIgKAOgEQAOgEAUAAIADAAQAUAAAOAEQAOAEAHAKQAIAJAAAPQAAAQgIAJQgHAKgOAEQgOAEgUAAgAgegcQgLAEgFAHQgEAHAAAKQAAALAEAHQAFAHALAEQALADASAAIADAAQASAAALgDQAKgEAGgHQAFgHgBgLQABgKgFgHQgGgHgKgEQgLgDgSAAIgDAAQgSAAgLADg");
	this.shape.setTransform(20.6,-6.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAnQgOgEgHgJQgHgJAAgOQAAgNAIgLQAIgKAOgFQAOgGASAAQANAAAIABQAJACAFADIAIADIADADIgCAEIgCABIgDABIgEgBIgGgCIgMgCIgRgCQgNAAgLAEQgLAEgHAHQgGAHgBAJQAJgDAOgDQAMgCAPAAQALAAAJABQAKACAHADQAHACAEAEQADAFABAHQgBAJgGAGQgHAGgMADQgNADgRAAQgSAAgNgEgAgPADIgQAEIgMADQADAMAMAFQALAEAUAAQAOAAAJgCQAJgCAFgDQAEgDAAgEQAAgHgKgEQgKgEgUAAIgTABg");
	this.shape_1.setTransform(7.225,-6.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(-5.525,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(-15.325,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(-23.825,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqAlQgOgGAAgNQgBgIAGgFQAFgFALgCQgIgCgEgFQgEgEAAgGQAAgMANgFQANgGAZAAQAaAAANAGQANAFAAAMQAAAGgEAEQgEAFgIACQALACAFAFQAGAFgBAIQAAANgOAGQgOAGgdAAQgcAAgOgGgAgZAFQgKACgEADQgEADgBAFQABAEAEADQAFADAJACQALABAOAAQAQAAAKgBQAKgCAEgDQAEgDABgEQgBgFgEgDQgEgDgKgCQgKgCgQAAQgOAAgLACgAgWgeQgJACgEACQgEADAAAEQAAAEAEADQAEADAJABQAJACANAAQAOAAAJgCQAJgBAEgDQAEgDAAgEQAAgEgEgDQgEgCgJgCQgJgBgOAAQgNAAgJABg");
	this.shape_5.setTransform(-31.55,-6.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_6.setTransform(-41.275,-6.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAqIgCgBIABgDIANgTIgBgCIgBgBIgmg2IgBgCIACgBIAIAAIACABIACABIAhAuIAAABIABgBIAhguIABgBIADgBIAHAAIADABIgBACIgnA2IAAABIAAAAIgPAXIgCABIgBABg");
	this.shape_7.setTransform(-53.4,-4.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAqIgCgBIgBgCIAAhNIABgDIACAAIAFAAIACAAIABADIAABNIgBACIgCABg");
	this.shape_8.setTransform(-59.85,-6.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAbQgIgDgEgHQgDgGAAgLIAAgbIABgCIACgBIAGAAIACABIABACIAAAbQAAALAHAFQAGAFAPAAQAOAAAIgFQAHgFAAgLIAAgbIABgCIACgBIAGAAIACABIABACIAAA2IgBACIgCABIgGAAIgCgBIgBgCIAAgIIAAgBIgBABQgEAFgIADQgIAEgMAAQgNAAgIgEg");
	this.shape_9.setTransform(-65.975,-5.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaApIgRgEIgJgEIgCgCIABgEIACgDIADgCIADABIAIADIAOADQAJACAMAAQAPAAAKgDQAKgEAEgHQAFgHAAgKIAAgmIABgDIADgBIAEAAIADABQABABAAAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAmQgBAQgGAJQgHAKgNAEQgMAEgSAAQgOAAgKgCg");
	this.shape_10.setTransform(-77.025,-6.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkAkIgDgBIgBgCIAAg/IABgDIADgBIAQAAIADABIABADIAAAGIABACQABAAAAAAQAAAAABgBQAAAAABAAQAAgBAAAAIAGgFQAEgDAEgCQAGgBAIAAQAJAAAFABIAGADQADABABACIABAGIAAAFQAAAEgCABIgGAAIgGgCIgHgCIgJgBQgIAAgFACQgGACgEADQgEAEAAAGIAAAhIgBACIgDABg");
	this.shape_11.setTransform(72.175,-35.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAGgIALgEQALgEARgBQATABALAEQALAEAFAIQAFAHAAAKIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgHAAIhBAAQADAHAIACQAIACAJAAIAQgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIADAEIABAEQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgHAEgJACQgKADgOAAQgaAAgNgKgAAcgFQgCgGgGgDQgHgCgNAAQgLAAgHACQgGADgBAGIA1AAIAAAAg");
	this.shape_12.setTransform(61.6,-35.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcAxIgDgBIgDgBIgggfIgQAJIAAAVIAAACIgDABIgRAAIgCgBIgBgCIAAhaIABgDIACgBIARAAIADABIAAADIAAAvIAogWIADgCIADAAIAYAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAgBAAIgmAVIApAnQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_13.setTransform(50.4042,-36.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAgQgKgEgGgIQgFgIAAgMQAAgKAFgJQAGgIAKgEQALgEARgBQAPABAKADQALADAHAFQAAABAAAAQAAAAABAAQAAABAAAAQAAAAgBABIgBACIgFAGIgEADIgEgBIgJgDIgJgCIgIAAQgJAAgGABQgGACgEAEQgDADAAAGQAAAHADAEQAEADAGACQAGABAJAAIAIAAIAJgCIAJgDIAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIAFAGIABADIAAACQgHAGgLADQgKADgPAAQgRAAgLgFg");
	this.shape_14.setTransform(39.3583,-35.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAFgIAMgEQALgEARgBQASABAMAEQALAEAFAIQAFAHAAAKIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgGAAIhCAAQAEAHAHACQAIACAKAAIAPgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIACAEQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgHAEgKACQgJADgOAAQgbAAgMgKgAAcgFQgCgGgGgDQgHgCgNAAQgMAAgGACQgGADgCAGIA2AAIAAAAg");
	this.shape_15.setTransform(28.5,-35.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAdAxIgDgBIgBgCIAAgiQABgJgHgDQgGgEgNABQgMgBgHAEQgFADAAAJIAAAiIgBACIgDABIgQAAIgDgBIgBgCIAAhaIABgDIADgBIAQAAIADABIABADIAAAkIAAABIABAAQADgHAHgEQAJgEAOAAQAOAAAJAEQAJAEAEAIQADAHAAALIAAAiIgBACIgCABg");
	this.shape_16.setTransform(17.2,-36.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgkAuQgSgFgIgMQgJgKAAgTQAAgSAJgKQAIgMASgFQARgFAaAAQASABANABQANACAIADQAHACADACQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgGALQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAIgEgBIgLgEIgPgCIgXAAQgOgBgLACQgKACgGADQgGADgCAGQgDAFAAAFQAAAHADAEQACAFAGAEQAGAEAKABQALACAOAAIAXgCIAPgCIALgDIAEAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAIAFAJIACAFIABACIgBABIgCABQgDADgHADQgIACgNACQgMABgTAAIgFABQgWAAgQgFg");
	this.shape_17.setTransform(3.575,-36.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAxIgDgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIATgcIgrg9QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAUAAIACABIACACIAdAqIAAABIABgBIAegqIABgCIADgBIATAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADIguA/IAAABIgBABIgSAaIgCABIgCABg");
	this.shape_18.setTransform(-14.6117,-33.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAwQgIgDgEgEIAAAEIAAADIgDABIgRAAIgCgBIgBgDIAAhaIABgDIACAAIARAAIADAAIAAADIAAAfQAEgFAIgCQAIgCAMAAQASAAALAEQALAFAEAIQAEAHAAAMQAAALgEAJQgEAIgLAEQgLAFgSAAQgNAAgHgCgAgRgCQgHABgDADQgCADgBAIQABAHACAEQADAEAHABIAQABIAQgBQAGgBADgEQAEgEAAgHQAAgIgEgDQgDgDgGgBQgHgCgJABQgKgBgGACg");
	this.shape_19.setTransform(-26.45,-36.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAwQgIgDgEgEIAAAEIAAADIgDABIgRAAIgCgBIgBgDIAAhaIABgDIACAAIARAAIADAAIAAADIAAAfQAEgFAIgCQAIgCAMAAQATAAAKAEQAKAFAFAIQAEAHAAAMQAAALgEAJQgFAIgKAEQgKAFgTAAQgNAAgHgCgAgSgCQgGABgDADQgCADgBAIQABAHACAEQADAEAGABIARABIAQgBQAGgBADgEQAEgEAAgHQAAgIgEgDQgDgDgGgBQgGgCgKABQgKgBgHACg");
	this.shape_20.setTransform(-38.25,-36.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggAgQgJgEgDgIQgEgIAAgLIAAggIABgDIACgBIARAAIADABIABADIAAAgQAAAJAGAEQAGADAMAAQANAAAGgDQAGgEAAgKIAAgfIABgDIADgBIARAAIACABIABADIAAA/IgBACIgCABIgRAAIgDgBIgBgCIAAgJIAAgBIgBAAQgDAGgIAEQgIAEgOAAQgPAAgIgEg");
	this.shape_21.setTransform(-50.025,-35.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAcAxIgCgBIgBgCIAAgiQABgJgHgDQgGgEgNABQgNgBgFAEQgHADAAAJIAAAiIAAACIgDABIgQAAIgDgBIgBgCIAAhaIABgDIADgBIAQAAIADABIAAADIAAAkIABABIABAAQADgHAHgEQAJgEAOAAQAPAAAIAEQAJAEAEAIQADAHAAALIAAAiIgBACIgCABg");
	this.shape_22.setTransform(-61.35,-36.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkAuQgSgFgIgMQgJgKAAgTQAAgSAJgKQAIgMASgFQARgFAaAAQASABANABQANACAIADQAHACADACQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgGALQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIgEgBIgLgEIgPgCIgXAAQgOgBgLACQgKACgGADQgGADgCAGQgDAFAAAFQAAAHADAEQACAFAGAEQAGAEAKABQALACAOAAIAXgCIAPgCIALgDIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIAFAJIACAFIABACIgBABIgCABQgDADgHADQgIACgNACQgMABgTAAIgFABQgWAAgQgFg");
	this.shape_23.setTransform(-74.975,-36.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_24.setTransform(58.175,43.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAFASIAAgjIAKAAIAAAjgAgOASIAAgjIAKAAIAAAjg");
	this.shape_25.setTransform(53.725,35.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_26.setTransform(49.175,39.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_27.setTransform(43.825,40.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_28.setTransform(38.775,38.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAOAkIgOg3IgOA3IgNAAIgVhIIAOAAIAOA5IAOg5IANAAIAPA5IAOg5IANAAIgWBIg");
	this.shape_29.setTransform(32.225,40.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGAyIAAhXIgiAAIAAgMIBRAAIAAAMIgiAAIAABXg");
	this.shape_30.setTransform(22.925,38.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgPAkQgGgDgFgGQgGgKgBgOIABgIIADgJQACgJAFgFQAFgEAHgDQAFgEAGAAQAFAAAFACQAGACADAEQAFAEACAEQAHAMAAAPIg1AAQgBAMAGAGQAFAHAKAAQAFgBAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAABIgFABQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgHgKABQgFAAgEADQgFADgDAFQgCAGAAAEIAnAAIAAAAg");
	this.shape_31.setTransform(10.85,40.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_32.setTransform(3.025,38.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGAyIAAhXIgiAAIAAgMIBRAAIAAAMIgiAAIAABXg");
	this.shape_33.setTransform(-5.075,38.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAFASIAAgjIAKAAIAAAjgAgOASIAAgjIAKAAIAAAjg");
	this.shape_34.setTransform(-11.825,35.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_35.setTransform(-21.725,40.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgPAkQgGgDgFgGQgGgKgBgOIABgIIADgJQACgJAFgFQAFgEAHgDQAFgEAGAAQAFAAAFACQAGACADAEQAFAEACAEQAHAMAAAPIg1AAQAAAMAFAGQAFAHAKAAQAFgBAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAABIgFABQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgHgKABQgFAAgEADQgFADgDAFQgCAGAAAEIAnAAIAAAAg");
	this.shape_36.setTransform(-29.1,40.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHAlIgGgCIgFgDQgGgEgDgIQgDgIgBgLIABgGIACgKQABgEADgEQAEgHAHgEQAHgEAJAAQAGAAAGACQAHADAEAFQAEAHABAKIgLAAQgCgIgFgEQgEgEgHAAQgKAAgEAIQgGAIAAANQABAHACAFQABAFACADQAGAGAHAAQAHAAAFgFQAGgFABgIIALAAQgBAJgEAGQgEAHgGADQgHAEgIAAQgEAAgEgCg");
	this.shape_37.setTransform(-36.45,40.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgXAhQgFgHAAgJIAAg2IAMAAIAAA0QAAAGADAEQAEADAFAAIADAAQAHgBAFgGQAGgGAAgJIAAgrIAMAAIAABIIgMAAIAAgHQgFAFgHADQgGADgHAAQgJgBgGgFg");
	this.shape_38.setTransform(-43.875,40.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgSAtQgHgGgDgJQgDgJAAgLQAAgKADgIQAEgHAHgFQAHgFAJAAQAIAAAFAEQAEADAEAFIAAglIAMAAIAABjIgLAAIAAgKQgCADgDADQgDADgEABIgFACIgEAAQgLAAgHgGgAgPgGQgEAHAAAMQAAAMAFAIQAFAHAJABQAHAAAHgHQAGgFAAgNQAAgfgUABQgLgBgEAJg");
	this.shape_39.setTransform(-51.875,38.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAEgEADgHIABgMIgBgMQgDgHgEgEQgFgEgIAAQgLAAgEAIg");
	this.shape_40.setTransform(-59.5,40.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAGgDAJAAIAAAMQgLABgGAFQgGAEAAAIIAAArg");
	this.shape_41.setTransform(-65.2,40.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_42.setTransform(-70.125,39.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_43.setTransform(-75.875,40.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_44.setTransform(-81.325,38.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAFgDQAEgEAKAAIAAAOQgLAAgGAEQgFAFAAAJIAAArg");
	this.shape_45.setTransform(19.7,21.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgOAkQgHgEgFgGQgGgKAAgOIAAgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAFAAAGACQAEABAFAEQAEAEACAEQAHAMgBAQIg1AAQABALAFAHQAGAFAJAAQAFABAFgDQAEgCACgEQADgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgDAFAAAFIApAAIAAAAg");
	this.shape_46.setTransform(12.95,21.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAPAyIgWglIgKAKIAAAbIgMAAIAAhjIAMAAIAAA5IAegeIAQAAIgcAaIAeAug");
	this.shape_47.setTransform(6,20.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgIAlIgFgCIgFgDQgFgEgEgIQgEgIAAgLIABgGIACgKQABgEACgEQAEgHAIgEQAIgEAHAAQAHAAAHACQAFADAFAFQAFAHAAAKIgMAAQAAgIgGgEQgEgEgIAAQgJAAgEAIQgFAIAAANQAAAHABAFQACAFADADQAFAGAHAAQAHAAAFgFQAFgFABgIIAMAAQgBAJgEAGQgEAHgGADQgHAEgIAAQgEAAgFgCg");
	this.shape_48.setTransform(-1.4,21.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgGgKgBgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAFACQAGABADAEQAFAEACAEQAHAMAAAQIg1AAQAAALAFAHQAFAFAKAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_49.setTransform(-8.85,21.65);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_50.setTransform(-16.675,20.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSAxQgIgEgGgHQgFgHgDgKIgDgKIgBgKIAAgBIAAgBQAAgNAFgLQAEgLALgIQAFgDAHgDQAGgCAHAAQAJAAAJADQAIACAIAIQAHAHACANIgOAAQgCgKgHgGQgHgFgLAAIgDABIgEAAQgHACgGAFQgGAFgDAIQgDAIAAALQAAAKACAIQACAIAFAFQAEAFAFADIAGACIAFAAIAAAAQAOAAAIgHQAHgIACgNIAOAAQgBALgGAJQgGAJgJAGIgKAEQgFABgGAAQgLAAgJgEg");
	this.shape_51.setTransform(-25.575,20.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZAzIAAgLIAHABIAEgBIAEgFIAEgLIgbhKIAOAAIAUA6IATg6IANAAIgKAcIgGARIgDAFIgCAGIgFAOIgHATQgCAGgDACQgCADgEABIgKABIgEgBg");
	this.shape_52.setTransform(-38.05,23.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTAoIAAAJIgMAAIAAhjIAMAAIAAAkQAEgGAFgDQAFgCAHAAQAJAAAHAEQAHAGAEAIQADAHAAAKQAAAKgDAJQgDAKgHAGQgIAHgLgBQgNABgGgMgAgMgJQgEAEgCAGQgBAHAAAIQAAANAGAGQAGAFAHAAQAJABAFgJQAFgHAAgNQAAgbgTAAQgIAAgEAGg");
	this.shape_53.setTransform(-45.325,20.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTAoIAAAJIgMAAIAAhjIAMAAIAAAkQAEgGAFgDQAFgCAHAAQAJAAAHAEQAHAGAEAIQADAHAAAKQAAAKgDAJQgDAKgHAGQgIAHgLgBQgNABgGgMgAgMgJQgEAEgCAGIgBAPQAAANAGAGQAGAFAHAAQAJABAFgJQAFgHAAgNQAAgbgTAAQgIAAgEAGg");
	this.shape_54.setTransform(-53.125,20.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgXAgQgFgFAAgKIAAg3IAMAAIAAA1QAAAGADAEQAEADAFABIADAAQAHgCAFgGQAGgGAAgJIAAgsIAMAAIAABKIgMAAIAAgIQgFAFgHADQgGACgHAAQgJABgGgHg");
	this.shape_55.setTransform(-61.025,21.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_56.setTransform(-68.875,20.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSAxQgIgEgGgHQgFgHgDgKIgDgKIgBgKIAAgBIAAgBQAAgNAFgLQAEgLALgIQAFgDAHgDQAGgCAHAAQAJAAAJADQAIACAIAIQAHAHACANIgOAAQgCgKgHgGQgHgFgLAAIgDABIgEAAQgHACgGAFQgGAFgDAIQgDAIAAALQAAAKACAIQACAIAFAFQAEAFAFADIAGACIAFAAIAAAAQAOAAAIgHQAHgIACgNIAOAAQgBALgGAJQgGAJgJAGIgKAEQgFABgGAAQgLAAgJgEg");
	this.shape_57.setTransform(-77.775,20.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_58.setTransform(-7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-58.5,200,120);


(lib.text_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBArQgUAAgOgEQgOgEgHgKQgIgJAAgQQAAgPAIgJQAHgKAOgEQAOgEAUAAIACAAQAVAAAOAEQAOAEAHAKQAIAJgBAPQABAQgIAJQgHAKgOAEQgOAEgVAAgAgegcQgLAEgFAHQgEAHAAAKQAAALAEAHQAFAHALAEQALADASAAIACAAQATAAALgDQALgEAEgHQAFgHAAgLQAAgKgFgHQgEgHgLgEQgLgDgTAAIgCAAQgSAAgLADg");
	this.shape.setTransform(61.45,-6.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAnQgOgEgHgJQgHgJAAgOQAAgNAIgLQAIgKAOgFQAOgGASAAQANAAAIABQAJACAFADIAIADIADADIgCAEIgCABIgDABIgEgBIgGgCIgMgCIgRgCQgNAAgLAEQgLAEgHAHQgGAHgBAJQAJgDAOgDQAMgCAPAAQALAAAJABQAKACAHADQAHACAEAEQADAFABAHQgBAJgGAGQgHAGgMADQgNADgRAAQgSAAgNgEgAgPADIgQAEIgMADQADAMAMAFQALAEAUAAQAOAAAJgCQAJgCAFgDQAEgDAAgEQAAgHgKgEQgKgEgUAAIgTABg");
	this.shape_1.setTransform(48.075,-6.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(35.325,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(25.525,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(17.025,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqAlQgPgGAAgNQAAgIAGgFQAFgFAMgCQgJgCgEgFQgEgEAAgGQAAgMANgFQANgGAZAAQAaAAANAGQANAFAAAMQAAAGgEAEQgEAFgIACQALACAFAFQAGAFgBAIQAAANgOAGQgPAGgcAAQgbAAgPgGgAgZAFQgKACgEADQgEADAAAFQAAAEAEADQAFADAJACQALABAOAAQAPAAALgBQAJgCAFgDQAEgDABgEQgBgFgEgDQgFgDgJgCQgLgCgPAAQgOAAgLACgAgWgeQgJACgEACQgEADAAAEQAAAEAEADQAEADAJABQAJACANAAQAOAAAJgCQAJgBAEgDQAEgDAAgEQAAgEgEgDQgEgCgJgCQgJgBgOAAQgNAAgJABg");
	this.shape_5.setTransform(9.3,-6.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAfIgBgBIgBgCIAAg2IABgCIABgBIAHAAIACABIAAACIAAAHIABABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAEgEAGgEQAIgDALAAIALABIAIACQAAABABAAQAAAAABABQAAAAAAABQAAAAAAAAIABAEIAAACIgBACIgDAAIgIgDIgNAAQgIAAgGABQgHACgEAFQgEAFAAAGIAAAcIAAACIgCABg");
	this.shape_6.setTransform(-4.6,-5.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAIAFQAJADAEAHQAEAGAAAIQAAADgCABQgCACgEAAIg8AAQABAHAEADQAEAEAGACQAHABAIAAQAIAAAHgBQAGgCAFgCIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMgBQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHADgBAJIA4AAIAAAAg");
	this.shape_7.setTransform(-13.1525,-5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAoQgHgEgEgFIAAAIIAAABIgDABIgGAAIgCgBIgBgBIAAhOIABgCIACAAIAGAAIADAAIAAACIAAAfQAEgFAHgDQAIgEAMAAQAPAAAJAFQAJADADAHQAEAGAAAKQAAAKgEAHQgDAHgJAEQgJADgPAAQgMAAgIgCgAgPgHQgHACgDAEQgDAEAAAIQAAAIADAEQADAFAHACQAHACAJAAQAKAAAGgCQAHgCADgFQADgEAAgIQAAgIgDgEQgDgEgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_8.setTransform(-22.3722,-6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA1AfIgBgBIgBgCIAAgcQAAgKgGgFQgGgEgLAAQgMAAgFAEQgFAFAAAKIAAAcIAAACIgDABIgFAAIgCgBIgBgCIAAgcQABgKgGgFQgFgEgMAAQgMAAgGAEQgEAFgBAKIAAAcIAAACIgDABIgGAAIgCgBIgBgCIAAg2IABgCIACgBIAGAAIADABIAAACIAAAFIABACIACgBQACgFAHgDQAGgCAJAAQAKAAAHADQAGADACAGIABABIABgBQADgFAIgEQAGgDAMAAQAQAAAGAIQAIAIgBAOIAAAcIAAACIgCABg");
	this.shape_9.setTransform(-34.15,-5.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAIAFQAJADAEAHQAEAGAAAIQAAADgCABQgCACgEAAIg8AAQABAHAEADQAEAEAGACQAHABAIAAQAIAAAHgBQAGgCAFgCIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMgBQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHADgBAJIA4AAIAAAAg");
	this.shape_10.setTransform(-45.6025,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDAeIgCAAIgDgCIgng2IAAgDIADgBIAHAAIACABIACACIAhAuIAAABIABgBIAhguIACgCIACgBIAIAAIACABIAAADIgnA2IgDACIgDAAg");
	this.shape_11.setTransform(-55.25,-5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAJAFQAJADAEAHQAFAHAAAJQAAAKgFAHQgEAHgJAEQgJADgPAAQgOAAgJgDgAgPgSQgHACgDAEQgEAFAAAHQAAAIAEAEQADAFAHACQAGACAJAAQAKAAAHgCQAGgCAEgFQADgEAAgIQAAgHgDgFQgEgEgGgCQgHgCgKAAQgJAAgGACg");
	this.shape_12.setTransform(-64.9525,-5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAxAqIgEAAIgDgCIhUhBIgBAAIgBABIAAA+IgBADIgDABIgEAAIgDgBIgBgDIAAhLIABgDIADgBIAEAAIAEAAIADACIBUBBIABAAIABgBIAAg+IABgDIADgBIAEAAIADABIABADIAABLIgBADIgDABg");
	this.shape_13.setTransform(-76.225,-6.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAxIgDgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIATgcIgrg9QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAUAAIACABIACACIAdAqIAAABIABgBIAegqIABgCIADgBIATAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADIguA/IAAABIgBABIgSAaIgCABIgCABg");
	this.shape_14.setTransform(-4.1617,-33.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AggAtQgLgEgEgIQgEgJAAgLQAAgMAEgHQAEgIALgFQALgEASAAQAMAAAIACQAIACAEAFIAAgfIAAgDIADAAIARAAIACAAIABADIAABaIgBADIgCABIgRAAIgDgBIAAgDIAAgEQgEAEgIADQgHACgNAAQgSAAgLgFgAgOgCQgGABgDADQgEADAAAIQAAAHAEAEQADAEAGABIAQABIAQgBQAHgBACgEQAEgEAAgHQAAgIgEgDQgCgDgHgBQgGgCgKABQgJgBgHACg");
	this.shape_15.setTransform(-16.3,-36.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAGgIAKgEQAMgEARgBQATABALAEQALAEAFAIQAFAHAAAKIgBAFQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgHAAIhAAAQACAHAIACQAHACAKAAIARgBIAPgEIADAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAABIADAEIABAEQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQgGAEgJACQgKADgOAAQgbAAgMgKgAAdgFQgCgGgHgDQgGgCgNAAQgMAAgHACQgGADgBAGIA2AAIAAAAg");
	this.shape_16.setTransform(-27.7,-35.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAcAkIgCgBIgBgCIAAghQAAgJgGgDQgGgFgNABQgNgBgGAFQgFADgBAJIAAAhIAAACIgDABIgRAAIgCgBIgBgCIAAg/IABgDIACgBIARAAIADABIAAADIAAAJIABABIABAAQACgHAJgEQAHgEAPAAQAPAAAIAEQAJAEADAIQAEAIAAALIAAAhIgBACIgDABg");
	this.shape_17.setTransform(-39,-35.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdAkIgDgBIgBgCIAAghQABgJgHgDQgGgFgNABQgNgBgGAFQgFADAAAJIAAAhIgBACIgDABIgRAAIgCgBIgBgCIAAg/IABgDIACgBIARAAIADABIABADIAAAJIAAABIABAAQADgHAHgEQAJgEAOAAQAOAAAJAEQAJAEAEAIQADAIAAALIAAAhIgBACIgCABg");
	this.shape_18.setTransform(-50.4,-35.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAGgIALgEQALgEARgBQATABALAEQALAEAFAIQAFAHAAAKIgBAFQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgHAAIhBAAQADAHAIACQAHACAKAAIAQgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIADAEIABAEQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQgGAEgJACQgKADgOAAQgaAAgNgKgAAcgFQgCgGgGgDQgHgCgMAAQgMAAgHACQgGADgBAGIA1AAIAAAAg");
	this.shape_19.setTransform(-61.8,-35.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAoAxIgDgBIgDgBIg3grIgUAMIAAAcQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgQAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAQAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAiIBCglIAEgCIADAAIAeAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQgBAAAAAAIhAAkIBCAzQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_20.setTransform(-74.9708,-36.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_21.setTransform(-32.575,43.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_22.setTransform(-38.475,40.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQADAHAEAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_23.setTransform(-46.25,40.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_24.setTransform(-51.725,38.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_25.setTransform(-55.325,39.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIAlIgFgCIgFgDQgGgEgDgIQgEgIABgLIAAgGIACgKQABgEACgEQAFgHAHgEQAIgEAHAAQAHAAAHACQAFADAFAFQAFAHABAKIgNAAQgBgIgEgEQgFgEgIAAQgIAAgFAIQgFAIgBANQAAAHACAFQACAFADADQAFAGAHAAQAHAAAFgFQAGgFAAgIIANAAQgCAJgEAGQgEAHgGADQgHAEgIAAQgEAAgFgCg");
	this.shape_26.setTransform(-60.6,40.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAkQgHgDgFgGQgGgKAAgOIAAgIIACgJQADgJAFgFQAFgEAGgDQAGgEAGAAQAFAAAGACQAEACAFAEQAEAEACAEQAHAMgBAPIg1AAQABAMAFAGQAGAHAJAAQAFgBAFgCQAEgCACgEQADgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBABIgDABQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgFgHgKABQgFAAgEADQgFADgDAFQgDAGAAAEIApAAIAAAAg");
	this.shape_27.setTransform(-68.05,40.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_28.setTransform(-73.525,38.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOAkQgHgDgFgGQgGgKAAgOIAAgIIADgJQACgJAFgFQAFgEAGgDQAGgEAGAAQAFAAAGACQAEACAFAEQAEAEACAEQAHAMgBAPIg1AAQABAMAFAGQAGAHAJAAQAFgBAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIgBABIgDABQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgEgHgLABQgFAAgEADQgFADgDAFQgDAGAAAEIApAAIAAAAg");
	this.shape_29.setTransform(-78.95,40.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_30.setTransform(49.425,20.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_31.setTransform(44.025,21.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_32.setTransform(38.525,20.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_33.setTransform(34.925,20.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_34.setTransform(29.175,21.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAkQgHgEgFgGQgGgKAAgOIAAgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAGACQAEABAFAEQAEAEACAEQAHAMAAAQIg1AAQAAALAFAHQAGAFAJAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgDAFQgDAFABAFIAoAAIAAAAg");
	this.shape_35.setTransform(21.4,21.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_36.setTransform(13.425,20.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_37.setTransform(8.125,20.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_38.setTransform(3.075,21.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgPAkQgGgEgEgGQgIgKAAgOIABgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAGAAAEACQAFABAEAEQAFAEADAEQAFAMAAAQIg1AAQAAALAGAHQAGAFAJAAQAFABAFgDQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBAAIgEACQgEABgHAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFgBAFIAoAAIAAAAg");
	this.shape_39.setTransform(-4.3,21.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAFgDQAEgEAKAAIAAAOQgLAAgGAEQgFAFAAAJIAAArg");
	this.shape_40.setTransform(-10,21.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgkAzIAAhlIAsAAQAIABAHAEQAHADAEAGQADAIAAAHQAAAIgCAGQgEAHgGADQgIAFgJAAIgfAAIAAArgAgXgCIAaAAQAUgBAAgSQABgQgVAAIgaAAg");
	this.shape_41.setTransform(-17.25,20.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_42.setTransform(-29.625,21.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_43.setTransform(-37.025,21.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_44.setTransform(-42.475,20.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAOAlIgOg4IgOA4IgNAAIgVhIIAOAAIAOA4IAOg4IANAAIAPA4IAOg4IANAAIgWBIg");
	this.shape_45.setTransform(-49.025,21.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAXAyIgigyIgQAPIAAAjIgNAAIAAhjIANAAIAAAxIAxgxIASAAIgpAoIAqA7g");
	this.shape_46.setTransform(-62.2,20.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgiAyIAAhjIBFAAIAAAMIg3AAIAAAfIAwAAIAAALIgwAAIAAAtg");
	this.shape_47.setTransform(-71.175,20.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgQAvQgHgDgCgGQgDgGAAgGIAAgKIANAAIAAAIQAAAIAEAEQAEAEAHAAQAIAAADgFQAEgFAAgIIAAhJIAOAAIAABJQAAALgEAGQgFAHgGADQgHADgHAAQgKAAgGgFg");
	this.shape_48.setTransform(-79.725,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_49.setTransform(-15.15,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.1,-60.5,200,120);


(lib.text_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBArQgUAAgOgEQgOgEgIgKQgHgJAAgQQAAgPAHgJQAIgKAOgEQAOgEAUAAIADAAQAUAAAOAEQAOAEAHAKQAIAJAAAPQAAAQgIAJQgHAKgOAEQgOAEgUAAgAgegcQgLAEgFAHQgEAHAAAKQAAALAEAHQAFAHALAEQALADASAAIADAAQASAAALgDQAKgEAGgHQAFgHgBgLQABgKgFgHQgGgHgKgEQgLgDgSAAIgDAAQgSAAgLADg");
	this.shape.setTransform(12.5,-6.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAnQgOgEgHgJQgHgJAAgOQAAgNAIgLQAIgKAOgFQAOgGASAAQANAAAIABQAJACAFADIAIADIADADIgCAEIgCABIgDABIgEgBIgGgCIgMgCIgRgCQgNAAgLAEQgLAEgHAHQgGAHgBAJQAJgDAOgDQAMgCAPAAQALAAAJABQAKACAHADQAHACAEAEQADAFABAHQgBAJgGAGQgHAGgMADQgNADgRAAQgSAAgNgEgAgPADIgQAEIgMADQADAMAMAFQALAEAUAAQAOAAAJgCQAJgCAFgDQAEgDAAgEQAAgHgKgEQgKgEgUAAIgTABg");
	this.shape_1.setTransform(-0.875,-6.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(-13.625,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(-23.425,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(-31.925,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwAqIgEgBIgBgCIAAgFIABgDIADgDIA8gZIAJgEIAKgEIAHgGQACgDAAgDQAAgEgFgDQgFgEgIgBQgJgCgLABQgLgBgKACIgPADIgJADIgDABQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgBgDIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAKgFIARgDQALgBAMAAQAQAAALACQAMADAGAFQAHAGAAAIQAAAGgDAFQgDAEgGACIgLAGIgMAGIgvAUIBQAAIADAAIABADIAAAEIgBACIgDABg");
	this.shape_5.setTransform(-39.425,-6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAqIgDgBIABgDIANgTIgBgCIgBgBIgmg2IgBgCIADgBIAHAAIACABIACABIAhAuIAAABIABgBIAhguIACgBIACgBIAIAAIACABIgBACIgmA2IgBABIAAAAIgPAXIgBABIgCABg");
	this.shape_6.setTransform(-54.15,-4.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAfQgHAAgGgCQgGgBgEgFQgDgDAAgIQAAgHADgEQAEgDAGgCQAGgBAHAAIAjAAIABAAIABgBIAAgCQAAgGgHgDQgGgDgLAAIgSACIgMACIgCAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQABgCADAAIAKgDIASgCQAKAAAHACQAHADAEACQAEADACAFIABAIIAAAYIABAEIADAAIACAAIACABIABACIAAACQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgEgBIgBAAQgFABgDgDQgDgDgBgFQgCAFgFACQgFACgGABIgLABgAgWAEIgGACQgCADAAADQAAAGAFACQAEABAHAAIAFAAIAQgBQAHAAADgCQAEgCABgFIAAgHIgBAAIgBgBIgiAAIgIABg");
	this.shape_7.setTransform(-63.775,-5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA2AqIgDgBIgBgDIAAg9IAAgBIgBAAIgsAqIgCACIgDAAIgCAAIgCgCIgsgqIAAAAIgBABIAAA9IgBADIgDABIgEAAIgDgBIgCgDIAAhLIACgDIADgBIAEAAIAEAAIADACIAuAuIAAAAIAAAAIAvguIADgCIAEAAIAEAAIADABIABADIAABLIgBADIgDABg");
	this.shape_8.setTransform(-75.7,-6.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_9.setTransform(-22.575,-35.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAxIgDgBIgBgCIAAhaIABgDIADgBIAPAAIADABIABADIAABaIgBACIgDABg");
	this.shape_10.setTransform(-30.375,-36.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_11.setTransform(-38.1729,-35.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdAxIgDgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIATgcIgrg9QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAUAAIACABIACACIAdAqIAAABIABgBIAegqIABgCIADgBIATAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADIguA/IAAABIgBABIgSAaIgCABIgCABg");
	this.shape_12.setTransform(-50.0117,-33.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_13.setTransform(-61.575,-35.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag/AxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIBZAAQAPAAAKAFQAJAFAFAHQAEAIAAAIQAAAJgEAGQgFAIgJAEQgKAGgPAAIhDAAIgBAAIAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAgqgXIAAABIAAAPIAAAAIABAAIBCAAQAKABAEgCQADgCAAgFQAAgFgDgCQgEgCgKAAIhCAAIgBABg");
	this.shape_14.setTransform(-74.8975,-36.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_15.setTransform(-20.925,43.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_16.setTransform(-26.425,40.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_17.setTransform(-33.425,40.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPAkQgGgDgFgGQgGgKgBgOIABgIIADgJQACgJAFgFQAFgEAHgDQAFgEAGAAQAFAAAFACQAGACADAEQAFAEACAEQAHAMAAAPIg1AAQAAAMAFAGQAFAHAKAAQAFgBAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAABIgFABQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgHgKABQgFAAgEADQgFADgDAFQgCAGAAAEIAnAAIAAAAg");
	this.shape_18.setTransform(-40.8,40.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAGgDAJAAIAAAMQgKABgHAFQgFAEgBAIIAAArg");
	this.shape_19.setTransform(-46.5,40.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMA0QgHgCgFgFQgFgGAAgIIAMAAQAAAFAFADIAFADIAGAAQAIAAAHgFQAFgGAAgMIAAgDQgJAKgMgBQgGAAgFgCQgFgDgFgFQgEgFgCgHQgCgGAAgIQAAgJADgJQACgIAFgFQAEgFAGgDQAFgDAHAAQAGAAAEAEIAFADIADAEIAAgJIANAAIAABGQAAATgJAIQgKAIgNAAQgGAAgGgCgAgJgkQgEADgDAGQgCAFAAAIQAAAKACAFQADAHAEAEQAFADAEAAIABAAQAIgCAGgHQAEgHAAgMQAAgJgCgGQgDgGgFgDQgFgCgEAAQgFABgEACg");
	this.shape_20.setTransform(-53.5,41.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_21.setTransform(-61.075,40.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAFgEACgHIABgMIgBgMQgCgHgFgEQgFgEgIAAQgLAAgEAIg");
	this.shape_22.setTransform(-68.85,40.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSAxQgIgEgGgHQgFgHgDgKIgDgKIgBgKIAAgBIAAgBQAAgNAFgLQAEgLALgIQAFgDAHgDQAGgCAHAAQAJAAAJADQAIACAIAIQAHAHACANIgOAAQgCgKgHgGQgHgFgLAAIgDABIgEAAQgHACgGAFQgGAFgDAIQgDAIAAALQAAAKACAIQACAIAFAFQAEAFAFADIAGACIAFAAIAAAAQAOAAAIgHQAHgIACgNIAOAAQgBALgGAJQgGAJgJAGIgKAEQgFABgGAAQgLAAgJgEg");
	this.shape_23.setTransform(-77.775,38.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgGgKgBgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAFACQAGABADAEQAFAEACAEQAHAMAAAQIg1AAQgBALAGAHQAFAFAKAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_24.setTransform(72.05,21.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAEgDQAGgEAJAAIAAAOQgLAAgGAEQgFAFgBAJIAAArg");
	this.shape_25.setTransform(66.35,21.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgFAJgBAKQAAAGADAGQABAHAFAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_26.setTransform(59.6,21.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAzIAAg+IgKAAIAAgKIAKAAIAAgLQAAgGABgDQABgDADgCQACgEAIAAIAIAAIAAAMIgEAAQgEAAgCABQgCACAAAEIAAAKIAMAAIAAAKIgMAAIAAA+g");
	this.shape_27.setTransform(53.725,20.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgPAkQgGgEgEgGQgIgKAAgOIABgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAGAAAEACQAFABAFAEQAEAEADAEQAFAMAAAQIg1AAQAAALAGAHQAGAFAJAAQAFABAFgDQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBAAIgEACQgEABgHAAQgIAAgHgDgAAVgFQgBgEgBgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFgBAFIApAAIAAAAg");
	this.shape_28.setTransform(47.9,21.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAoIAAAJIgMAAIAAhjIAMAAIAAAkQAEgGAFgDQAFgCAHAAQAJAAAHAEQAHAGAEAIQADAHAAAKQAAAKgDAJQgDAKgHAGQgIAHgLgBQgNABgGgMgAgMgJQgEAEgCAGIgBAPQAAANAGAGQAGAFAHAAQAJABAFgJQAFgHAAgNQAAgbgTAAQgIAAgEAGg");
	this.shape_29.setTransform(40.225,20.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_30.setTransform(28.775,21.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgOAkQgHgEgFgGQgGgKAAgOIAAgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAGACQAEABAFAEQAEAEACAEQAHAMAAAQIg1AAQAAALAFAHQAGAFAJAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgDAFQgDAFABAFIAoAAIAAAAg");
	this.shape_31.setTransform(21.4,21.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_32.setTransform(15.925,20.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGAzIAAg+IgKAAIAAgKIAKAAIAAgLQAAgGABgDQABgDADgCQACgEAIAAIAIAAIAAAMIgEAAQgEAAgCABQgCACAAAEIAAAKIAMAAIAAAKIgMAAIAAA+g");
	this.shape_33.setTransform(12.425,20.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_34.setTransform(8.925,20.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_35.setTransform(5.325,20.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_36.setTransform(-0.025,21.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOAkQgHgEgFgGQgGgKAAgOIAAgIIADgJQACgHAFgGQAFgFAGgCQAGgDAGAAQAFAAAGACQAEABAFAEQAEAEACAEQAHAMgBAQIg1AAQABALAFAHQAGAFAJAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgDAFQgDAFAAAFIApAAIAAAAg");
	this.shape_37.setTransform(-7.4,21.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAAAABQABAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_38.setTransform(-13.375,20.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAOAyIgVglIgKAKIAAAbIgNAAIAAhjIANAAIAAA5IAegeIAQAAIgcAaIAeAug");
	this.shape_39.setTransform(-22.15,20.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAFgDQAEgEAKAAIAAAOQgKAAgHAEQgFAFAAAJIAAArg");
	this.shape_40.setTransform(-27.9,21.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_41.setTransform(-34.625,21.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_42.setTransform(-40.125,20.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgSAxQgIgEgGgHQgFgHgDgKIgDgKIgBgKIAAgBIAAgBQAAgNAFgLQAEgLALgIQAFgDAHgDQAGgCAHAAQAJAAAJADQAIACAIAIQAHAHACANIgOAAQgCgKgHgGQgHgFgLAAIgDABIgEAAQgHACgGAFQgGAFgDAIQgDAIAAALQAAAKACAIQACAIAFAFQAEAFAFADIAGACIAFAAIAAAAQAOAAAIgHQAHgIACgNIAOAAQgBALgGAJQgGAJgJAGIgKAEQgFABgGAAQgLAAgJgEg");
	this.shape_43.setTransform(-46.675,20.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAPAyIgWglIgKAKIAAAbIgMAAIAAhjIAMAAIAAA5IAegeIAQAAIgcAaIAeAug");
	this.shape_44.setTransform(-58.7,20.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIAlIgFgCIgFgDQgFgEgEgIQgDgIAAgLIAAgGIACgKQABgEACgEQAFgHAHgEQAIgEAHAAQAHAAAHACQAFADAFAFQAEAHACAKIgNAAQgBgIgEgEQgFgEgIAAQgJAAgEAIQgFAIgBANQAAAHACAFQACAFADADQAFAGAHAAQAHAAAFgFQAFgFABgIIANAAQgCAJgEAGQgEAHgGADQgHAEgIAAQgEAAgFgCg");
	this.shape_45.setTransform(-66.1,21.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_46.setTransform(-71.225,20.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpAzIAAhlIAqAAQAKAAAJAGQAJAFAGALQADAGACAFQACAHAAAIQAAAMgFAMQgEAMgJAJQgKAHgNABgAgbAnIAbAAQAJAAAGgGQAGgGADgKQAEgJAAgJIgCgOQgCgHgDgFQgEgEgFgEQgGgCgGAAIgbAAg");
	this.shape_47.setTransform(-77.575,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_48.setTransform(-8.15,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,-59.5,200,120);


(lib.text_09 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAArQgVAAgOgEQgOgEgIgKQgGgJAAgQQAAgPAGgJQAIgKAOgEQAOgEAVAAIACAAQAUAAAOAEQAOAEAHAKQAHAJAAAPQAAAQgHAJQgHAKgOAEQgOAEgUAAgAgegcQgLAEgEAHQgGAHAAAKQAAALAGAHQAEAHALAEQALADATAAIACAAQASAAALgDQALgEAEgHQAFgHAAgLQAAgKgFgHQgEgHgLgEQgLgDgSAAIgCAAQgTAAgLADg");
	this.shape.setTransform(28.2,-6.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAnQgOgEgHgJQgHgJAAgOQAAgNAIgLQAIgKAOgFQAOgGASAAQANAAAIABQAJACAFADIAIADIADADIgCAEIgCABIgDABIgEgBIgGgCIgMgCIgRgCQgNAAgLAEQgLAEgHAHQgGAHgBAJQAJgDAOgDQAMgCAPAAQALAAAJABQAKACAHADQAHACAEAEQADAFABAHQgBAJgGAGQgHAGgMADQgNADgRAAQgSAAgNgEgAgPADIgQAEIgMADQADAMAMAFQALAEAUAAQAOAAAJgCQAJgCAFgDQAEgDAAgEQAAgHgKgEQgKgEgUAAIgTABg");
	this.shape_1.setTransform(14.825,-6.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(2.075,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(-7.725,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(-16.225,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqAlQgPgGAAgNQABgIAFgFQAGgFAKgCQgIgCgEgFQgEgEAAgGQAAgMANgFQANgGAZAAQAaAAANAGQANAFAAAMQAAAGgEAEQgEAFgJACQALACAGAFQAFAFABAIQAAANgPAGQgOAGgdAAQgbAAgPgGgAgYAFQgKACgFADQgFADAAAFQAAAEAFADQAFADAKACQAJABAPAAQAPAAAKgBQALgCAEgDQAFgDgBgEQABgFgFgDQgEgDgLgCQgKgCgPAAQgPAAgJACgAgWgeQgJACgEACQgEADAAAEQAAAEAEADQAEADAJABQAJACANAAQAOAAAJgCQAJgBAEgDQAEgDAAgEQAAgEgEgDQgEgCgJgCQgJgBgOAAQgNAAgJABg");
	this.shape_5.setTransform(-23.95,-6.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwAqIgEgBIgBgCIAAgFIABgDIADgDIA8gZIAJgEIAKgEIAHgGQACgDAAgDQAAgEgFgDQgFgEgIgBQgJgCgLABQgLgBgKACIgPADIgJADIgDABQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgBgDIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAKgFIARgDQALgBAMAAQAQAAALACQAMADAGAFQAHAGAAAIQAAAGgDAFQgDAEgGACIgLAGIgMAGIgvAUIBQAAIADAAIABADIAAAEIgBACIgDABg");
	this.shape_6.setTransform(-36.275,-6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAqIgCgBIgBgCIAAhNIABgDIACAAIAFAAIACAAIABADIAABNIgBACIgCABg");
	this.shape_7.setTransform(-47.25,-6.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCArIgCgBIgBgCIAAg2IABgCIACgBIAFAAIACABIABACIAAA2IgBACIgCABgAgFgfQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQACgCADAAQAEAAABACQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgBACgEAAQgDAAgCgCg");
	this.shape_8.setTransform(-49.875,-6.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAfIgCgBIgCgCIAAg2IACgCIACgBIAFAAIADABIABACIAAAHIABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAEgEAGgEQAHgDALAAIAMABIAHACQABABABAAQAAAAABABQAAAAAAABQAAAAABAAIABAEIAAACIgCACIgDAAIgJgDIgMAAQgIAAgHABQgGACgEAFQgDAFAAAGIAAAcIgBACIgDABg");
	this.shape_9.setTransform(-55.2,-5.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmArIgCgBIgBgDIAAhMIABgDIACgBIAGAAIADABIAAADIAAAIQAEgHAHgCQAIgEAMAAQAPAAAJAFQAJADADAHQAEAHAAAKQAAAKgEAGQgDAHgJAEQgJADgPAAQgMAAgIgCQgHgDgEgGIAAAeIAAADIgDABgAgPgdQgHACgDAEQgDAFAAAIQAAAIADADQADAFAHACQAHACAJAAQAKAAAGgCQAHgCADgFQADgDAAgIQAAgIgDgFQgDgEgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_10.setTransform(-63.9222,-4.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA5AqIgDAAIgCgCIgLgQIhRAAIgLAQIgCACIgDAAIgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBQAAAAAAgBIA4hLIADgCIADgBIAHAAIADABIADACIA4BLQAAABAAAAQABABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAgAAhANIghgsIggAsIBBAAg");
	this.shape_11.setTransform(-75.825,-6.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAFgIALgEQAMgEARgBQASABAMAEQALAEAFAIQAFAHAAAKIgBAFQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAIgIAAIhAAAQADAHAHACQAIACAKAAIAQgBIAPgEIADAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAABIADAEIAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQgGAEgKACQgJADgOAAQgaAAgNgKgAAdgFQgCgGgHgDQgGgCgNAAQgNAAgGACQgGADgBAGIA2AAIAAAAg");
	this.shape_12.setTransform(55.8,-35.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAGgIALgEQALgEARgBQATABALAEQALAEAFAIQAFAHAAAKIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgHAAIhBAAQADAHAIACQAIACAJAAIAQgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIADAEIABAEQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgHAEgJACQgKADgOAAQgaAAgNgKgAAcgFQgCgGgGgDQgHgCgNAAQgLAAgHACQgGADgCAGIA2AAIAAAAg");
	this.shape_13.setTransform(44.5,-35.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdAxIgDgBIgBgCIAAgiQAAgJgGgDQgGgEgNABQgMgBgHAEQgFADAAAJIAAAiIgBACIgDABIgRAAIgCgBIgBgCIAAhaIABgDIACgBIARAAIADABIABADIAAAkIAAABIABAAQACgHAJgEQAHgEAPAAQAOAAAJAEQAJAEADAIQAEAHAAALIAAAiIgBACIgDABg");
	this.shape_14.setTransform(33.2,-36.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AArAxIgEgBIgEgCIgigcIgqAAIgBAAIAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgQAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIBZAAQAPAAAKAFQAJAFAFAHQAEAIAAAIQAAAIgEAHQgDAGgIAFQgIAFgMABIAeAaQABABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAgAgqgXIAAABIAAAPIAAAAIABAAIBCAAQAKABAEgCQADgCAAgFQAAgFgDgCQgEgCgKAAIhCAAIgBABg");
	this.shape_15.setTransform(20.1028,-36.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAcAkIgCgBIgBgCIAAghQAAgJgGgDQgGgFgNABQgNgBgFAFQgHADAAAJIAAAhIAAACIgDABIgRAAIgCgBIgBgCIAAg/IABgDIACgBIARAAIADABIAAADIAAAJIABABIABAAQACgHAJgEQAIgEAOAAQAPAAAIAEQAJAEADAIQAEAIAAALIAAAhIgBACIgDABg");
	this.shape_16.setTransform(2.3,-35.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_17.setTransform(-8.925,-35.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AA9AkIgDgBIgBgCIAAghQAAgGgBgEQgCgDgFgBQgFgCgJAAQgMgBgFAFQgGADAAAJIAAAhIgBACIgDABIgQAAIgCgBIgBgCIAAghQAAgJgFgDQgGgFgLABQgMgBgGAFQgGADAAAJIAAAhIAAACIgDABIgRAAIgCgBIgBgCIAAg/IABgDIACgBIARAAIADABIAAADIAAAHQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIACgBQADgGAIgDQAHgEANAAQAMAAAIAEQAGADAEAHIABABIABAAQACgEAEgEQAFgDAHgCQAHgCALAAQAPAAAIAEQAHAEADAIQADAIAAALIAAAhIgBACIgDABg");
	this.shape_18.setTransform(-23.5964,-35.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgCAyIgPAAIgOgDQgHgCgFgEQgEgEgBgFQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQAAgCAEAAIALAAIAEAAIADACIAFADIAHABIALABIAIAAIAJgCQAFgBADgEQAEgDgBgGIAAgKQgBADgDADQgEACgGABIgOABQgRAAgLgEQgKgEgFgHQgFgHABgLQgBgLAFgHQAFgIAKgEQALgEARAAQAMAAAHACQAHACACAEIAAgDIABgCIADgBIARAAIADABIABACIAAA+QgBAMgHAHQgGAIgNADQgKAEgNAAIgDgBgAgNgdQgGABgDADQgEADAAAGQAAAGAEADQADADAGACIAOABIAPgBQAGgCADgDQAEgDAAgGQAAgGgEgDQgDgDgGgBIgPgBIgOABg");
	this.shape_19.setTransform(-38.45,-33.8969);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAcAkIgCgBIgBgCIAAghQAAgJgGgDQgGgFgNABQgMgBgHAFQgFADgBAJIAAAhIAAACIgDABIgRAAIgCgBIgBgCIAAg/IABgDIACgBIARAAIADABIAAADIAAAJIABABIABAAQACgHAJgEQAHgEAPAAQAPAAAIAEQAJAEADAIQAEAIAAALIAAAhIgBACIgDABg");
	this.shape_20.setTransform(-49.7,-35.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAxIgDgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIATgcIgrg9QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAUAAIACABIACACIAdAqIAAABIABgBIAegqIABgCIADgBIATAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADIguA/IAAABIgBABIgSAaIgCABIgCABg");
	this.shape_21.setTransform(-61.5617,-33.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAEAzIgCAAQgUAAgOgCQgNgCgJgCQgHgDgEgCQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgEIAFgJQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAIAEAAIAMADIAUACIAZABIACAAIAWgBIAMgDQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgCgGgCIgNgCIgXgCQgWgCgQgDQgOgEgIgFQgHgGAAgKQAAgMAHgHQAIgHANgDQAOgDAUABIADAAQASAAANACQANACAHACIALAFQABAAAAABQABAAAAABQAAAAABABQAAAAAAABIgCAFIgFAKQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBIgKgDIgRgDQgLgCgMAAIgDAAIgTABIgMACIgFACIgBACQAAACAEACIAPACIAYADIAXACQAMACAKADQAJADAGAEQAHAGgBAKQAAALgIAHQgJAHgOADQgNADgPAAIgFAAg");
	this.shape_22.setTransform(-75.25,-36.6004);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_23.setTransform(28.975,43.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_24.setTransform(23.125,40.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOAkQgHgDgEgGQgIgKABgOIAAgIIACgJQADgJAFgFQAFgEAGgDQAGgEAGAAQAGAAAFACQAEACAFAEQAEAEADAEQAFAMAAAPIg1AAQABAMAFAGQAGAHAJAAQAFgBAFgCQAEgCACgEQADgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBABIgDABQgFABgHAAQgIAAgGgDgAAVgFQgBgEgBgEIgEgHQgFgHgKABQgFAAgEADQgFADgCAFQgEAGAAAEIApAAIAAAAg");
	this.shape_25.setTransform(15.3,40.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAFgEQAEgDAKAAIAAAMQgLABgGAFQgGAEABAIIAAArg");
	this.shape_26.setTransform(9.6,40.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQADAHAEAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMIgCgMQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_27.setTransform(2.85,40.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAYAyIgigyIgRAPIAAAjIgNAAIAAhjIANAAIAAAxIAxgxIASAAIgpAoIAqA7g");
	this.shape_28.setTransform(-5.25,38.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_29.setTransform(-18.225,38.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_30.setTransform(-24.175,39.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAhQgFgHAAgJIAAg2IAMAAIAAA0QAAAGADAEQAEADAFAAIADAAQAHgBAFgGQAGgGAAgJIAAgrIAMAAIAABIIgMAAIAAgHQgFAFgHADQgGADgHAAQgJgBgGgFg");
	this.shape_31.setTransform(-29.875,40.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQADAHAEAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_32.setTransform(-37.7,40.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAsQgLgJAAgSIANAAQAAAJAEAGQAEAFAGACQAGACAHAAIAMgBQAGgCAEgEQAEgDAAgHQAAgFgCgDQgCgEgFgCIgNgDIgOgEIgNgDQgGgDgEgFQgEgFAAgIQAAgIAEgIQADgGAIgEQAIgFAMAAQAPAAAJAFQAIAGADAGIACAHIAAABIABAHIgMAAIgBgHIgDgFQgEgEgGgCQgGgCgFAAQgIAAgHADQgIAEAAAKQAAAKANADIAbAGQAXAFAAAWQAAAKgGAHQgGAHgJADQgJADgJAAQgSAAgLgJg");
	this.shape_33.setTransform(-46.275,38.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAlAlIAAguQAAgRgOAAQgEAAgFADQgDADgCAEQgDAFAAAFIAAArIgLAAIAAgxQgBgGgCgEQgCgEgHAAQgEAAgEACQgFACgDAGQgDAGAAAJIAAAmIgNAAIAAhIIAMAAIAAAKQAJgMAOABQAJAAADADQADADADAFQAFgHAFgCQAEgDAJABQAEAAAGABQAEACAFAGQADAFAAAKIAAAxg");
	this.shape_34.setTransform(-60.65,40.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMQAAgGgCgGQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_35.setTransform(-70.4,40.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAGgDAJAAIAAAMQgKABgHAFQgGAEAAAIIAAArg");
	this.shape_36.setTransform(-76.1,40.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGAzIAAg+IgKAAIAAgKIAKAAIAAgLQAAgGABgDQABgDADgCQACgEAIAAIAIAAIAAAMIgEAAQgEAAgCABQgCACAAAEIAAAKIAMAAIAAAKIgMAAIAAA+g");
	this.shape_37.setTransform(-80.925,38.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_38.setTransform(78.275,20.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgOAkQgHgEgEgGQgIgKABgOIAAgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAGAAAFACQAEABAFAEQAEAEADAEQAFAMAAAQIg1AAQABALAFAHQAGAFAJAAQAFABAFgDQAEgCACgEQADgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQgBgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgCAFQgEAFAAAFIApAAIAAAAg");
	this.shape_39.setTransform(70.65,21.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAAAABQABAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_40.setTransform(64.675,20.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_41.setTransform(58.975,21.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAgQgFgFAAgKIAAg3IAMAAIAAA1QAAAGADAEQAEADAFABIADAAQAHgCAFgGQAGgGAAgJIAAgsIAMAAIAABKIgMAAIAAgIQgFAFgHADQgGACgHAAQgJABgGgHg");
	this.shape_42.setTransform(51.175,21.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgIAlIgFgCIgFgDQgGgEgDgIQgEgIABgLIAAgGIACgKQABgEACgEQAFgHAHgEQAIgEAHAAQAHAAAHACQAFADAFAFQAFAHABAKIgNAAQgBgIgEgEQgFgEgIAAQgIAAgFAIQgFAIgBANQAAAHACAFQACAFADADQAFAGAHAAQAHAAAFgFQAGgFAAgIIANAAQgCAJgEAGQgEAHgGADQgHAEgIAAQgEAAgFgCg");
	this.shape_43.setTransform(43.8,21.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_44.setTransform(36.375,21.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGAlIgbhIIAOAAIATA6IAUg6IAOAAIgcBIg");
	this.shape_45.setTransform(28.95,21.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgHgKAAgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAGABADAEQAFAEACAEQAGAMABAQIg1AAQgBALAGAHQAFAFAKAAQAFABAEgDQAFgCADgEQACgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_46.setTransform(21.55,21.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgHgKAAgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAGABADAEQAFAEACAEQAGAMABAQIg1AAQgBALAGAHQAFAFAKAAQAFABAEgDQAFgCADgEQACgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_47.setTransform(9.85,21.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgOAkQgHgEgFgGQgGgKAAgOIAAgIIADgJQACgHAFgGQAFgFAGgCQAGgDAGAAQAFAAAGACQAEABAFAEQAEAEACAEQAHAMAAAQIg2AAQABALAFAHQAGAFAJAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgDAFQgCAFgBAFIApAAIAAAAg");
	this.shape_48.setTransform(2.05,21.65);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_49.setTransform(-5.775,20.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAZAzQgCgGAAgKIgBgPQAAgFgEgEQgDgDgJAAIghAAIAAArIgOAAIAAhlIAvAAIAIACIAIACQAHADAEAHQAFAFAAAKQAAAQgOAGQAFACADAEQADAFABAFIAAAPIABALQABAEAEABIAAADgAgbgDIAhAAQAGgBAEgCQAEgCABgEIACgEIABgEQAAgIgEgFQgEgEgJAAIgiAAg");
	this.shape_50.setTransform(-14.325,20.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_51.setTransform(-27.575,21.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_52.setTransform(-35.325,21.725);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAlAmIAAgvQAAgRgNAAQgGAAgDADQgFADgBAFQgDAEAAAFIAAAsIgMAAIAAgyQABgGgDgEQgCgEgHAAQgEAAgFADQgEACgDAFQgDAGAAAIIAAAoIgNAAIAAhIIAMAAIAAAKQAJgNANAAQAJAAAFAEQADADACAFQAFgGAFgDQAEgDAJAAQAEAAAFADQAFABAEAGQAEAFAAAKIAAAyg");
	this.shape_53.setTransform(-45.05,21.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgNA0QgGgBgFgGQgFgGAAgIIAMAAQAAAFAFADIAFADIAGAAQAIABAGgGQAHgFgBgMIAAgFQgJALgMAAQgFgBgGgDQgFgCgFgFQgEgFgCgHQgCgHAAgHQAAgJADgJQACgIAEgFQAFgGAFgCQAHgDAGAAQAGAAAEADIAFAEIADAEIAAgJIANAAIAABGQAAATgKAIQgJAIgNAAQgGAAgHgCgAgJgjQgEADgDAFQgCAFAAAIQAAAKACAGQADAGAFADQADAEAFAAIABAAQAIgCAFgHQAGgHgBgNQAAgHgCgHQgDgGgFgCQgFgEgEAAQgFABgEAEg");
	this.shape_54.setTransform(-55.05,23.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_55.setTransform(-62.625,21.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZAzIAAgLIAHABIAEgBIAEgFIAEgLIgbhKIAOAAIAUA6IATg6IANAAIgKAcIgGARIgDAFIgCAGIgFAOIgHATQgCAGgDACQgCADgEABIgKABIgEgBg");
	this.shape_56.setTransform(-70,23.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgcAsQgLgJAAgRIANAAQAAAIAEAFQAEAFAGADQAGACAHAAIAMgCQAGgBAEgEQAEgDAAgHQAAgFgCgEQgCgDgFgBIgNgFIgOgDIgNgDQgGgDgEgFQgEgFAAgJQAAgHAEgIQADgGAIgFQAIgEAMAAQAPAAAJAFQAIAFADAIIACAGIAAAAIABAIIgMAAIgBgGIgDgGQgEgFgGgCQgGgCgFAAQgIABgHADQgIAEAAAKQAAAKANACIAbAHQAXAFAAAVQAAALgGAHQgGAHgJADQgJADgJAAQgSAAgLgJg");
	this.shape_57.setTransform(-78.175,20.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_58.setTransform(-4.15,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.1,-61.5,200,120);


(lib.text_08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBArQgUAAgOgEQgOgEgIgKQgGgJgBgQQABgPAGgJQAIgKAOgEQAOgEAUAAIADAAQAUAAAOAEQAOAEAHAKQAIAJAAAPQAAAQgIAJQgHAKgOAEQgOAEgUAAgAgegcQgLAEgFAHQgEAHAAAKQAAALAEAHQAFAHALAEQALADASAAIADAAQASAAALgDQAKgEAGgHQAEgHAAgLQAAgKgEgHQgGgHgKgEQgLgDgSAAIgDAAQgSAAgLADg");
	this.shape.setTransform(7.3,-6.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAnQgOgEgHgJQgHgJAAgOQAAgNAIgLQAIgKAOgFQAOgGASAAQANAAAIABQAJACAFADIAIADIADADIgCAEIgCABIgDABIgEgBIgGgCIgMgCIgRgCQgNAAgLAEQgLAEgHAHQgGAHgBAJQAJgDAOgDQAMgCAPAAQALAAAJABQAKACAHADQAHACAEAEQADAFABAHQgBAJgGAGQgHAGgMADQgNADgRAAQgSAAgNgEgAgPADIgQAEIgMADQADAMAMAFQALAEAUAAQAOAAAJgCQAJgCAFgDQAEgDAAgEQAAgHgKgEQgKgEgUAAIgTABg");
	this.shape_1.setTransform(-6.075,-6.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(-18.825,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(-28.625,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(-37.125,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_5.setTransform(-42.025,-6.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAqIgDgBIABgDIANgTIgBgCIgBgBIgmg2IgBgCIADgBIAHAAIACABIACABIAhAuIAAABIABgBIAhguIACgBIACgBIAIAAIACABIgBACIgmA2IgBABIAAAAIgPAXIgBABIgCABg");
	this.shape_6.setTransform(-54.15,-4.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAfQgHAAgGgCQgGgBgEgFQgDgDAAgIQAAgHADgEQAEgDAGgCQAGgBAHAAIAjAAIABAAIABgBIAAgCQAAgGgHgDQgGgDgLAAIgSACIgMACIgCAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQABgCADAAIAKgDIASgCQAKAAAHACQAHADAEACQAEADACAFIABAIIAAAYIABAEIADAAIACAAIACABIABACIAAACQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgEgBIgBAAQgFABgDgDQgDgDgBgFQgCAFgFACQgFACgGABIgLABgAgWAEIgGACQgCADAAADQAAAGAFACQAEABAHAAIAFAAIAQgBQAHAAADgCQAEgCABgFIAAgHIgBAAIgBgBIgiAAIgIABg");
	this.shape_7.setTransform(-63.775,-5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA2AqIgDgBIgBgDIAAg9IAAgBIgBAAIgsAqIgCACIgDAAIgCAAIgCgCIgsgqIAAAAIgBABIAAA9IgBADIgDABIgEAAIgDgBIgCgDIAAhLIACgDIADgBIAEAAIAEAAIADACIAuAuIAAAAIAAAAIAvguIADgCIAEAAIAEAAIADABIABADIAABLIgBADIgDABg");
	this.shape_8.setTransform(-75.7,-6.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag8AyQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIAAgNQAAgEABgCQABgBAEgBIBFgUIARgFIAJgFIAEgEIABgBIAAgCQgBgEgFgDQgFgDgJgCIgTgBQgMABgLABIgUAEIgMADIgEAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgFgJQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBIAMgEIAWgGQANgBARAAQAOgBAMACQAMACAJAEQAKADAFAHQAFAHAAAJQAAAKgGAFQgFAIgKAEQgLAEgNAEIghAJIBJAAIAEACQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAKQAAABAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_9.setTransform(-49.9562,-36.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAMQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgPQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIBHAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAPQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_10.setTransform(-62.175,-35.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AADAyIgFAAQgWAAgOgFQgQgFgHgLQgIgMABgRIAAgsIABgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIARAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABADIAAAsQAAAJAEAGQAEAFAJADQAJACAPAAIAFAAQAQAAAJgCQAJgDAEgFQADgGAAgJIAAgsQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAQAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIAAADIAAAsQAAARgHAMQgIALgOAFQgOAFgUAAIgDAAg");
	this.shape_11.setTransform(-74.9,-36.5229);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_12.setTransform(40.575,43.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAyIAAgLIAGABIAGgBIADgDIAFgNIgbhKIANAAIAUA7IATg7IANAAIgKAcIgGARIgDAHIgBAFIgGAOIgHASQgCAGgCADQgEADgDABIgKABIgEgCg");
	this.shape_13.setTransform(35.1,41.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAFgDAKAAIAAAMQgKABgHAFQgFAEgBAIIAAArg");
	this.shape_14.setTransform(29.8,40.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQADAHAEAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_15.setTransform(23.05,40.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_16.setTransform(17.075,39.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_17.setTransform(13.675,38.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAFgEQAEgDAKAAIAAAMQgKABgHAFQgFAEAAAIIAAArg");
	this.shape_18.setTransform(10.35,40.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAGgDAJAAIAAAMQgKABgHAFQgFAEgBAIIAAArg");
	this.shape_19.setTransform(5.7,40.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgPAkQgGgDgEgGQgIgKAAgOIABgIIACgJQADgJAFgFQAFgEAHgDQAFgEAGAAQAGAAAEACQAFACAEAEQAFAEADAEQAFAMABAPIg1AAQgBAMAGAGQAGAHAJAAQAFgBAFgCQAEgCADgEQACgDAAgDIAMAAQAAAEgEAGQgDAGgGAEIgDACIAAABIgFABQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgHgLABQgFAAgEADQgFADgCAFQgDAGAAAEIAnAAIAAAAg");
	this.shape_20.setTransform(-1.05,40.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_21.setTransform(-7.025,39.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_22.setTransform(-14.825,39.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAkQgGgDgFgGQgGgKgBgOIABgIIADgJQACgJAFgFQAFgEAHgDQAFgEAGAAQAFAAAFACQAGACADAEQAFAEACAEQAHAMAAAPIg1AAQAAAMAFAGQAFAHAKAAQAFgBAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAABIgFABQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgHgKABQgFAAgEADQgFADgDAFQgCAGAAAEIAnAAIAAAAg");
	this.shape_23.setTransform(-20.55,40.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_24.setTransform(-26.025,38.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGAkIgbhIIAOAAIATA8IAVg8IANAAIgcBIg");
	this.shape_25.setTransform(-31.05,40.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMQAAgGgCgGQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_26.setTransform(-38.45,40.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgcAsQgLgJAAgSIANAAQAAAJAEAGQAEAFAGACQAGACAHAAIAMgBQAGgCAEgEQAEgDAAgHQAAgFgCgDQgCgEgFgCIgNgDIgOgEIgNgDQgGgDgEgFQgEgFAAgIQAAgIAEgIQADgGAIgEQAIgFAMAAQAPAAAJAFQAIAGADAGIACAHIAAABIABAHIgMAAIgBgHIgDgFQgEgEgGgCQgGgCgFAAQgIAAgHADQgIAEAAAKQAAAKANADIAbAGQAXAFAAAWQAAAKgGAHQgGAHgJADQgJADgJAAQgSAAgLgJg");
	this.shape_27.setTransform(-47.025,38.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAGgDAJAAIAAAMQgLABgGAFQgFAEgBAIIAAArg");
	this.shape_28.setTransform(-57.4,40.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPAkQgGgDgEgGQgIgKAAgOIABgIIACgJQADgJAFgFQAFgEAGgDQAGgEAGAAQAGAAAEACQAFACAEAEQAFAEADAEQAFAMAAAPIg1AAQAAAMAGAGQAGAHAJAAQAFgBAFgCQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBABIgEABQgEABgHAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgEgHgLABQgFAAgEADQgFADgCAFQgDAGgBAEIAoAAIAAAAg");
	this.shape_29.setTransform(-64.15,40.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGAkIgbhIIAOAAIATA8IAVg8IANAAIgcBIg");
	this.shape_30.setTransform(-71.55,40.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMQAAgGgCgGQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_31.setTransform(-78.95,40.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_32.setTransform(67.475,21.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOAlIgOg4IgOA4IgNAAIgVhIIAOAAIAOA4IAOg4IANAAIAPA4IAOg4IANAAIgWBIg");
	this.shape_33.setTransform(58.575,21.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQADAHAEAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_34.setTransform(49.6,21.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_35.setTransform(41.625,20.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAAAABQABAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_36.setTransform(31.925,20.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQADAHAEAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_37.setTransform(26.2,21.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_38.setTransform(18.375,20.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_39.setTransform(10.975,21.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgGgKgBgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAFACQAGABADAEQAFAEACAEQAHAMAAAQIg1AAQAAALAFAHQAFAFAKAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_40.setTransform(-0.3,21.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_41.setTransform(-8.125,21.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAAAAAQABABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_42.setTransform(-15.875,21.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_43.setTransform(-21.375,20.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgfA0IAAhlIAMAAIAAALQABgEADgDIAIgFQAEgBAFAAQAJAAAHAFQAHAGAEAJQADAJAAAJQAAAKgDAIQgEAJgHAGQgIAGgKAAQgFAAgFgDQgEgCgFgGIAAAlgAgLgkQgFAFgCAGQgBAIAAAIQAAAGABAEQACAEADAEQAGAGAHAAQAGAAAEgEQAFgEACgGQACgGAAgJIgBgMIgEgIQgFgGgJAAQgHAAgEAEg");
	this.shape_44.setTransform(-26.675,23.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgaAzIAAgLIAHABIAGgBIADgFIAEgLIgbhKIAOAAIATA6IAUg6IAOAAIgLAcIgGARIgCAFIgCAGIgGAOIgHATQgCAGgCACQgEADgCABIgKABIgGgBg");
	this.shape_45.setTransform(-38.1,23.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgfA0IAAhlIAMAAIAAALQABgEADgDIAIgFQAEgBAFAAQAJAAAHAFQAHAGAEAJQADAJAAAJQAAAKgDAIQgEAJgHAGQgIAGgKAAQgFAAgFgDQgEgCgFgGIAAAlgAgLgkQgFAFgCAGQgBAIAAAIQAAAGABAEQACAEADAEQAGAGAHAAQAGAAAEgEQAFgEACgGQACgGAAgJIgBgMIgEgIQgFgGgJAAQgHAAgEAEg");
	this.shape_46.setTransform(-45.375,23.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_47.setTransform(-52.925,21.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghAxQAAgIACgGQACgHAEgFQAIgJAOgIQANgGAFgFQAFgEAAgJQAAgJgFgFQgFgFgIAAQgUAAAAAYIgMAAQAAgKADgIQAEgIAHgEQAIgFALAAQAHAAAIADQAHADAEAHQAFAHAAAKQAAAGgCAFQgCAEgDADQgHAHgNAHQgLAGgGAFIgFAFIgEAIIA1AAIAAALg");
	this.shape_48.setTransform(-64.375,20.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgQAGIAAgLIAhAAIAAALg");
	this.shape_49.setTransform(-70.425,21.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTAvQgJgEgFgIQgGgIAAgLIAAhDIAOAAIAABBQAAAHADAGQADAGAFADQAGAEAIAAQAHAAAGgEQAHgDADgGQADgGAAgHIAAhBIAOAAIAABDQAAAKgGAIQgFAJgJAEQgKAFgLAAQgKAAgIgFg");
	this.shape_50.setTransform(-77.775,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_51.setTransform(-11,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-55.5,200,120);


(lib.text_07 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape.setTransform(67.475,-6.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApIgRgDIgKgFQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgDIABgDIADgCIADABIAIACQAGADAKABQAKABANAAQAVAAAKgEQALgDAAgIQgBgFgFgEQgFgDgKgCQgJgBgNAAQgPAAgKACIgQADIgIgDIgCgBIAAgCIAAgmIABgCIADgBIBcAAIADABIACACIAAAEIgCADIgDAAIhUAAIAAAbQAIgDAKgBQAJgCAMAAQAKAAAKACQAKABAIADQAIADAFAFQAEAFAAAHQAAAOgOAHQgOAFgbAAQgOABgLgCg");
	this.shape_1.setTransform(54.925,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(42.375,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(32.575,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(24.075,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_5.setTransform(16.225,-6.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_6.setTransform(6.425,-6.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAfIgBgBIgBgCIAAg2IABgCIABgBIAHAAIACABIAAACIAAAHIABABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAEgEAGgEQAIgDALAAIALABIAIACQAAABABAAQAAAAABABQAAAAAAABQAAAAAAAAIABAEIAAACIgBACIgDAAIgIgDIgNAAQgIAAgGABQgHACgEAFQgEAFAAAGIAAAcIAAACIgCABg");
	this.shape_7.setTransform(-4.6,-5.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAIAFQAJADAEAHQAEAGAAAIQAAADgCABQgCACgEAAIg8AAQABAHAEADQAEAEAGACQAHABAIAAQAIAAAHgBQAGgCAFgCIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMgBQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHADgBAJIA4AAIAAAAg");
	this.shape_8.setTransform(-13.1525,-5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAoQgHgEgEgFIAAAIIAAABIgDABIgGAAIgCgBIgBgBIAAhOIABgCIACAAIAGAAIADAAIAAACIAAAfQAEgFAHgDQAIgEAMAAQAPAAAJAFQAJADADAHQAEAGAAAKQAAAKgEAHQgDAHgJAEQgJADgPAAQgMAAgIgCgAgPgHQgHACgDAEQgDAEAAAIQAAAIADAEQADAFAHACQAHACAJAAQAKAAAGgCQAHgCADgFQADgEAAgIQAAgIgDgEQgDgEgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_9.setTransform(-22.3722,-6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA1AfIgBgBIgBgCIAAgcQAAgKgGgFQgGgEgLAAQgMAAgFAEQgFAFAAAKIAAAcIAAACIgDABIgFAAIgCgBIgBgCIAAgcQABgKgGgFQgFgEgMAAQgMAAgGAEQgEAFgBAKIAAAcIAAACIgDABIgGAAIgCgBIgBgCIAAg2IABgCIACgBIAGAAIADABIAAACIAAAFIABACIACgBQACgFAHgDQAGgCAJAAQAKAAAHADQAGADACAGIABABIABgBQADgFAIgEQAGgDAMAAQAQAAAGAIQAIAIgBAOIAAAcIAAACIgCABg");
	this.shape_10.setTransform(-34.15,-5.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAIAFQAJADAEAHQAEAGAAAIQAAADgCABQgCACgEAAIg8AAQABAHAEADQAEAEAGACQAHABAIAAQAIAAAHgBQAGgCAFgCIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMgBQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHADgBAJIA4AAIAAAAg");
	this.shape_11.setTransform(-45.6025,-5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAeIgCAAIgDgCIgng2IAAgDIADgBIAHAAIACABIACACIAhAuIAAABIABgBIAhguIACgCIACgBIAIAAIACABIAAADIgnA2IgDACIgDAAg");
	this.shape_12.setTransform(-55.25,-5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAJAFQAJADAEAHQAFAHAAAJQAAAKgFAHQgEAHgJAEQgJADgPAAQgOAAgJgDgAgPgSQgHACgDAEQgEAFAAAHQAAAIAEAEQADAFAHACQAGACAJAAQAKAAAHgCQAGgCAEgFQADgEAAgIQAAgHgDgFQgEgEgGgCQgHgCgKAAQgJAAgGACg");
	this.shape_13.setTransform(-64.9525,-5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAxAqIgEAAIgDgCIhUhBIgBAAIgBABIAAA+IgBADIgDABIgEAAIgDgBIgBgDIAAhLIABgDIADgBIAEAAIAEAAIADACIBUBBIABAAIABgBIAAg+IABgDIADgBIAEAAIADABIABADIAABLIgBADIgDABg");
	this.shape_14.setTransform(-76.225,-6.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_15.setTransform(56.3271,-35.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAyIgPAAIgOgDQgHgCgFgEQgEgEgBgFQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQABgCADAAIALAAIAEAAIADACIAFADIAHABIALABIAIAAIAJgCQAFgBADgEQADgDAAgGIAAgKQgBADgDADQgEACgGABIgOABQgRAAgLgEQgKgEgFgHQgFgHABgLQgBgLAFgHQAEgIALgEQALgEARAAQAMAAAHACQAHACACAEIAAgDIABgCIADgBIARAAIADABIABACIAAA+QgBAMgHAHQgHAIgLADQgLAEgNAAIgDgBgAgNgdQgGABgDADQgEADAAAGQAAAGAEADQADADAGACIAOABIAPgBQAHgCACgDQAEgDAAgGQAAgGgEgDQgCgDgHgBIgPgBIgOABg");
	this.shape_16.setTransform(44.7,-33.8969);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjAMQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgPQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIBHAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAPQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_17.setTransform(34.325,-35.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_18.setTransform(23.7771,-35.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAcAkIgCgBIgBgCIAAghQAAgJgGgDQgGgFgNABQgMgBgHAFQgFADgBAJIAAAhIAAACIgDABIgRAAIgCgBIgBgCIAAg/IABgDIACgBIARAAIADABIAAADIAAAJIABABIABAAQACgHAJgEQAHgEAPAAQAPAAAIAEQAJAEADAIQAEAIAAALIAAAhIgBACIgDABg");
	this.shape_19.setTransform(12.4,-35.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_20.setTransform(-3.025,-35.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgSAkQgIgBgHgCIgIgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAIABgDIAFgJQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADABIAJACIALABIAMABIAFAAIAGAAIAGgBQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIgHgCIgLgCIgQgCIgMgDQgHgDgDgDQgEgEAAgGQABgIAFgFQAFgFAJgCQAJgDAMAAIASACIANACIAHADIAEACIgCAEIgDAIIgCACIgEAAIgIgCIgMgCIgKgBIgDAAIgGAAIgGACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIABACIAGABIAMADIAOACIAOADQAHACAFAEQADAEAAAHQAAAHgDAEQgEAEgHADIgNADIgPABIgTgBg");
	this.shape_21.setTransform(-17.85,-35.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHAyIgDgBIgBgDIAAg/IABgCIADgBIAPAAIADABIABACIAAA/IgBADIgDABgAgJgfQgDgCAAgEIAAgFQAAgDADgCQADgCAGAAQAHAAADACQADACAAADIAAAFQAAAEgDACQgDABgHAAQgGAAgDgBg");
	this.shape_22.setTransform(-24.875,-36.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAxIgDgBIgBgCIAAhaIABgDIADgBIAPAAIADABIABADIAABaIgBACIgDABg");
	this.shape_23.setTransform(-33.125,-36.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAFgIAMgEQALgEARgBQASABAMAEQALAEAFAIQAFAHAAAKIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgGAAIhCAAQAEAHAHACQAIACAKAAIAPgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIACAEQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgHAEgKACQgJADgOAAQgbAAgMgKgAAcgFQgCgGgGgDQgHgCgNAAQgMAAgGACQgGADgCAGIA2AAIAAAAg");
	this.shape_24.setTransform(-40.8,-35.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAkQgJgBgFgCIgJgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgDIAEgJQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAEABIAIACIALABIAMABIAFAAIAGAAIAGgBQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIgGgCIgNgCIgOgCIgOgDQgFgDgEgDQgEgEABgGQAAgIAEgFQAGgFAJgCQAJgDAMAAIARACIAOACIAIADIADACIgBAEIgEAIIgDACIgDAAIgIgCIgLgCIgMgBIgCAAIgHAAIgFACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIABACIAFABIANADIAOACIAPADQAGACAFAEQADAEAAAHQAAAHgDAEQgEAEgGADIgOADIgPABIgTgBg");
	this.shape_25.setTransform(-51.3,-35.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggAtQgLgEgEgIQgEgJAAgLQAAgMAEgHQAEgIALgFQAKgEATAAQANAAAHACQAIACAEAFIAAgfIAAgDIADAAIAQAAIADAAIABADIAABaIgBADIgDABIgQAAIgDgBIAAgDIAAgEQgEAEgHADQgJACgMAAQgTAAgKgFgAgOgCQgHABgDADQgDADAAAIQAAAHADAEQADAEAHABIAQABIARgBQAGgBADgEQACgEAAgHQAAgIgCgDQgDgDgGgBQgHgCgKABQgJgBgHACg");
	this.shape_26.setTransform(-62.35,-36.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag7AxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIB3AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAAPQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgEABIhgAAIgBABIgBABIAAALIABABIABAAIBZAAIADACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAMQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDABIhZAAIgBABIgBABIAAAJIABABIABABIBgAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAAPQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_27.setTransform(-75.3,-36.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_28.setTransform(-6.075,43.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAtQgHgGgDgJQgDgJAAgLQAAgKADgIQAEgHAHgFQAHgFAJAAQAIAAAFAEQAEADAEAFIAAglIAMAAIAABjIgLAAIAAgKQgCADgDADQgDADgEABIgFACIgEAAQgLAAgHgGgAgPgGQgEAHAAAMQAAAMAFAIQAFAHAJABQAHAAAHgHQAGgFAAgNQAAgfgUABQgLgBgEAJg");
	this.shape_29.setTransform(-12.125,38.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_30.setTransform(-19.775,40.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_31.setTransform(-27.525,40.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAGgDAJAAIAAAMQgLABgGAFQgGAEAAAIIAAArg");
	this.shape_32.setTransform(-33.25,40.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTAoIAAAJIgMAAIAAhjIAMAAIAAAkQAEgGAFgCQAFgDAHAAQAJAAAHAFQAHAFAEAHQADAIAAAKQAAALgDAJQgDAJgHAGQgIAGgLAAQgNAAgGgLgAgMgKQgEAFgCAGIgBAPQAAANAGAFQAGAHAHAAQAJgBAFgHQAFgIAAgMQAAgbgTAAQgIAAgEAEg");
	this.shape_33.setTransform(-39.875,38.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_34.setTransform(-49.375,38.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAkQgHgDgEgGQgIgKABgOIAAgIIACgJQADgJAFgFQAFgEAGgDQAGgEAGAAQAGAAAFACQAFACAEAEQAEAEADAEQAFAMAAAPIg1AAQAAAMAGAGQAFAHAKAAQAFgBAFgCQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgDAGgGAEIgEACIgBABIgDABQgEABgIAAQgIAAgGgDgAAVgFQgBgEgBgEIgEgHQgFgHgKABQgFAAgEADQgFADgCAFQgEAGAAAEIApAAIAAAAg");
	this.shape_35.setTransform(-54.8,40.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_36.setTransform(-62.225,40.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAtQgHgGgDgJQgDgJAAgLQAAgKADgIQAEgHAHgFQAHgFAJAAQAIAAAFAEQAEADAEAFIAAglIAMAAIAABjIgLAAIAAgKQgCADgDADQgDADgEABIgFACIgEAAQgLAAgHgGgAgPgGQgEAHAAAMQAAAMAFAIQAFAHAJABQAHAAAHgHQAGgFAAgNQAAgfgUABQgLgBgEAJg");
	this.shape_37.setTransform(-69.775,38.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgkAyIAAhjIBIAAIAAAMIg6AAIAAAfIA2AAIAAALIg2AAIAAAhIA7AAIAAAMg");
	this.shape_38.setTransform(-77.95,38.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGAzIAAg+IgKAAIAAgKIAKAAIAAgLQAAgGABgDQABgDADgCQACgEAIAAIAIAAIAAAMIgEAAQgEAAgCABQgCACAAAEIAAAKIAMAAIAAAKIgMAAIAAA+g");
	this.shape_39.setTransform(59.325,20.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGACAGQACAHAEAEQAFAFAHAAQAIAAAEgFQAGgEABgHIACgMIgCgMQgBgHgGgEQgEgEgIAAQgKAAgGAIg");
	this.shape_40.setTransform(53.5,21.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_41.setTransform(41.625,20.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_42.setTransform(33.975,21.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgOAkQgHgEgEgGQgIgKABgOIAAgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAGAAAFACQAFABAEAEQAEAEADAEQAFAMAAAQIg1AAQAAALAGAHQAFAFAKAAQAFABAFgDQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgDAGgGAEIgEACIgBAAIgDACQgEABgIAAQgIAAgGgDgAAVgFQgBgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgCAFQgEAFAAAFIApAAIAAAAg");
	this.shape_43.setTransform(26.2,21.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_44.setTransform(14.875,21.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgPAkQgGgEgEgGQgIgKAAgOIABgIIACgJQADgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAFABAEAEQAFAEADAEQAFAMABAQIg1AAQgBALAGAHQAGAFAJAAQAFABAFgDQAEgCADgEQACgDAAgDIAMAAQAAAEgEAGQgDAGgGAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFAAAFIAnAAIAAAAg");
	this.shape_45.setTransform(7.5,21.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgIAlIgFgCIgFgDQgGgEgDgIQgEgIABgLIAAgGIACgKQABgEACgEQAFgHAHgEQAIgEAHAAQAHAAAHACQAFADAFAFQAFAHABAKIgNAAQgBgIgEgEQgFgEgIAAQgIAAgFAIQgFAIgBANQAAAHACAFQACAFADADQAFAGAHAAQAHAAAFgFQAGgFAAgIIANAAQgCAJgEAGQgEAHgGADQgHAEgIAAQgEAAgFgCg");
	this.shape_46.setTransform(0.15,21.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_47.setTransform(-7.325,21.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgXAgQgFgFAAgKIAAg3IAMAAIAAA1QAAAGADAEQAEADAFABIADAAQAHgCAFgGQAGgGAAgJIAAgsIAMAAIAABKIgMAAIAAgIQgFAFgHADQgGACgHAAQgJABgGgHg");
	this.shape_48.setTransform(-15.075,21.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGACAGQACAHAEAEQAFAFAHAAQAIAAAEgFQAGgEABgHIACgMIgCgMQgBgHgGgEQgEgEgIAAQgKAAgGAIg");
	this.shape_49.setTransform(-22.9,21.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_50.setTransform(-30.725,21.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_51.setTransform(-38.525,21.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_52.setTransform(-46.275,21.725);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_53.setTransform(-58.175,20.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAEgDQAGgEAJAAIAAAOQgLAAgGAEQgFAFgBAJIAAArg");
	this.shape_54.setTransform(-63.7,21.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgFAJgBAKQAAAGADAGQABAHAFAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_55.setTransform(-70.45,21.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgiAyIAAhjIBFAAIAAAMIg3AAIAAAfIAwAAIAAALIgwAAIAAAtg");
	this.shape_56.setTransform(-78.175,20.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_57.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-57.5,200,120);


(lib.text_06 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape.setTransform(61.325,-6.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApIgRgDQgHgCgDgDQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgDIABgDIADgCIADABIAIACQAGADAKABQAKABANAAQAVAAAKgEQALgDAAgIQgBgFgFgEQgFgDgKgCQgJgBgNAAQgPAAgKACIgQADIgIgDIgCgBIAAgCIAAgmIABgCIADgBIBcAAIADABIACACIAAAEIgCADIgDAAIhUAAIAAAbQAIgDAKgBQAJgCAMAAQAKAAAKACQAKABAIADQAIADAFAFQAEAFAAAHQAAAOgOAHQgOAFgbAAQgOABgLgCg");
	this.shape_1.setTransform(48.775,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(36.225,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(26.425,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(17.925,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAnQgOgEgHgJQgHgJAAgOQAAgNAIgLQAIgKAOgFQAOgGASAAQANAAAIABQAJACAFADIAIADIADADIgCAEIgCABIgDABIgEgBIgGgCIgMgCIgRgCQgNAAgLAEQgLAEgHAHQgGAHgBAJQAJgDAOgDQAMgCAPAAQALAAAJABQAKACAHADQAHACAEAEQADAFABAHQgBAJgGAGQgHAGgMADQgNADgRAAQgSAAgNgEgAgPADIgQAEIgMADQADAMAMAFQALAEAUAAQAOAAAJgCQAJgCAFgDQAEgDAAgEQAAgHgKgEQgKgEgUAAIgTABg");
	this.shape_5.setTransform(10.075,-6.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_6.setTransform(0.275,-6.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAqIgDgBIABgDIANgTIgBgCIgBgBIgmg2IgBgCIADgBIAHAAIACABIACABIAhAuIAAABIABgBIAhguIACgBIACgBIAIAAIACABIgBACIgmA2IgBABIAAAAIgPAXIgBABIgCABg");
	this.shape_7.setTransform(-11.85,-4.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAfIgCgBIgBgCIAAg2IABgCIACgBIAGAAIADABIAAACIAAAHIABABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQADgEAIgEQAGgDAMAAIALABIAHACQABABABAAQAAAAAAABQABAAAAABQAAAAAAAAIABAEIAAACIgBACIgDAAIgJgDIgLAAQgJAAgGABQgHACgDAFQgFAFAAAGIAAAcIAAACIgDABg");
	this.shape_8.setTransform(-20.95,-5.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAfQgHAAgGgCQgGgBgEgFQgDgDAAgIQAAgHADgEQAEgDAGgCQAGgBAHAAIAjAAIABAAIABgBIAAgCQAAgGgHgDQgGgDgLAAIgSACIgMACIgCAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQABgCADAAIAKgDIASgCQAKAAAHACQAHADAEACQAEADACAFIABAIIAAAYIABAEIADAAIACAAIACABIABACIAAACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgEgBIgBAAQgFABgDgDQgDgDgBgFQgCAFgFACQgFACgGABIgLABgAgWAEIgGACQgCADAAADQAAAGAFACQAEABAHAAIAFAAIAQgBQAHAAADgCQAEgCABgFIAAgHIgBAAIgBgBIgiAAIgIABg");
	this.shape_9.setTransform(-29.525,-5.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAbQgIgDgEgHQgDgGAAgLIAAgbIABgCIACgBIAGAAIACABIABACIAAAbQAAALAHAFQAGAFAPAAQAOAAAIgFQAHgFAAgLIAAgbIABgCIACgBIAGAAIACABIABACIAAA2IgBACIgCABIgGAAIgCgBIgBgCIAAgIIAAgBIgBABQgEAFgIADQgIAEgMAAQgNAAgIgEg");
	this.shape_10.setTransform(-39.125,-5.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAfIgCgBIgBgCIAAg2IABgCIACgBIAGAAIACABIABACIAAAHIAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAEgEAGgEQAIgDAKAAIAMABIAIACQAAABABAAQAAAAABABQAAAAAAABQAAAAABAAIAAAEIAAACIgBACIgDAAIgIgDIgNAAQgIAAgHABQgGACgEAFQgDAFAAAGIAAAcIgBACIgCABg");
	this.shape_11.setTransform(-47.9,-5.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAoQgHgEgEgFIAAAIIAAABIgDABIgGAAIgCgBIgBgBIAAhOIABgCIACAAIAGAAIADAAIAAACIAAAfQAEgFAHgDQAIgEAMAAQAPAAAJAFQAJADADAHQAEAGAAAKQAAAKgEAHQgDAHgJAEQgJADgPAAQgMAAgIgCgAgPgHQgHACgDAEQgDAEAAAIQAAAIADAEQADAFAHACQAHACAJAAQAKAAAGgCQAHgCADgFQADgEAAgIQAAgIgDgEQgDgEgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_12.setTransform(-56.6222,-6.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAIAFQAJADAEAHQAEAGAAAIQAAADgCABQgCACgEAAIg8AAQABAHAEADQAEAEAGACQAHABAIAAQAIAAAHgBQAGgCAFgCIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMgBQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHADgBAJIA4AAIAAAAg");
	this.shape_13.setTransform(-66.0025,-5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgxAqIgDgBIgBgDIAAhLIABgDIADgBIBjAAIADABIABADIAAADIgBAEIgDABIhZAAIgBAAIgBABIAAAYIABAAIABABIBTAAIADABIABACIAAADIgBAEIgDABIhTAAIgBAAIgBABIAAAdIgBADIgCABg");
	this.shape_14.setTransform(-76.55,-6.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_15.setTransform(-22.5229,-35.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAkIgDgBIgBgCIAAg/IABgDIADgBIAQAAIADABIABADIAAAGIABACQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIAGgFQAEgDAEgCQAGgBAIAAQAJAAAFABIAGADQADABABACIABAGIAAAFQAAAEgCABIgGAAIgGgCIgHgCIgJgBQgIAAgFACQgGACgEADQgEAEAAAGIAAAhIgBACIgDABg");
	this.shape_16.setTransform(-33.075,-35.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAvQgGgCgDgFQgDgFAAgJIAAgbIAAgBIgBAAIgQAAIgCgBIgBgDIAAgMQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIACgBIAQAAIABgBIAAgBIAAgWIABgCIACgBIAQAAIADABIABACIAAAWIAAABIABABIATAAIACABIABACIAAAMIgBADIgCABIgTAAIgBAAIAAABIAAAZQAAADACACIADABIAEAAIAFAAIAEgBIADAAIABACIADALIABACIgCACIgLADIgLAAIgCAAQgHAAgEgCg");
	this.shape_17.setTransform(-41.9917,-36.5708);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAkQgJgBgFgCIgJgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgDIAEgJQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAEABIAIACIALABIAMABIAFAAIAGAAIAGgBQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIgGgCIgNgCIgOgCIgOgDQgFgDgEgDQgEgEABgGQAAgIAEgFQAGgFAJgCQAJgDAMAAIARACIAOACIAIADIADACIgBAEIgEAIIgDACIgDAAIgIgCIgLgCIgMgBIgCAAIgHAAIgFACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIABACIAFABIANADIAOACIAPADQAGACAFAEQADAEAAAHQAAAHgDAEQgEAEgGADIgOADIgPABIgTgBg");
	this.shape_18.setTransform(-50.85,-35.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_19.setTransform(-61.325,-35.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkAuQgSgFgIgMQgJgKAAgTQAAgSAJgKQAIgMASgFQARgFAaAAQASABANABQANACAIADQAHACADACQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgGALQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIgEgBIgLgEIgPgCIgXAAQgOgBgLACQgKACgGADQgGADgCAGQgDAFAAAFQAAAHADAEQACAFAGAEQAGAEAKABQALACAOAAIAXgCIAPgCIALgDIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIAFAJIACAFIABACIgBABIgCABQgDADgHADQgIACgNACQgMABgTAAIgFABQgWAAgQgFg");
	this.shape_20.setTransform(-74.975,-36.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_21.setTransform(61.575,43.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_22.setTransform(55.725,40.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAoIAAAJIgMAAIAAhjIAMAAIAAAkQAEgGAFgCQAFgDAHAAQAJAAAHAFQAHAFAEAHQADAIAAAKQAAALgDAJQgDAJgHAGQgIAGgLAAQgNAAgGgLgAgMgKQgEAFgCAGIgBAPQAAANAGAFQAGAHAHAAQAJgBAFgHQAFgIAAgMQAAgbgTAAQgIAAgEAEg");
	this.shape_23.setTransform(48.025,38.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAhQgFgHAAgJIAAg2IAMAAIAAA0QAAAGADAEQAEADAFAAIADAAQAHgBAFgGQAGgGAAgJIAAgrIAMAAIAABIIgMAAIAAgHQgFAFgHADQgGADgHAAQgJgBgGgFg");
	this.shape_24.setTransform(40.125,40.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAxQgIgEgGgHQgFgHgDgKIgDgKIgBgKIAAgBIAAgBQAAgNAFgLQAEgLALgIQAFgDAHgDQAGgCAHAAQAJAAAJADQAIACAIAIQAHAHACANIgOAAQgCgKgHgGQgHgFgLAAIgDABIgEAAQgHACgGAFQgGAFgDAIQgDAIAAALQAAAKACAIQACAIAFAFQAEAFAFADIAGACIAFAAIAAAAQAOAAAIgHQAHgIACgNIAOAAQgBALgGAJQgGAJgJAGIgKAEQgFABgGAAQgLAAgJgEg");
	this.shape_25.setTransform(31.175,38.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAzIAAg+IgKAAIAAgKIAKAAIAAgLQAAgGABgDQABgDADgCQACgEAIAAIAIAAIAAAMIgEAAQgEAAgCABQgCACAAAEIAAAKIAMAAIAAAKIgMAAIAAA+g");
	this.shape_26.setTransform(20.225,38.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAFgEACgHIABgMIgBgMQgCgHgFgEQgFgEgIAAQgLAAgEAIg");
	this.shape_27.setTransform(14.4,40.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAGgDAJAAIAAAMQgKABgHAFQgFAEgBAIIAAArg");
	this.shape_28.setTransform(4.8,40.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPAkQgGgDgEgGQgIgKAAgOIABgIIACgJQADgJAFgFQAFgEAHgDQAFgEAGAAQAGAAAEACQAFACAEAEQAFAEADAEQAFAMABAPIg1AAQgBAMAGAGQAGAHAJAAQAFgBAEgCQAFgCADgEQACgDAAgDIAMAAQAAAEgEAGQgDAGgFAEIgEACIAAABIgFABQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgHgLABQgFAAgEADQgFADgCAFQgDAGAAAEIAnAAIAAAAg");
	this.shape_29.setTransform(-1.95,40.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_30.setTransform(-7.925,39.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_31.setTransform(-13.275,40.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_32.setTransform(-18.325,38.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_33.setTransform(-23.775,40.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_34.setTransform(-29.225,38.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAjAyIAAhTIgcBTIgNAAIgchTIAABTIgNAAIAAhjIATAAIAcBUIAdhUIATAAIAABjg");
	this.shape_35.setTransform(-36.575,38.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgPAkQgGgDgEgGQgIgKAAgOIABgIIACgJQADgJAFgFQAFgEAGgDQAGgEAGAAQAGAAAEACQAFACAEAEQAFAEADAEQAFAMAAAPIg1AAQAAAMAGAGQAGAHAJAAQAFgBAFgCQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBABIgEABQgEABgHAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgEgHgLABQgFAAgEADQgFADgCAFQgDAGgBAEIAoAAIAAAAg");
	this.shape_36.setTransform(-50.2,40.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAlAlIAAguQAAgRgNAAQgGAAgDADQgFADgBAEQgDAFAAAFIAAArIgMAAIAAgxQABgGgDgEQgCgEgHAAQgEAAgFACQgEACgDAGQgDAGAAAJIAAAmIgNAAIAAhIIAMAAIAAAKQAJgMANABQAJAAAFADQADADACAFQAFgHAFgCQAEgDAJABQAEAAAFABQAFACAEAGQAEAFAAAKIAAAxg");
	this.shape_37.setTransform(-59.9,40.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_38.setTransform(-67.325,38.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAFgEQAEgDAKAAIAAAMQgKABgHAFQgFAEAAAIIAAArg");
	this.shape_39.setTransform(-70.65,40.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgkAyIAAhjIAsAAQAIgBAIAEQAGAEAEAHQADAGAAAIQAAAIgCAHQgDAGgHADQgHAFgKAAIgfAAIAAAqgAgXgDIAaAAQAUAAABgSQAAgRgVAAIgaAAg");
	this.shape_40.setTransform(-77.9,38.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_41.setTransform(63.825,21.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_42.setTransform(56.475,21.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_43.setTransform(44.725,21.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_44.setTransform(39.275,20.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_45.setTransform(29.925,21.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAEgDQAGgEAJAAIAAAOQgKAAgHAEQgGAFAAAJIAAArg");
	this.shape_46.setTransform(24.25,21.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAIAGQAIAFADAJQAEAJAAAJQAAAJgEAJQgDAJgIAGQgIAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGACAGQACAHAEAEQAFAFAHAAQAIAAAEgFQAGgEABgHIACgMIgCgMQgBgHgGgEQgEgEgIAAQgKAAgGAIg");
	this.shape_47.setTransform(17.5,21.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAOAlIgOg4IgOA4IgNAAIgVhIIAOAAIAOA4IAOg4IANAAIAPA4IAOg4IANAAIgWBIg");
	this.shape_48.setTransform(8.575,21.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_49.setTransform(-0.025,21.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGACAGQACAHAEAEQAFAFAHAAQAIAAAEgFQAGgEABgHIACgMIgCgMQgBgHgGgEQgEgEgIAAQgKAAgGAIg");
	this.shape_50.setTransform(-11.3,21.725);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAEgDQAFgEAKAAIAAAOQgKAAgHAEQgFAFgBAJIAAArg");
	this.shape_51.setTransform(-17,21.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAAAABQABAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_52.setTransform(-21.925,20.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_53.setTransform(-27.275,21.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_54.setTransform(-34.625,21.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgSAxQgIgEgGgHQgFgHgDgKIgDgKIgBgKIAAgBIAAgBQAAgNAFgLQAEgLALgIQAFgDAHgDQAGgCAHAAQAJAAAJADQAIACAIAIQAHAHACANIgOAAQgCgKgHgGQgHgFgLAAIgDABIgEAAQgHACgGAFQgGAFgDAIQgDAIAAALQAAAKACAIQACAIAFAFQAEAFAFADIAGACIAFAAIAAAAQAOAAAIgHQAHgIACgNIAOAAQgBALgGAJQgGAJgJAGIgKAEQgFABgGAAQgLAAgJgEg");
	this.shape_55.setTransform(-43.575,20.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_56.setTransform(-54.125,20.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgPAkQgGgEgEgGQgIgKAAgOIABgIIACgJQADgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAFABAEAEQAFAEADAEQAFAMABAQIg1AAQgBALAGAHQAGAFAJAAQAFABAEgDQAFgCADgEQACgDAAgDIAMAAQAAAEgEAGQgDAGgGAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFAAAFIAnAAIAAAAg");
	this.shape_57.setTransform(-59.55,21.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_58.setTransform(-67.525,20.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_59.setTransform(-72.825,20.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgiAyIAAhjIBFAAIAAAMIg3AAIAAAfIAwAAIAAALIgwAAIAAAtg");
	this.shape_60.setTransform(-78.175,20.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_61.setTransform(-7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-55.5,200,120);


(lib.text_05 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape.setTransform(54.175,-6.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApIgRgDIgKgFQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgDIABgDIADgCIADABIAIACQAGADAKABQAKABANAAQAVAAAKgEQALgDAAgIQgBgFgFgEQgFgDgKgCQgJgBgNAAQgPAAgKACIgQADIgIgDIgCgBIAAgCIAAgmIABgCIADgBIBcAAIADABIACACIAAAEIgCADIgDAAIhUAAIAAAbQAIgDAKgBQAJgCAMAAQAKAAAKACQAKABAIADQAIADAFAFQAEAFAAAHQAAAOgOAHQgOAFgbAAQgOABgLgCg");
	this.shape_1.setTransform(41.625,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(29.075,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(19.275,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(10.775,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaApIgQgDIgLgFQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIABgDIACgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBABAAIADABIAIACIAQAEIAWABQAOAAAKgCQAJgCAFgDQAEgDAAgFQAAgDgDgDQgFgCgGgCIgPgCIgSgBIgEgBIgBgDIAAgDIABgDIADgCIAlgWIhNAAIgCAAIgBgDIAAgEIABgCIACgBIBcAAIADABIABACIAAAFQAAADgDACIgoAWQAKAAAIACQAJAAAHADQAHACADAFQAEAEABAHQAAAJgHAFQgGAGgNADQgNACgRAAQgOABgMgCg");
	this.shape_5.setTransform(3.05,-6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAqIgDgBIABgDIANgTIgBgCIgBgBIgmg2IgBgCIADgBIAHAAIACABIACABIAhAuIAAABIABgBIAhguIACgBIACgBIAIAAIACABIgBACIgmA2IgBABIAAAAIgPAXIgBABIgCABg");
	this.shape_6.setTransform(-11.85,-4.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAfIgCgBIgBgCIAAg2IABgCIACgBIAGAAIADABIAAACIAAAHIABABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQADgEAIgEQAGgDAMAAIALABIAHACQABABABAAQAAAAAAABQABAAAAABQAAAAAAAAIABAEIAAACIgBACIgDAAIgJgDIgLAAQgJAAgGABQgHACgDAFQgFAFAAAGIAAAcIAAACIgDABg");
	this.shape_7.setTransform(-20.95,-5.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAfQgHAAgGgCQgGgBgEgFQgDgDAAgIQAAgHADgEQAEgDAGgCQAGgBAHAAIAjAAIABAAIABgBIAAgCQAAgGgHgDQgGgDgLAAIgSACIgMACIgCAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQABgCADAAIAKgDIASgCQAKAAAHACQAHADAEACQAEADACAFIABAIIAAAYIABAEIADAAIACAAIACABIABACIAAACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgEgBIgBAAQgFABgDgDQgDgDgBgFQgCAFgFACQgFACgGABIgLABgAgWAEIgGACQgCADAAADQAAAGAFACQAEABAHAAIAFAAIAQgBQAHAAADgCQAEgCABgFIAAgHIgBAAIgBgBIgiAAIgIABg");
	this.shape_8.setTransform(-29.525,-5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAbQgIgDgEgHQgDgGAAgLIAAgbIABgCIACgBIAGAAIACABIABACIAAAbQAAALAHAFQAGAFAPAAQAOAAAIgFQAHgFAAgLIAAgbIABgCIACgBIAGAAIACABIABACIAAA2IgBACIgCABIgGAAIgCgBIgBgCIAAgIIAAgBIgBABQgEAFgIADQgIAEgMAAQgNAAgIgEg");
	this.shape_9.setTransform(-39.125,-5.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAfIgCgBIgBgCIAAg2IABgCIACgBIAGAAIACABIABACIAAAHIAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAEgEAGgEQAIgDAKAAIAMABIAIACQAAABABAAQAAAAABABQAAAAAAABQAAAAABAAIAAAEIAAACIgBACIgDAAIgIgDIgNAAQgIAAgHABQgGACgEAFQgDAFAAAGIAAAcIgBACIgCABg");
	this.shape_10.setTransform(-47.9,-5.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAoQgHgEgEgFIAAAIIAAABIgDABIgGAAIgCgBIgBgBIAAhOIABgCIACAAIAGAAIADAAIAAACIAAAfQAEgFAHgDQAIgEAMAAQAPAAAJAFQAJADADAHQAEAGAAAKQAAAKgEAHQgDAHgJAEQgJADgPAAQgMAAgIgCgAgPgHQgHACgDAEQgDAEAAAIQAAAIADAEQADAFAHACQAHACAJAAQAKAAAGgCQAHgCADgFQADgEAAgIQAAgIgDgEQgDgEgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_11.setTransform(-56.6222,-6.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgDQAJgFAOAAQAPAAAIAFQAJADAEAHQAEAGAAAIQAAADgCABQgCACgEAAIg8AAQABAHAEADQAEAEAGACQAHABAIAAQAIAAAHgBQAGgCAFgCIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMgBQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHADgBAJIA4AAIAAAAg");
	this.shape_12.setTransform(-66.0025,-5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxAqIgDgBIgBgDIAAhLIABgDIADgBIBjAAIADABIABADIAAADIgBAEIgDABIhZAAIgBAAIgBABIAAAYIABAAIABABIBTAAIADABIABACIAAADIgBAEIgDABIhTAAIgBAAIgBABIAAAdIgBADIgCABg");
	this.shape_13.setTransform(-76.55,-6.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAkQgJgBgFgCIgJgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgDIAEgJQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIADABIAIACIALABIAMABIAEAAIAHAAIAGgBQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgHgCIgNgCIgOgCIgOgDQgFgDgEgDQgEgEABgGQAAgIAEgFQAGgFAJgCQAJgDAMAAIARACIAOACIAIADIACACIAAAEIgEAIIgDACIgDAAIgIgCIgLgCIgMgBIgDAAIgGAAIgFACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIACACIAEABIANADIAOACIAPADQAGACAEAEQAEAEAAAHQAAAHgEAEQgDAEgGADIgOADIgPABIgTgBg");
	this.shape_14.setTransform(20.35,-35.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvAxIgDAAIgBgDIAAhZIABgEIADAAIAQAAIADAAIAAAEIAAADQAEgEAHgCQAIgCANgBQATABAKAEQALAEAEAIQAEAIAAAMQAAAMgEAIQgEAHgLAFQgKAEgTAAQgNAAgHgCQgIgDgEgEIAAAfIAAADIgDAAgAgSgbQgGABgDADQgDAEABAHQgBAHADAFQADACAGABIARABIAQgBQAHgBADgCQADgFAAgHQAAgHgDgEQgDgDgHgBQgGgCgKAAQgKAAgHACg");
	this.shape_15.setTransform(9.6,-34);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_16.setTransform(-2.2229,-35.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_17.setTransform(-13.7229,-35.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAyAxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgBgDIAAgcIAAgBIgBgBIhWAAIgBABIgBABIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgQAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAQAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAhIABABIABABIBWAAIABgBIAAgBIAAghIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAQAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAABXQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_18.setTransform(-27.575,-36.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_19.setTransform(-45.375,-35.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHAxIgDgBIgBgCIAAhaIABgDIADgBIAPAAIADABIABADIAABaIgBACIgDABg");
	this.shape_20.setTransform(-53.175,-36.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggAgQgJgEgDgIQgEgIAAgLIAAggIABgDIACgBIARAAIADABIABADIAAAgQAAAJAGAEQAGADAMAAQANAAAGgDQAGgEAAgKIAAgfIABgDIADgBIARAAIACABIABADIAAA/IgBACIgCABIgRAAIgDgBIgBgCIAAgJIAAgBIgBAAQgDAGgIAEQgIAEgOAAQgPAAgIgEg");
	this.shape_21.setTransform(-60.925,-35.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAyAxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgBgDIAAgcIAAgBIgBgBIhWAAIgBABIgBABIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgQAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAQAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAhIABABIABABIBWAAIABgBIAAgBIAAghIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAQAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAABXQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_22.setTransform(-74.725,-36.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAIIAAgOIAPAAIAAAOg");
	this.shape_23.setTransform(33.625,24.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_24.setTransform(28.125,21.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_25.setTransform(20.575,20.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_26.setTransform(15.275,20.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAOAyIgVglIgKAKIAAAbIgMAAIAAhjIAMAAIAAA5IAegeIAQAAIgcAaIAeAug");
	this.shape_27.setTransform(10.7,20.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAFgDQAEgEAKAAIAAAOQgLAAgGAEQgGAFABAJIAAArg");
	this.shape_28.setTransform(1.05,21.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQADAHAEAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMIgCgMQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_29.setTransform(-5.7,21.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGAzIAAg+IgKAAIAAgKIAKAAIAAgLQAAgGABgDQABgDADgCQACgEAIAAIAIAAIAAAMIgEAAQgEAAgCABQgCACAAAEIAAAKIAMAAIAAAKIgMAAIAAA+g");
	this.shape_30.setTransform(-11.575,20.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAMQAHAAAAgOIgHAAIAAgOIANAAIAAAOQAAAQgNADg");
	this.shape_31.setTransform(-19.375,25.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAOAlIgOg4IgOA4IgNAAIgVhIIAOAAIAOA4IAOg4IANAAIAPA4IAOg4IANAAIgWBIg");
	this.shape_32.setTransform(-26.325,21.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMQAAgGgCgGQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_33.setTransform(-35.3,21.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_34.setTransform(-43.125,21.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAOAyIgVglIgKAKIAAAbIgNAAIAAhjIANAAIAAA5IAegeIAQAAIgcAaIAeAug");
	this.shape_35.setTransform(-50.05,20.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXAgQgFgFAAgKIAAg3IAMAAIAAA1QAAAGADAEQAEADAFABIADAAQAHgCAFgGQAGgGAAgJIAAgsIAMAAIAABKIgMAAIAAgIQgFAFgHADQgGACgHAAQgJABgGgHg");
	this.shape_36.setTransform(-61.775,21.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQADAHAEAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMIgCgMQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_37.setTransform(-69.6,21.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGAyIAAgoIgmg7IAQAAIAcAwIAdgwIAQAAIgmA7IAAAog");
	this.shape_38.setTransform(-78.175,20.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCCCC").s().p("AsfH0QjIAAAAjIIAApXQAAjIDIAAIY/AAQDIAAAADIIAAJXQAADIjIAAg");
	this.shape_39.setTransform(-14,-10.4841,1,1.0005);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-60.5,200,100);


(lib.text_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape.setTransform(21.125,-6.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApIgRgDIgKgFQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgDIABgDIADgCIADABIAIACQAGADAKABQAKABANAAQAVAAAKgEQALgDAAgIQgBgFgFgEQgFgDgKgCQgJgBgNAAQgPAAgKACIgQADIgIgDIgCgBIAAgCIAAgmIABgCIADgBIBcAAIADABIACACIAAAEIgCADIgDAAIhUAAIAAAbQAIgDAKgBQAJgCAMAAQAKAAAKACQAKABAIADQAIADAFAFQAEAFAAAHQAAAOgOAHQgOAFgbAAQgOABgLgCg");
	this.shape_1.setTransform(8.575,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(-3.975,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(-13.775,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(-22.275,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAqIgCgBIgBgCQAAgNAFgKQAGgLAJgJQAJgIALgHQAMgHANgEIhPAAIgCgBIgBgDIAAgDIABgDIACgBIBiAAIADABIACADIAAAEIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBABQgLACgKAFQgKAEgKAHQgJAGgHAGQgHAJgEAIQgEAJgBAKIAAACIgDABg");
	this.shape_5.setTransform(-29.6,-6.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_6.setTransform(-38.875,-6.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAqIgCgBIgBgCIAAhNIABgDIACAAIAFAAIACAAIABADIAABNIgBACIgCABg");
	this.shape_7.setTransform(-47.25,-6.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCArIgCgBIgBgCIAAg2IABgCIACgBIAFAAIACABIABACIAAA2IgBACIgCABgAgFgfQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQACgCADAAQAEAAABACQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgBACgEAAQgDAAgCgCg");
	this.shape_8.setTransform(-49.875,-6.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAfIgCgBIgCgCIAAg2IACgCIACgBIAFAAIADABIABACIAAAHIABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAEgEAGgEQAHgDALAAIAMABIAHACQABABABAAQAAAAABABQAAAAAAABQAAAAABAAIABAEIAAACIgCACIgDAAIgJgDIgMAAQgIAAgHABQgGACgEAFQgDAFAAAGIAAAcIgBACIgDABg");
	this.shape_9.setTransform(-55.2,-5.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmArIgCgBIgBgDIAAhMIABgDIACgBIAGAAIADABIAAADIAAAIQAEgHAHgCQAIgEAMAAQAPAAAJAFQAJADADAHQAEAHAAAKQAAAKgEAGQgDAHgJAEQgJADgPAAQgMAAgIgCQgHgDgEgGIAAAeIAAADIgDABgAgPgdQgHACgDAEQgDAFAAAIQAAAIADADQADAFAHACQAHACAJAAQAKAAAGgCQAHgCADgFQADgDAAgIQAAgIgDgFQgDgEgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_10.setTransform(-63.9222,-4.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA5AqIgDAAIgCgCIgLgQIhRAAIgLAQIgCACIgDAAIgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBQAAAAAAgBIA4hLIADgCIADgBIAHAAIADABIADACIA4BLQAAABAAAAQABABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAgAAhANIghgsIggAsIBBAAg");
	this.shape_11.setTransform(-75.825,-6.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_12.setTransform(-32.875,-35.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAyIgDgBIgBgDIAAg/IABgCIADgBIAPAAIADABIABACIAAA/IgBADIgDABgAgJgfQgDgCAAgEIAAgFQAAgDADgCQADgCAGAAQAHAAADACQADACAAADIAAAFQAAAEgDACQgDABgHAAQgGAAgDgBg");
	this.shape_13.setTransform(-40.675,-36.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbA0IgDgBIgBgDIAAggIgMAAIgCgBIgBgCIAAgMIABgCIACgBIAMAAIAAgSQAAgKAEgHQAEgGAJgEQAJgEAPAAQANAAAJACIALADIAEADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgDAIIgCADIgEAAIgMgCIgQgBIgKABQgEABgCADQgBACAAAFIAAARIAkAAIACABIABACIAAAMIgBACIgCABIgkAAIAAAgIgBADIgDABg");
	this.shape_14.setTransform(-47.855,-36.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_15.setTransform(-58.575,-35.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA9AxQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgDIAAg5IAAgBIgBABIgwAwIgEACIgDAAIgDAAIgDgCIgvgwIgBgBIgBABIAAA5QAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgQAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAQAAIAEAAIAEADIA0A2IAAAAIABAAIA1g2IACgDIAFAAIAQAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABADIAABXIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_16.setTransform(-73.6,-36.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_17.setTransform(-27.125,43.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_18.setTransform(-33.025,40.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQADAHAEAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMIgCgMQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_19.setTransform(-40.8,40.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_20.setTransform(-48.225,40.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_21.setTransform(-53.275,38.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAFgDAKAAIAAAMQgKABgHAFQgFAEgBAIIAAArg");
	this.shape_22.setTransform(-56.6,40.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfA0IAAhlIAMAAIAAALQABgEADgDIAIgFQAEgBAFAAQAJAAAHAFQAHAGAEAJQADAJAAAJQAAAKgDAIQgEAJgHAGQgIAGgKAAQgFAAgFgDQgEgCgFgGIAAAlgAgLgkQgFAFgCAGQgBAIAAAIQAAAGABAEQACAEADAEQAGAGAHAAQAGAAAEgEQAFgEACgGQACgGAAgJIgBgMIgEgIQgFgGgJAAQgHAAgEAEg");
	this.shape_23.setTransform(-63.225,41.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQADAHAEAEQAFAFAHAAQAIAAAEgFQAFgEADgHIABgMIgBgMQgDgHgFgEQgEgEgIAAQgLAAgEAIg");
	this.shape_24.setTransform(-75.05,40.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_25.setTransform(-81.025,39.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_26.setTransform(73.625,20.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgPAkQgGgEgEgGQgIgKAAgOIABgIIACgJQADgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAFABAEAEQAFAEADAEQAFAMABAQIg1AAQgBALAGAHQAGAFAJAAQAFABAEgDQAFgCADgEQACgDAAgDIAMAAQAAAEgEAGQgDAGgGAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFAAAFIAnAAIAAAAg");
	this.shape_27.setTransform(66,21.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIAlIgFgCIgFgDQgGgEgDgIQgEgIABgLIAAgGIACgKQABgEACgEQAFgHAHgEQAIgEAHAAQAHAAAHACQAFADAFAFQAFAHABAKIgNAAQgBgIgEgEQgFgEgIAAQgIAAgFAIQgFAIgBANQAAAHACAFQACAFADADQAFAGAHAAQAHAAAFgFQAGgFAAgIIANAAQgCAJgEAGQgEAHgGADQgHAEgIAAQgEAAgFgCg");
	this.shape_28.setTransform(58.65,21.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_29.setTransform(51.175,21.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPAkQgGgEgEgGQgIgKAAgOIABgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAGAAAEACQAFABAFAEQAEAEADAEQAFAMAAAQIg1AAQAAALAGAHQAGAFAJAAQAFABAFgDQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBAAIgEACQgEABgHAAQgIAAgHgDgAAVgFQgBgEgBgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFgBAFIApAAIAAAAg");
	this.shape_30.setTransform(43.4,21.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAAAABQABAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_31.setTransform(37.425,20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_32.setTransform(31.675,21.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgGgKgBgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAFACQAGABADAEQAFAEACAEQAHAMAAAQIg1AAQgBALAGAHQAFAFAKAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_33.setTransform(23.9,21.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_34.setTransform(16.475,21.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAkQgHgEgFgGQgGgKAAgOIAAgIIADgJQACgHAFgGQAFgFAGgCQAGgDAGAAQAFAAAGACQAEABAFAEQAEAEACAEQAHAMAAAQIg2AAQABALAFAHQAGAFAJAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgDAFQgDAFAAAFIApAAIAAAAg");
	this.shape_35.setTransform(5.2,21.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_36.setTransform(-2.225,21.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgPAkQgGgEgEgGQgIgKAAgOIABgIIACgJQADgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAFABAEAEQAFAEADAEQAFAMABAQIg1AAQgBALAGAHQAGAFAJAAQAFABAEgDQAFgCADgEQACgDAAgDIAMAAQAAAEgEAGQgDAGgGAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFAAAFIAnAAIAAAAg");
	this.shape_37.setTransform(-9.6,21.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGAlIgbhIIAOAAIATA6IAVg6IANAAIgcBIg");
	this.shape_38.setTransform(-17,21.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAEgEADgHIABgMIgBgMQgDgHgEgEQgFgEgIAAQgLAAgEAIg");
	this.shape_39.setTransform(-24.4,21.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_40.setTransform(-32.225,21.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgGgKgBgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAFACQAGABADAEQAFAEACAEQAHAMAAAQIg1AAQgBALAGAHQAFAFAKAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_41.setTransform(-40,21.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTAxQgKgEgGgHQgFgIgDgJQgCgLAAgKQAAgNAFgLQAFgNALgHQALgIAOAAQAKAAAJADQAKAEAGAHQAHAIABALIgNAAQgDgMgIgEQgJgFgKAAQgGAAgGACQgFAEgGAEQgEAGgCAIQgDAHAAAJQAAATAIALQAEAFAGAEIAHACIAHABQAMAAAJgHQAHgFACgHQADgGAAgJIggAAIAAgLIAsAAIAAA1IgJAAIgDgNQgDAFgFADQgGAEgGACQgHACgGAAQgMAAgIgEg");
	this.shape_42.setTransform(-49.55,20.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGACAGQACAHAEAEQAFAFAHAAQAIAAAEgFQAGgEABgHIACgMIgCgMQgBgHgGgEQgEgEgIAAQgKAAgGAIg");
	this.shape_43.setTransform(-62.6,21.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgCAuQgEgEAAgFIAAg0IgKAAIAAgNIAKAAIAAgUIALAAIAAAUIAMAAIAAANIgMAAIAAAuQAAADACACQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAGAAIAAALIgJAAQgHABgDgDg");
	this.shape_44.setTransform(-68.575,20.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_45.setTransform(-71.975,20.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGAyIglhjIAPAAIAcBUIAchUIAQAAIglBjg");
	this.shape_46.setTransform(-78.175,20.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_47.setTransform(-4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-55.5,200,120);


(lib.text_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape.setTransform(24.025,-6.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApIgRgDIgKgFQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgDIABgDIADgCIADABIAIACQAGADAKABQAKABANAAQAVAAAKgEQALgDAAgIQgBgFgFgEQgFgDgKgCQgJgBgNAAQgPAAgKACIgQADIgIgDIgCgBIAAgCIAAgmIABgCIADgBIBcAAIADABIACACIAAAEIgCADIgDAAIhUAAIAAAbQAIgDAKgBQAJgCAMAAQAKAAAKACQAKABAIADQAIADAFAFQAEAFAAAHQAAAOgOAHQgOAFgbAAQgOABgLgCg");
	this.shape_1.setTransform(11.475,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNADQgNACgPAAQgKAAgKgBQgJgBgHgEQgHgCgEgFQgEgEAAgHQAAgJAHgFQAHgHAMgDQAMgDASAAQASAAANAEQANAEAHAJQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgcQgKACgEADQgEAEAAADQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUgBQgOABgJACg");
	this.shape_2.setTransform(-1.075,-6.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(-10.875,-6.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(-19.375,-1.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqAlQgPgGAAgNQABgIAFgFQAGgFAKgCQgIgCgEgFQgEgEAAgGQAAgMANgFQANgGAZAAQAaAAANAGQANAFAAAMQAAAGgEAEQgEAFgJACQALACAGAFQAFAFABAIQAAANgPAGQgOAGgdAAQgbAAgPgGgAgYAFQgKACgFADQgFADAAAFQAAAEAFADQAFADAKACQAJABAPAAQAPAAAKgBQALgCAEgDQAFgDgBgEQABgFgFgDQgEgDgLgCQgKgCgPAAQgPAAgJACgAgWgeQgJACgEACQgEADAAAEQAAAEAEADQAEADAJABQAJACANAAQAOAAAJgCQAJgBAEgDQAEgDAAgEQAAgEgEgDQgEgCgJgCQgJgBgOAAQgNAAgJABg");
	this.shape_5.setTransform(-27.1,-6.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwAqIgEgBIgBgCIAAgFIABgDIADgDIA8gZIAJgEIAKgEIAHgGQACgDAAgDQAAgEgFgDQgFgEgIgBQgJgCgLABQgLgBgKACIgPADIgJADIgDABQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgBgDIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAKgFIARgDQALgBAMAAQAQAAALACQAMADAGAFQAHAGAAAIQAAAGgDAFQgDAEgGACIgLAGIgMAGIgvAUIBQAAIADAAIABADIAAAEIgBACIgDABg");
	this.shape_6.setTransform(-39.425,-6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAqIgDgBIABgDIANgTIgBgCIgBgBIgmg2IgBgCIADgBIAHAAIACABIACABIAhAuIAAABIABgBIAhguIACgBIACgBIAIAAIACABIgBACIgmA2IgBABIAAAAIgPAXIgBABIgCABg");
	this.shape_7.setTransform(-54.15,-4.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAfQgHAAgGgCQgGgBgEgFQgDgDAAgIQAAgHADgEQAEgDAGgCQAGgBAHAAIAjAAIABAAIABgBIAAgCQAAgGgHgDQgGgDgLAAIgSACIgMACIgCAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQABgCADAAIAKgDIASgCQAKAAAHACQAHADAEACQAEADACAFIABAIIAAAYIABAEIADAAIACAAIACABIABACIAAACQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgEgBIgBAAQgFABgDgDQgDgDgBgFQgCAFgFACQgFACgGABIgLABgAgWAEIgGACQgCADAAADQAAAGAFACQAEABAHAAIAFAAIAQgBQAHAAADgCQAEgCABgFIAAgHIgBAAIgBgBIgiAAIgIABg");
	this.shape_8.setTransform(-63.775,-5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA2AqIgDgBIgBgDIAAg9IAAgBIgBAAIgsAqIgCACIgDAAIgCAAIgCgCIgsgqIAAAAIgBABIAAA9IgBADIgDABIgEAAIgDgBIgCgDIAAhLIACgDIADgBIAEAAIAEAAIADACIAuAuIAAAAIAAAAIAvguIADgCIAEAAIAEAAIADABIABADIAABLIgBADIgDABg");
	this.shape_9.setTransform(-75.7,-6.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAxIgDgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIATgcIgrg9QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAUAAIACABIACACIAdAqIAAABIABgBIAegqIABgCIADgBIATAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADIguA/IAAABIgBABIgSAaIgCABIgCABg");
	this.shape_10.setTransform(51.4883,-33.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAFgIAMgEQALgEARgBQASABAMAEQALAEAFAIQAFAHAAAKIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgGAAIhCAAQAEAHAHACQAIACAKAAIAPgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIACAEQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgHAEgKACQgJADgOAAQgbAAgMgKgAAcgFQgCgGgGgDQgHgCgNAAQgMAAgGACQgGADgCAGIA2AAIAAAAg");
	this.shape_11.setTransform(39.75,-35.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAcAxIgDgBIgDgBIgggfIgQAJIAAAVIAAACIgDABIgRAAIgCgBIgBgCIAAhaIABgDIACgBIARAAIADABIAAADIAAAvIAogWIADgCIADAAIAYAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAgBAAIgmAVIApAnQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_12.setTransform(28.5542,-36.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcAkIgCgBIgBgCIAAghQAAgJgGgDQgGgFgNABQgNgBgFAFQgHADAAAJIAAAhIAAACIgDABIgQAAIgDgBIgBgCIAAg/IABgDIADgBIAQAAIADABIAAADIAAAJIABABIABAAQADgHAHgEQAIgEAPAAQAOAAAJAEQAJAEAEAIQADAIAAALIAAAhIgBACIgCABg");
	this.shape_13.setTransform(17.05,-35.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_14.setTransform(5.5271,-35.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA9AxQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgDIAAg5IgBgBIgBABIgwAwIgDACIgEAAIgDAAIgCgCIgxgwIgBgBIAAABIAAA5QAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgQAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAQAAIAEAAIAEADIA0A2IAAAAIABAAIA0g2IAEgDIAEAAIAQAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABADIAABXIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_15.setTransform(-9.45,-36.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAFgIALgEQAMgEARgBQASABAMAEQALAEAFAIQAFAHAAAKIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABAAAAIgHAAIhCAAQAEAHAHACQAIACAKAAIAPgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIACAEIAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgHAEgKACQgJADgOAAQgbAAgMgKgAAcgFQgCgGgGgDQgGgCgOAAQgMAAgGACQgGADgCAGIA2AAIAAAAg");
	this.shape_16.setTransform(-28.55,-35.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAgQgKgEgGgIQgFgIAAgMQAAgKAFgJQAGgIAKgEQALgEARgBQAPABAKADQALADAHAFQAAABAAAAQAAAAABAAQAAABAAAAQAAAAgBABIgBACIgFAGIgEADIgEgBIgJgDIgJgCIgIAAQgJAAgGABQgGACgEAEQgDADAAAGQAAAHADAEQAEADAGACQAGABAJAAIAIAAIAJgCIAJgDIAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIAFAGIABADIAAACQgHAGgLADQgKADgPAAQgRAAgLgFg");
	this.shape_17.setTransform(-39.3917,-35.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQAlQgKgBgIgCQgIgDgEgEQgEgGAAgHQAAgIAEgFQAEgEAIgCQAIgCAKAAIAgAAIABAAIAAgBQAAgFgGgCQgGgCgMAAIgOABIgKABIgHABIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIABgEQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQADgBAIgCQAIgCAOABQAOAAALABQAKADAGAGQAFAFAAAKIAAAYQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIACABIABACIAAAEQAAAEgEACQgDAEgHAAIgCAAQgHAAgFgEQgEgDgBgHQgCAFgDACQgDADgEACIgHACIgGABgAgVAJIgFABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABIAFABIAGAAIAHAAIAOAAQAFgBADgBQADgCAAgEIAAAAIAAgBIgBgBIgfAAIgGABg");
	this.shape_18.setTransform(-50.075,-35.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgvAxIgDAAIgBgDIAAhZIABgEIADAAIAQAAIADAAIABAEIAAADQADgEAHgCQAIgCANgBQASABALAEQALAEAEAIQAEAIAAAMQAAAMgEAIQgEAHgLAFQgLAEgSAAQgNAAgHgCQgIgDgDgEIAAAfIgBADIgDAAgAgSgbQgGABgDADQgCAEAAAHQAAAHACAFQADACAGABIARABIAQgBQAHgBADgCQADgFAAgHQAAgHgDgEQgDgDgHgBQgGgCgKAAQgKAAgHACg");
	this.shape_19.setTransform(-61.6,-34);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAEAzIgCAAQgUAAgOgCQgNgCgJgCQgHgDgEgCQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgEIAFgJQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAIAEAAIAMADIAUACIAZABIACAAIAWgBIAMgDQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgCgGgCIgNgCIgXgCQgWgCgQgDQgOgEgIgFQgHgGAAgKQAAgMAHgHQAIgHANgDQAOgDAUABIADAAQASAAANACQANACAHACIALAFQABAAAAABQABAAAAABQAAAAABABQAAAAAAABIgCAFIgFAKQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBIgKgDIgRgDQgLgCgMAAIgDAAIgTABIgMACIgFACIgBACQAAACAEACIAPACIAYADIAXACQAMACAKADQAJADAGAEQAHAGgBAKQAAALgIAHQgJAHgOADQgNADgPAAIgFAAg");
	this.shape_20.setTransform(-75.25,-36.6004);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_21.setTransform(-43.475,61.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgGgKgBgOIABgIIADgJQACgHAFgGQAFgFAHgDQAFgCAGAAQAFAAAFABQAGACADAEQAFAEACAFQAHALAAAQIg1AAQAAALAFAHQAFAFAKAAQAFAAAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgDACgIAAQgIAAgHgEgAAUgEQAAgFgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgCAFAAAGIAnAAIAAAAg");
	this.shape_22.setTransform(-49.35,58.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAlIgGgCIgFgDQgGgEgDgIQgDgIgBgLIABgGIACgKQABgEADgEQAEgHAHgEQAHgEAJAAQAGAAAGACQAHADAEAFQAEAHABAKIgLAAQgCgIgFgEQgEgEgHAAQgKAAgEAIQgGAIAAANQABAHACAFQABAFACADQAGAGAHAAQAHAAAFgFQAGgFABgIIALAAQgBAJgEAGQgEAHgGADQgHAEgIAAQgEAAgEgCg");
	this.shape_23.setTransform(-56.7,58.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_24.setTransform(-64.125,58.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfA0IAAhlIAMAAIAAALQABgEADgDIAIgFQAEgBAFAAQAJAAAHAFQAHAGAEAJQADAJAAAJQAAAKgDAIQgEAJgHAGQgIAGgKAAQgFAAgFgDQgEgCgFgGIAAAlgAgLgkQgFAFgCAGQgBAIAAAIQAAAGABAEQACAEADAEQAGAGAHAAQAGAAAEgEQAFgEACgGQACgGAAgJIgBgMIgEgIQgFgGgJAAQgHAAgEAEg");
	this.shape_25.setTransform(-71.825,60.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_26.setTransform(-79.375,58.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGABAGQADAHAEAEQAFAFAHAAQAIAAAFgFQAEgEACgHIACgMIgCgMQgCgHgEgEQgFgEgIAAQgKAAgGAIg");
	this.shape_27.setTransform(45.6,40.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgCAtQgEgCAAgHIAAgzIgKAAIAAgMIAKAAIAAgUIALAAIAAAUIAMAAIAAAMIgMAAIAAAuQAAADACABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAGgBIAAAMIgJABQgHgBgDgDg");
	this.shape_28.setTransform(39.625,39.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAyIAAgLIAHABIAGgBIADgDIAFgNIgbhKIANAAIATA7IAUg7IAOAAIgLAcIgGARIgCAHIgCAFIgGAOIgHASQgCAGgCADQgEADgCABIgKABIgGgCg");
	this.shape_29.setTransform(30.4,41.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_30.setTransform(25.325,38.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAzIAAg+IgKAAIAAgKIAKAAIAAgLQAAgGABgDQABgDADgCQACgEAIAAIAIAAIAAAMIgEAAQgEAAgCABQgCACAAAEIAAAKIAMAAIAAAKIgMAAIAAA+g");
	this.shape_31.setTransform(21.825,38.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAyIAAgLIAHABIAGgBIADgDIAFgNIgbhKIANAAIATA7IAUg7IANAAIgKAcIgGARIgDAHIgBAFIgGAOIgHASQgCAGgCADQgDADgEABIgKABIgFgCg");
	this.shape_32.setTransform(12.5,41.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgPAkQgGgDgFgGQgGgKgBgOIABgIIADgJQACgJAFgFQAFgEAHgDQAFgEAGAAQAFAAAFACQAGACADAEQAFAEACAEQAHAMAAAPIg1AAQAAAMAFAGQAFAHAKAAQAFgBAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAABIgFABQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgHgKABQgFAAgEADQgFADgDAFQgCAGAAAEIAnAAIAAAAg");
	this.shape_33.setTransform(5.1,40.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAPAyIgWglIgKAKIAAAbIgMAAIAAhjIAMAAIAAA5IAegeIAQAAIgcAaIAdAug");
	this.shape_34.setTransform(-1.85,38.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_35.setTransform(-9.725,40.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAhQgIgGgDgJQgEgJAAgJQAAgJAEgJQADgJAIgFQAIgGAKAAQALAAAHAGQAJAFADAJQAEAJAAAJQAAAJgEAJQgDAJgJAGQgHAGgLAAQgKAAgIgGgAgQgTQgEAJAAAKQAAAGACAGQACAHAEAEQAFAFAHAAQAIAAAEgFQAGgEABgHIACgMIgCgMQgBgHgGgEQgEgEgIAAQgKAAgGAIg");
	this.shape_36.setTransform(-17.5,40.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAlAlIAAguQAAgRgNAAQgFAAgEADQgEADgDAEQgCAFAAAFIAAArIgLAAIAAgxQAAgGgDgEQgDgEgGAAQgEAAgFACQgEACgDAGQgDAGAAAJIAAAmIgMAAIAAhIIALAAIAAAKQAJgMAOABQAIAAAEADQADADADAFQAGgHAEgCQAFgDAHABQAFAAAFABQAGACADAGQAFAFAAAKIAAAxg");
	this.shape_37.setTransform(-27.2,40.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_38.setTransform(-38.525,38.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgPAkQgGgDgFgGQgGgKgBgOIABgIIADgJQACgJAFgFQAFgEAHgDQAFgEAGAAQAFAAAFACQAGACADAEQAFAEACAEQAHAMAAAPIg1AAQAAAMAFAGQAFAHAKAAQAFgBAEgCQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAABIgFABQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgHgKABQgFAAgEADQgFADgDAFQgCAGAAAEIAnAAIAAAAg");
	this.shape_39.setTransform(-43.95,40.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAGgDAJAAIAAAMQgKABgHAFQgFAEgBAIIAAArg");
	this.shape_40.setTransform(-49.65,40.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAFgEQAEgDAKAAIAAAMQgLABgGAFQgGAEABAIIAAArg");
	this.shape_41.setTransform(-54.3,40.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_42.setTransform(-58.725,38.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXAhQgFgHAAgJIAAg2IAMAAIAAA0QAAAGADAEQAEADAFAAIADAAQAHgBAFgGQAGgGAAgJIAAgrIAMAAIAABIIgMAAIAAgHQgFAFgHADQgGADgHAAQgJgBgGgFg");
	this.shape_43.setTransform(-64.125,40.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAUA0IAAgkQgGAKgOgBQgLAAgGgGQgIgGgDgJQgDgIAAgLQAAgKAEgJQADgHAHgFQAHgFAKAAQAHAAAFAEQAEADAEAFIAAgKIAMAAIAABlgAgPggQgDAIAAAMQAAAMAEAHQAGAHAJABQAGAAAHgHQAGgFAAgMQAAgggTABQgMgBgEAJg");
	this.shape_44.setTransform(-72.15,41.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_45.setTransform(-79.375,40.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_46.setTransform(69.125,21.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_47.setTransform(57.225,20.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_48.setTransform(49.575,21.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_49.setTransform(41.825,21.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgHgKAAgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAGABADAEQAFAEACAEQAGAMABAQIg1AAQgBALAGAHQAFAFAKAAQAFABAEgDQAFgCADgEQACgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFAAAFIAnAAIAAAAg");
	this.shape_50.setTransform(30.1,21.65);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgXAgQgFgFAAgKIAAg3IAMAAIAAA1QAAAGADAEQAEADAFABIADAAQAHgCAFgGQAGgGAAgJIAAgsIAMAAIAABKIgMAAIAAgIQgFAFgHADQgGACgHAAQgJABgGgHg");
	this.shape_51.setTransform(22.325,21.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAUA0IAAglQgFAKgPAAQgKABgIgHQgHgGgDgKQgDgIAAgKQAAgKADgIQAEgIAHgGQAHgEAJAAQAIAAAFADQAFADADAGIABgKIALAAIAABlgAgOggQgFAIAAALQAAANAGAGQAFAJAIgBQAIAAAGgFQAHgGAAgMQAAgfgVgBQgKABgEAIg");
	this.shape_52.setTransform(14.3,23.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_53.setTransform(6.725,21.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgIAlIgFgCIgFgDQgGgEgDgIQgEgIABgLIAAgGIACgKQABgEACgEQAFgHAHgEQAIgEAIAAQAHAAAFACQAGADAFAFQAFAHABAKIgNAAQgBgIgEgEQgFgEgIAAQgIAAgFAIQgFAIgBANQAAAHACAFQACAFADADQAFAGAHAAQAHAAAFgFQAGgFAAgIIANAAQgCAJgEAGQgEAHgGADQgGAEgJAAQgEAAgFgCg");
	this.shape_54.setTransform(-0.65,21.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_55.setTransform(-8.075,21.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAlAmIAAgvQAAgRgOAAQgEAAgFADQgDADgCAFQgDAEAAAFIAAAsIgMAAIAAgyQAAgGgCgEQgCgEgHAAQgEAAgEADQgFACgDAFQgDAGAAAIIAAAoIgNAAIAAhIIAMAAIAAAKQAJgNANAAQAKAAADAEQADADADAFQAFgGAFgDQAEgDAJAAQAEAAAGADQAEABAFAGQADAFAAAKIAAAyg");
	this.shape_56.setTransform(-17.8,21.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_57.setTransform(-31.075,21.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgXAgQgFgFAAgKIAAg3IAMAAIAAA1QAAAGADAEQAEADAFABIADAAQAHgCAFgGQAGgGAAgJIAAgsIAMAAIAABKIgMAAIAAgIQgFAFgHADQgGACgHAAQgJABgGgHg");
	this.shape_58.setTransform(-38.425,21.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_59.setTransform(-45.875,21.725);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgPAkQgGgEgEgGQgIgKAAgOIABgIIACgJQADgHAFgGQAFgFAHgCQAFgDAGAAQAGAAAEACQAFABAEAEQAFAEADAEQAFAMABAQIg1AAQgBALAGAHQAGAFAJAAQAFABAEgDQAFgCADgEQACgDAAgDIAMAAQAAAEgEAGQgDAGgGAEIgDACIAAAAIgFACQgEABgHAAQgIAAgHgDgAAUgFQABgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgCAFQgDAFAAAFIAnAAIAAAAg");
	this.shape_60.setTransform(-53.25,21.65);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_61.setTransform(-61.075,20.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAEgDQAGgEAJAAIAAAOQgKAAgHAEQgFAFgBAJIAAArg");
	this.shape_62.setTransform(-66.75,21.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAeAyIgKgdIgnAAIgLAdIgOAAIAmhjIAPAAIAkBjgAAPAJIgPgsIgPAsIAeAAg");
	this.shape_63.setTransform(-78.175,20.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CCCCCC").s().p("AsfK8QjIAAAAjIIAAvnQAAjIDIAAIY/AAQDIAAAADIIAAPnQAADIjIAAg");
	this.shape_64.setTransform(-3,10.4743,1,0.9996);

	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-59.5,200,140);


(lib.text_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIACgCIADgBIADAAIAHADIAMADIAQABQAOAAALgEQALgDAGgIQAHgHAAgKQgJAEgNACQgNADgPAAQgKAAgKgCQgJgBgHgCQgHgEgEgDQgEgFAAgHQAAgJAHgFQAHgGAMgEQAMgDASAAQASAAANAEQANAFAHAIQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgdQgKADgEADQgEADAAAEQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUAAQgOAAgJABg");
	this.shape.setTransform(67.275,-12.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApIgRgEIgKgDQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgDIABgDIADgCIADABIAIADQAGABAKABQAKACANAAQAVAAAKgEQALgEAAgGQgBgGgFgDQgFgEgKgCQgJgCgNABQgPAAgKABIgQAEIgIgDIgCgBIAAgCIAAglIABgEIADgBIBcAAIADABIACAEIAAADIgCACIgDABIhUAAIAAAaQAIgCAKgBQAJgBAMAAQAKAAAKABQAKABAIADQAIADAFAEQAEAGAAAIQAAANgOAHQgOAFgbABQgOAAgLgCg");
	this.shape_1.setTransform(54.725,-12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAqIgOgEIgJgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIACgCIADgBIADAAIAHADIAMADIAQABQAOAAALgEQALgDAGgIQAHgHAAgKQgJAEgNACQgNADgPAAQgKAAgKgCQgJgBgHgCQgHgEgEgDQgEgFAAgHQAAgJAHgFQAHgGAMgEQAMgDASAAQASAAANAEQANAFAHAIQAHAJABAOQgBAOgHAKQgIALgOAEQgOAGgTAAQgMAAgIgBgAgZgdQgKADgEADQgEADAAAEQAAAHAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgGQgLgEgUAAQgOAAgJABg");
	this.shape_2.setTransform(42.175,-12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg1IgQAAIgDgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIABgDIACgBIAJgBIAFgDIADgCIADgCIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(32.375,-12.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(23.875,-7.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqAlQgOgGAAgNQgBgIAGgFQAFgFALgCQgIgCgEgFQgEgEAAgGQAAgMANgFQANgGAZAAQAaAAANAGQANAFAAAMQAAAGgEAEQgEAFgIACQALACAFAFQAGAFgBAIQAAANgOAGQgOAGgdAAQgcAAgOgGgAgZAFQgKACgEADQgEADgBAFQABAEAEADQAFADAJACQALABAOAAQAQAAAKgBQAKgCAEgDQAEgDABgEQgBgFgEgDQgEgDgKgCQgKgCgQAAQgOAAgLACgAgWgeQgJACgEACQgEADAAAEQAAAEAEADQAEADAJABQAJACANAAQAOAAAJgCQAJgBAEgDQAEgDAAgEQAAgEgEgDQgEgCgJgCQgJgBgOAAQgNAAgJABg");
	this.shape_5.setTransform(16.15,-12.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg1IgQAAIgDgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIABgDIACgBIAJgBIAFgDIADgCIADgCIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_6.setTransform(6.425,-12.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAfIgBgBIgBgCIAAg2IABgCIABgBIAHAAIACABIAAACIAAAGIABACQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAEgEAGgEQAIgDALAAIALABIAIACQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABIABACIAAADIgBADIgDgBIgIgDIgNgBQgIAAgGACQgHADgEAEQgEAFAAAGIAAAcIAAACIgCABg");
	this.shape_7.setTransform(-4.6,-11.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAbQgJgDgEgHQgFgHABgKQgBgJAFgHQAEgHAJgEQAJgDAOAAQAPAAAIADQAJAEAEAGQAEAHAAAJQAAACgCABQgCACgEAAIg8AAQABAGAEAEQAEAEAGABQAHACAIAAQAIAAAHgCQAGAAAFgDIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMAAQgOgBgKgEgAAdgEQAAgJgHgEQgHgDgOAAQgNAAgHADQgHAEgBAJIA4AAIAAAAg");
	this.shape_8.setTransform(-13.1525,-11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAnQgHgCgEgHIAAAIIAAACIgDABIgGAAIgCgBIgBgCIAAhNIABgCIACgBIAGAAIADABIAAACIAAAfQAEgFAHgDQAIgDAMAAQAPAAAJADQAJAEADAHQAEAGAAAKQAAAKgEAHQgDAHgJADQgJAEgPABQgMgBgIgDgAgPgHQgHACgDAFQgDADAAAIQAAAHADAFQADAFAHACQAHACAJAAQAKAAAGgCQAHgCADgFQADgFAAgHQAAgIgDgDQgDgFgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_9.setTransform(-22.3722,-12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA1AfIgBgBIgBgCIAAgcQAAgKgGgFQgGgEgLgBQgMABgFAEQgFAFAAAKIAAAcIAAACIgDABIgFAAIgCgBIgBgCIAAgcQABgKgGgFQgFgEgMgBQgMABgGAEQgEAFgBAKIAAAcIAAACIgDABIgGAAIgCgBIgBgCIAAg2IABgCIACgBIAGAAIADABIAAACIAAAFIABABIACAAQACgFAHgDQAGgCAJAAQAKAAAHADQAGADACAGIABABIABgBQADgFAIgEQAGgDAMAAQAQAAAGAIQAIAHgBAPIAAAcIAAACIgCABg");
	this.shape_10.setTransform(-34.15,-11.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAbQgJgDgEgHQgFgHABgKQgBgJAFgHQAEgHAJgEQAJgDAOAAQAPAAAIADQAJAEAEAGQAEAHAAAJQAAACgCABQgCACgEAAIg8AAQABAGAEAEQAEAEAGABQAHACAIAAQAIAAAHgCQAGAAAFgDIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACACIAAACIgBACQgFAEgIACQgIADgMAAQgOgBgKgEgAAdgEQAAgJgHgEQgHgDgOAAQgNAAgHADQgHAEgBAJIA4AAIAAAAg");
	this.shape_11.setTransform(-45.6025,-11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAeIgCAAIgDgCIgng2IAAgCIADgBIAHAAIACAAIACACIAhAuIAAAAIABAAIAhguIACgCIACAAIAIAAIACABIAAACIgnA2IgDACIgDAAg");
	this.shape_12.setTransform(-55.25,-11.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAbQgJgDgEgHQgFgHABgKQgBgJAFgHQAEgHAJgEQAJgDAOAAQAPAAAJADQAJAEAEAHQAFAHAAAJQAAAKgFAHQgEAHgJADQgJAEgPABQgOgBgJgEgAgPgSQgHACgDAFQgEAEAAAHQAAAIAEAEQADAFAHACQAGACAJAAQAKAAAHgCQAGgCAEgFQADgEAAgIQAAgHgDgEQgEgFgGgCQgHgCgKAAQgJAAgGACg");
	this.shape_13.setTransform(-64.9525,-11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAxAqIgEAAIgDgCIhUhBIgBAAIgBABIAAA+IgBADIgDABIgEAAIgDgBIgBgDIAAhLIABgDIADgBIAEAAIAEABIADABIBUBAIABABIABgBIAAg+IABgDIADgBIAEAAIADABIABADIAABLIgBADIgDABg");
	this.shape_14.setTransform(-76.225,-12.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAkIgDgBIgBgCIAAg/IABgDIADgBIAQAAIADABIABADIAAAGIABACQABAAAAAAQAAAAABgBQAAAAABAAQAAgBAAAAIAGgFQAEgDAEgCQAGgBAIAAQAJAAAFABIAGADQADABABACIABAGIAAAFQAAAEgCABIgGAAIgGgCIgHgCIgJgBQgIAAgFACQgGACgEADQgEAEAAAGIAAAhIgBACIgDABg");
	this.shape_15.setTransform(-7.575,-35.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAgQgJgEgDgIQgEgIAAgLIAAggIABgDIACgBIARAAIADABIABADIAAAgQAAAJAGAEQAGADAMAAQANAAAGgDQAGgEAAgKIAAgfIABgDIADgBIARAAIACABIABADIAAA/IgBACIgCABIgRAAIgDgBIgBgCIAAgJIAAgBIgBAAQgDAGgIAEQgIAEgOAAQgPAAgIgEg");
	this.shape_16.setTransform(-18.225,-35.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAyAxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgBgDIAAgcIAAgBIgBgBIhWAAIgBABIgBABIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgQAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAQAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAhIABABIABABIBWAAIABgBIAAgBIAAghIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAQAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAABXQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_17.setTransform(-32.025,-36.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAcAkIgCgBIgBgCIAAghQAAgJgGgDQgGgFgNABQgNgBgFAFQgHADAAAJIAAAhIAAACIgDABIgQAAIgDgBIgBgCIAAg/IABgDIADgBIAQAAIADABIAAADIAAAJIABABIABAAQADgHAHgEQAIgEAPAAQAOAAAJAEQAJAEADAIQAEAIAAALIAAAhIgBACIgDABg");
	this.shape_18.setTransform(-50,-35.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AglAbQgNgKAAgRQAAgKAFgJQAFgIALgEQAMgEARgBQASABAMAEQALAEAFAIQAFAHAAAKIAAAFQgBABAAAAQAAABgBAAQAAABgBAAQAAABAAAAIgHAAIhCAAQAEAHAHACQAIACAKAAIAPgBIAQgEIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIACAEIAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgHAEgKACQgJADgOAAQgbAAgMgKgAAcgFQgCgGgGgDQgGgCgOAAQgMAAgGACQgGADgCAGIA2AAIAAAAg");
	this.shape_19.setTransform(-61.4,-35.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhAAxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIBVAAQAMAAAIADQAIACAEAEQAFAEABAEQACAEAAAEQAAAIgEAFQgDAEgHADQAMADAFAFQAGAGAAAKQAAAIgEAHQgEAGgKAEQgKADgQAAgAgrAKIAAAOIAAABIABAAIBDAAQAIABAGgDQAFgBAAgFQAAgEgCgCQgDgCgEAAQgFgBgFABIhDAAIgBAAIAAABgAgrgXIAAANIAAABIABABIA8AAQAKAAAEgCQAEgCAAgEQAAgFgEgCQgEgBgKAAIg8AAIgBAAIAAABg");
	this.shape_20.setTransform(-74.775,-36.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAIIAAgOIAPAAIAAAOg");
	this.shape_21.setTransform(28.175,24.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_22.setTransform(22.125,20.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOAkQgHgEgEgGQgIgKABgOIAAgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAGAAAFACQAFABAEAEQAEAEADAEQAFAMAAAQIg1AAQAAALAGAHQAFAFAKAAQAFABAFgDQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgDAGgGAEIgEACIgBAAIgDACQgEABgIAAQgIAAgGgDgAAVgFQgBgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgCAFQgEAFAAAFIApAAIAAAAg");
	this.shape_23.setTransform(14.5,21.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_24.setTransform(7.075,21.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_25.setTransform(-0.275,21.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgOAkQgHgEgEgGQgIgKABgOIAAgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAGAAAFACQAEABAFAEQAEAEADAEQAFAMAAAQIg1AAQABALAFAHQAGAFAJAAQAFABAFgDQAEgCACgEQADgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQgBgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgCAFQgEAFAAAFIApAAIAAAAg");
	this.shape_26.setTransform(-8.1,21.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_27.setTransform(-13.575,20.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOAkQgHgEgFgGQgGgKAAgOIAAgIIACgJQADgHAFgGQAFgFAGgCQAGgDAGAAQAFAAAGACQAEABAFAEQAEAEACAEQAHAMgBAQIg1AAQABALAFAHQAGAFAJAAQAFABAFgDQAEgCACgEQADgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgDAFAAAFIApAAIAAAAg");
	this.shape_28.setTransform(-19,21.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAEgDQAGgEAJAAIAAAOQgLAAgGAEQgGAFAAAJIAAArg");
	this.shape_29.setTransform(-24.7,21.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRAmIAAhIIAMAAIAAAMQAEgIAEgDQAGgEAJAAIAAAOQgLAAgGAEQgGAFAAAJIAAArg");
	this.shape_30.setTransform(-33.25,21.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAgQgFgFAAgKIAAg3IAMAAIAAA1QAAAGADAEQAEADAFABIADAAQAHgCAFgGQAGgGAAgJIAAgsIAMAAIAABKIgMAAIAAgIQgFAFgHADQgGACgHAAQgJABgGgHg");
	this.shape_31.setTransform(-39.975,21.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAbAyIAAgvIg0AAIAAAvIgOAAIAAhjIAOAAIAAApIA0AAIAAgpIANAAIAABjg");
	this.shape_32.setTransform(-48.95,20.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_33.setTransform(-61.825,21.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgGgKgBgOIABgIIADgJQACgHAFgGQAFgFAHgCQAFgDAGAAQAFAAAFACQAGABADAEQAFAEACAEQAHAMAAAQIg1AAQAAALAFAHQAFAFAKAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIAAAAIgFACQgDABgIAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgFgGgKgBQgFABgEADQgFADgDAFQgCAFAAAFIAnAAIAAAAg");
	this.shape_34.setTransform(-69.6,21.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgmAzIAAhlIAtAAQAHAAAGAEQAHADADAGQAEAGAAAHQAAAFgCAEQgBAFgDACQgDAEgEACQAIACAFAFQAFAFAAAIQAAAKgEAIQgFAHgHADQgHAFgIAAgAgYAnIAfAAQAGAAAEgDQAEgCACgEQACgEAAgEQAAgJgFgFQgEgEgOgBIgaAAgAgYgHIAZAAQALABAEgFQAEgEAAgGQAAgIgEgFQgFgDgKAAIgZAAg");
	this.shape_35.setTransform(-77.975,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_36.setTransform(-8,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-67.5,200,120);


(lib.text_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApIgOgDIgJgEQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNACQgNADgPAAQgKAAgKgBQgJgCgHgDQgHgCgEgFQgEgEAAgHQAAgIAHgHQAHgFAMgEQAMgDASAAQASAAANAEQANAFAHAIQAHAJABAOQgBAOgHAKQgIAKgOAGQgOAFgTAAQgMAAgIgCgAgZgdQgKADgEADQgEAEAAAEQAAAGAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgFQgLgGgUAAQgOAAgJACg");
	this.shape.setTransform(53.375,-10.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApIgRgEIgKgEQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgEIABgCIADgCIADABIAIACQAGACAKACQAKABANAAQAVAAAKgEQALgDAAgIQgBgFgFgEQgFgDgKgCQgJgCgNAAQgPAAgKADIgQADIgIgDIgCgBIAAgCIAAgmIABgCIADgBIBcAAIADABIACACIAAADIgCAEIgDABIhUAAIAAAaQAIgDAKgBQAJgBAMgBQAKABAKABQAKABAIADQAIADAFAFQAEAFAAAHQAAAOgOAGQgOAHgbgBQgOAAgLgBg");
	this.shape_1.setTransform(40.825,-10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZApIgOgDIgJgEQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIACgCIADgBIADABIAHACIAMACIAQACQAOAAALgEQALgEAGgGQAHgIAAgKQgJAEgNACQgNADgPAAQgKAAgKgBQgJgCgHgDQgHgCgEgFQgEgEAAgHQAAgIAHgHQAHgFAMgEQAMgDASAAQASAAANAEQANAFAHAIQAHAJABAOQgBAOgHAKQgIAKgOAGQgOAFgTAAQgMAAgIgCgAgZgdQgKADgEADQgEAEAAAEQAAAGAJAEQAKAEAVAAIATgBIAQgDIAMgEQgDgLgMgFQgLgGgUAAQgOAAgJACg");
	this.shape_2.setTransform(28.275,-10.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAqIgEgBIgBgDIAAgDIABgDIAEgBIATAAIAAg2IgQAAIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgDIACgBIAJgBIAFgDIADgDIADgBIAEAAIADABIABADIAABEIAPAAIAEABIABADIAAADIgBADIgEABg");
	this.shape_3.setTransform(18.475,-10.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAMIAAgIIAAgCIgBgBIgCgBIgCAAIAAgCIAAgIIAAgCIADgBIAFAAIADABIAAACIAAARIAAADIgEADIgCABIAAgCg");
	this.shape_4.setTransform(9.975,-5.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZApIgRgEIgKgEQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIABgEIACgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAIADAAIAIACIAQAEIAWABQAPAAAJgCQAJgBAFgEQAFgDgBgFQAAgDgDgDQgFgCgGgCIgPgCIgSgBIgEgBIgBgDIAAgDIABgDIADgCIAlgVIhNAAIgDgBIAAgEIAAgDIAAgCIADgBIBcAAIADABIABACIAAAFQAAADgDACIgoAWQAKAAAIACQAJABAHACQAGACAEAFQAFAFAAAGQAAAIgHAHQgGAFgNADQgNACgRAAQgPAAgKgBg");
	this.shape_5.setTransform(2.25,-10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAqIgDgBIABgDIANgUIgBgBIgBgBIgmg2IgBgCIADgBIAHAAIACABIACABIAhAuIAAABIABgBIAhguIACgBIACgBIAHAAIADABIgBACIgmA2IgBABIAAAAIgPAXIgBACIgCAAg");
	this.shape_6.setTransform(-12.65,-7.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAfIgCgBIgBgCIAAg2IABgCIACgBIAGAAIADABIAAACIAAAHIACABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQADgGAIgCQAGgEALAAIAMABIAHADQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAIACAEIAAADIgCABIgDAAIgJgCIgLgBQgJAAgHACQgGACgDAEQgEAEgBAHIAAAcIAAACIgDABg");
	this.shape_7.setTransform(-21.75,-9.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAfQgHAAgGgBQgGgCgEgFQgDgEAAgGQAAgIADgEQAEgDAGgCQAGgBAHAAIAjAAIABAAIABgBIAAgDQAAgFgHgDQgGgDgLAAIgSABIgMADIgCAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQABgBADgCIAKgCIASgCQAKAAAHACQAHADAEADQAEACACAFIABAHIAAAZIABAEIADABIACAAIACAAIABACIAAACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCABgEABIgBAAQgFgBgDgCQgDgDgBgEQgCAEgFACQgFACgGACIgLAAgAgWAEIgGACQgCACAAAEQAAAGAFACQAEABAHAAIAFAAIAQAAQAHgBADgDQAEgCABgDIAAgIIgBAAIgBAAIgiAAIgIAAg");
	this.shape_8.setTransform(-30.325,-9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAbQgIgDgEgHQgDgHAAgKIAAgbIABgCIACgBIAGAAIACABIABACIAAAbQAAAMAHAEQAGAFAPgBQAOABAIgFQAHgEAAgMIAAgbIABgCIACgBIAGAAIACABIABACIAAA2IgBACIgCABIgGAAIgCgBIgBgCIAAgIIAAgBIgBABQgEAFgIADQgIAEgMAAQgNAAgIgEg");
	this.shape_9.setTransform(-39.925,-8.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAfIgBgBIgBgCIAAg2IABgCIABgBIAHAAIACABIAAACIAAAHIABABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAEgGAGgCQAIgEALAAIALABIAIADQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAAAIABAEIAAADIgBABIgDAAIgIgCIgNgBQgIAAgGACQgHACgEAEQgEAEAAAHIAAAcIAAACIgCABg");
	this.shape_10.setTransform(-48.7,-9.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAoQgHgEgEgFIAAAIIAAACIgDABIgGAAIgCgBIgBgCIAAhNIABgDIACAAIAGAAIADAAIAAADIAAAeQAEgFAHgEQAIgDAMAAQAPAAAJAEQAJAEADAHQAEAGAAAKQAAAKgEAHQgDAHgJAEQgJADgPAAQgMAAgIgCgAgPgHQgHACgDAEQgDAEAAAIQAAAIADAFQADAEAHACQAHACAJAAQAKAAAGgCQAHgCADgEQADgFAAgIQAAgIgDgEQgDgEgHgCQgGgCgKAAQgJAAgHACg");
	this.shape_11.setTransform(-57.4222,-10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAcQgJgEgEgHQgFgHABgKQgBgJAFgHQAEgHAJgEQAJgEAOAAQAPAAAIAEQAJAEAEAHQAEAGAAAIQAAADgCACQgCABgEAAIg8AAQABAGAEAEQAEAEAGACQAHABAIAAQAIAAAHgBQAGgBAFgDIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIACADIAAACIgBACQgFAEgIACQgIACgMAAQgOAAgKgDgAAdgEQAAgJgHgDQgHgEgOAAQgNAAgHAEQgHAEgBAIIA4AAIAAAAg");
	this.shape_12.setTransform(-66.8025,-9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxAqIgDgBIgBgDIAAhLIABgDIADgBIBjAAIADABIABADIAAAEIgBADIgDABIhZAAIgBAAIgBABIAAAYIABAAIABABIBTAAIADABIABACIAAADIgBADIgDACIhTAAIgBAAIgBABIAAAdIgBADIgDABg");
	this.shape_13.setTransform(-77.35,-10.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAxIgDgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIATgcIgrg9QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAUAAIACABIACACIAdAqIAAABIABgBIAegqIABgCIADgBIATAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADIguA/IAAABIgBABIgSAaIgCABIgCABg");
	this.shape_14.setTransform(26.2883,-33.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAxIgDgBIgBgCIAAhaIABgDIADgBIAPAAIADABIABADIAABaIgBACIgDABg");
	this.shape_15.setTransform(18.175,-36.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAxIgDgBIgBgCIAAhaIABgDIADgBIAPAAIADABIABADIAABaIgBACIgDABg");
	this.shape_16.setTransform(14.125,-36.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAgQgLgEgGgIQgFgIAAgMQAAgKAFgJQAGgIALgEQAMgEARgBQATABALAEQAMAEAFAIQAFAJAAAKQAAAMgFAIQgGAIgLAEQgLAFgTAAQgRAAgMgFgAAWAOQAGgEAAgKQAAgIgGgEQgHgEgPAAQgOAAgGAEQgHAEAAAIQAAAKAHAEQAGAEAOgBQAPABAHgEg");
	this.shape_17.setTransform(6.3271,-35.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAyAxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgBgDIAAgcIAAgBIgBgBIhWAAIgBABIgBABIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgQAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAQAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAhIABABIABABIBWAAIABgBIAAgBIAAghIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAQAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAABXQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_18.setTransform(-7.525,-36.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAxIgDgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIATgcIgrg9QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAUAAIACABIACACIAdAqIAAABIABgBIAegqIABgCIADgBIATAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADIguA/IAAABIgBABIgSAaIgCABIgCABg");
	this.shape_19.setTransform(-25.9617,-33.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggAtQgKgEgFgIQgEgJAAgLQAAgMAEgHQAFgIAKgFQALgEASAAQAMAAAIACQAIACADAFIAAgfIABgDIADAAIARAAIADAAIAAADIAABaIAAADIgDABIgRAAIgDgBIgBgDIAAgEQgDAEgIADQgHACgNAAQgSAAgLgFgAgOgCQgGABgEADQgDADAAAIQAAAHADAEQAEAEAGABIAQABIAQgBQAHgBACgEQADgEABgHQgBgIgDgDQgCgDgHgBQgGgCgKABQgKgBgGACg");
	this.shape_20.setTransform(-38.1,-36.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggAtQgKgEgFgIQgEgJAAgLQAAgMAEgHQAFgIAKgFQALgEASAAQANAAAHACQAIACADAFIAAgfIABgDIADAAIAQAAIAEAAIAAADIAABaIAAADIgEABIgQAAIgDgBIgBgDIAAgEQgDAEgIADQgIACgMAAQgSAAgLgFgAgOgCQgGABgEADQgDADAAAIQAAAHADAEQAEAEAGABIAQABIAQgBQAHgBACgEQADgEAAgHQAAgIgDgDQgCgDgHgBQgGgCgKABQgKgBgGACg");
	this.shape_21.setTransform(-49.9,-36.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggAgQgJgEgDgIQgEgIAAgLIAAggIABgDIACgBIARAAIADABIABADIAAAgQAAAJAGAEQAGADAMAAQANAAAGgDQAGgEAAgKIAAgfIABgDIADgBIARAAIACABIABADIAAA/IgBACIgCABIgRAAIgDgBIgBgCIAAgJIAAgBIgBAAQgDAGgIAEQgIAEgOAAQgPAAgIgEg");
	this.shape_22.setTransform(-61.375,-35.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhAAxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhXQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIBVAAQAMAAAIADQAIACAEAEQAFAEABAEQACAEAAAEQAAAIgEAFQgDAEgHADQAMADAFAFQAGAGAAAKQAAAIgEAHQgEAGgKAEQgKADgQAAgAgrAKIAAAOIAAABIABAAIBDAAQAIABAGgDQAFgBAAgFQAAgEgCgCQgDgCgEAAQgFgBgFABIhDAAIgBAAIAAABgAgrgXIAAANIAAABIABABIA8AAQAKAAAEgCQAEgCAAgEQAAgFgEgCQgEgBgKAAIg8AAIgBAAIAAABg");
	this.shape_23.setTransform(-74.775,-36.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_24.setTransform(-8.425,43.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASAyIAAgwQAAgHgEgEQgDgEgIAAQgIAAgFAGQgGAGAAALIAAAoIgNAAIAAhjIANAAIAAAlIAGgHIAFgEIAJgBQAHAAAGACQAFACAEAGQAEAGAAAJIAAAxg");
	this.shape_25.setTransform(-14.325,38.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_26.setTransform(-21.725,40.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_27.setTransform(-29.075,40.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRAlIAAhIIAMAAIAAAMQAEgGAEgEQAGgDAJAAIAAAMQgKABgHAFQgFAEgBAIIAAArg");
	this.shape_28.setTransform(-34.8,40.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHAlIgGgCIgFgDQgGgEgDgIQgEgIAAgLIABgGIACgKQABgEACgEQAEgHAIgEQAHgEAIAAQAIAAAGACQAGADAEAFQAFAHAAAKIgMAAQAAgIgGgEQgEgEgIAAQgJAAgEAIQgGAIABANQAAAHABAFQACAFACADQAGAGAHAAQAHAAAFgFQAFgFABgIIAMAAQgBAJgEAGQgEAHgGADQgGAEgJAAQgEAAgEgCg");
	this.shape_29.setTransform(-41.1,40.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPAkQgGgDgEgGQgIgKAAgOIABgIIACgJQADgJAFgFQAFgEAGgDQAGgEAGAAQAGAAAEACQAFACAEAEQAFAEADAEQAFAMAAAPIg1AAQAAAMAGAGQAGAHAJAAQAFgBAFgCQAEgCADgEQACgDAAgDIAMAAQAAAEgDAGQgEAGgFAEIgEACIgBABIgEABQgEABgHAAQgIAAgHgDgAAUgFQAAgEgBgEIgEgHQgEgHgLABQgFAAgEADQgFADgCAFQgDAGgBAEIAoAAIAAAAg");
	this.shape_30.setTransform(-52.45,40.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASAlIAAgsQAAgJgEgEQgDgGgIAAQgFAAgFADQgEADgDAFQgCAFAAAHIAAAoIgNAAIAAhIIAMAAIAAALIAEgEIAHgGQAFgDAGABQAIgBAFADQAGADADAGQADAGAAAIIAAAwg");
	this.shape_31.setTransform(-60.275,40.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_32.setTransform(-68.025,40.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_33.setTransform(-73.525,38.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgfA0IAAhlIAMAAIAAALQABgEADgDIAIgFQAEgBAFAAQAJAAAHAFQAHAGAEAJQADAJAAAJQAAAKgDAIQgEAJgHAGQgIAGgKAAQgFAAgFgDQgEgCgFgGIAAAlgAgLgkQgFAFgCAGQgBAIAAAIQAAAGABAEQACAEADAEQAGAGAHAAQAGAAAEgEQAFgEACgGQACgGAAgJIgBgMIgEgIQgFgGgJAAQgHAAgEAEg");
	this.shape_34.setTransform(-78.825,41.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgWAkQgFgDgDgFQgEgFAAgFIABgCIAAgFIACgFQACgEAGgCQAFgEAKgBIAHgBIAEAAIADAAIAGgDQADgCAAgEQAAgNgQAAQgIAAgFAEQgEADAAAHIgMAAQAAgGAEgGQADgFAGgEQAHgDAJAAQAHAAAGACQAHACAEAEQAEAEAAAHIAAApIAAAEQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAFgBIAAAJQgCACgGAAQgMAAAAgLQgFAFgHADQgFAEgIAAQgHAAgFgDgAAIABIgMADQgIABgEAEQgEADAAAGQABALALAAQAEAAAGgDQAFgCAEgDQADgEAAgFIAAgMQgBAAgFABg");
	this.shape_35.setTransform(44.125,21.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASAmIAAgtQAAgJgEgFQgDgFgIAAQgFAAgFADQgEADgDAFQgCAGAAAFIAAAqIgNAAIAAhIIAMAAIAAAKIAEgFIAHgFQAFgDAGAAQAIAAAFADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_36.setTransform(32.375,21.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_37.setTransform(26.925,20.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAiQgHgEgCgFIAAgCIgBgDIgBgHIAMAAQAAAGAEAEQAEAFAKAAQAHAAAFgDQAFgDAAgGQAAgEgDgCIgMgEIgKgDIgJgDQgFgBgDgEQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgDAHAAQALAAAHAFQAGAEACAFQACAFAAAEIgMAAQAAgMgQAAIgGAAIgGADQgDADAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEACIAIADIAKACIAEABIABABIAGACQAFABADAEQADAEAAAGQAAAIgEAFQgDAFgHADQgGAEgJAAQgMAAgHgFg");
	this.shape_38.setTransform(17.975,21.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgOAkQgHgEgFgGQgGgKAAgOIAAgIIADgJQACgHAFgGQAFgFAGgCQAGgDAGAAQAFAAAGACQAEABAFAEQAEAEACAEQAHAMgBAQIg0AAQAAALAFAHQAGAFAJAAQAFABAEgDQAFgCACgEQADgDAAgDIANAAQgBAEgEAGQgCAGgHAEIgDACIgBAAIgDACQgFABgHAAQgIAAgGgDgAAVgFQAAgEgCgEIgEgHQgEgGgLgBQgFABgEADQgFADgDAFQgDAFABAFIAoAAIAAAAg");
	this.shape_39.setTransform(10.6,21.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_40.setTransform(5.125,20.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_41.setTransform(-0.475,20.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAzIAAgLIAGABIAFgBIAEgFIAFgLIgbhKIANAAIAUA6IATg6IANAAIgKAcIgGARIgDAFIgCAGIgFAOIgHATQgCAGgDACQgCADgEABIgKABIgEgBg");
	this.shape_42.setTransform(-11.6,23.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_43.setTransform(-16.675,20.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_44.setTransform(-19.775,20.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAhQgIgGgEgJQgDgJAAgJQAAgJADgJQAEgJAIgFQAIgGAKAAQALAAAIAGQAHAFAEAJQAEAJAAAJQAAAJgEAJQgEAJgHAGQgIAGgLAAQgKAAgIgGgAgPgTQgGAJAAAKQAAAGACAGQACAHAFAEQAFAFAHAAQAIAAAFgFQAFgEACgHIABgMIgBgMQgCgHgFgEQgFgEgIAAQgLAAgEAIg");
	this.shape_45.setTransform(-25.2,21.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAaAyIAAgvIgzAAIAAAvIgOAAIAAhjIAOAAIAAApIAzAAIAAgpIAOAAIAABjg");
	this.shape_46.setTransform(-34.15,20.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAzIAAgLIAHABIAEgBIAEgFIAEgLIgbhKIAOAAIAUA6IATg6IANAAIgKAcIgGARIgDAFIgCAGIgFAOIgHATQgCAGgDACQgCADgEABIgKABIgEgBg");
	this.shape_47.setTransform(-46.6,23.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_48.setTransform(-54.175,20.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAtQgHgGgDgKQgDgJAAgKQAAgKADgHQAEgIAHgGQAHgEAJAAQAIAAAFADQAEADAEAGIAAglIAMAAIAABjIgLAAIAAgKQgCAEgDACQgDADgEABIgFACIgEAAQgLABgHgHgAgPgGQgEAHAAALQAAANAFAHQAFAJAJgBQAHAAAHgFQAGgGAAgNQAAgegUgBQgLABgEAIg");
	this.shape_49.setTransform(-61.975,20.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXAgQgFgFAAgKIAAg3IAMAAIAAA1QAAAGADAEQAEADAFABIADAAQAHgCAFgGQAGgGAAgJIAAgsIAMAAIAABKIgMAAIAAgIQgFAFgHADQgGACgHAAQgJABgGgHg");
	this.shape_50.setTransform(-69.575,21.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgmAzIAAhlIAtAAQAHAAAGAEQAHADADAGQAEAGAAAHQAAAFgCAEQgBAFgDACQgDAEgEACQAIACAFAFQAFAFAAAIQAAAKgEAIQgFAHgHADQgHAFgIAAgAgYAnIAfAAQAGAAAEgDQAEgCACgEQACgEAAgEQAAgJgFgFQgEgEgOgBIgaAAgAgYgHIAZAAQALABAEgFQAEgEAAgGQAAgIgEgFQgFgDgKAAIgZAAg");
	this.shape_51.setTransform(-77.975,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCCCCC").s().p("AsfJYQjIAAAAjIIAAsfQAAjIDIAAIY/AAQDIAAAADIIAAMfQAADIjIAAg");
	this.shape_52.setTransform(-7.65,1.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.6,-58.6,200,120);


(lib.restart_btn_base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,100,50);


(lib.exit_btn_base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AnzD6IPnnzIAAHzg");
	this.shape.setTransform(-150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_1.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-25,200,50);


(lib.seqn_btn_base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AnzD6IPnnzIAAHzg");
	this.shape.setTransform(-150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AjYj5IGwD5ImwD6g");
	this.shape_1.setTransform(21.65,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_2.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-25,243.3,50);


(lib.direct_btn_base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Anzj5IPnAAIAAHzg");
	this.shape.setTransform(-150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AnzD6IAAnzIPnHzg");
	this.shape_1.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Av7D6IAAnzIf3AAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-25,400,50);


(lib.grp_hist_marker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AnQHeQjIqHAAkTQAAkUDDjDQDCjCETAAQETAADDDCQDDDDAAEUQAAETi9J3Qi/J4kTAQIgMAAQkLAAjDp4g");
	this.shape.setTransform(0.5,-108.9307);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-219.9,133,222);


(lib.world_turn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzUTVQoBoAAArVQAArUIBoBQIBoALTAAQLVAAIBIAQIAIBAALUQAALVoAIAQoBIBrVAAQrTAAoBoBg");
	mask.setTransform(-100,0);

	// World
	this.instance = new lib.world_join();
	this.instance.setTransform(-555.3,0,1.5555,1.5555,0,0,0,404.8,112.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:74.7},239,cjs.Ease.none).wait(1));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("AzUTVQoBoAAArVQAArUIBoBQIBoALTAAQLVAAIBIAQIAIBAALUQAALVoAIAQoBIBrVAAQrTAAoBoBg");
	this.shape.setTransform(-100,0);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	// space
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhLnAqlMAAAhVJMCXPAAAMAAABVJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-484,-272.5,968,545);


(lib.world_burn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzUTVQoBoAAArVQAArUIBoBQIBoALTAAQLVAAIBIAQIAIBAALUQAALVoAIAQoBIBrVAAQrTAAoBoBg");
	mask.setTransform(-100,0);

	// World
	this.instance = new lib.world_join();
	this.instance.setTransform(-555.3,0,1.5555,1.5555,0,0,0,404.8,112.5);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,153,51,51,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,814,229);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:74.7},239,cjs.Ease.none).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(240));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C86F").s().p("AzUTVQoBoAAArVQAArUIBoBQIBoALTAAQLVAAIBIAQIAIBAALUQAALVoAIAQoBIBrVAAQrTAAoBoBg");
	this.shape.setTransform(-100,0);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	// space
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002000").s().p("EhLnAqlMAAAhVJMCXPAAAMAAABVJg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-484,-272.5,968,545);


(lib.mc_bubble_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_14("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-59.5,250,120);


(lib.mc_bubble_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_13("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-57.5,200,120);


(lib.mc_bubble_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_12("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-58.5,200,120);


(lib.mc_bubble_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_11("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.1,-60.5,200,120);


(lib.mc_bubble_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_10("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,-59.5,200,120);


(lib.mc_bubble_09 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_09("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.1,-61.5,200,120);


(lib.mc_bubble_08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_08("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-55.5,200,120);


(lib.mc_bubble_07 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_07("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-57.5,200,120);


(lib.mc_bubble_06 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_06("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-55.5,200,120);


(lib.mc_bubble_05 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_05("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-60.5,200,100);


(lib.mc_bubble_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_04("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-55.5,200,120);


(lib.mc_bubble_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_03("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-59.5,200,140);


(lib.mc_bubble_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_02("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-67.5,200,120);


(lib.mc_bubble_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// text
	this.instance = new lib.text_01("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.6,-58.6,200,120);


(lib.restart_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah7CUQg1g1ABhLQgBhJA1g1QA1g0BKgBQA/ABAwAmIgGghIAuguIAUB1QACAHgCAHQgDAGgFAFIgXAXQgFAGgHADQgGABgIgBIh0gUIAugvIAUAEQgegRgkgBQg1AAgmAmQgmAmAAA0QAAA3AmAmQAmAmA1AAQA2AAAmgmIACgDIAjAjIAAAAQg1A1hKAAQhKAAg1g0g");
	this.shape.setTransform(-0.3308,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer_2
	this.instance = new lib.restart_btn_base("synched",0);
	this.instance.setTransform(44,-1);
	var instanceFilter_1 = new cjs.ColorFilter(0.4,0.4,0.4,1,122.4,27,28.8,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-102,-27,104,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0.2,0.2,0.2,1,163.2,36,38.4,0), 0).wait(1));

	// Layer_1
	this.instance_1 = new lib.restart_btn_base("synched",0);
	this.instance_1.setTransform(49,3.5);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-102,-27,104,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(2));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-102, y:-27, w:104, h:54});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-102, y:-27, w:104, h:54});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-26,105,54.5);


(lib.exit_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABECWIjJkrIBJAAIDIErgAiLCWIBbiHIAkA0Ig2BTgAANhNIAwhIIBIAAIhUB+g");
	this.shape.setTransform(-1.1,-0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer_2
	this.instance = new lib.exit_btn_base("synched",0);
	this.instance.setTransform(44,-1);
	var instanceFilter_1 = new cjs.ColorFilter(0.4,0.4,0.4,1,122.4,27,28.8,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-202,-27,204,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0.2,0.2,0.2,1,163.2,36,38.4,0), 0).wait(1));

	// Layer_1
	this.instance_1 = new lib.exit_btn_base("synched",0);
	this.instance_1.setTransform(49,3.5);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-202,-27,204,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(2));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-202, y:-27, w:204, h:54});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-202, y:-27, w:204, h:54});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-26,205,54.5);


(lib.enter_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgsA3QgTgHgJgOQgIgOAAgUQAAgTAIgOQAJgOASgHQASgIAcAAQAeAAASAIQARAIAIAMQAHANAAAQQAAAHgDADQgEADgIAAIh6AAQACANAIAHQAIAIANADQANADARAAQARAAANgDQAOgCAKgFQADgCACAAQADABABACIADAEIABAFQAAAAAAABQAAAAAAABQgBAAAAABQgBABAAAAQgKAIgQAEQgRAEgYABQgdAAgSgIgAA6gJQgBgRgNgIQgOgHgcAAQgbAAgOAHQgOAIgDARIByAAIAAAAg");
	this.shape.setTransform(136.325,2.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ABAA+QgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg4QABgWgOgJQgOgJgeAAQgdAAgPAJQgPAJAAAWIAAA4QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhtQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIALAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIAAAQIABACQABAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAHgKAQgHQAQgHAbAAQAaAAAPAHQAQAHAHANQAHAOAAAUIAAA4QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(117.725,2.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgFBVQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAhtQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIALAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAABtQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAgKg/QgDgCAAgEIAAgGQAAgEADgDQADgCAHAAQAIAAADACQADADAAAEIAAAGQAAAEgDACQgDADgIAAQgHAAgDgDg");
	this.shape_2.setTransform(105.425,0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgFBUQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAibQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIALAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAACbQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_3.setTransform(100.175,0.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgsA3QgTgHgJgOQgIgOAAgUQAAgTAIgOQAJgOASgHQASgIAcAAQAeAAASAIQARAIAIAMQAHANAAAQQAAAHgDADQgEADgIAAIh6AAQACANAIAHQAIAIANADQANADARAAQARAAANgDQAOgCAKgFQADgCACAAQADABABACIADAEIABAFQAAAAAAABQAAAAAAABQgBAAAAABQgBABAAAAQgKAIgQAEQgRAEgYABQgdAAgSgIgAA6gJQgBgRgNgIQgOgHgcAAQgbAAgOAHQgOAIgDARIByAAIAAAAg");
	this.shape_4.setTransform(88.475,2.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("ABrA+QgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg4QAAgWgMgJQgLgJgVAAQgYAAgLAJQgKAJAAAWIAAA4QAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg4QAAgWgKgJQgLgJgYAAQgXAAgLAJQgLAJAAAWIAAA4QAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAIgLAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhtQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIALAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABIAAAKQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBQAGgJAMgFQAMgFATAAQAVAAAMAGQANAGAFAMIACACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAIgMAOgGQAOgHAXAAQAfAAAOAPQAOAQAAAeIAAA4QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(65.6,2.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgFBVQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAhtQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIALAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAABtQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAgAgKg/QgDgCAAgEIAAgGQAAgEADgDQADgCAHAAQAIAAADACQADADAAAEIAAAGQAAAEgDACQgDADgIAAQgHAAgDgDg");
	this.shape_6.setTransform(49.025,0.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgHBOQgHgGgBgPIAAhHIAAgCIgBgBIgbAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAgJQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIAbAAIABgBIAAgCIAAgmQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAKAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAmIAAACIACABIAhAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAIAAAJQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIghAAIgCABIAAACIAABCQAAAGADADQADACAHABQAJgBAJgCQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAABIACAHQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgKACIgNACIgKAAQgMABgHgHg");
	this.shape_7.setTransform(40.45,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag8A+QAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAhtQAAgBABAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAMAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAANQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAHgKAOgGQAOgGAXAAQANAAAKACQAJACAFACQAFADACADQACAEgBADIAAAGQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAQgDABgDgBIgSgFQgJgCgPAAQgRAAgNAEQgNAEgIAJQgHAIAAAPIAAA4QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAg");
	this.shape_8.setTransform(19.405,2.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgsA3QgTgHgJgOQgIgOAAgUQAAgTAIgOQAJgOASgHQASgIAcAAQAeAAASAIQARAIAIAMQAHANAAAQQAAAHgDADQgEADgIAAIh6AAQACANAIAHQAIAIANADQANADARAAQARAAANgDQAOgCAKgFQADgCACAAQADABABACIADAEIABAFQAAAAAAABQAAAAAAABQgBAAAAABQgBABAAAAQgKAIgQAEQgRAEgYABQgdAAgSgIgAA6gJQgBgRgNgIQgOgHgcAAQgbAAgOAHQgOAIgDARIByAAIAAAAg");
	this.shape_9.setTransform(2.225,2.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgHBOQgHgGAAgPIAAhHIgBgCIgCgBIgaAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAgJQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIAaAAIACgBIABgCIAAgmQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAAmIABACIACABIAhAAQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAAAABQAAABABAAQAAABAAAAQAAABAAAAIAAAJQAAABAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIghAAIgCABIgBACIAABCQABAGADADQADACAIABQAIgBAJgCQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABIABAHQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgLACIgLACIgKAAQgNABgHgHg");
	this.shape_10.setTransform(-12.8,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("ABAA+QgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg4QABgWgOgJQgOgJgeAAQgdAAgPAJQgPAJAAAWIAAA4QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhtQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIALAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIAAAQIABACQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAHgKAQgHQAQgHAbAAQAaAAAPAHQAQAHAHANQAHAOAAAUIAAA4QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAg");
	this.shape_11.setTransform(-28.175,2.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgsA3QgTgHgJgOQgIgOAAgUQAAgTAIgOQAJgOASgHQASgIAcAAQAeAAASAIQARAIAIAMQAHANAAAQQAAAHgDADQgEADgIAAIh6AAQACANAIAHQAIAIANADQANADARAAQARAAANgDQAOgCAKgFQADgCACAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIADAEIABAFQAAAAAAABQAAAAAAABQgBAAAAABQgBABAAAAQgKAIgQAEQgRAEgYABQgdAAgSgIgAA6gJQgBgRgNgIQgOgHgcAAQgbAAgOAHQgOAIgDARIByAAIAAAAg");
	this.shape_12.setTransform(-46.925,2.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_2
	this.instance = new lib.direct_btn_base("synched",0);
	this.instance.setTransform(44,-1,1,1,0,180,0);
	var instanceFilter_1 = new cjs.ColorFilter(0.4,0.4,0.4,1,122.4,27,28.8,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0.2,0.2,0.2,1,163.2,36,38.4,0), 0).wait(1));

	// Layer_1
	this.instance_1 = new lib.direct_btn_base("synched",0);
	this.instance_1.setTransform(49,3.5,1,1,0,180,0);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(2));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-202, y:-27, w:404, h:54});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-202, y:-27, w:404, h:54});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-26,405,54.5);


(lib.seqn_btn_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AisAAIFZjHIAAGPg");
	this.shape.setTransform(-80.7,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer_2
	this.instance = new lib.seqn_btn_base("synched",0);
	this.instance.setTransform(-118,-6,1,1,180);
	var instanceFilter_1 = new cjs.ColorFilter(0.4,0.4,0.4,1,122.4,27,28.8,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-202,-27,247,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-117.7},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0.2,0.2,0.2,1,163.2,36,38.4,0), 0).wait(1));

	// Layer_1
	this.instance_1 = new lib.seqn_btn_base("synched",0);
	this.instance_1.setTransform(-113,-1,1,1,180);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-202,-27,247,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-112.7},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(2));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-202, y:-27, w:247, h:54});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-202, y:-27, w:247, h:54});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.3,-31,248.60000000000002,55);


(lib.seqn_btn_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AisjHIFZDHIlZDIg");
	this.shape.setTransform(3.3,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:0},0).wait(1));

	// Layer_2
	this.instance = new lib.seqn_btn_base("synched",0);
	this.instance.setTransform(44,-1);
	var instanceFilter_1 = new cjs.ColorFilter(0.4,0.4,0.4,1,122.4,27,28.8,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-202,-27,247,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0.2,0.2,0.2,1,163.2,36,38.4,0), 0).wait(1));

	// Layer_1
	this.instance_1 = new lib.seqn_btn_base("synched",0);
	this.instance_1.setTransform(49,3.5);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-202,-27,247,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(2));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-202, y:-27, w:247, h:54});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-202, y:-27, w:247, h:54});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-26,248.3,54.5);


(lib.direct_btn_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgCBXQgpAAgcgJQgcgIgPgUQgOgTAAgfQAAgeAOgTQAPgTAcgJQAcgJApAAIAFAAQApAAAcAJQAcAJAOATQAOATABAeQgBAfgOATQgOAUgcAIQgcAJgpAAgAg9g4QgWAHgKAOQgJAPAAAUQAAAVAJAPQAKAOAWAHQAWAIAlgBIAFAAQAkABAXgIQAVgHAKgOQAJgPAAgVQAAgUgJgPQgKgOgVgHQgXgIgkABIgFAAQglgBgWAIg");
	this.shape.setTransform(110,2.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag7BOQgbgJgOgRQgOgRAAgdQAAgcAPgVQAPgUAcgLQAdgLAmAAQAYAAASADQARADALAEQAKAFAGADQAEADABADQAAADgDADIgFAEQgCACgEAAIgHgBIgOgFIgXgFQgOgCgTAAQgcgBgWAIQgWAHgNAPQgNAOgBAUQASgHAagGQAagEAfAAQAWAAASACQATADAOAGQAOAFAHAJQAIAKAAANQAAASgNALQgOANgYAGQgZAGgjAAQglAAgagIgAgfAGQgSADgNADIgYAJQAGAWAWAKQAXALApAAQAcAAATgFQASgDAJgHQAJgIAAgIQAAgNgUgIQgUgIgpAAQgWAAgRACg");
	this.shape_1.setTransform(83.275,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgzBTQgSgDgKgFQgLgEgGgEQgEgCAAgDQgBgDAEgDIAEgEQACgCADgBIAIACIAOAFQAJADANACQAOADAUAAQAcgBAWgGQAWgIANgPQANgOABgUQgSAHgaAGQgaAFgfAAQgWAAgSgDQgTgDgOgFQgNgGgIgIQgIgKAAgOQAAgRANgMQAOgNAYgFQAZgHAjAAQAlAAAaAIQAbAJAOARQAOASAAAcQAAAdgPAUQgPAVgcAKQgdALgmAAQgYAAgRgDgAgFg+QgcAAgSAEQgTAEgJAHQgJAGAAAJQAAAOAUAHQAUAIApAAQAWABARgDQASgDANgDIAYgJQgFgVgXgLQgWgKgmAAIgEAAg");
	this.shape_2.setTransform(57.825,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AguBUQgEAAgCgCQgDgDAAgEIAAgFQAAgEADgCQACgDAEAAIAnAAIAAhrIgfAAQgFAAgCgCQgCgBAAgEIAAgGQAAgEABgCQACgBAEgBQAKAAAHgCQAGgCAEgEIAHgFQADgDAEAAIAHAAQAEAAACACQACACAAAEIAACIIAfAAQAEAAACADQADACAAAEIAAAFQAAAEgDADQgCACgEAAg");
	this.shape_3.setTransform(38.25,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgsA3QgTgHgJgOQgIgPAAgTQAAgTAIgOQAJgOASgIQASgHAcAAQAeABASAHQARAHAIANQAHANAAARQAAAGgDADQgEADgIAAIh6AAQACANAIAHQAIAIANADQANADARAAQARAAANgCQAOgDAKgFQADgCACAAQADAAABADIADAEIABAFQAAAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQgKAHgQAFQgRAEgYABQgdAAgSgIgAA6gKQgBgRgNgHQgOgHgcAAQgbAAgOAHQgOAIgDAQIByAAIAAAAg");
	this.shape_4.setTransform(15.125,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgHBOQgHgGAAgOIAAhIIgBgCIgBgBIgbAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgJQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIAbAAIABgBIABgBIAAgnQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIALAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAnIAAABIACABIAhAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAJQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIghAAIgCABIAAACIAABCQAAAGADADQADADAHgBQAJABAJgDQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAABABIABAHQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgLACIgMACIgJABQgNAAgHgHg");
	this.shape_5.setTransform(0.1,2.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgfA/QgPAAgLgEQgMgEgIgIQgGgIAAgPQAAgOAGgIQAIgHAMgDQALgDAPAAIBIAAIACgBIAAgBIAAgFQAAgMgMgFQgMgGgZAAQgUAAgOADIgYAFQgDABgDgCQgCgBAAgEIAAgFQgBgDADgDQADgCAGgCQAGgDAOgCQAOgDAVAAQAWAAAOAEQAOADAJAGQAHAHADAIQADAHAAAJIAAAyQABAEACACQACADADAAIAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIAAADQABAFgFADQgEADgHAAIgCAAQgLAAgGgFQgHgFAAgLQgGAJgJAFQgJAFgMACQgLACgNAAgAgtAIQgIABgDAEQgFAEAAAHQABALAIADQAJAEAOAAIALAAQASAAANgCQAOgBAIgEQAIgEAAgJIAAgNIAAgCIgCAAIhGAAIgQABg");
	this.shape_6.setTransform(-14.8,5.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgFBUQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAibQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIALAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAACbQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_7.setTransform(-26.975,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_2
	this.instance = new lib.direct_btn_base("synched",0);
	this.instance.setTransform(44,-1,1,1,0,180,0);
	var instanceFilter_1 = new cjs.ColorFilter(0.2,0.2,0.2,1,185.6,132,140,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,232,165,175,0), 0).wait(1));

	// Layer_1
	this.instance_1 = new lib.direct_btn_base("synched",0);
	this.instance_1.setTransform(49,3.5,1,1,0,180,0);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(2));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-202, y:-27, w:404, h:54});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-202, y:-27, w:404, h:54});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-26,405,54.5);


(lib.direct_btn_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgCBWQgqABgbgJQgdgJgOgTQgOgTAAgfQAAgeAOgTQAOgTAdgJQAbgJAqAAIAFAAQApAAAcAJQAcAJAPATQAOATAAAeQAAAfgOATQgPATgcAJQgcAJgpgBgAg9g5QgWAIgJAOQgKAPAAAUQAAAWAKAOQAJAOAWAHQAWAIAlAAIAFAAQAkAAAXgIQAVgHAKgOQAJgOAAgWQAAgUgJgPQgKgOgVgIQgXgGgkAAIgFAAQglAAgWAGg");
	this.shape.setTransform(123.7,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag7BOQgbgIgOgSQgOgRAAgdQAAgcAPgVQAPgVAcgKQAdgLAmAAQAYAAASADQARADALAFQAKADAGAFQAEACABADQAAADgDADIgFAEQgCACgEABIgHgCIgOgFIgXgFQgOgCgTgBQgcAAgWAIQgWAHgNAOQgNAPgBAUQASgIAagEQAagFAfgBQAWAAASADQATACAOAHQAOAFAHAJQAIAJAAAOQAAASgNALQgOAMgYAHQgZAGgjAAQglAAgagIgAgfAGQgSADgNAEIgYAIQAGAWAWAKQAXAKApAAQAcAAATgDQASgEAJgHQAJgIAAgIQAAgNgUgIQgUgIgpAAQgWAAgRACg");
	this.shape_1.setTransform(96.975,2.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgzBTQgSgDgKgEQgLgFgGgDQgEgCAAgEQgBgDAEgDIAEgEQACgCADAAIAIABIAOAFQAJADANACQAOACAUAAQAcAAAWgGQAWgIANgPQANgNABgVQgSAIgaAFQgaAFgfAAQgWAAgSgDQgTgCgOgGQgNgGgIgJQgIgJAAgNQAAgSANgNQAOgLAYgHQAZgGAjAAQAlAAAaAJQAbAHAOASQAOASAAAcQAAAcgPAVQgPAUgcAMQgdAKgmAAQgYAAgRgDgAgFg+QgcAAgSAEQgTAEgJAHQgJAHAAAJQAAAMAUAIQAUAIApABQAWgBARgCQASgCANgEIAYgJQgFgWgXgKQgWgKgmAAIgEAAg");
	this.shape_2.setTransform(71.525,2.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AguBUQgEAAgCgCQgCgCAAgEIAAgGQAAgDACgDQACgCAEgBIAnAAIAAhrIgfAAQgEAAgDgBQgCgCAAgEIAAgGQAAgDACgDQABgCAEAAQAKAAAGgDQAGgBAEgEIAIgGQADgCAEAAIAHAAQAEAAACACQADADAAAEIAACHIAeAAQAEABACACQACADABADIAAAGQgBAEgCACQgCACgEAAg");
	this.shape_3.setTransform(51.95,2.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AglBUQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgCACgDIAcgoIgCgCIgDgCIhMhsQgCgEABgCQAAAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAQAAIADABIAEADIBCBeIABABIABgBIBEheIACgDIAFgBIAPAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAACgBAEIhOBsIgBABIAAABIgfAtIgEADIgDABg");
	this.shape_4.setTransform(27.7,7.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgFBUQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAibQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIALAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAACbQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(14.875,2.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag8A+QAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAIAAhtQAAgBABAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAMAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAANQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAHgKAOgGQAOgGAXAAQANAAAKACQAJACAFACQAFADACADQACAEgBADIAAAGQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAQgDABgDgBIgSgFQgJgCgPAAQgRAAgNAEQgNAEgIAJQgHAIAAAPIAAA4QAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAg");
	this.shape_6.setTransform(4.255,5.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgfA/QgOAAgMgEQgNgEgGgIQgIgIABgPQgBgOAIgIQAGgHANgDQAMgDAOAAIBIAAIACgBIAAgBIAAgFQAAgMgMgFQgMgGgZAAQgUAAgOADIgYAFQgDABgDgCQgCgBgBgEIAAgFQABgDACgDQADgCAGgCQAGgDAOgCQAOgDAVAAQAWAAAOAEQAOADAIAGQAJAHACAIQADAHABAJIAAAyQAAAEACACQACADADAAIAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIAAADQAAAFgFADQgFADgGAAIgCAAQgLAAgGgFQgHgFAAgLQgGAJgJAFQgJAFgMACQgLACgNAAgAguAIQgHABgDAEQgFAEAAAHQABALAIADQAJAEAOAAIALAAQASAAANgCQAOgBAIgEQAIgEAAgJIAAgNIAAgCIgCAAIhGAAIgRABg");
	this.shape_7.setTransform(-12.9,5.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgsA4QgTgIgJgOQgIgOAAgUQAAgTAIgOQAJgOASgHQASgIAcAAQAeABASAHQARAIAIAMQAHAOAAAPQAAAHgDADQgEADgIAAIh6AAQACANAIAHQAIAIANADQANADARAAQARAAANgDQAOgCAKgFQADgCACAAQADABABACIADAFIABAEQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgKAHgQAFQgRAEgYABQgdAAgSgHgAA6gJQgBgSgNgHQgOgHgcAAQgbAAgOAHQgOAHgDASIByAAIAAAAg");
	this.shape_8.setTransform(-31.525,5.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_2
	this.instance = new lib.direct_btn_base("synched",0);
	this.instance.setTransform(44,-1,1,1,0,180,0);
	var instanceFilter_1 = new cjs.ColorFilter(0.2,0.2,0.2,1,136,176.8,120,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,170,221,150,0), 0).wait(1));

	// Layer_1
	this.instance_1 = new lib.direct_btn_base("synched",0);
	this.instance_1.setTransform(49,3.5,1,1,0,180,0);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(2));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-202, y:-27, w:404, h:54});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-202, y:-27, w:404, h:54});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-26,405,54.5);


(lib.direct_btn_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgzBTQgSgDgKgFQgLgEgGgEQgEgCAAgDQgBgDAEgDIAEgEQACgCADgBIAIACIAOAFQAJADANACQAOADAUAAQAcgBAWgGQAWgIANgPQANgOABgUQgSAHgaAGQgaAFgfAAQgWAAgSgDQgTgDgOgFQgNgGgIgIQgIgKAAgOQAAgRANgMQAOgNAYgFQAZgHAjAAQAlAAAaAIQAbAJAOARQAOASAAAcQAAAdgPAUQgPAVgcAKQgdALgmAAQgYAAgRgDgAgFg+QgcAAgSAEQgTAEgJAHQgJAGAAAJQAAAOAUAHQAUAIApAAQAWABARgDQASgDANgDIAYgJQgFgVgXgLQgWgKgmAAIgEAAg");
	this.shape.setTransform(107.975,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgyBSQgWgDgOgEQgOgFgFgDQgFgDAAgCQAAgDADgEIADgFQACgDACAAQADgBAEACIARAGQALADAUACQATAEAbAAQArgBAVgHQAVgJgBgNQAAgKgKgIQgLgHgTgEQgUgDgZAAQgfAAgTAEIgiAHIgPgGQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgBgEIAAhMQABgEABgCQADgCAEAAIC6AAQAEAAACACQACACAAAEIAAAGQAAAEgCACQgCACgEAAIiqAAIAAA0QAQgFAUgCQASgDAYAAQAVAAAUADQAUACAQAGQAQAHAJAIQAKALAAAQQgBAcgcAMQgdAMg1AAQgdAAgVgDg");
	this.shape_1.setTransform(82.9,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgzBTQgSgDgKgFQgLgEgGgEQgEgCAAgDQgBgDAEgDIAEgEQACgCADgBIAIACIAOAFQAJADANACQAOADAUAAQAcgBAWgGQAWgIANgPQANgOABgUQgSAHgaAGQgaAFgfAAQgWAAgSgDQgTgDgOgFQgNgGgIgIQgIgKAAgOQAAgRANgMQAOgNAYgFQAZgHAjAAQAlAAAaAIQAbAJAOARQAOASAAAcQAAAdgPAUQgPAVgcAKQgdALgmAAQgYAAgRgDgAgFg+QgcAAgSAEQgTAEgJAHQgJAGAAAJQAAAOAUAHQAUAIApAAQAWABARgDQASgDANgDIAYgJQgFgVgXgLQgWgKgmAAIgEAAg");
	this.shape_2.setTransform(57.825,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AguBUQgEAAgCgCQgDgDAAgEIAAgFQAAgEADgCQACgDAEAAIAnAAIAAhrIgfAAQgFAAgCgCQgCgBAAgEIAAgGQAAgEABgCQACgBAEgBQAKAAAHgCQAGgCAEgEIAHgFQADgDAEAAIAHAAQAEAAACACQACACAAAEIAACIIAfAAQAEAAACADQADACAAAEIAAAFQAAAEgDADQgCACgEAAg");
	this.shape_3.setTransform(38.25,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgsA3QgTgHgJgOQgIgPAAgTQAAgTAIgOQAJgOASgIQASgHAcAAQAeABASAHQARAHAIANQAHANAAARQAAAGgDADQgEADgIAAIh6AAQACANAIAHQAIAIANADQANADARAAQARAAANgCQAOgDAKgFQADgCACAAQADAAABADIADAEIABAFQAAAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQgKAHgQAFQgRAEgYABQgdAAgSgIgAA6gKQgBgRgNgHQgOgHgcAAQgbAAgOAHQgOAIgDAQIByAAIAAAAg");
	this.shape_4.setTransform(15.125,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgHBOQgHgGAAgOIAAhIIgBgCIgBgBIgbAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgJQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIAbAAIABgBIABgBIAAgnQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIALAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAnIAAABIACABIAhAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAJQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIghAAIgCABIAAACIAABCQAAAGADADQADADAHgBQAJABAJgDQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAABABIABAHQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgLACIgMACIgJABQgNAAgHgHg");
	this.shape_5.setTransform(0.1,2.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgfA/QgPAAgLgEQgMgEgIgIQgGgIAAgPQAAgOAGgIQAIgHAMgDQALgDAPAAIBIAAIACgBIAAgBIAAgFQAAgMgMgFQgMgGgZAAQgUAAgOADIgYAFQgDABgDgCQgCgBAAgEIAAgFQgBgDADgDQADgCAGgCQAGgDAOgCQAOgDAVAAQAWAAAOAEQAOADAJAGQAHAHADAIQADAHAAAJIAAAyQABAEACACQACADADAAIAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIAAADQABAFgFADQgEADgHAAIgCAAQgLAAgGgFQgHgFAAgLQgGAJgJAFQgJAFgMACQgLACgNAAgAgtAIQgIABgDAEQgFAEAAAHQABALAIADQAJAEAOAAIALAAQASAAANgCQAOgBAIgEQAIgEAAgJIAAgNIAAgCIgCAAIhGAAIgQABg");
	this.shape_6.setTransform(-14.8,5.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgFBUQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAibQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIALAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAACbQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_7.setTransform(-26.975,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_2
	this.instance = new lib.direct_btn_base("synched",0);
	this.instance.setTransform(44,-1,1,1,0,180,0);
	var instanceFilter_1 = new cjs.ColorFilter(0.2,0.2,0.2,1,191.2,185.6,138.4,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,239,232,173,0), 0).wait(1));

	// Layer_1
	this.instance_1 = new lib.direct_btn_base("synched",0);
	this.instance_1.setTransform(49,3.5,1,1,0,180,0);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(2));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-202, y:-27, w:404, h:54});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-202, y:-27, w:404, h:54});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-26,405,54.5);


(lib.direct_btn_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgzBTQgSgDgKgEQgLgFgGgDQgEgCAAgEQgBgDAEgDIAEgEQACgCADAAIAIABIAOAFQAJADANACQAOACAUAAQAcAAAWgGQAWgIANgPQANgNABgVQgSAIgaAFQgaAFgfAAQgWAAgSgDQgTgDgOgFQgNgGgIgJQgIgJAAgNQAAgSANgMQAOgMAYgGQAZgHAjAAQAlAAAaAJQAbAHAOASQAOASAAAcQAAAcgPAVQgPAUgcAMQgdAKgmAAQgYAAgRgDgAgFg+QgcAAgSAEQgTAEgJAHQgJAGAAAKQAAANAUAHQAUAIApABQAWgBARgCQASgCANgEIAYgJQgFgWgXgKQgWgKgmAAIgEAAg");
	this.shape.setTransform(119.275,0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgzBSQgVgDgOgEQgNgEgHgEQgDgCAAgEQgBgDADgDIADgFQACgDADAAQACgBAEACIARAFQALAEAUACQATADAbAAQArAAAVgHQAUgIAAgOQAAgKgLgIQgKgHgUgEQgSgDgaAAQgfAAgUAEIggAHIgQgGQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgEIAAhMQAAgDACgDQACgCAEAAIC5AAQAFAAACACQACADAAADIAAAGQAAAEgCACQgCACgFAAIiqAAIAAA0QARgFATgCQATgCAYgBQAVAAAUADQAUACAQAGQAPAGAKAJQAKALgBAQQAAAcgcAMQgcAMg2AAQgdAAgWgDg");
	this.shape_1.setTransform(94.2,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgzBTQgSgDgKgEQgLgFgGgDQgEgCAAgEQgBgDAEgDIAEgEQACgCADAAIAIABIAOAFQAJADANACQAOACAUAAQAcAAAWgGQAWgIANgPQANgNABgVQgSAIgaAFQgaAFgfAAQgWAAgSgDQgTgDgOgFQgNgGgIgJQgIgJAAgNQAAgSANgMQAOgMAYgGQAZgHAjAAQAlAAAaAJQAbAHAOASQAOASAAAcQAAAcgPAVQgPAUgcAMQgdAKgmAAQgYAAgRgDgAgFg+QgcAAgSAEQgTAEgJAHQgJAGAAAKQAAANAUAHQAUAIApABQAWgBARgCQASgCANgEIAYgJQgFgWgXgKQgWgKgmAAIgEAAg");
	this.shape_2.setTransform(69.125,0.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AguBUQgEAAgCgCQgDgCABgEIAAgGQgBgEADgCQACgCAEgBIAnAAIAAhrIgfAAQgEAAgDgCQgCgBAAgEIAAgGQAAgEACgCQABgCAEAAQAKAAAGgCQAHgDADgDIAIgGQADgCAEAAIAHAAQAEAAACACQACADABADIAACIIAeAAQAEABACACQADACgBAEIAAAGQABAEgDACQgCACgEAAg");
	this.shape_3.setTransform(49.55,0.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AglBUQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgCACgDIAcgoIgBgCIgCgCIhOhsQgBgEAAgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAPAAIAFABIACADIBDBeIABABIACgBIBCheIAEgDIADgBIAQAAQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABACgCAEIhMBsIgCABIgBABIgeAtIgEADIgEABg");
	this.shape_4.setTransform(25.3,4.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgFBUQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAibQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIALAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAACbQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_5.setTransform(12.475,0.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag8A+QAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAhtQAAgBABAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAMAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAANQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAHgKAOgGQAOgGAXAAQANAAAKACQAJACAFACQAFADACADQACAEgBADIAAAGQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAQgDABgDgBIgSgFQgJgCgPAAQgRAAgNAEQgNAEgIAJQgHAIAAAPIAAA4QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAg");
	this.shape_6.setTransform(1.855,2.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgfA/QgPAAgMgEQgMgEgGgIQgIgIAAgPQAAgOAIgIQAGgHAMgDQAMgDAPAAIBHAAIACgBIABgBIAAgFQAAgMgMgFQgMgGgYAAQgVAAgOADIgZAFQgDABgCgCQgCgBgBgEIAAgFQAAgDADgDQADgCAGgCQAHgDANgCQANgDAXAAQAVAAAOAEQAPADAHAGQAIAHAEAIQADAHAAAJIAAAyQAAAEABACQADADAEAAIADAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIAAADQgBAFgEADQgEADgHAAIgCAAQgLAAgHgFQgFgFgCgLQgEAJgKAFQgJAFgMACQgLACgNAAgAguAIQgHABgEAEQgDAEAAAHQAAALAJADQAIAEAOAAIALAAQASAAANgCQAOgBAIgEQAIgEAAgJIAAgNIgBgCIgCAAIhFAAIgRABg");
	this.shape_7.setTransform(-15.3,2.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgsA3QgTgHgJgOQgIgOAAgUQAAgTAIgOQAJgOASgHQASgIAcAAQAeAAASAIQARAIAIAMQAHANAAAQQAAAHgDADQgEADgIAAIh6AAQACANAIAHQAIAIANADQANADARAAQARAAANgDQAOgCAKgFQADgCACAAQADABABACIADAEIABAFQAAAAAAABQAAAAAAABQgBAAAAABQgBABAAAAQgKAIgQAEQgRAEgYABQgdAAgSgIgAA6gJQgBgRgNgIQgOgHgcAAQgbAAgOAHQgOAIgDARIByAAIAAAAg");
	this.shape_8.setTransform(-33.925,2.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_2
	this.instance = new lib.direct_btn_base("synched",0);
	this.instance.setTransform(44,-1,1,1,0,180,0);
	var instanceFilter_1 = new cjs.ColorFilter(0.2,0.2,0.2,1,124,175.2,154.4,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,155,219,193,0), 0).wait(1));

	// Layer_1
	this.instance_1 = new lib.direct_btn_base("synched",0);
	this.instance_1.setTransform(49,3.5,1,1,0,180,0);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-202,-27,404,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(2));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-202, y:-27, w:404, h:54});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-202, y:-27, w:404, h:54});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-26,405,54.5);


(lib.mc_hist_event = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// anim
	this.instance = new lib.grp_hist_marker("synched",0);
	this.instance.setTransform(0.6,0.25,0.0075,0.0045,0,0,0,46.6,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:55.5,scaleX:0.3759,scaleY:0.4506,x:17.75,y:25},9).wait(1));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhzB0QgwgwAAhEQAAhDAwgwQAwgwBDAAQBEAAAwAwQAwAwAABDQAABEgwAwQgwAwhEAAQhDAAgwgwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-99.1,50,115.5);


(lib.btn_historic_event = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgsA+AAQA/AAAsAsQAtAtAAA+QAAA/gtAtQgsAsg/ABQg+gBgtgsg");
	this.shape.setTransform(-0.75,0.3);

	this.instance = new lib.mc_hist_event();
	this.instance.setTransform(-1,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-16.3,32.8,32.8);


(lib.main_content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bubbles
	this.mc_bubble_03 = new lib.mc_bubble_03();
	this.mc_bubble_03.name = "mc_bubble_03";
	this.mc_bubble_03.setTransform(-80.65,60.3);

	this.mc_bubble_04 = new lib.mc_bubble_04();
	this.mc_bubble_04.name = "mc_bubble_04";
	this.mc_bubble_04.setTransform(43.45,60.3);

	this.mc_bubble_14 = new lib.mc_bubble_14();
	this.mc_bubble_14.name = "mc_bubble_14";
	this.mc_bubble_14.setTransform(2741.45,60.3);

	this.mc_bubble_13 = new lib.mc_bubble_13();
	this.mc_bubble_13.name = "mc_bubble_13";
	this.mc_bubble_13.setTransform(2526.95,60.3);

	this.mc_bubble_12 = new lib.mc_bubble_12();
	this.mc_bubble_12.name = "mc_bubble_12";
	this.mc_bubble_12.setTransform(2353.75,60.3);

	this.mc_bubble_11 = new lib.mc_bubble_11();
	this.mc_bubble_11.name = "mc_bubble_11";
	this.mc_bubble_11.setTransform(1907.1,60.3);

	this.mc_bubble_10 = new lib.mc_bubble_10();
	this.mc_bubble_10.name = "mc_bubble_10";
	this.mc_bubble_10.setTransform(1714.2,60.3);

	this.mc_bubble_09 = new lib.mc_bubble_09();
	this.mc_bubble_09.name = "mc_bubble_09";
	this.mc_bubble_09.setTransform(1434.75,60.3);

	this.mc_bubble_08 = new lib.mc_bubble_08();
	this.mc_bubble_08.name = "mc_bubble_08";
	this.mc_bubble_08.setTransform(1270.7,60.3);

	this.mc_bubble_07 = new lib.mc_bubble_07();
	this.mc_bubble_07.name = "mc_bubble_07";
	this.mc_bubble_07.setTransform(950.6,60.3);

	this.mc_bubble_06 = new lib.mc_bubble_06();
	this.mc_bubble_06.name = "mc_bubble_06";
	this.mc_bubble_06.setTransform(692.8,60.3);

	this.mc_bubble_05 = new lib.mc_bubble_05();
	this.mc_bubble_05.name = "mc_bubble_05";
	this.mc_bubble_05.setTransform(456.8,60.3);

	this.mc_bubble_02 = new lib.mc_bubble_02();
	this.mc_bubble_02.name = "mc_bubble_02";
	this.mc_bubble_02.setTransform(-362.1,60.3);

	this.mc_bubble_01 = new lib.mc_bubble_01();
	this.mc_bubble_01.name = "mc_bubble_01";
	this.mc_bubble_01.setTransform(-518.55,60.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_bubble_01},{t:this.mc_bubble_02},{t:this.mc_bubble_05},{t:this.mc_bubble_06},{t:this.mc_bubble_07},{t:this.mc_bubble_08},{t:this.mc_bubble_09},{t:this.mc_bubble_10},{t:this.mc_bubble_11},{t:this.mc_bubble_12},{t:this.mc_bubble_13},{t:this.mc_bubble_14},{t:this.mc_bubble_04},{t:this.mc_bubble_03}]}).wait(1));

	// markers
	this.marker_14 = new lib.btn_historic_event();
	this.marker_14.name = "marker_14";
	this.marker_14.setTransform(2746.1,174.7);
	new cjs.ButtonHelper(this.marker_14, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_13 = new lib.btn_historic_event();
	this.marker_13.name = "marker_13";
	this.marker_13.setTransform(2537.55,174.7);
	new cjs.ButtonHelper(this.marker_13, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_11 = new lib.btn_historic_event();
	this.marker_11.name = "marker_11";
	this.marker_11.setTransform(1912,174.7);
	new cjs.ButtonHelper(this.marker_11, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_12 = new lib.btn_historic_event();
	this.marker_12.name = "marker_12";
	this.marker_12.setTransform(2371.3,174.7);
	new cjs.ButtonHelper(this.marker_12, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_10 = new lib.btn_historic_event();
	this.marker_10.name = "marker_10";
	this.marker_10.setTransform(1739.55,174.7);
	new cjs.ButtonHelper(this.marker_10, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_08 = new lib.btn_historic_event();
	this.marker_08.name = "marker_08";
	this.marker_08.setTransform(1307.85,174.7);
	new cjs.ButtonHelper(this.marker_08, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_09 = new lib.btn_historic_event();
	this.marker_09.name = "marker_09";
	this.marker_09.setTransform(1442.4,174.7);
	new cjs.ButtonHelper(this.marker_09, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_07 = new lib.btn_historic_event();
	this.marker_07.name = "marker_07";
	this.marker_07.setTransform(944.55,174.7);
	new cjs.ButtonHelper(this.marker_07, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_05 = new lib.btn_historic_event();
	this.marker_05.name = "marker_05";
	this.marker_05.setTransform(479.3,174.7);
	new cjs.ButtonHelper(this.marker_05, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_06 = new lib.btn_historic_event();
	this.marker_06.name = "marker_06";
	this.marker_06.setTransform(728,174.7);
	new cjs.ButtonHelper(this.marker_06, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_04 = new lib.btn_historic_event();
	this.marker_04.name = "marker_04";
	this.marker_04.setTransform(45.1,174.7);
	new cjs.ButtonHelper(this.marker_04, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_02 = new lib.btn_historic_event();
	this.marker_02.name = "marker_02";
	this.marker_02.setTransform(-405.85,174.7);
	new cjs.ButtonHelper(this.marker_02, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_03 = new lib.btn_historic_event();
	this.marker_03.name = "marker_03";
	this.marker_03.setTransform(-64.65,174.7);
	new cjs.ButtonHelper(this.marker_03, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.marker_01 = new lib.btn_historic_event();
	this.marker_01.name = "marker_01";
	this.marker_01.setTransform(-578.3,174.7);
	new cjs.ButtonHelper(this.marker_01, 0, 1, 2, false, new lib.btn_historic_event(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.marker_01},{t:this.marker_03},{t:this.marker_02},{t:this.marker_04},{t:this.marker_06},{t:this.marker_05},{t:this.marker_07},{t:this.marker_09},{t:this.marker_08},{t:this.marker_10},{t:this.marker_12},{t:this.marker_11},{t:this.marker_13},{t:this.marker_14}]}).wait(1));

	// timebar1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EkDwAAyIAAhjMIHhAAAIAABjg");
	this.shape.setTransform(1085.5,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// timebar
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAAA6IAAhz");
	this.shape_1.setTransform(-823.3,205.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC2D30").s().p("EkufAD6IAAnzMJc/AAAIAAHzg");
	this.shape_2.setTransform(1112.7,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// text
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AicEQQgSgBgTgIQgTgIgOgQQgNgPgBgTQAAgIADgLQACgKAHgOIC+mCQAHgNANgMQAOgJAPgHQAQgGAOAAIBzAAQAUAAAUAKQATAKANAOQANAQAAASQAAAGgDALQgDAMgHAOIioFXQgLAWgSAVQgSAUgWAMQgXANgZABgABLjpQgKAHgHANIjJGdIgDAJIgBAHQAAAMAGAHQAGAGANAAIAaAAQANAAAKgHQAKgHAGgOIDJmdIACgIIABgHQAAgNgGgFQgGgHgNAAIgYAAQgNABgKAGg");
	this.shape_3.setTransform(2693.725,-110.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AidEQQgSgBgTgIQgTgIgOgQQgNgPgBgUQAAgHADgLQADgKAHgOIC9mCQAHgNANgMQAOgJAPgHQAQgGAOAAIB1AAQAUAAAUAKQATAKANAOQANAQAAASQAAAGgDALQgEAMgHAOIgVArIhnAAIAohTIADgIIABgHQAAgNgGgFQgGgHgNAAIgaAAQgNABgKAGQgKAHgHANIhUCuIAAADIAAACQAAAKAHAEQAHAFAKAAIAkAAQAUAAATAKQATAIAMAQQANAPABASQAAAHgEALQgDAKgGAOIgsBZQgLAWgSAVQgTAUgWAMQgXANgZABgAgPAPIgRACQgJABgJAEQgJAFgFAJIhQCkIgDAJIgBAHQAAAMAGAHQAGAGANAAIAcAAQANAAAKgHQAJgHAGgOIBMidIADgIIABgIQAAgPgKgFQgIgFgRAAIgDAAg");
	this.shape_4.setTransform(2657.025,-110.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AidEQQgSgBgTgIQgTgIgOgQQgNgPgBgUQAAgHADgLQADgKAHgOIAWgrIBmAAIgoBRIgDAJIgBAHQAAAMAGAHQAGAGANAAIAcAAQANAAAKgHQAKgHAHgOIBRipQACgFAAgDQgBgLgHgEQgHgFgKABIglAAQgVgBgTgKQgSgIgNgPQgMgQgCgSQAAgHAEgLQAEgKAGgOIBCiDQAGgNANgMQAOgJAQgHQAPgGAOAAIB2AAQAUAAATAKQAUAKAMAOQANAQABASQAAAGgEALQgCALgIAPIioFXQgLAWgSAVQgTAUgWAMQgXANgZABgABKjpQgLAHgGANIhLCcIgDAIIgBAIQAAANAHAGQAFAHAMAAIAbAAQANAAAKgHQAJgHAHgOIBNidIACgIIABgHQAAgNgGgFQgHgHgMAAIgbAAQgNABgJAGg");
	this.shape_5.setTransform(2620.2,-110.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ai0EQIDcnEIhuAAIAYg0QAcgCAVgFQAWgEAUgHQATgJAUgMIBhAAIkIIfg");
	this.shape_6.setTransform(2592.925,-110.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AinC2QgbgDgLgIQgKgHAAgIIAAgCIADgFIBpjZQAZg2A3gfQA0ghBXAAIAcAAQARAAARAHQASAGAMAMQALAMABAPIgBAEIgBAEIhMCdIi/AAIgrBaIgDAHIgBAIQAAAGAOAEQANADAbAAQAagBARgKQAPgJAJgKIAIgKIBAAAQgYAkgtAUQgsAWhIAAQgwAAgbgFgAApiGQgUAOgNAaIghBGIB5AAIAwhhQACgEAAgEQgCgHgFgFQgGgDgGgCIgJgCIggAAQgZAAgUAOg");
	this.shape_7.setTransform(2538.5625,-101.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah6EOQgTgGgNgOQgNgOgBgYQAAgLAEgOQAEgPAIgQIBrjcIg3AAIAOgbIA2AAIBai4IBmAAIhaC4IBjAAIgOAbIhjAAIiSEwIgBAEIgBACQAAADAFADQAFACAKAAIgLAVQgUABgTgGg");
	this.shape_8.setTransform(2513.575,-110.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiGC7QgSgBgSgGQgTgHgNgMQgMgMgBgPIABgDIABgEIBfjDQARgjAdgaQAegbAqgPQArgPA6AAQAwAAAZAEQAZAEAJAHQAIAHAAAIIgBADIgCAFIiRErIgCAEIAAACQAAAEAFACQAEACAKAAIgLAWQgUAAgTgGQgTgGgNgOQgMgNgBgZQAAgLAEgOQAEgOAHgRIAdg7Ih/CaQgMAPgLAFQgJAFgHAAIgCAAgAAGiWQgWAOgNAbIhwDjQgCAEAAAEQABAJAFAFQAFAFAGACIAIACQAJAAAIgIICrjPIAbg2IAKgXIACgHQAAgHgOgDQgOgDgbAAQgZAAgXANg");
	this.shape_9.setTransform(2476.5264,-101.2979);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ai3EQIEIofIBnAAIj5IAIBJAAIgPAfg");
	this.shape_10.setTransform(2448.325,-110.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AicEQQgSgBgTgIQgTgIgOgQQgNgPgBgTQAAgIADgLQACgKAHgOIC+mCQAHgNANgMQAOgJAPgHQAQgGAOAAIBzAAQAUAAAUAKQATAKANAOQANAQAAASQAAAGgDALQgDAMgHAOIioFXQgLAWgSAVQgSAUgWAMQgXANgZABgABLjpQgKAHgHANIjJGdIgDAJIgBAHQAAAMAGAHQAGAGANAAIAaAAQANAAAKgHQAKgHAGgOIDJmdIACgIIABgHQAAgNgGgFQgGgHgNAAIgYAAQgNABgKAGg");
	this.shape_11.setTransform(1749.075,-110.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AidEQQgSgBgTgIQgTgIgOgQQgNgPgBgUQAAgHADgLQADgKAHgOIC9mCQAHgNANgMQAOgJAPgHQAQgGAOAAIB1AAQAUAAAUAKQATAKANAOQANAQAAASQAAAGgDALQgEAMgHAOIgVArIhnAAIAohTIADgIIABgHQAAgNgGgFQgGgHgNAAIgaAAQgNABgKAGQgKAHgHANIhUCuIAAADIAAACQAAAKAHAEQAHAFAKAAIAkAAQAUAAATAKQATAIAMAQQANAPABASQAAAHgEALQgDAKgGAOIgsBZQgLAWgSAVQgTAUgWAMQgXANgZABgAgPAPIgRACQgJABgJAEQgJAFgFAJIhQCkIgDAJIgBAHQAAAMAGAHQAGAGANAAIAcAAQANAAAKgHQAJgHAGgOIBMidIADgIIABgIQAAgPgKgFQgIgFgRAAIgDAAg");
	this.shape_12.setTransform(1712.375,-110.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AidEQQgRgBgUgIQgTgIgOgQQgNgPgBgUQAAgHADgLQADgKAHgOIAWgrIBmAAIgoBRIgDAJIgBAHQAAAMAGAHQAGAGANAAIAcAAQANAAAKgHQAKgHAGgOIBRipQADgFAAgDQgBgLgHgEQgHgFgKABIglAAQgVgBgTgKQgSgIgNgPQgNgQgBgSQAAgHAEgLQADgKAIgOIBBiDQAGgNANgMQAOgJAQgHQAPgGAOAAIB2AAQAUAAATAKQATAKANAOQANAQABASQAAAGgEALQgCALgIAPIioFXQgLAWgSAVQgTAUgVAMQgYANgZABgABKjpQgLAHgGANIhMCcIgCAIIgBAIQAAANAHAGQAFAHAMAAIAbAAQANAAAJgHQALgHAGgOIBNidIACgIIABgHQAAgNgHgFQgFgHgNAAIgbAAQgMABgKAGg");
	this.shape_13.setTransform(1675.55,-110.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ai0EQIDcnEIhuAAIAYg0QAcgCAVgFQAWgEAUgHQATgJAUgMIBhAAIkIIfg");
	this.shape_14.setTransform(1648.275,-110.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjjEHQgSgTAAgfQAAgcARgWQASgWAdgQQAdgPAlgJQAlgIAoAAIAXgtQgIAIgNAJQgOAIgPAGQgPAFgOABIgUAAQgSgBgRgGQgSgHgLgMQgMgMAAgPIAAgEIABgEICWkxIBDAAIiRErQgCAEAAAEQABAIAFAFQAGAFAGACIAJACIAVAAQAZAAAXgRQAXgRANgZICDkOIBmAAIjYG6QgQAigdAbQgeAbgoARQgoAQguAAQglgBgTgSgAhvCKQgbAGgYAKQgXALgPAPQgPAOAAATQAAARAKAMQALAMAVABQAbAAAVgOQAWgPAMgaIAhhDQgaAAgbAFg");
	this.shape_15.setTransform(1592.625,-91.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ah1EOQgUgGgNgOQgMgOgBgYQAAgLADgOQAFgPAHgQIDSmvIBmAAIj6IDIgBAEIAAACQgBADAGADQAEACAKAAIgLAVQgUABgSgGg");
	this.shape_16.setTransform(1572.6,-110.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjeC4ICyloIBlAAIhBCJIBrh3QANgOAKgFQALgGAHABQAOAAAQAEQAPAEAMAHQAKAHAIAJQAHAKAAALIAAAEIgBADIggBDIhFAAIAcg6QACgEAAgEQAAgIgFgFQgGgFgFgCIgJgCQgFAAgDACQgEACgDAEIiaCrIhMCVg");
	this.shape_17.setTransform(1537.95,-101.6521);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AiGC7QgSgBgSgGQgTgHgNgMQgMgMgBgPIABgDIABgEIBfjDQARgjAdgaQAegbAqgPQArgPA6AAQAwAAAZAEQAZAEAJAHQAIAHAAAIIgBADIgCAFIiRErIgCAEIAAACQAAAEAFACQAEACAKAAIgLAWQgUAAgTgGQgTgGgNgOQgMgNgBgZQAAgLAEgOQAEgOAHgRIAdg7Ih/CaQgMAPgLAFQgJAFgHAAIgCAAgAAGiWQgWAOgNAbIhwDjQgCAEAAAEQABAJAFAFQAFAFAGACIAIACQAJAAAIgIICrjPIAbg2IAKgXIACgHQAAgHgOgDQgOgDgbAAQgZAAgXANg");
	this.shape_18.setTransform(1501.5264,-101.2979);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Aj0EQIEIofIDhAAIgPAfIh7AAIhvDnIB5AAIgPAeIh5AAIhsDcIB7AAIgPAfg");
	this.shape_19.setTransform(1471.175,-110.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AicEQQgSgBgUgIQgTgIgOgQQgNgPgBgUQAAgHAEgLQADgKAGgOIAVgrIBnAAIgoBRIgDAJIgBAHQAAAMAGAHQAGAGANAAIAcAAQANAAAKgHQAKgHAGgOIBRipQADgFAAgDQgBgLgGgEQgIgFgKABIgmAAQgUgBgTgKQgTgIgMgPQgMgQgCgSQABgHADgLQADgKAIgOIBBiDQAGgNANgMQAOgJAPgHQARgGANAAIB2AAQAUAAATAKQATAKAOAOQANAQAAASQAAAGgDALQgEALgGAPIipFXQgKAWgTAVQgSAUgXAMQgXANgZABgABKjpQgKAHgHANIhMCcIgCAIIAAAIQgBANAHAGQAGAHAMAAIAaAAQANAAAJgHQAKgHAHgOIBMidIADgIIABgHQAAgNgHgFQgGgHgMAAIgbAAQgNABgJAGg");
	this.shape_20.setTransform(754.55,-110.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AibEQQgTAAgUgJQgTgLgNgPQgNgPgBgSIAEgSQADgLAHgNIAWgtIBoAAIgqBTIgCAJIgBAHQAAANAGAGQAGAGANAAIAaAAQANAAAKgHQAKgHAGgOIBDiIIACgIIAAgIQAAgQgOgFQgNgFgUABIhYAAQgMAAgHgHQgGgFAAgNICKkaID5AAIgQAfIh+AAQgNABgKAGQgKAHgHANIhkDPQAWgQAUgEQAVgEAUAAQAZABATALQATAKALAQQAKAQABARIgBAJIgDAIIg8B7QgUAogbAZQgaAZgdABg");
	this.shape_21.setTransform(716.075,-110.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AicEQQgSgBgUgIQgTgIgOgQQgNgPgBgUQAAgHAEgLQADgKAGgOIAVgrIBnAAIgoBRIgDAJIgBAHQAAAMAGAHQAGAGANAAIAcAAQANAAAKgHQAKgHAGgOIBRipQADgFAAgDQgBgLgGgEQgIgFgKABIgmAAQgTgBgUgKQgTgIgMgPQgNgQgBgSQABgHADgLQADgKAIgOIBBiDQAGgNANgMQAOgJAPgHQARgGANAAIB2AAQAUAAATAKQATAKAOAOQANAQAAASQAAAGgDALQgEALgGAPIipFXQgKAWgTAVQgSAUgXAMQgXANgZABgABKjpQgKAHgHANIhMCcIgCAIIAAAIQgBANAHAGQAFAHANAAIAaAAQANAAAJgHQAKgHAHgOIBMidIADgIIABgHQAAgNgHgFQgGgHgMAAIgbAAQgNABgJAGg");
	this.shape_22.setTransform(679.4,-110.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ai0EQIDcnEIhuAAIAYg0QAcgCAVgFQAWgEAUgHQATgJAUgMIBhAAIkIIfg");
	this.shape_23.setTransform(652.125,-110.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AinC2QgbgDgLgIQgKgHAAgIIAAgCIADgFIBpjZQAZg2A3gfQA0ghBXAAIAcAAQARAAARAHQASAGAMAMQALAMABAPIgBAEIgBAEIhMCdIi/AAIgrBaIgDAHIgBAIQAAAGAOAEQANADAbAAQAagBARgKQAPgJAJgKIAIgKIBAAAQgYAkgtAUQgsAWhIAAQgwAAgbgFgAApiGQgUAOgNAaIghBGIB5AAIAwhhQACgEAAgEQgCgHgFgFQgGgDgGgCIgJgCIggAAQgZAAgUAOg");
	this.shape_24.setTransform(597.7625,-101.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ah6EOQgTgGgNgOQgNgOgBgYQAAgLAEgOQAEgPAIgQIBrjcIg3AAIAOgbIA2AAIBai4IBmAAIhaC4IBjAAIgOAbIhjAAIiSEwIgBAEIgBACQAAADAFADQAFACAKAAIgLAVQgUABgTgGg");
	this.shape_25.setTransform(572.775,-110.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AiGC7QgSgBgSgGQgTgHgNgMQgMgMgBgPIABgDIABgEIBfjDQARgjAdgaQAegbAqgPQArgPA6AAQAwAAAZAEQAZAEAJAHQAIAHAAAIIgBADIgCAFIiRErIgCAEIAAACQAAAEAFACQAEACAKAAIgLAWQgUAAgTgGQgTgGgNgOQgMgNgBgZQAAgLAEgOQAEgOAHgRIAdg7Ih/CaQgMAPgLAFQgJAFgHAAIgCAAgAAGiWQgWAOgNAbIhwDjQgCAEAAAEQABAJAFAFQAFAFAGACIAIACQAJAAAIgIICrjPIAbg2IAKgXIACgHQAAgHgOgDQgOgDgbAAQgZAAgXANg");
	this.shape_26.setTransform(535.7264,-101.2979);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ai3EQIEIofIBnAAIj5IAIBJAAIgPAfg");
	this.shape_27.setTransform(507.525,-110.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AicEQQgSgBgUgIQgTgIgOgQQgNgPgBgUQAAgHAEgLQADgKAGgOIAVgrIBnAAIgoBRIgDAJIgBAHQAAAMAGAHQAGAGANAAIAcAAQANAAAKgHQAKgHAGgOIBRipQADgFAAgDQgBgLgGgEQgIgFgKABIgmAAQgTgBgUgKQgSgIgNgPQgMgQgCgSQABgHADgLQADgKAIgOIBBiDQAGgNANgMQAOgJAPgHQARgGANAAIB2AAQAUAAATAKQATAKAOAOQANAQAAASQAAAGgDALQgEALgGAPIipFXQgKAWgTAVQgSAUgXAMQgXANgZABgABKjpQgKAHgHANIhMCcIgCAIIAAAIQgBANAHAGQAGAHAMAAIAaAAQANAAAJgHQAKgHAHgOIBMidIADgIIABgHQAAgNgHgFQgGgHgMAAIgbAAQgNABgJAGg");
	this.shape_28.setTransform(-186.4,-110.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AibEQQgTAAgUgJQgTgLgNgPQgNgPgBgSIAEgSQADgLAHgNIAWgtIBoAAIgqBTIgCAJIgBAHQAAANAGAGQAGAGANAAIAaAAQANAAAKgHQAKgHAGgOIBDiIIACgIIAAgIQAAgQgOgFQgNgFgUABIhYAAQgMAAgHgHQgGgFAAgNICKkaID5AAIgQAfIh+AAQgNABgKAGQgKAHgHANIhkDPQAWgQAUgEQAVgEAUAAQAZABATALQATAKALAQQAKAQABARIgBAJIgDAIIg8B7QgUAogbAZQgaAZgdABg");
	this.shape_29.setTransform(-224.875,-110.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AicEQQgSgBgUgIQgTgIgOgQQgNgPgBgUQAAgHAEgLQACgKAHgOIAVgrIBnAAIgoBRIgDAJIgBAHQAAAMAGAHQAGAGANAAIAcAAQANAAAKgHQAKgHAGgOIBRipQADgFAAgDQgBgLgGgEQgIgFgKABIgmAAQgTgBgUgKQgSgIgNgPQgNgQgBgSQABgHADgLQADgKAIgOIBBiDQAGgNANgMQAOgJAPgHQARgGANAAIB2AAQAUAAATAKQATAKAOAOQANAQAAASQAAAGgDALQgEALgGAPIipFXQgKAWgTAVQgSAUgXAMQgXANgZABgABKjpQgKAHgHANIhMCcIgCAIIAAAIQgBANAHAGQAGAHAMAAIAaAAQANAAAJgHQAKgHAHgOIBMidIADgIIABgHQAAgNgHgFQgGgHgMAAIgbAAQgNABgJAGg");
	this.shape_30.setTransform(-261.55,-110.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ai0EQIDcnEIhuAAIAYg0QAcgCAVgFQAWgEAUgHQATgJAUgMIBhAAIkIIfg");
	this.shape_31.setTransform(-288.825,-110.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AjjEHQgSgTAAgfQAAgcARgWQASgWAdgQQAdgPAlgJQAlgIAoAAIAXgtQgIAIgNAJQgOAIgPAGQgPAFgOABIgUAAQgSgBgRgGQgSgHgLgMQgMgMAAgPIAAgEIABgEICWkxIBDAAIiRErQgCAEAAAEQABAIAFAFQAGAFAGACIAJACIAVAAQAZAAAXgRQAXgRANgZICDkOIBmAAIjYG6QgQAigdAbQgeAbgoARQgoAQguAAQglgBgTgSgAhvCKQgbAGgYAKQgXALgPAPQgPAOAAATQAAARAKAMQALAMAVABQAbAAAVgOQAWgPAMgaIAhhDQgaAAgbAFg");
	this.shape_32.setTransform(-344.475,-91.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ah2EOQgTgGgMgOQgOgOgBgYQAAgLAFgOQADgPAIgQIDSmvIBnAAIj7IDIgBAEIAAACQAAADAEADQAGACAJAAIgLAVQgTABgUgGg");
	this.shape_33.setTransform(-364.5,-110.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AjdC4ICwloIBmAAIhBCJIBrh3QANgOAKgFQALgGAHABQAOAAAPAEQAQAEALAHQAMAHAGAJQAIAKAAALIAAAEIgBADIghBDIhDAAIAbg6QACgEAAgEQAAgIgFgFQgFgFgHgCIgJgCQgEAAgEACQgDACgDAEIibCrIhLCVg");
	this.shape_34.setTransform(-399.15,-101.6521);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AiGC7QgSgBgSgGQgTgHgNgMQgMgMgBgPIABgDIABgEIBfjDQARgjAdgaQAegbAqgPQArgPA6AAQAwAAAZAEQAZAEAJAHQAIAHAAAIIgBADIgCAFIiRErIgCAEIAAACQAAAEAFACQAEACAKAAIgLAWQgUAAgTgGQgTgGgNgOQgMgNgBgZQAAgLAEgOQAEgOAHgRIAdg7Ih/CaQgMAPgLAFQgJAFgHAAIgCAAgAAGiWQgWAOgNAbIhwDjQgCAEAAAEQABAJAFAFQAFAFAGACIAIACQAJAAAIgIICrjPIAbg2IAKgXIACgHQAAgHgOgDQgOgDgbAAQgZAAgXANg");
	this.shape_35.setTransform(-435.5736,-101.2979);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Aj0EQIEIofIDhAAIgPAfIh7AAIhvDnIB5AAIgPAeIh5AAIhsDcIB7AAIgPAfg");
	this.shape_36.setTransform(-465.925,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// panel
	this.instance = new lib.Panel1();
	this.instance.setTransform(2354,0,1,1,0,0,0,275,200);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,232,165,175,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,972,549);

	this.mc_bubble_03_1 = new lib.Panel1();
	this.mc_bubble_03_1.name = "mc_bubble_03_1";
	this.mc_bubble_03_1.setTransform(-550,0,1,1,0,0,0,275,200);
	var mc_bubble_03_1Filter_2 = new cjs.ColorFilter(0,0,0,1,155,219,193,0);
	this.mc_bubble_03_1.filters = [mc_bubble_03_1Filter_2];
	this.mc_bubble_03_1.cache(-2,-2,972,549);

	this.instance_1 = new lib.Panel1();
	this.instance_1.setTransform(1386,0,1,1,0,0,0,275,200);
	var instance_1Filter_3 = new cjs.ColorFilter(0,0,0,1,170,221,150,0);
	this.instance_1.filters = [instance_1Filter_3];
	this.instance_1.cache(-2,-2,972,549);

	this.box = new lib.Panel1();
	this.box.name = "box";
	this.box.setTransform(418,0,1,1,0,0,0,275,200);
	var boxFilter_4 = new cjs.ColorFilter(0,0,0,1,239,232,173,0);
	this.box.filters = [boxFilter_4];
	this.box.cache(-2,-2,972,549);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box},{t:this.instance_1},{t:this.mc_bubble_03_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(mc_bubble_03_1Filter_2).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_3).wait(1));
	this.timeline.addTween(cjs.Tween.get(boxFilter_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.main_content, new cjs.Rectangle(-825,-200,3873.7,549), null);


// stage content:
(lib.timeline_assn_004 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,10,25,40,55];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// Direct Navigation to sections 
		this.btn_play.addEventListener("click", function(){this.gotoAndStop(p01Frame); stage.update();}.bind(this));
		
		this.btn_stop.addEventListener("click", function(){this.gotoAndStop(1); stage.update();}.bind(this));
		this.btn_restart.addEventListener("click", function(){this.gotoAndStop(0); stage.update();}.bind(this));
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		// Stop the animation from playing initially
		this.stop();
		var playDirection = "stopped";
		
		// set button visibility
		this.back_btn.visible = false;
		console.log("Back button hidden");
		this.forward_btn.visible = true;
		
		
		// Setup the array.contains method to check for the stopFrames
		Array.prototype.contains = function ( needle ) {
		   for (i in this) {
		       if (this[i] == needle) return true;
		   }
		   return false;
		}
		 
		// Start ticking
		createjs.Ticker.addEventListener("tick", gotoNextFrame.bind(this));
		console.log("Ticker event listener added by Frame0");
		createjs.Ticker.framerate = 30;
		
		// Add event listeners to forward/back buttons
		if (this.forward_btn.hasEventListener("click") == false) {
			this.forward_btn.addEventListener("click", function(){playDirection = "forward";}.bind(this));
			console.log("Forward event listener added because it did not exist");	}
		
		if (this.back_btn.hasEventListener("click") == false) {
			this.back_btn.addEventListener("click", function(){playDirection = "reverse";}.bind(this));
			console.log("Reverse event listener added because it did not exist");	}
		
		// Iterate to the next frame, if appropriate
		function gotoNextFrame(event) {
		  if (playDirection == "forward") { this.gotoAndStop(this.currentFrame + 1); // playing forward: go to next frame
		  } else if (playDirection == "reverse"){ this.gotoAndStop(this.currentFrame - 1); // playing reverse: go to previous frame
		  } else if (playDirection == "stopped"){ // play is stopped  	  
		  } else {console.log("unknown play condition");   } // Unknown
		 
		  // Check to see if the new currentFrame is a stopping point. If it is, then prevent it from iterating on the next tick!
		  if ( stopFrames.contains(this.currentFrame) ) { playDirection = "stopped";  }
		}
		
		// Direct Navigation to sections 
		this.panelOne_btn.addEventListener("click", function(){this.gotoAndStop(p01Frame); stage.update();}.bind(this));
		this.panelTwo_btn.addEventListener("click", function(){this.gotoAndStop(p02Frame); stage.update();}.bind(this));
		this.panelThree_btn.addEventListener("click", function(){this.gotoAndStop(p03Frame); stage.update();}.bind(this));
		this.panelFour_btn.addEventListener("click", function(){this.gotoAndStop(p04Frame); stage.update();}.bind(this));
		
		
		// Add event listeners for markers / bubbles
		
		//this.main_content_01.marker_01.addEventListener("mouseover", function(){this.main_content_01.foo.gotoAndStop(1);}.bind(this));
		this.main_content_01.marker_01.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_01.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_01.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_01.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_02.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_02.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_02.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_02.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_03.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_03.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_03.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_03.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_04.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_04.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_04.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_04.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_05.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_05.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_05.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_05.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_06.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_06.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_06.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_06.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_07.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_07.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_07.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_07.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_08.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_08.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_08.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_08.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_09.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_09.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_09.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_09.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_10.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_10.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_10.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_10.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_11.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_11.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_11.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_11.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_12.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_12.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_12.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_12.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_13.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_13.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_13.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_13.gotoAndStop(0);}.bind(this));
		
		this.main_content_01.marker_14.addEventListener("mouseover", function(){this.main_content_01.mc_bubble_14.gotoAndPlay(1);}.bind(this));
		this.main_content_01.marker_14.addEventListener("mouseout", function(){this.main_content_01.mc_bubble_14.gotoAndStop(0);}.bind(this));
	}
	this.frame_25 = function() {
		//this.back_btn.alpha = 1; // shows back button on this panel 
		//this.forward_btn.alpha = 1; // shows forward button on this panel
		
		this.back_btn.visible = true; // shows back button on this panel 
		this.forward_btn.visible = true; // shows forward button on this panel
	}
	this.frame_40 = function() {
		/* 
		this code is required because to avoid missing buttons
		as result of direct navigation
		*/
		//this.back_btn.alpha = 1; // shows back button on this panel 
		//this.forward_btn.alpha = 1; // shows forward button on this panel
		
		this.back_btn.visible = true; // shows back button on this panel 
		this.forward_btn.visible = true; // shows forward button on this panel
	}
	this.frame_55 = function() {
		/* 
		this code is required because to avoid missing buttons
		as result of direct navigation
		*/
		//this.forward_btn.alpha = 0; // hides the forward button on last panel
		//this.back_btn.alpha = 1; // makes sure back button shows on last panel
		
		this.forward_btn.visible = false; // hides the forward button on last panel
		console.log("Forward button hidden");
		this.back_btn.visible = true; // makes sure back button shows on last panel
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(15).call(this.frame_25).wait(15).call(this.frame_40).wait(15).call(this.frame_55).wait(1));

	// direct buttons
	this.panelFour_btn = new lib.direct_btn_04();
	this.panelFour_btn.name = "panelFour_btn";
	this.panelFour_btn.setTransform(682.95,502.75,0.4444,0.5505,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.panelFour_btn, 0, 1, 1);

	this.panelThree_btn = new lib.direct_btn_03();
	this.panelThree_btn.name = "panelThree_btn";
	this.panelThree_btn.setTransform(536.65,502.7,0.4444,0.5505,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.panelThree_btn, 0, 1, 1);

	this.panelTwo_btn = new lib.direct_btn_02();
	this.panelTwo_btn.name = "panelTwo_btn";
	this.panelTwo_btn.setTransform(390.35,502.75,0.4444,0.5505,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.panelTwo_btn, 0, 1, 1);

	this.panelOne_btn = new lib.direct_btn_01();
	this.panelOne_btn.name = "panelOne_btn";
	this.panelOne_btn.setTransform(244,502.75,0.4444,0.5505,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.panelOne_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.panelOne_btn},{t:this.panelTwo_btn},{t:this.panelThree_btn},{t:this.panelFour_btn}]},10).wait(46));
	this.panelFour_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.panelThree_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.panelTwo_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.panelOne_btn.addEventListener("tick", AdobeAn.handleFilterCache);

	// scroll buttons
	this.back_btn = new lib.seqn_btn_02();
	this.back_btn.name = "back_btn";
	this.back_btn.setTransform(109.35,505.3,0.4378,0.5455);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 1);

	this.forward_btn = new lib.seqn_btn_01();
	this.forward_btn.name = "forward_btn";
	this.forward_btn.setTransform(890.8,502.75,0.4379,0.5505,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.forward_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.forward_btn},{t:this.back_btn}]},10).wait(46));
	this.back_btn.addEventListener("tick", AdobeAn.handleFilterCache);
	this.forward_btn.addEventListener("tick", AdobeAn.handleFilterCache);

	// intro
	this.instance = new lib.subtitle("synched",0);
	this.instance.setTransform(729.35,349.9,1,1,0,0,0,-14.1,-0.1);

	this.instance_1 = new lib.title("synched",0);
	this.instance_1.setTransform(765.1,175.3,2.2334,2.2328,0,0,0,-127.5,-31.8);

	this.btn_play = new lib.enter_btn();
	this.btn_play.name = "btn_play";
	this.btn_play.setTransform(683.25,493.3);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 1);

	this.instance_2 = new lib.world_turn();
	this.instance_2.setTransform(321,272.5,1,1,0,0,0,-163,0);

	this.btn_restart = new lib.restart_btn();
	this.btn_restart.name = "btn_restart";
	this.btn_restart.setTransform(64.8,505.55,0.7338,0.7339);
	new cjs.ButtonHelper(this.btn_restart, 0, 1, 1);

	this.instance_3 = new lib.title2("synched",0);
	this.instance_3.setTransform(758.15,186.85,1.5686,1.568,0,0,0,-2.4,-33.2);

	this.instance_4 = new lib.subtitle2("synched",0);
	this.instance_4.setTransform(764.1,348.15,1,1,0,0,0,22.3,-0.1);

	this.instance_5 = new lib.world_burn();
	this.instance_5.setTransform(133.5,273.75,1,1,0,0,0,-350.5,0);

	this.btn_stop = new lib.exit_btn();
	this.btn_stop.name = "btn_stop";
	this.btn_stop.setTransform(890.9,502.75,0.439,0.5505,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_stop, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.btn_play},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.btn_restart}]},1).to({state:[]},1).to({state:[{t:this.btn_stop}]},53).wait(1));
	this.btn_play.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btn_restart.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_5.addEventListener("tick", AdobeAn.handleFilterCache);
	this.btn_stop.addEventListener("tick", AdobeAn.handleFilterCache);

	// panels
	this.main_content_01 = new lib.main_content("synched",0);
	this.main_content_01.name = "main_content_01";
	this.main_content_01.setTransform(825,200);
	this.main_content_01._off = true;

	this.timeline.addTween(cjs.Tween.get(this.main_content_01).wait(10).to({_off:false},0).to({x:-143},15).to({x:-1111},15).to({x:-2079},15).wait(1));
	this.main_content_01.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2420,0,6293.7,549);
// library properties:
lib.properties = {
	id: 'CCA59CF2D9F52A489FE9A53995DBD717',
	width: 968,
	height: 545,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/timeline_assn_004_atlas_1.png?1646754653326", id:"timeline_assn_004_atlas_1"}
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
an.compositions['CCA59CF2D9F52A489FE9A53995DBD717'] = {
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