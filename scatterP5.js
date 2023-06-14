let img;
let message = 'test',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x,
  y; // x and y coordinates of the text
let msg2= 'other', bounds2;
let msg3= 'test2 ', bounds3;
// let msg4= 'a moving text', bounds4;
let letters=message.split('');

function preload() {
  img = loadImage('ven.png');
  font = loadFont('Roboto-Regular.ttf');


}

function setup() {
createCanvas(windowWidth, windowHeight);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  bounds2 = font.textBounds(msg2, 0, 0, fontsize);
  bounds3 = font.textBounds(msg3, 0, 0, fontsize);
  // bounds4 = font.textBounds(msg4, 0, 0, fontsize);

  
  x1 = width / 2 - bounds.w / 2;
  y1 = height / 2 - bounds.h / 2;
  
  x2 = width / 2 - bounds2.w / 2;
  y2 = 3*height / 5 - bounds2.h / 2;
  
  
  x3 = width / 2 - bounds3.w / 2;
  y3 = 2*height / 3 - bounds3.h / 2;

  // x4 = width / 2 - bounds4.w / 2;
  // y4 = 4*height / 5 - bounds4.h / 2;

}

function draw() {
  clear();
  background(0);
  push();
    scale(1.5);

// image(img, 0, 0);
   let totalWordWidth = 0;
  for(let i = 0; i < letters.length; i++){
   let currentWordWidth = textWidth(letters[i]);
   
   // fill(255);
   // rect(totalWordWidth, 80, currentWordWidth, 20);
    

   text(letters[i], totalWordWidth,100);
   totalWordWidth += currentWordWidth + 8;
  }
  
  pop();
  tint(255,250); 
  fill(255);
  text(message, x1, y1);
  text(msg2, x2, y2);
  text(msg3, x3, y3);
  // text(msg4, x4, y4);

  bounds = font.textBounds(message, x1, y1, fontsize);
  bounds2 = font.textBounds(msg2, x2, y2, fontsize);
  bounds3 = font.textBounds(msg3, x3, y3, fontsize);
  // bounds4 = font.textBounds(msg4, x4, y4, fontsize);


  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x1 += random(-5, 5);
    y1 += random(-5, 5);
  }
  
  if (
    mouseX >= bounds2.x &&
    mouseX <= bounds2.x + bounds2.w &&
    mouseY >= bounds2.y &&
    mouseY <= bounds2.y + bounds2.h
  ) {
    x2 += random(-5, 5);
    y2 += random(-5, 5);
  }
  if (
    mouseX >= bounds3.x &&
    mouseX <= bounds3.x + bounds3.w &&
    mouseY >= bounds3.y &&
    mouseY <= bounds3.y + bounds3.h
  ) {
    x3 += random(-5, 5);
    y3 += random(-5, 5);
  }
  // if (
  //   mouseX >= bounds4.x &&
  //   mouseX <= bounds4.x + bounds4.w &&
  //   mouseY >= bounds4.y &&
  //   mouseY <= bounds4.y + bounds4.h
  // ) {
  //   x4 += random(-5, 5);
  //   y4 += random(-5, 5);
  // }
  // scale(0.8);
  
  
}

