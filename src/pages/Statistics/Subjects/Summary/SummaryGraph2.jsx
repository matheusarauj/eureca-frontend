import React, {useEffect, useState, useRef } from 'react';

import { select, axisBottom, scaleLinear, scaleBand, axisLeft } from 'd3';

import {dataExample} from './utilSummary';

import './SummaryGraph.css';

const SummaryGraph2 = (props) => {
    const svgRef = useRef();

    const widthGraph = 900;
    const heightGraph = 600;

    // will be called initially and on every data change
    useEffect(() => {

    console.log(dataExample);
  
      // set the dimensions and margins of the graph
      const margin = { top: 10, right: 30, bottom: 30, left: 40 },
        width = widthGraph - margin.left - margin.right,
        height = heightGraph - margin.top - margin.bottom;
  
      const svg = select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
  
      // Read the data and compute summary statistics for each specie
      // Show the X scale
      const x = scaleBand()
        .range([0, width])
        .domain(["Obrigatórias", "Optativas gerais", "Optativas específicas"])
        .paddingInner(1)
        .paddingOuter(.5)
  
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "x-axis")
        .call(axisBottom(x))
  
      // Show the Y scale
      const y = scaleLinear()
        .domain([3, 9])
        .range([height, 0])
      svg.append("g").call(axisLeft(y))
  
      // Show the main vertical line
      svg
        .selectAll("vertLines")
        .data(dataExample)
        .enter()
        .append("line")
        .attr("x1", d => (x(d.group)))
        .attr("x2", d => (x(d.group)))
        .attr("y1", d => (y(d.data.lim_inf)))
        .attr("y2", d => (y(d.data.lim_sup)))
        .attr("stroke", "black")
        .style("width", 40)
  
      // rectangle for the main box
      const boxWidth = 100
      svg
        .selectAll("boxes")
        .data(dataExample)
        .enter()
        .append("rect")
        .attr("x", d => (x(d.group) - boxWidth / 2))
        .attr("y", d => (y(d.data.q3)))
        .attr("height", d => (y(d.data.q1) - y(d.data.q3)))
        .attr("width", boxWidth)
        .attr("stroke", "black")
        .style("fill", "#2196f3")
  
      // Show the median
      svg
        .selectAll("medianLines")
        .data(dataExample)
        .enter()
        .append("line")
        .attr("x1", function (d) { 
          console.log(d);
          console.log(x(d.group));
          return (x(d.group) - boxWidth / 2)
         })
        .attr("x2", d => (x(d.group) + boxWidth / 2))
        .attr("y1", d => (y(d.data.q2)))
        .attr("y2", d => (y(d.data.q2))) 
        .attr("stroke", "black")
        .style("width", 80)
      
      // Show superior limit
      svg
        .selectAll("topLines")
        .data(dataExample)
        .enter()
        .append("line")
        .attr("x1", function (d) { 
          console.log(d);
          console.log(x(d.group));
          return (x(d.group) - (boxWidth / 2 - 20))
         })
        .attr("x2", d => (x(d.group) + (boxWidth / 2) - 20))
        .attr("y1", d => (y(d.data.lim_sup)))
        .attr("y2", d => (y(d.data.lim_sup)))
        .attr("stroke", "black")
        .style("width", 80)
        
      
      // Show inferior limit
      svg
        .selectAll("topLines")
        .data(dataExample)
        .enter()
        .append("line")
        .attr("x1", d => (x(d.group) - (boxWidth / 2 - 20)))
        .attr("x2", d => (x(d.group) + (boxWidth / 2) - 20))
        .attr("y1", d => (y(d.data.lim_inf)))
        .attr("y2", d => (y(d.data.lim_inf)))
        .attr("stroke", "black")
        .style("width", 80)
      
      // Aumentando apenas o x-axis
      svg.select(".x-axis")
        .selectAll(".tick")
        .selectAll("text")
        .style("font-size","20px");

    }, [])
  
    return (
      <React.Fragment>
        <svg className="svg-graph" ref={svgRef} >
  
        </svg>
      </React.Fragment>
    );
}

export default SummaryGraph2;