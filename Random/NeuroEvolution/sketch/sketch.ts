var bounds = 0;
var agentCount = 10;

var agents: Agent[];
function setup() {
    createCanvas(windowWidth/2, windowHeight, WEBGL);

    bounds = width / 4;

    agents = new Array<Agent>();

    var size = 10;
    for(var i = 0; i < agentCount; i++) {
        agents[i] = new Agent(
            createVector(random(-bounds, bounds),0, random(-bounds, bounds)),
            createVector(random(1,3),random(1,3)),
            createVector(random([-1,1]),random([-1,1])),
            size //random(1,10)
           );
    }
    
  }
  

  function draw() {
   
    background(250);    
    normalMaterial();

    agents.forEach(a => {        
        a.move(bounds);
        a.draw();
    });

    //drag to move the world.
    orbitControl();
    debugMode();
  }