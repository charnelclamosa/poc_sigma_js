import dayjs from 'dayjs';
import Sigma from "sigma"
import Graph from "graphology";

console.log(dayjs('2018-08-08'))

const graph = new Graph();
graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
graph.addEdge("1", "2", { size: 5, color: "purple" });

// Instantiate sigma.js and render the graph
const sigmaInstance = new Sigma(graph, document.getElementById("container"));
