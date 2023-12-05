//// Average Temperatures in Death Valley - 2011
/// Source for data: https://www.ncdc.noaa.gov/cdo-web/datasets
/// https://www.ncdc.noaa.gov/cdo-web/datasets/GHCND/stations/GHCND:USC00042319/detail

var dv; // death valley
var s = 20; // size of ellipses
var canvasW = s * 365; // canvas width proportional to size of ellipse
var maxRange = 130;

function preload() {
  dv = loadTable('deathvalley_20112021.csv','csv','header');
}

function setup() {
  createCanvas(canvasW+(100), 400);
  console.log(dv);
}

function draw() {
  background(50);
  
  noStroke();

  fill(255,0,0);
  textSize(30);
  text("Average Temperatures in Death Valley: 2011", 120, 40);
  
  textSize(50);
  text(maxRange, 5, 40); // top 
  text(maxRange/2, 5, height/2); // middle
  text("0", 5, height-4); // bottom

  translate(60,0);// move the chart to the right
  
  // zero based index; 0 = 1/01/2011, 364 = 12/31/2011
  for (var i = 0; i < 365; i++) { // one year
    // map scales on range of values to another
    // we are using map to flip the Y axis of our graph
    // and to scale the range of our graph to the edges of our canvas

    /// Lowest temperature of a day
    fill(255); // white
    let minTempY = map(dv.getNum(i, "TMIN"), 0, maxRange, height, 0);
    let eSpace = s/2; // extra space to align ellipses with text
    ellipse(s*i,minTempY,s);  

    /// Highest temperature of a day
    fill(0); //black
    let maxTempY = map(dv.getNum(i, "TMAX"), 0, maxRange, height, 0);
    ellipse(s*i,maxTempY,s);
  }

}
