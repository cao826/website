---
title: "A"
date: 2022-11-20T06:48:35-08:00
draft: true
---
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script>
<div id="div">
Here is some text
<svg width="100" height="100"></svg>
<script>
console.log('Hello world');
const svg = d3.select('svg');
svg
  .append('circle')
  .attr('cx', '50%')
  .attr('cy', '50%')
  .attr('r', 20)
  .style('fill', 'green');
</script>
</div>
