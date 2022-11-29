---
title: "Svg_chapter"
date: 2022-11-28T06:54:24-08:00
draft: true
---
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script>
# Scalable Vector Graphics

<h2 id="scg-graphics-context"> SVG Graphics Context </h2>
<svg width="600" height="300"></svg>
<script>
d3.select("#scg-graphics-context").append("svg").attr("width", 400).attr("height", 300);
</script>

<h2 id="shapes">Shapes</h2>

<svg width="400" height="300">
    <circle r="25"></circle>
    <circle cx="250" cy="200" r="50"></circle>
    <circle cx="50" cy="50" r="20"></circle>
    <circle cx="400" cy="300" r="50"></circle>
</svg>

<script>
const svg = d3.select("#shapes").append("svg").attr("width", 400).attr("height", 300);

svg.append("circle").attr("r", 25);
svg.append("circle").attr("cx", 250).attr("cy", 200).attr("r", 50);
svg.append("circle").attr("cx", 50).attr("cy", 50).attr("r", 20);
svg.append("circle").attr("cx", 400).attr("cy", 300).attr("r", 50);
</script>

<h2 id="fills-and-strokes">Fills and strokes</h2>

<svg>
    <line x2="400" stroke="red" stroke-width="5"/>
    <line y2="150" stroke="blue" stroke-width="5"/>
    <line x2="200" y2="150" stroke="black" stroke-width="1"/>
</svg>

<h2 id="styling">Styling Svg with CSS</h2>

<svg width="600" height="200">
<rect x="50" y="50" width="90" height="90" class="semitr"/>
<rect x="200" y="50" width="175" height="100" rx="40" ry="40" class="reds semitr"/>
<rect x="450" y="25" width="100" height="150" class="reds"/>
</svg>

<h2 id="transparency">Transparency</h2>

<script>
const transSvg = d3.select("#transparency").append("svg").attr("width", 600).attr("height", 200)

transSvg.append("rect").attr("x", 50)
                       .attr("y", 50)
                       .attr("width", 100)
                       .attr("height", 100)
                       .attr("rx", 10)
                       .attr("ry", 10)
                       .attr("stroke", "red")
                       .attr("stroke-width", 10)
                       .attr("fill-opacity", 0)
transSvg.append("rect").attr("x", 75)
                       .attr("y", 75)
                       .attr("width", 100)
                       .attr("height", 100)
                       .attr("rx", 10)
                       .attr("ry", 10)
                       .attr("fill", "gray")
                       .attr("stroke", "black")
                       .attr("stroke-width", 10)
                       .attr("fill-opacity", 0.7)
transSvg.append("rect").attr("x", 100)
                       .attr("y", 100)
                       .attr("width", 100)
                       .attr("height", 100)
                       .attr("rx", 10)
                       .attr("ry", 10)
                       .attr("fill", "yellow")
                       .attr("stroke", "blue")
                       .attr("stroke-width", 10)
                       .attr("stroke-opacity", 0.7)

trasSvg.append("rect").attr("x", 300)
                      .attr("y", 50)
                      .attr("height", 150)
                      .attr("width", 25)
</script>

<h2 id="ellipses">Ellipses</h5>
<svg width="600" height="300">
       <ellipse cx="150" cy="100" rx="150" ry="100"
                fill="yellow" fill-opacity="0.5"
                stroke="blue" stroke-width="1" stroke-dasharray="5 5"/>
       <ellipse cx="400" cy="150" rx="75" ry="125"
                fill="red" fill-opacity="0.2"
                stroke="red" stroke-width="5" stroke-opacity="0.5"/>
       <ellipse cx="400" cy="250" rx="150" ry="40"
                fill="black" fill-opacity="0"
                stroke="green" stroke-width="20" stroke-opacity="0.2" />
</svg>

<h2 id="groups">Group Containers</h2>
<svg width="600" height="300">
       <g id="bars" transform="translate(0,100) rotate(-90, 100, 150)">
           <rect x="100" y="150" height="20" width="150"></rect>
           <rect x="100" y="180" height="20" width="100"></rect>
           <rect x="100" y="210" height="20" width="200"></rect>
       </g>
       <g id="round" transform="translate(200,100) scale(.3) ">
           <circle cx="280" cy="220" r="50"></circle>
           <ellipse cx="150" cy="90" rx="80" ry="50"></ellipse>
       </g>
</svg>

<style>
svg {
        border: solid 1px lightgray;
        background-color: hsla(240,100%,50,0.2)
}
line {
    stroke-width: 20px;
}
.reds {
    fill: red;
}
.semitr {
    fill-opacity: 0.5;
}

#bars { fill: red; }
#round { opacity: 0.7; fill: blue; }

</style>
