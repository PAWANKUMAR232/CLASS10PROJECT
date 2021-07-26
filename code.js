var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d730c295-2727-472c-ba45-8b96e22c5a16","44f291e4-92cc-4067-a33d-4582b95430d8","ec039953-4a58-477c-9011-dc25da729d28","3486d929-292b-4eca-8762-00692005970b","3d7f832a-1835-40ab-a24c-4cf4ef68edb4","95c7131f-8f0d-40e3-ae37-aeadf05c2e65","5ac2f3f9-5118-4d54-8a0d-44e2ab85a8a0"],"propsByKey":{"d730c295-2727-472c-ba45-8b96e22c5a16":{"name":"dog","sourceUrl":"assets/v3/animations/sj1-vRjdQWfKJ-rBcExG3KoH4ht_HQIB1EeTP2Xv9vo/d730c295-2727-472c-ba45-8b96e22c5a16.png","frameSize":{"x":414,"y":370},"frameCount":1,"looping":true,"frameDelay":4,"version":"gW5RJmZYnR9uz5K2MP9xo7m5e7opNoua","loadedFromSource":true,"saved":true,"sourceSize":{"x":414,"y":370},"rootRelativePath":"assets/v3/animations/sj1-vRjdQWfKJ-rBcExG3KoH4ht_HQIB1EeTP2Xv9vo/d730c295-2727-472c-ba45-8b96e22c5a16.png"},"44f291e4-92cc-4067-a33d-4582b95430d8":{"name":"tom","sourceUrl":"assets/v3/animations/sj1-vRjdQWfKJ-rBcExG3KoH4ht_HQIB1EeTP2Xv9vo/44f291e4-92cc-4067-a33d-4582b95430d8.png","frameSize":{"x":261,"y":326},"frameCount":1,"looping":true,"frameDelay":4,"version":"7lsWbDxTxRkBkyBzVBXPyZ4_wHEIGnUk","loadedFromSource":true,"saved":true,"sourceSize":{"x":261,"y":326},"rootRelativePath":"assets/v3/animations/sj1-vRjdQWfKJ-rBcExG3KoH4ht_HQIB1EeTP2Xv9vo/44f291e4-92cc-4067-a33d-4582b95430d8.png"},"ec039953-4a58-477c-9011-dc25da729d28":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/awFhTD5wEONe0tk8tYHcowFHGa6IWlJN/category_buildings/building_18.png","frameSize":{"x":382,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"awFhTD5wEONe0tk8tYHcowFHGa6IWlJN","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/awFhTD5wEONe0tk8tYHcowFHGa6IWlJN/category_buildings/building_18.png"},"3486d929-292b-4eca-8762-00692005970b":{"name":"kitchen","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"3d7f832a-1835-40ab-a24c-4cf4ef68edb4":{"name":"spike","sourceUrl":"assets/v3/animations/sj1-vRjdQWfKJ-rBcExG3KoH4ht_HQIB1EeTP2Xv9vo/3d7f832a-1835-40ab-a24c-4cf4ef68edb4.png","frameSize":{"x":542,"y":392},"frameCount":1,"looping":true,"frameDelay":4,"version":".Izi38XpN.dBSJBA1VRLMaL5BKiSB61v","loadedFromSource":true,"saved":true,"sourceSize":{"x":542,"y":392},"rootRelativePath":"assets/v3/animations/sj1-vRjdQWfKJ-rBcExG3KoH4ht_HQIB1EeTP2Xv9vo/3d7f832a-1835-40ab-a24c-4cf4ef68edb4.png"},"95c7131f-8f0d-40e3-ae37-aeadf05c2e65":{"name":"house","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Zbw4xGkpS.8aotYarmF0zkYvXuTHmua2","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/95c7131f-8f0d-40e3-ae37-aeadf05c2e65.png"},"5ac2f3f9-5118-4d54-8a0d-44e2ab85a8a0":{"name":"jerry","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"s_azyefFT8_p0iYkMfOpt6QafSHl_Gmn","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/5ac2f3f9-5118-4d54-8a0d-44e2ab85a8a0.png"}}};
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

 var bg = createSprite(182,205)
bg.setAnimation( "house");
bg.scale = 1.10


var tom = createSprite(34,350,20,20)
tom.setAnimation("tom")
tom.scale = 0.15

var jerry = createSprite(328,86,20,20)
jerry.setAnimation("jerry")
jerry.scale = 0.20

var dog  = createSprite(142,282,20,20)
dog.setAnimation("dog")
dog.scale = 0.1
dog.velocityY = 0.95

var dog2 = createSprite(305,380,20,20)
dog2.setAnimation("dog")
dog2.scale = 0.1
dog2.velocityY = -0.95

var spike = createSprite(286,218,20,20)
spike.setAnimation("spike")
spike.scale = 0.1 
spike.velocityY = 0.95

var spike2 = createSprite(164,152,20,20)
spike2.setAnimation("spike")
spike2.scale = 0.1
spike2.velocityY = 0.95


var boundary =  createSprite(166,270,340,10)
boundary.shapeColor = "grey"

var boundary2= createSprite(254,138,300,10)
boundary2.shapeColor = "grey"



var count = 0
var gameState = "end"

function draw() {
  background("white");
 

if (tom.isTouching(dog)||tom.isTouching(dog2)||tom.isTouching(spike)
||tom.isTouching(spike2)) {
  tom.x = 34
  tom.y = 350
  count = count+1
} 
if (tom.isTouching(jerry)) {
  
    background("green");
   textSize(24);
   textFont("algerian");
   fill("black");
   text("GAMEOVER", 70,200);
   textFont("times new roman");
   dog.velocityY = 0
   dog2.velocityY = 0
   spike.velocityY = 0
   spike.velocityY = 0
  gamestate= end;
}


  
createEdgeSprites()
tom.bounceOff(edges)
tom.collide(boundary)
tom.collide(boundary2)
dog.bounceOff(edges)
dog.bounceOff(boundary)
dog2.bounceOff(edges)
dog2.bounceOff(boundary)
spike.bounceOff(boundary2)
 spike.bounceOff(edges)
 spike.bounceOff(boundary)
 spike2.bounceOff(boundary)
 spike2.bounceOff(boundary2)
 spike2.bounceOff(edges)
 //tom.collide(jerry)


  
  drawSprites()

   textSize(25);
  stroke("black");
  fill("black");
  text("DEATHS :"+count,28,55);

  text("TOM",20,310)
textSize(25)
fill("black")
  text("JERRY",240,36)

 




    
  if(keyDown("right")){
  tom.x = tom.x + 2;
 }
if (keyDown("left")) {
   tom.x = tom.x - 2; 
  }
    
    

if (keyDown("up")) {
 tom.y = tom.y-2
}
if (keyDown("down")) {
  tom.y = tom.y+2
}

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
