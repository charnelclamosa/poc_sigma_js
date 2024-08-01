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

const container = document.getElementById("third-table")
  
// Create a graph, with various parallel edges:
const graph = new MultiGraph()
const nodeSize = 20
const arrowSize = 7.5

const col_1 = 0
const col_2 = 10
const col_3 = 20
const col_4 = 30
const col_5 = 40

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
const row_13 = -12
const row_14 = -13
const row_15 = -14
const row_16 = -15
const row_17 = -16
const row_18 = -17
const row_19 = -18
const row_20 = -19
const row_21 = -20
const row_22 = -21
const row_23 = -22
const row_24 = -23
const row_25 = -24

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
    key: "p_watercooled_chilled_water_plant",
    label: "Water-cooled Chilled Water Plant",
    col: col_1,
    row: row_1,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/plants/water-cooled-chilled-water-plant/"
  },
  // Sytems
  {
    key: "s_chilled_water_loop",
    label: "Chilled Water Loop",
    col: col_2,
    row: row_1,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/systems/chilled-water-loop/"
  },
  {
    key: "st_condenser_water_loop",
    label: "Condenser Water Loop",
    col: col_2,
    row: row_8,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/systems/condenser-water-loop/"
  },
  {
    key: "st_water_cooled_chiller",
    label: "Water Cooled Chiller",
    col: col_2,
    row: row_16, // 16
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/systems/water-cooled-chiller/"
  },
  {
    key: "st_waterside_economizer",
    label: "Waterside Economizer",
    col: col_2,
    row: row_24, // 24
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/systems/waterside-economizer/"
  },
  // Components
  {
    key: "c_cs_cv_pump_motor",
    label: "Constant-speed, Constant-volume Pump and Motor",
    col: col_3,
    row: row_1,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/components/constant-speed-constant-volume-pump-motor/"
  },
  {
    key: "c_vs_vv_pump_motor",
    label: "Variable-speed, Variable-volume Pump and Motor",
    col: col_3,
    row: row_4,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/components/variable-speed-variable-volume-pump-and-motor/"
  },
  {
    key: "c_cs_cv_fan_motor",
    label: "Constant-speed, Constant-volume Fan and Motor",
    col: col_3,
    row: row_8,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/components/constant-speed-constant-volume-fan-and-motor/"
  },
  {
    key: "c_vs_vv_fan_motor",
    label: "Variable-speed, Variable-volume Fan and Motor",
    col: col_3,
    row: row_12,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/components/variable-speed-variable-volume-fan-and-motor/"
  },
  {
    key: "c_cs_cv_compressor_motor",
    label: "Constant-speed, Constant-volume Compressor and Motor",
    col: col_3,
    row: row_16,
    size: nodeSize,
    url: ""
  },
  {
    key: "c_vs_vv_compressor_motor",
    label: "Variable-speed, Variable-volume Compressor and Motor",
    col: col_3,
    row: row_20,
    size: nodeSize,
    url: ""
  },
  {
    key: "c_liquid_to_liquid_exchanger",
    label: "Liquid-to-liquid Exchanger",
    col: col_3,
    row: row_24,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/components/liquid-to-liquid-heat-exchanger/"
  },
  // Measurement Techniques
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
    row: row_4,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/motor-runtime/"
  },
  {
    key: "mt_true_rms_power",
    label: "True RMS Power",
    col: col_4,
    row: row_8,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/true-rms-power/"
  },
  {
    key: "mt_outdoor_air_temp",
    label: "Outdoor Air temperature",
    col: col_4,
    row: row_12,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/outdoor-air-temperature/"
  },
  {
    key: "mt_relative_humidity",
    label: "Relative Humidity",
    col: col_4,
    row: row_16,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/relative-humidity/"
  },
  {
    key: "mt_pipe_surface_water_temp",
    label: "Pipe Surface Water Temperature",
    col: col_4,
    row: row_20,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/measurement-technique/pipe-surface-water-temperature/"
  },
  {
    key: "mt_water_flow_rate",
    label: "Water Flow Rate",
    col: col_4,
    row: row_24,
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
    key: "cm_cooling_tower_fan_energy_consumption",
    label: "Cooling Tower Fans Energy Consumption",
    col: col_5,
    row: row_8,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/calculation-methodology/cooling-tower-fans-energy-consumption/"
  },
  {
    key: "cm_watercooled_chiller_energy_consumption",
    label: "Water-cooled Chiller Energy Consumption",
    col: col_5,
    row: row_16,
    size: nodeSize,
    url: ""
  },
  {
    key: "cm_liquid_to_liquid_heat_exchanger_heat_transfer",
    label: "Liquid-to-liquid Heat Exchanger Heat Transfer",
    col: col_5,
    row: row_24,
    size: nodeSize,
    url: "https://uat-pnp.nycenergytools.com/documents/calculation-methodology/liquid-to-liquid-heat-exchanger-heat-transfer/"
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
graph.addEdge("p_watercooled_chilled_water_plant", "s_chilled_water_loop", { size: arrowSize })
graph.addEdge("p_watercooled_chilled_water_plant", "st_condenser_water_loop", { size: arrowSize })
graph.addEdge("p_watercooled_chilled_water_plant", "st_water_cooled_chiller", { size: arrowSize })
graph.addEdge("p_watercooled_chilled_water_plant", "st_waterside_economizer", { size: arrowSize })
graph.addEdge("s_chilled_water_loop", "c_cs_cv_pump_motor", { size: arrowSize })
graph.addEdge("s_chilled_water_loop", "c_vs_vv_pump_motor", { size: arrowSize })
graph.addEdge("st_condenser_water_loop", "c_cs_cv_fan_motor", { size: arrowSize })
graph.addEdge("st_condenser_water_loop", "c_vs_vv_fan_motor", { size: arrowSize })
graph.addEdge("st_condenser_water_loop", "c_cs_cv_pump_motor", { size: arrowSize })
graph.addEdge("st_condenser_water_loop", "c_vs_vv_pump_motor", { size: arrowSize })
graph.addEdge("st_water_cooled_chiller", "c_cs_cv_compressor_motor", { size: arrowSize })
graph.addEdge("st_water_cooled_chiller", "c_vs_vv_compressor_motor", { size: arrowSize })
graph.addEdge("st_waterside_economizer", "c_liquid_to_liquid_exchanger", { size: arrowSize })
graph.addEdge("c_cs_cv_pump_motor", "mt_electrical_spot_measurements", { size: arrowSize })
graph.addEdge("c_cs_cv_pump_motor", "mt_motor_runtime", { size: arrowSize })
graph.addEdge("c_vs_vv_pump_motor", "mt_true_rms_power", { size: arrowSize })
graph.addEdge("c_vs_vv_pump_motor", "mt_outdoor_air_temp", { size: arrowSize })
graph.addEdge("c_cs_cv_fan_motor", "mt_electrical_spot_measurements", { size: arrowSize })
graph.addEdge("c_cs_cv_fan_motor", "mt_relative_humidity", { size: arrowSize })
graph.addEdge("c_cs_cv_fan_motor", "mt_motor_runtime", { size: arrowSize })
graph.addEdge("c_vs_vv_fan_motor", "mt_relative_humidity", { size: arrowSize })
graph.addEdge("c_vs_vv_fan_motor", "mt_true_rms_power", { size: arrowSize })
graph.addEdge("c_vs_vv_fan_motor", "mt_outdoor_air_temp", { size: arrowSize })
graph.addEdge("c_cs_cv_pump_motor", "mt_electrical_spot_measurements", { size: arrowSize })
graph.addEdge("c_cs_cv_pump_motor", "mt_motor_runtime", { size: arrowSize })
graph.addEdge("c_vs_vv_pump_motor", "mt_true_rms_power", { size: arrowSize })
graph.addEdge("c_vs_vv_pump_motor", "mt_outdoor_air_temp", { size: arrowSize })
graph.addEdge("c_cs_cv_compressor_motor", "mt_true_rms_power", { size: arrowSize })
graph.addEdge("c_cs_cv_compressor_motor", "mt_pipe_surface_water_temp", { size: arrowSize })
graph.addEdge("c_cs_cv_compressor_motor", "mt_outdoor_air_temp", { size: arrowSize })
graph.addEdge("c_cs_cv_compressor_motor", "mt_water_flow_rate", { size: arrowSize })
graph.addEdge("c_liquid_to_liquid_exchanger", "mt_water_flow_rate", { size: arrowSize })
graph.addEdge("c_liquid_to_liquid_exchanger", "mt_pipe_surface_water_temp", { size: arrowSize })
graph.addEdge("mt_electrical_spot_measurements", "cm_pump_motors_energy_consumption", { size: arrowSize })
graph.addEdge("mt_motor_runtime", "cm_pump_motors_energy_consumption", { size: arrowSize })
graph.addEdge("mt_true_rms_power", "cm_pump_motors_energy_consumption", { size: arrowSize })
graph.addEdge("mt_outdoor_air_temp", "cm_pump_motors_energy_consumption", { size: arrowSize })
graph.addEdge("mt_electrical_spot_measurements", "cm_cooling_tower_fan_energy_consumption", { size: arrowSize })
graph.addEdge("mt_relative_humidity", "cm_cooling_tower_fan_energy_consumption", { size: arrowSize })
graph.addEdge("mt_motor_runtime", "cm_cooling_tower_fan_energy_consumption", { size: arrowSize })
graph.addEdge("mt_outdoor_air_temp", "cm_cooling_tower_fan_energy_consumption", { size: arrowSize })
graph.addEdge("mt_true_rms_power", "cm_cooling_tower_fan_energy_consumption", { size: arrowSize })
graph.addEdge("mt_true_rms_power", "cm_watercooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_pipe_surface_water_temp", "cm_watercooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_outdoor_air_temp", "cm_watercooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_water_flow_rate", "cm_watercooled_chiller_energy_consumption", { size: arrowSize })
graph.addEdge("mt_water_flow_rate", "cm_liquid_to_liquid_heat_exchanger_heat_transfer", { size: arrowSize })
graph.addEdge("mt_pipe_surface_water_temp", "cm_liquid_to_liquid_heat_exchanger_heat_transfer", { size: arrowSize })
// graph.addEdge("", "", { size: arrowSize })
// graph.addEdge("", "", { size: arrowSize })
// graph.addEdge("", "", { size: arrowSize })
// graph.addEdge("", "", { size: arrowSize })
// graph.addEdge("", "", { size: arrowSize })
// graph.addEdge("", "", { size: arrowSize })
// graph.addEdge("", "", { size: arrowSize })
// graph.addEdge("", "", { size: arrowSize })

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
