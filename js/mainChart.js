//get a handle to our input boxes
const xGrid = document.getElementById("xGrid");
const xMin = document.getElementById("xMin");
const xMax = document.getElementById("xMax");
const lineColor = document.getElementById("lineColor");

const mValLine = document.getElementById("mValLine");
const lineSign = document.getElementById("lineSign");
const cValLine = document.getElementById("cValLine");

var webchart; //our handle for the chart we assign later. Declaring it here keeps it global

//starting chart type
graphFunction = "Math.sin(x)";
chartLabel = "Chart of SIN(x)";

//preset maths function button listeners
document.getElementById("sin").addEventListener("click", sin);
document.getElementById("cos").addEventListener("click", cos);
document.getElementById("tan").addEventListener("click", tan);
document.getElementById("square").addEventListener("click", square);
document.getElementById("cube").addEventListener("click", cube);
document.getElementById("invX").addEventListener("click", xInverted);
document.getElementById("straightPlot").addEventListener("click", straightLine);

//Aspect ratio button listeners and inline functions
document.getElementById("aspTwo").addEventListener("click", function(){reSize(2)});
document.getElementById("aspOne").addEventListener("click", function(){reSize(1)});
document.getElementById("aspHalf").addEventListener("click", function(){reSize(0.5)});


var xValues = [];
var yValues = [];


generateData(graphFunction, 0, 10, 0.5); //our starting chart data
plotChart();

function sin()
{
	chartLabel = "Chart of SIN(x)";
	graphFunction = "Math.sin(x)";
	checkThenPlot();
}

function cos()
{
	chartLabel = "Chart of COS(x)";
	graphFunction = "Math.cos(x)";
	checkThenPlot();
}

function tan()
{
	chartLabel = "Chart of TAN(x)";
	graphFunction = "Math.tan(x)";
	checkThenPlot();
}

function square()
{
	chartLabel = "Chart of x^2";
	graphFunction = "x*x";
	checkThenPlot();
}
function cube()
{
	chartLabel = "Chart of x^3";
	graphFunction = "x*x*x";
	checkThenPlot();
}

function xInverted()
{
	chartLabel = "Chart of 1/x";
	graphFunction = "1/x";
	checkThenPlot();
}

function straightLine()
{
	if(isNaN(mValLine.value)||isNaN(cValLine.value))
	{
		alert ("Sorry, 'm' and 'c' must be valid numbers");
		return;
	}
	if(lineSign.value!="+" && lineSign.value!="-")
	{
		alert ("Sorry, \u00B1 box must contain '+' or '-'");
		return;
	}
	chartLabel = "Chart of y = " + mValLine.value + " * x + " + cValLine.value;
	graphFunction = mValLine.value + "*x" + lineSign.value + cValLine.value;
	console.log (graphFunction);
	checkThenPlot();
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
	webChart = new Chart("webChart", 
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
  
//we can check our 'X Axis Parameters' here before we plot
function checkThenPlot()
{
	if (xGrid.value <= 0)
	{
		  alert ("Sorry, you must enter a positive number for 'X Interval'");
		  return;
	}
	  
	  if (xMin.value >= xMax.value)
	{
		  alert ("Sorry, 'X Start' must be smaller than 'X End'");
		  return;
	}
	 rePlot(); //If we made it this far, we're OK to plot
}

// to resize the chart according to the selected aspect ratio
function reSize(size)
{
	webChart.aspectRatio = size;
	webChart.resize();
	checkThenPlot(); //We have to plot again otherwise sometimes it defaults to initial chart for some reason
}