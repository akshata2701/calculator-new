var n1,n2;
var b1,b2,b3,b4;

function setup() {
  
    createCanvas(400,400);
    num1=createInput();
    num1.position(5,60);
    num2=createInput();
    num2.position(200,60);
    b1=createButton("ADD");
    b1.position(10,200);
    b1.mousePressed(add);
    b2=createButton("MULTIPY");
    b2.position(100,200);
    b2.mousePressed(mul);
    textAlign(CENTER);
}

function add()
  {
    console.log(n1+n2);
  }
  function mul()
  {
    console.log(n1*n2);
  }
  add();
  mul();
function draw() {
  background("blue");
  text("num 1",70,50);
  text("num 2",270,50);
  n1=parseInt(num1.value());
  n2=parseInt(num2.value());
  //add();
 // mul();
}