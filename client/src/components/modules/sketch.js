function Sketch(p) {

  p.setup = function() {
    p.createCanvas(500, 500);
    p.stroke(255, 100, 0); //color of flower
    p.strokeWeight(1);
    p.noFill();
    var t = 0; //iterations
    var size=400;
    var shape =0.003 //or 0.03

  };

  p.draw =function() {
    p.translate(250, 250);
    var t = 0
    p.beginShape();
      let vol = 2;
      var shape =0.003 
      for (var i = 0; i < 200; i++) {
        var ang = p.map(i, 0, 210, 0, p.TWO_PI);
        //var rad = 300 * p.noise(i * (0.04 + (vol * 0.04)), this.t * shape);
        var rad = 300 * p.noise(i * (0.04 + (2 * 0.04)), t * shape);
        
        var x =  rad *p.cos(ang);
        var y = rad * p.sin(ang);
        
        //p.curveVertex(x, y);
        
        p.ellipse(y, x, 3);
      }
    p.endShape(CLOSE);
    console.log(x);
    t += 1;
  
    };
};
export default Sketch