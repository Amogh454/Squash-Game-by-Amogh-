var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(200, 200, 20, 20);
ball.shapeColor = "white";

var paddle = createSprite(139, 351, 120, 15);
paddle.shapeColor = "white";

var score = 0;





function draw() {
  background("black");
  
  fill("white")
  textSize(25);
  text("Score: " + score,10,30);
  

  
  if(keyDown("space")){
    ball.setVelocity(5,5);
  }
  paddle.x = World.mouseX;
  
  if(ball.isTouching(paddle)){
   score = score+ 5;
 }
 
 if(ball.y > 360){
   ball.destroy();
   
   stroke("white");
   fill("white");
   textSize(30);
   text("Oh you Lost", 120, 200);
   textSize(25);
   text("Game By Talented Beast", 70, 250);
   score = 0;
 }
  
  createEdgeSprites();
  
 ball.bounceOff(edges);
 ball.bounceOff(paddle);
  
  
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
