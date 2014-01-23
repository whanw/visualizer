// My init function
// Notice: - no parameters taken
//         - refers to "canv" which refers to the element with
//           id "canvas" in sound.html
//         - refers to "ctx" which is defined in sound.js 
function initCircles() {
		// get the context from the canvas to draw on
	    canv.setAttribute("width", 500);
	    canv.setAttribute("height", 500);
	    canv.setAttribute("style", "background:black");

}

// My update function
// Notice: takes in array as parameter
function drawCCircles (array) {

	//just show bins with a value over the treshold
	var threshold = 0;
	// clear the current state
	ctx.clearRect(0, 0, canv.width, canv.height);
	//the max count of bins for the visualization
	var maxBinCount = array.length;
	var radiusInc = (canv.width/2)/maxBinCount;
	//go over each bin
	for ( var i = 0; i < maxBinCount; i++ ){

		var value = array[i];
		var additional = array[i]/maxVolume*radiusInc;
		if (value >= threshold) {				

			//draw circles
			drawOneCircle(canv.width/2, canv.height/2, i*radiusInc+additional);
		}
	}
}


function drawOneCircle(x, y, radius) {
		ctx.beginPath();
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.stroke();	
}
// Helper function
//calc the color for the spectral based on the value "v"
function getColor (v) {
	
}
