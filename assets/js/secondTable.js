import Sigma from "sigma"
import { MultiGraph, Graph } from "graphology";
import { createNodeImageProgram } from "@sigma/node-image"
import {
  DEFAULT_EDGE_CURVATURE,
  EdgeCurvedArrowProgram,
  indexParallelEdgesIndex
} from "@sigma/edge-curve"
import { EdgeArrowProgram } from "sigma/rendering"

function getCurvature(index, maxIndex) {
    if (maxIndex <= 0) throw new Error("Invalid maxIndex")
    if (index < 0) return -getCurvature(-index, maxIndex)
    const amplitude = 3.5
    const maxCurvature =
        amplitude * (1 - Math.exp(-maxIndex / amplitude)) * DEFAULT_EDGE_CURVATURE
    return (maxCurvature * index) / maxIndex
}

const container = document.getElementById("second-table")
  
// Create a graph, with various parallel edges:
const graph = new MultiGraph()
const nodeSize = 20
const arrowSize = 7.5

const col_1 = 0
const col_2 = 5
const col_3 = 10
const col_4 = 15
const col_5 = 20

const row_1 = 0
const row_2 = -1
const row_3 = -2
const row_4 = -3
const row_5 = -4
const row_6 = -5
const row_7 = -6
const row_8 = -7
const row_9 = -8
const row_10 = -9
const row_11 = -10
const row_12 = -11

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
    key: "plant_air_cooled_chilled_water_plant",
    label: "Air-cooled Chilled Water Plant",
    col: col_1,
    row: row_1,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/plants/air-cooled-chilled-water-plant/"
  },
  // Systems
  {
    key: "systems_chilled_water_loop_system",
    label: "Chilled Water Loop System",
    col: col_2,
    row: row_1,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/systems/chilled-water-loop/"
  },
  {
    key: "systems_air_cooled_chiller_system",
    label: "Air-cooled Chiller System",
    col: col_2,
    row: row_2,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/systems/air-cooled-chiller/"
  },
  // Components
  {
    key: "components_cs_cv_pump_motor",
    label: "Constant-speed, Constant-volume Pump and Motor",
    col: col_3,
    row: row_1,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/components/constant-speed-constant-volume-pump-motor/"
  },
  {
    key: "components_vs_vv_pump_motor",
    label: "Variable-speed, Variable-volume Pump and Motor",
    col: col_3,
    row: row_3,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/components/variable-speed-variable-volume-pump-and-motor/"
  },
  {
    key: "components_cs_cv_compressor_motor",
    label: "Constant-speed, Constant-volume Compressor and Motor",
    col: col_3,
    row: row_5,
    size: nodeSize,
    url: ""
  },
  {
    key: "components_vs_vv_compressor_motor",
    label: "Variable-speed, Variable-volume Compressor and Motor",
    col: col_3,
    row: row_7,
    size: nodeSize,
    url: ""
  },
  // Measurement techniques
  {
    key: "mt_electrical_spot_measurements",
    label: "Electrical Spot Measurements",
    col: col_4,
    row: row_1,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/electrical-spot-measurement/"
  },
  {
    key: "mt_motor_runtime",
    label: "Motor Runtime",
    col: col_4,
    row: row_2,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/motor-runtime/"
  },
  {
    key: "mt_true_rms_power",
    label: "True RMS Power",
    col: col_4,
    row: row_3,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/true-rms-power/"
  },
  {
    key: "mt_outdoor_air_temp",
    label: "Outdoor Air Temperature",
    col: col_4,
    row: row_1,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/outdoor-air-temperature/"
  },
  {
    key: "mt_pipe_surface_water_temp",
    label: "Pipe Surface Water Temperature",
    col: col_4,
    row: row_4,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/pipe-surface-water-temperature/"
  },
  {
    key: "mt_water_flor_wate",
    label: "Water Flow Rate",
    col: col_4,
    row: row_5,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/water-flow-rate/"
  },
  // Calculation Methodology
  {
    key: "cm_pump_motors_energy_consumption",
    label: "Pump Motors Energy Consumption",
    col: col_5,
    row: row_1,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/calculation-methodology/pump-motors-energy-consumption/"
  },
  {
    key: "cm_aircooled_chiller_energy_consumption",
    label: "Air-cooled Chiller Energy Consumption",
    col: col_5,
    row: row_2,
    size: nodeSize,
    url: ""
  }
]

