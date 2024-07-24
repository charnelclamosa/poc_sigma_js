import Sigma from "sigma"
import { MultiGraph, Graph } from "graphology";
import { createNodeImageProgram } from "@sigma/node-image"
import {
  DEFAULT_EDGE_CURVATURE,
  EdgeCurvedArrowProgram,
  indexParallelEdgesIndex
} from "@sigma/edge-curve"
import { EdgeArrowProgram } from "sigma/rendering"

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

const container = document.getElementById("first-table")
  
    // Create a graph, with various parallel edges:
    const graph = new MultiGraph()
    const nodeSize = 20
    const arrowSize = 7.5
  
    const firstCol = 0
    const secondCol = 3
    const thirdCol = 6
    const fourthCol = 9
  
    const firstRow = 0
    const secondRow = -0.75
    const thirdRow = -1.5
    const fourthRow = -2;25
  
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
      // Plant
      {
        key: "plant_lightning_plant",
        label: "Lightning Plant",
        col: firstCol,
        row: firstRow,
        size: nodeSize
      },
      // Systems
      {
        key: "systems_lighting_fixture_system",
        label: "Lighting Fixture System",
        col: secondCol,
        row: firstRow,
        size: nodeSize
      },
      {
        key: "systems_electrical_distribution",
        label: "Electrical Distribution",
        col: secondCol,
        row: secondRow,
        size: nodeSize
      },
      // // Measurement Techniques
      {
        key: "m_techniques_lighting_fixture_runtime",
        label: "Lighting Fixture Runtime",
        col: thirdCol,
        row: firstRow,
        size: nodeSize
      },
      {
        key: "m_techniques_true_rms_power",
        label: "True RMS Power",
        col: thirdCol,
        row: secondRow,
        size: nodeSize
      },
      {
        key: "m_techniques_electrical_spot_measurements",
        label: "Electrical Spot Measurements",
        col: thirdCol,
        row: thirdRow,
        size: nodeSize
      },
      {
        key: "m_techniques_electrical_current",
        label: "Electrical Current",
        col: thirdCol,
        row: fourthRow,
        size: nodeSize
      },
      // Calculation Methodology
      {
        key: "calc_methodology_lighting_energy_consumption",
        label: "Lighting Energy Consumption",
        col: fourthCol,
        row: firstRow,
        size: nodeSize
      }
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
  
    // Construction edges
    graph.addEdge("plant_lightning_plant", "systems_lighting_fixture_system", { size: arrowSize })
    graph.addEdge("plant_lightning_plant", "systems_electrical_distribution", { size: arrowSize })
    graph.addEdge("plant_lightning_plant", "m_techniques_lighting_fixture_runtime", { size: arrowSize })
    graph.addEdge("plant_lightning_plant", "calc_methodology_lighting_energy_consumption", { size: arrowSize })
    graph.addEdge("systems_lighting_fixture_system", "m_techniques_lighting_fixture_runtime", { size: arrowSize })
    graph.addEdge("m_techniques_lighting_fixture_runtime", "calc_methodology_lighting_energy_consumption", { size: arrowSize })
    graph.addEdge("systems_electrical_distribution", "m_techniques_true_rms_power", { size: arrowSize })
    graph.addEdge("systems_electrical_distribution", "m_techniques_electrical_spot_measurements", { size: arrowSize })
    graph.addEdge("systems_electrical_distribution", "m_techniques_electrical_current", { size: arrowSize })
    graph.addEdge("m_techniques_true_rms_power", "calc_methodology_lighting_energy_consumption", { size: arrowSize })
    graph.addEdge("m_techniques_electrical_spot_measurements", "calc_methodology_lighting_energy_consumption", { size: arrowSize })
    graph.addEdge("m_techniques_electrical_current", "calc_methodology_lighting_energy_consumption", { size: arrowSize })
  
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
    renderer.on("clickNode", (data) => {
      console.log(data)
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
