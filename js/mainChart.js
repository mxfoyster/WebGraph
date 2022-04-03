//get a handle to our input boxes
const xGrid = document.getElementById("xGrid");
const xMin = document.getElementById("xMin");
const xMax = document.getElementById("xMax");
const lineColor = document.getElementById("lineColor");

graphFunction = "Math.sin(x)";
chartLabel = "Chart of SIN(x)";

document.getElementById("sin").addEventListener("click", sin);
document.getElementById("square").addEventListener("click", square);
var xValues = [];
var yValues = [];


generateData(graphFunction, 0, 10, 0.5); //our starting chart data
plotChart();

function sin()
{
	chartLabel = "Chart of SIN(x)";
	graphFunction = "Math.sin(x)";
	rePlot();
}

function square()
{
	chartLabel = "Chart of x^2";
	graphFunction = "x*x";
	rePlot();
}

//This is what we call to re-plot our chart when user prompts us to
function rePlot()
{
	generateData(graphFunction, Number(xMin.value), Number(xMax.value), Number(xGrid.value));
	plotChart();
}

//this is the plotting code
function plotChart()
{
	new Chart("webChart", 
	{
		type: "line",
		data: 
		{
			labels: xValues,
			datasets: [{ fill: false, pointRadius: 1, borderColor: hexToNum() , data: yValues}]
		},    
		options: 
		{legend: {display: false}, title: {display: true, text: chartLabel, fontSize: 16}}
	});
}

//this is the data populating code for our arrays
function generateData(value, i1, i2, step = 1) 
{
  //empty the array
  xValues = [];
  yValues = [];
  
  for (let x = i1; x <= i2; x += step) 
  {
    yValues.push(eval(value));
    xValues.push(x);
  }
}

//gets the values from the colour picker and builds them into an rgba value for chart.js
function hexToNum()
  {
	  var lineColorDec = [];
	  for (i=0; i<3; i++)//for each colour channel
	  {
		lineColorDec[i] = lineColor.value.slice((i+i+1),(i+i+3));  //cut out the this channel
		lineColorDec[i] = parseInt(lineColorDec[i],16);//convert from hex to decimal
	  }
	  //build the string
	  var rgbaString = "rgba(" + lineColorDec[0] + "," +  lineColorDec[1] + "," + lineColorDec[2] +",1)";
	  return rgbaString;//return it
  }