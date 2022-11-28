---
title: "Svg_chapter"
date: 2022-11-28T06:54:24-08:00
draft: true
---
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script>
# Scalable Vecotr Graphics

<h2 id="scg-graphics-context"> SVG Graphics Context </h2>
<style>
svg {
        border: solid 1px lightgray;
        background-color: hsla(240,100%,50,0.2)
}
</style>
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


