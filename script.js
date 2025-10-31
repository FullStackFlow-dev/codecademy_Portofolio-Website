//profile picture eye animation:
//get the center coordinates of the anchor element
const anchor = document.getElementById("anchor");
const rekt = anchor.getBoundingClientRect(); //places a box around the anchor image
const anchorX = rekt.left + rekt.width / 2; //center of the box
const anchorY = rekt.top + rekt.height / 2; //center of the box

document.addEventListener("mousemove", (e) => {
  //get the position of the mouse
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  console.log(angleDeg);
  //rotate the eyes
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  });
});

//get the angle between mouse position and center of the anchor
function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx); // angle in radians
  const deg = (rad * 180) / Math.PI; //radians to degrees conversion
  return deg;
}
