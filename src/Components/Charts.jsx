import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
const Charts = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svg.attr("width");
    const height = svg.attr("height");
    const radius = Math.min(width, height) / 2;

    // Create an arc generator
    const arc = d3
      .arc()
      .innerRadius(radius * 0.3)
      .outerRadius(radius * 0.8);

    // Create a pie layout
    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    // Create color scale
    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.variable))
      .range(d3.schemeCategory10);

    // Append a group element for the pie chart
    const pieGroup = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Generate pie slices
    const arcs = pie(data);

    // Append arcs to the pie chart
    pieGroup
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.variable));

    // Append text labels
    pieGroup
      .selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", ".25em")
      .text((d) => `${d.data.variable}: ${d.data.value}`)
      .style("text-anchor", "middle")
      .style("fill", "white");
  }, [data]);

  return (
    <motion.svg
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 1,
        // repeat:, // To repeat the animation infinitely
        ease: "linear", // Linear easing for continuous rotation
      }}
      className="flex font-semibold"
      ref={svgRef}
      width={305}
      height={305}
    ></motion.svg>
  );
};

export default Charts;
