function SketchNew(p) {
 
  let x = 750;
  let stem_drawn = 0;

  p.setup = function() {
    p.setAttributes('antialias', true);
    p.createCanvas(500, 500, p.WEBGL);
    p.background(0);
    p.frameRate(22);
    p.noStroke();

  };

  p.draw_stem = function(){
    p.translate(random(-20, 20), 500/2, 0);
    p.fill(22, 120, 33);
    p.rotateZ(random() / 30);
    p.plane(random(20, 30), 700);//tallo
    p.noFill();
    p.noStroke();
    stem_drawn = 1;
  }
  
  p.draw =function() {
    p.fill(x / 5.2, 25, 0, 205); //changes colour
    if (!stem_drawn) {
      p.draw_stem();
    }

    x = x - 5;

    if (x == 100) {
      p.noLoop();
    }
    p.noStroke();
    p.rotateX(x / random(2));
    p.rotateZ(x / 30);
    p.scale(.15);
    p.translate(x, 0, 0);
    p.box(10 + x - (x / p.random(10, 25)), x - 250);
    p.fill(x / 5.2, 28, 0, 255);
    };
  

  document.getElementById("p5Wrapper-download-button").addEventListener ("click", () => {
    p.save('myCanvas.png');
  })
};

export default SketchNew