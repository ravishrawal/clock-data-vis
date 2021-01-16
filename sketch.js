function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width / 2;
  cy = height / 2;
  min_dia = 60;
  hr_dia = 180;
  bg_dia = 600;
  textSize(12);
  textAlign(CENTER, CENTER);
}

function draw() {
  noStroke();
  background(220);

  //day background
  let c = color('rgba(65,65,65, 0.5)');
  fill(c)
  let bg = circle(cx, cy, bg_dia)

  //day progress
  c = color(65)
  fill(c)
  let hr = map(hour(), 0, 23, hr_dia, bg_dia)
  let day_circ = circle(cx, cy, hr)

  //hr background
  c = color('rgba(255, 204, 0, 0.5)');
  fill(c)
  circle(cx, cy, hr_dia)

  //hr progress
  c = color(255, 204, 0)
  fill(c)
  let m = map(minute(), 0, 60, min_dia, hr_dia)
  let hr_circ = circle(cx, cy, m)

  //min background
  c = color('rgba(237, 34, 93, 0.5)');
  fill(c)
  circle(cx, cy, min_dia)

  //min progress
  c = color(237, 34, 93)
  fill(c)
  let s = map(second(), 0, 60, 0, min_dia)
  let min_circ = circle(cx, cy, s)

  //24 lines for hours
  var hr_interval = (bg_dia - hr_dia) / 48
  var hr_line_rad = hr_dia / 2
  stroke('rgba(255, 255, 255, 0.1)');
  for (let i = 0; i < 25; i++) {
    noFill();
    circle(cx, cy, hr_line_rad * 2)
    hr_line_rad += hr_interval
  }

  //4 lines for 15 min
  var min_interval = (hr_dia - min_dia) / 8
  var min_line_rad = min_dia / 2
  stroke('rgba(65,65,65,0.2)');
  for (let i = 0; i < 5; i++) {
    noFill();
    circle(cx, cy, min_line_rad * 2)
    min_line_rad += min_interval
  }
  stroke('rgba(65,65,65,0.2)');
  fill('rgba(65,65,65,0.2)');
  translate(350+1*min_interval, -244)
  rotate(radians(1*45))
  text('15', cx, cy)
  translate(753+min_interval, -83)
  rotate(radians(2*45))
  text('30', cx, cy)
  
  translate(976, 315)
  rotate(radians(3*45))
  text('45', cx, cy)
  // for(var i=0; i<3; i++){
  //   let num = i+1
  //   translate(350+num*min_interval, -244)
  //   rotate(radians(num*45))
  //   fill(0, 102, 153);
  //   let msg = 15*num+''
  //   text(msg, cx, cy)
  // }
}