// Create the nodes.
myNodes.forEach(value => {
  graph.addNode(value.key, {
    label: value.label,
    x: value.col,
    y: value.row,
    size: value.size,
    type: "image",
    image: "https://icons.getbootstrap.com/assets/icons/person.svg",
    url: value.url
  })
})

// Construction edges
graph.addEdge("plant_air_cooled_chilled_water_plant", "systems_chilled_water_loop_system", { size: arrowSize })
graph.addEdge("plant_air_cooled_chilled_water_plant", "systems_air_cooled_chiller_system", { size: arrowSize })
graph.addEdge("systems_chilled_water_loop_system", "components_cs_cv_pump_motor", { size: arrowSize })
graph.addEdge("systems_chilled_water_loop_system", "components_vs_vv_pump_motor", { size: arrowSize })
graph.addEdge("systems_chilled_water_loop_system", "components_cs_cv_compressor_motor", { size: arrowSize })
graph.addEdge("systems_chilled_water_loop_system", "components_vs_vv_compressor_motor", { size: arrowSize })
graph.addEdge("components_cs_cv_pump_motor", "mt_electrical_spot_measurements", { size: arrowSize })
graph.addEdge("components_cs_cv_pump_motor", "mt_motor_runtime", { size: arrowSize })
graph.addEdge("components_vs_vv_pump_motor", "mt_true_rms_power", { size: arrowSize })
graph.addEdge("components_vs_vv_pump_motor", "mt_outdoor_air_temp", { size: arrowSize })
graph.addEdge("components_cs_cv_compressor_motor", "mt_pipe_surface_water_temp", { size: arrowSize })
graph.addEdge("components_cs_cv_compressor_motor", "mt_water_flor_wate", { size: arrowSize })
graph.addEdge("components_cs_cv_compressor_motor", "mt_true_rms_power", { size: arrowSize })
graph.addEdge("components_cs_cv_compressor_motor", "mt_outdoor_air_temp", { size: arrowSize })
graph.addEdge("components_vs_vv_compressor_motor", "mt_pipe_surface_water_temp", { size: arrowSize })
graph.addEdge("components_vs_vv_compressor_motor", "mt_water_flor_wate", { size: arrowSize })
graph.addEdge("components_vs_vv_compressor_motor", "mt_true_rms_power", { size: arrowSize })
graph.addEdge("components_vs_vv_compressor_motor", "mt_outdoor_air_temp", { size: arrowSize })
graph.addEdge("mt_electrical_spot_measurements", "cm_pump_motors_energy_consumption", { size: arrowSize })
graph.addEdge("mt_motor_runtime", "cm_pump_motors_energy_consumption", { size: arrowSize })
graph.addEdge("mt_true_rms_power", "cm_pump_motors_energy_consumption", { size: arrowSize })
graph.addEdge("mt_outdoor_air_temp", "cm_pump_motors_energy_consumption", { size: arrowSize })
graph.addEdge("mt_pipe_surface_water_temp", "cm_aircooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_water_flor_wate", "cm_aircooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_true_rms_power", "cm_aircooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_outdoor_air_temp", "cm_aircooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_pipe_surface_water_temp", "cm_aircooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_water_flor_wate", "cm_aircooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_true_rms_power", "cm_aircooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_outdoor_air_temp", "cm_aircooled_chiller_energy_consumption", { size: arrowSize })

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
renderer.on("clickNode", (node) => {
  const url = graph.getNodeAttribute(node.node, "url")
  if (url.trim().length > 1) window.open(url)
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
