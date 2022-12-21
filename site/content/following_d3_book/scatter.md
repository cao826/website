---
title: "Hello world"
date: 2022-11-25T17:33:33-08:00
draft: true
---
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script>
<svg id="chart" width="600" height="200"></svg>
<script>
console.log('hello world')
const array = [100, 200, 300, 350, 375, 400, 500]

d3.select("#chart")
  .selectAll("circle")
  .data(array)
  .enter()
  .append("circle")
  .attr("r", 10)
  .attr("cy", 100)
  .attr("cx", d => d)

setTimeout (function () {
        d3.select("#chart").selectAll("circle")
          .data([50, 75, 125, 225, 325, 425, 450])
          .transition().duration(1000)
            .attr("r", 5)
            .attr("cx", d => d)
            .style("fill", "red")
    }, 2000)
</script>
