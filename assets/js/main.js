import dayjs from 'dayjs';
import Sigma from "sigma"
import { MultiGraph, Graph } from "graphology";
import { createNodeImageProgram } from "@sigma/node-image"
import {
  DEFAULT_EDGE_CURVATURE,
  EdgeCurvedArrowProgram,
  indexParallelEdgesIndex
} from "@sigma/edge-curve"
import { EdgeArrowProgram } from "sigma/rendering"

console.log(dayjs('2018-08-08'))

// const graph = new Graph();
// graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
// graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
// graph.addEdge("1", "2", { size: 5, color: "purple" });

// // Instantiate sigma.js and render the graph
// const sigmaInstance = new Sigma(graph, document.getElementById("container"));


function getCurvature(index, maxIndex) {
    if (maxIndex <= 0) throw new Error("Invalid maxIndex")
    if (index < 0) return -getCurvature(-index, maxIndex)
    const amplitude = 3.5
    const maxCurvature =
        amplitude * (1 - Math.exp(-maxIndex / amplitude)) * DEFAULT_EDGE_CURVATURE
    return (maxCurvature * index) / maxIndex
}

const container = document.getElementById("container")
  
    // Create a graph, with various parallel edges:
    const graph = new MultiGraph()
    const nodeSize = 20
    const arrowColor = "green"
    const arrowSize = 3
  
    const firstCol = 0
    const secondCol = 10
    const thirdCol = 20
    const fourthCol = 30
    const fifthCol = 40
  
    const firstRow = 0
    const secondRow = -2
    const thirdRow = -4
  
    // Legend:
    // key: ID of the node.
    //
    /**
     * Legend:
     * key: ID of the node.
     * label: Label of the node.
     * col: Column position of the node.
     * row: Row position of the node.
     * size: Size of the node.
     */
    const myNodes = [
      // First row
      {
        key: "a_1",
        label: "WCChw",
        col: firstCol,
        row: firstRow,
        size: nodeSize
      },
      {
        key: "a_2",
        label: "WS Econ",
        col: secondCol,
        row: firstRow,
        size: nodeSize
      },
      {
        key: "a_3",
        label: "L+t_L HE",
        col: thirdCol,
        row: firstRow,
        size: nodeSize
      },
      {
        key: "a_4",
        label: "WT_im",
        col: fourthCol,
        row: firstRow,
        size: nodeSize
      },
      {
        key: "a_5",
        label: "L+t+L",
        col: fifthCol,
        row: firstRow,
        size: nodeSize
      },
      // Second row
      {
        key: "b_1",
        label: "ACChW",
        col: firstCol,
        row: secondRow,
        size: nodeSize
      },
      {
        key: "b_2",
        label: "WCChW",
        col: secondCol,
        row: secondRow,
        size: nodeSize
      },
      {
        key: "b_3",
        label: "CSCV C&M",
        col: thirdCol,
        row: secondRow,
        size: nodeSize
      },
      {
        key: "b_4",
        label: "DiffWP&PC",
        col: fourthCol,
        row: secondRow,
        size: nodeSize
      },
      { key: "b_5", label: "CT", col: fifthCol, row: secondRow, size: nodeSize },
      // Third col
      { key: "c_1", label: "AH", col: firstCol, row: thirdRow, size: nodeSize },
      { key: "c_2", label: "CWL", col: secondCol, row: thirdRow, size: nodeSize },
      {
        key: "c_3",
        label: "VSVV C&M",
        col: thirdCol,
        row: thirdRow,
        size: nodeSize
      },
      { key: "c_4", label: "WFR", col: fourthCol, row: thirdRow, size: nodeSize },
      { key: "c_5", label: "AHU", col: fifthCol, row: thirdRow, size: nodeSize }
    ]
  
    // Create the nodes.
    myNodes.forEach(value => {
      graph.addNode(value.key, {
        label: value.label,
        x: value.col,
        y: value.row,
        size: nodeSize,
        type: "image",
        image: "https://icons.getbootstrap.com/assets/icons/person.svg"
      })
    })
  
    // First row arrows
    graph.addEdge("a_1", "a_2", { size: arrowSize })
  
    graph.addEdge("a_1", "a_3", { size: arrowSize })
    graph.addEdge("a_1", "a_4", { size: arrowSize })
    graph.addEdge("a_1", "a_5", { size: arrowSize })
  
    graph.addEdge("a_1", "b_2", { size: arrowSize })
    graph.addEdge("a_1", "c_2", { size: arrowSize })
    graph.addEdge("a_2", "a_3", { size: arrowSize })
    graph.addEdge("a_3", "a_4", { size: arrowSize })
    graph.addEdge("a_3", "a_5", { size: arrowSize })
    graph.addEdge("a_3", "b_4", { size: arrowSize })
    graph.addEdge("a_3", "c_4", { size: arrowSize })
  
    // Second row arrows
    graph.addEdge("b_2", "b_3", { size: arrowSize })
    graph.addEdge("b_2", "b_3", { size: arrowSize })
  
    // Third row arrows
    graph.addEdge("c_4", "a_5", { size: arrowSize })
    graph.addEdge("c_4", "b_5", { size: arrowSize })
    graph.addEdge("c_4", "c_5", { size: arrowSize })
    graph.addEdge("c_1", "a_2", { size: arrowSize })
    graph.addEdge("c_1", "b_2", { size: arrowSize })
    graph.addEdge("c_1", "c_2", { size: arrowSize })
  
    // Use dedicated helper to identify parallel edges:
    indexParallelEdgesIndex(graph, {
      edgeIndexAttribute: "parallelIndex",
      edgeMinIndexAttribute: "parallelMinIndex",
      edgeMaxIndexAttribute: "parallelMaxIndex"
    })
  
    // Adapt types and curvature of parallel edges for rendering:
    graph.forEachEdge(
      (edge, { parallelIndex, parallelMinIndex, parallelMaxIndex }) => {
        if (typeof parallelMinIndex === "number") {
          graph.mergeEdgeAttributes(edge, {
            type: parallelIndex ? "curved" : "straight",
            curvature: getCurvature(parallelIndex, parallelMaxIndex)
          })
        } else if (typeof parallelIndex === "number") {
          graph.mergeEdgeAttributes(edge, {
            type: "curved",
            curvature: getCurvature(parallelIndex, parallelMaxIndex)
          })
        } else {
          graph.setEdgeAttribute(edge, "type", "straight")
        }
      }
    )
  
    const renderer = new Sigma(graph, container, {
      allowInvalidContainer: true,
      defaultEdgeType: "straight",
      defaultNodeType: "image",
      nodeProgramClasses: {
        image: createNodeImageProgram()
      },
      edgeProgramClasses: {
        straight: EdgeArrowProgram,
        curved: EdgeCurvedArrowProgram
      }
    })
  
    const state = { searchQuery: "" }
  
    function setHoveredNode(node) {
      if (node) {
        state.hoveredNode = node
        state.hoveredNeighbors = new Set(graph.neighbors(node))
      }
  
      // Compute the partial that we need to re-render to optimize the refresh
      const nodes = graph.filterNodes(
        n => n !== state.hoveredNode && !state.hoveredNeighbors?.has(n)
      )
      const nodesIndex = new Set(nodes)
      const edges = graph.filterEdges(e =>
        graph.extremities(e).some(n => nodesIndex.has(n))
      )
  
      if (!node) {
        state.hoveredNode = undefined
        state.hoveredNeighbors = undefined
      }
  
      // Refresh rendering
      renderer.refresh({
        partialGraph: {
          nodes,
          edges
        },
        // We don't touch the graph data so we can skip its reindexation
        skipIndexation: true
      })
    }
    // Bind graph interactions:
    renderer.on("enterNode", ({ node }) => {
      setHoveredNode(node)
    })
    renderer.on("leaveNode", () => {
      setHoveredNode(undefined)
    })
  
    // Render nodes accordingly to the internal state:
    // 1. If a node is selected, it is highlighted
    // 2. If there is query, all non-matching nodes are greyed
    // 3. If there is a hovered node, all non-neighbor nodes are greyed
    renderer.setSetting("nodeReducer", (node, data) => {
      const res = { ...data }
  
      if (
        state.hoveredNeighbors &&
        !state.hoveredNeighbors.has(node) &&
        state.hoveredNode !== node
      ) {
        res.label = ""
        res.color = "#f6f6f6"
      }
  
      if (state.selectedNode === node) {
        res.highlighted = true
      } else if (state.suggestions) {
        if (state.suggestions.has(node)) {
          res.forceLabel = true
        } else {
          res.label = ""
          res.color = "#f6f6f6"
        }
      }
  
      return res
    })
  
    // Render edges accordingly to the internal state:
    // 1. If a node is hovered, the edge is hidden if it is not connected to the
    //    node
    // 2. If there is a query, the edge is only visible if it connects two
    //    suggestions
    renderer.setSetting("edgeReducer", (edge, data) => {
      const res = { ...data }
  
      if (state.hoveredNode && !graph.hasExtremity(edge, state.hoveredNode)) {
        res.hidden = true
      }
  
      if (
        state.suggestions &&
        (!state.suggestions.has(graph.source(edge)) ||
          !state.suggestions.has(graph.target(edge)))
      ) {
        res.hidden = true
      }
  
      return res
    })
  
    // End of hover nodes
  
    // onStoryDown(() => {
    //   renderer.kill()
    // })
