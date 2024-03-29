---
title: "B"
date: 2022-11-20T06:50:38-08:00
draft: true
---

<div id="wrapper"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?...">
</script>

<script>

const yAccessor = d => d.temperatureMax
const dateParser = d3.timeParse("%Y-%m-%d")
const xAccessor = d => dateParser(d.date)

async function drawLineChart() {
        // code goes here
        const data = await d3.json("../my_weather_data.json");
        /*console.table(dataset)*/
        let dimensions = {
                width: window.innerWidth * 0.9,
                height: 400,
                margins: {
                    top: 15,
                    right: 15,
                    bottom: 40,
                    left: 60,
                    },
            }
        dimensions.boundedWidth = dimensions.width
          - dimensions.margins.left
          - dimensions.margins.right
        dimensions.boundedHeight = dimensions.height
          - dimensions.margins.top
          - dimensions.margins.bottom

        const wrapper = d3.select("#wrapper")
          .append("svg")
          .attr("width", dimensions.width)
          .attr("height", dimensions.height)
        const bounds = wrapper.append("g")
             .style("transform", `translate(${
               dimensions.margins.left
               }px, ${
                   dimensions.margins.top
               })`)
    const yScale = d3.scaleLinear()
       .domain(d3.extent(data, yAccessor))
       .range([dimensions.boundedHeight, 0])
    const freezingTemperaturePlacement = yScale(32)
    const freezingTemperatures = bounds.append("rect")
         .attr("x", 0)
         .attr("width", dimensions.boundedWidth)
         .attr("y", freezingTemperaturePlacement)
         .attr("height", dimensions.boundedHeight - freezingTemperaturePlacement
         )
         .attr("fill", "#e0f3f3")
    const xScale = d3.scaleTime()
         .domain(d3.extent(data, xAccessor))
         .range([0, dimensions.boundedWidth])
    const lineGenerator = d3.line()
         .x(d => xScale(xAccessor(d)))
         .y(d => yScale(yAccessor(d)))
    const line = bounds.append("path")
         .attr("d", lineGenerator(data))
         .attr("fill", "none")
         .attr("stroke", "#af9358")
         .attr("stroke-width", 2)
    const yAxisGenerator = d3.axisLeft().scale(yScale)
    const yAxis = bounds.append('g').call(yAxisGenerator)
                  .style("transform", 
                         `translateX(${20}px)`)
    const xAxisGenerator = d3.axisBottom().scale(xScale)
    const xAxis = bounds.append("g").call(xAxisGenerator)
                  .style("transform", `translateY(${dimensions.boundedHeight}px)`)
}
drawLineChart()
</script>
<style type="text/css">
	#wrapper {
		text-align: center
	}
</style>
