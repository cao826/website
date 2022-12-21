---
title: "Scatter Plot"
date: 2022-12-21T06:50:38-08:00
draft: true
---

<div id="wrapper"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?...">
</script>

<script>
async function drawScatterPlot() {
        // ACCESS DATA
        const dataset = await d3.json("../my_weather_data.json");
        console.table(dataset[0])
        // From the tabel we printed, we know the keys we want are:
        // dewPoint and humidity
        // so we will make accessor functions for them
        const xAccessor = d => d.dewPoint
        const yAccessor = d => d.humidity

        // CREATE CHART DIMENSIONS
        const width = d3.min([
        window.innerWidth * 0.9,
        window.innerHeight * 0.9,
        ])

        // use width to define chart dimensions
        let dimensions = {
            width: width,
            height: width,
            margin: {
                top: 10,
                right: 10,
                bottom: 50,
                left: 50,
                },
            }
        // Define height and width of the bounds
        dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
        dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

        // DRAW CANVAS

        const wrapper = d3.select('#wrapper').append('svg').attr("width", dimensions.width).attr("height", dimensions.height)

        const bounds = wrapper.append("g").style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)
        // CREATE SCALES
        const xScale = d3.scaleLinear().domain(d3.extent(dataset, xAccessor)).range([0, dimensions.boundedWidth]).nice()
        const yScale = d3.scaleLinear().domain(d3.extent(dataset, yAccessor)).range([dimensions.boundedHeight, 0]).nice()

        // DRAW DATA

        // this is the bad way to do it
        //dataset.forEach( d => bounds.append("circle").attr("cx", xScale(xAccessor(d))).attr("cy", yScale(yAccessor(d))).attr("r", 5))
        // this is the better way to do it
        const dots = bounds.selectAll("circle").data(dataset).enter().append("circle").attr("cx", d => xScale(xAccessor(d))).attr("cy", d => yScale(yAccessor(d))).attr("r", 5).attr("fill", "cornflowerblue")

        // DRAW PERIPHERALS
        const xAxisGenerator = d3.axisBottom().scale(xScale)
        const xAxis = bounds.append("g").call(xAxisGenerator).style("transform", `translateY(${dimensions.boundedHeight}px)`)
        const xAxisLabel = xAxis.append("text").attr("x", dimensions.boundedWidth / 2).attr("y", dimensions.margin.bottom - 10).attr("fill", "black").style("font-size", "1.4em").html("Dew point (&deg;F)")

        const yAxisGenerator = d3.axisLeft().scale(yScale).ticks(4)
        const yAxis = bounds.append("g").call(yAxisGenerator)
        const yAxisLabel = yAxis.append("text").attr("x", -dimensions.boundedHeight / 2).attr("y", -dimensions.margin.left + 10).attr("fill", "black").style("font-size", "1.4em").text("Relative Humidity").style("transform", "rotate(-90deg)").style("text-anchor", "middle")
}
drawScatterPlot()
</script>
<style type="text/css">
	#wrapper {
		text-align: center
	}
</style>

