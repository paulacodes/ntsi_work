// variable to hold a reference to our A-Frame world
var world;

var clouds = [];

function setup() {
	// no canvas needed
	noCanvas();
	
	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	for (var i = 0; i < 20; i++) {
		clouds.push( new Cloud(random(-50, 50), 0.5, random(-50, 50)) );
	}

}

function Cloud(x, y, z) {
	this.cloud = new Circle({
		x:x,
		y:y,
		z:z,
		radius: 1,
		asset:'cloud',
		side: 'double',
		transparent: "true",
		clickFunction: function(c) {
			points += 1;
			world.remove(c);
		}
	});
	world.add(this.cloud);
}
