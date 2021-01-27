import { get, post } from '../../utilities';

function Sketch(p, board_id) {

  let shape = 0;
  var t = 0;
  let c;

  p.setup = function() {
    c = p.createCanvas(500, 500);
    
    p.strokeWeight(2);
    p.noFill();
    var r = p.random(255);
    var g = p.random(255);
    var b = p.random(255);
    //p.stroke(r, g, b); //color of flower
    p.stroke(r, g, b);
    console.log('r');
    t = 0;
    var size=400;

  };
    //https://npm.runkit.com/react-p5-wrapper
   p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
     if (props.shape !== null){
       shape = props.shape;
       //p.ellipse(0, 0, shape);
        console.log("shape");
        console.log(shape); //ReferenceError: Can't find variable: setState
        console.log("end");
     }
   };

  p.draw =function() {
    if (t<500) {
    p.translate(250, 250);
    p.beginShape();
      let vol = 2;
      //var shape = 0.003
      for (var i = 0; i < 200; i++) {
        var ang = p.map(i, 0, 195, 0, p.TWO_PI);
        //var rad = 300 * p.noise(i * (0.04 + (vol * 0.04)), this.t * shape);
        var rad = 300 * p.noise(i * (0.04 + (2 * 0.04)), t * 0.001);

        var x =  rad *p.cos(ang);
        var y = rad * p.sin(ang);

        p.curveVertex(x, y);

        //p.ellipse(y, x, 3);
        }
    p.endShape();
      }
    t += 1;
    post('/api/uploadImage', {board_id: board_id, imageName: c.elt.toDataURL('image/png')}).then((board) => {
      console.log("uploaded images");
    })
  };

  document.getElementById("p5Wrapper-download-button").addEventListener ("click", () => {
    p.save('myCanvas.png');
  })
};

export default Sketch;
