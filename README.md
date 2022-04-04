# WebGraph
A simple graphics calculator app based on JavaScript and graph.js 


## A small start

This will be a simple background project inspired by the likes of [https://www.desmos.com/calculator](https://www.desmos.com/calculator).

For now, we can just set the range and grid size / resolution of the x axis and choose between two pre-defined functions (sin and x^2). 

Most recent addition is a colour opicker for the graph line and now the graph automatically updates when we change ANY value. The css has been tweaked slightly to make things a little tidier.

## A bit more

We now have SINE, COSINE and TANGENT along with X^2, X^3 and 1/X as predefined functions (press and go graphs)

Further to that, we have the choice of 2:1, 1:1 and 1:2 aspect ratio for the chart itself. Note: Using 1:2 aspect ratio seems to be a bit buggy. That's setting it to 0.5 within Chart.js and I don't think they had that in mind somehow but for the most part it works.

## Some more tweaks

We now have a way to build a formula for a straight line `(y = mx + c)`. Additionally to that, the side bar has been re-styled and some basic measures to handle browser window size changes have been tuned slightly. It's far from perfect but it should be usable in many resolutions.

I will probably pause on this for a bit and move to other projects. It is likely I'll come back again, so worth keeping an eye on it if there's anything useful here.

## Chart.js

This whole project really revolves around the use of ***Chart.js*** which you can find at [https://www.chartjs.org/](https://www.chartjs.org/). I am not really using it in the way intended in my opinion, I am being too generalised in it's application by allowing the user to tweak it so much. However, this is an awesome tool and i can think of many better suited applications for it later on. Seriously' check it out!

## Use / copyright

This is totally open source under GNU/GPL so go ahead and use how you like but under those terms!