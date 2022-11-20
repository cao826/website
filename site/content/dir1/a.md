---
title: "A"
date: 2022-11-20T06:48:35-08:00
draft: true
---
<script src="https://d3js.org/d3.v6.min.js"></script>
<div id="div">
<svg width="900" height="640"></svg>
<script>
   const svg = d3.select("#div")
                 .append("svg")
                 .attr("width", "550")
                 .attr("height", "100")
                 .style("background-color", "lightblue")
                 .attr("id", "demo1")

   let rect = d3.select("#demo1")
                .append("rect")
                .attr("x", "200")
                .attr("y", "20")
                .attr("width", "100")
                .attr("height", "70")
                .attr("fill", "orange")
                .attr("stroke", "blue")
                .attr("stroke-width", "3px")
</script>
</div>
