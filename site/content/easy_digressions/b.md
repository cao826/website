---
title: "B"
date: 2022-11-20T06:50:38-08:00
draft: true
---

This is dir1/b.md
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?...">
</script>
<div id="wrapper"></div>

<script>
const dataset = d3.json('../my_weather_data.json')
const yAccessor = d => d.temperatureMax
const dateParser = d3.timeParse("%Y-%m-%d")
const xAccessor = d => dateParser(d.date)

let dimensions = {
        width: window.innerWidth * 0.9,
        height: 400,
        margin: {
            top:15,
            right: 15,
            bottom: 40,
            left: 60,
            },
    }

dimensions.boundedWidth = dimensions.width
  - dimensions.margin.left
  - dimensions.margin.right

dimensions.boundedHeight = dimensions.height
  - dimensions.margin.top
  - dimensions.margin.bottom

const wrapper = d3.select("#wrapper")
console.log(wrapper)
const svg = wrapper.append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height)

const bounds = wrapper.append("g")
    .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)
const yScale = d3.scaleLinear()
  .domain(d3.extent(dataset, yAccessor))
  .range([dimensions.boundedHeight, 0])
console.log(yScale(10))
const newData = d3.csv("new_data.csv"))
</script>
