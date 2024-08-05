import Sigma from "sigma"
import { Graph } from "graphology";
import { createNodeImageProgram } from "@sigma/node-image"
import {
  DEFAULT_EDGE_CURVATURE,
  EdgeCurvedArrowProgram,
  indexParallelEdgesIndex
} from "@sigma/edge-curve"
import { EdgeArrowProgram, NodeCircleProgram, NodePointProgram } from "sigma/rendering"
import nodes_config from "./nodes"

const PLANTS = nodes_config.plants
const SYSTEMS = nodes_config.systems
const COMPONENTS = nodes_config.components
const MEASUREMENT_TECHNIQUE = nodes_config.measurement_technicques
const CALCULATION_METHODOLOGY = nodes_config.calculation_methodology
const COL_1 = 0
const COL_2 = 4
const COL_3 = 8
const COL_4 = 12
const COL_5 = 15
const ROW_1 = 0
const ROW_2 = -1
const ROW_3 = -2
const ROW_4 = -3
const ROW_5 = -4
const ROW_6 = -5
const ROW_7 = -6
const ROW_8 = -7
const ROW_9 = -8
const ROW_10 = -9
const ROW_11 = -10
const ROW_12 = -11
const ROW_13 = -12
const ROW_14 = -13
const ROW_15 = -14
const ROW_16 = -15
const NODE_SIZE = 20
const EDGE_SIZE = 5

const container = document.getElementById("first-table")
// Create a graph, with various parallel edges:
const graph = new Graph()

function getCurvature(index, maxIndex) {
    if (maxIndex <= 0) throw new Error("Invalid maxIndex")
    if (index < 0) return -getCurvature(-index, maxIndex)
    const amplitude = 3.5
    const maxCurvature =
        amplitude * (1 - Math.exp(-maxIndex / amplitude)) * DEFAULT_EDGE_CURVATURE
    return (maxCurvature * index) / maxIndex
}

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
    key: PLANTS.lighting_p.key,
    label: PLANTS.lighting_p.label,
    col: COL_1,
    row: ROW_1,
    size: NODE_SIZE,
    url: PLANTS.lighting_p.url
  },
  {
    key: PLANTS.air_cooled_chilled_water_p.key,
    label: PLANTS.air_cooled_chilled_water_p.label,
    col: COL_1,
    row: ROW_3,
    size: NODE_SIZE,
    url: PLANTS.air_cooled_chilled_water_p.url
  },
  {
    key: PLANTS.water_cooled_chilled_water_p.key,
    label: PLANTS.water_cooled_chilled_water_p.label,
    col: COL_1,
    row: ROW_6,
    size: NODE_SIZE,
    url: PLANTS.water_cooled_chilled_water_p.url
  },
  {
    key: PLANTS.air_handling_p.key,
    label: PLANTS.air_handling_p.label,
    col: COL_1,
    row: ROW_9,
    size: NODE_SIZE,
    url: PLANTS.air_handling_p.url
  },
  {
    key: PLANTS.hot_water_heating_p.key,
    label: PLANTS.hot_water_heating_p.label,
    col: COL_1,
    row: ROW_12,
    size: NODE_SIZE,
    url: PLANTS.hot_water_heating_p.url
  },
  {
    key: PLANTS.steam_p.key,
    label: PLANTS.steam_p.label,
    col: COL_1,
    row: ROW_15,
    size: NODE_SIZE,
    url: PLANTS.steam_p.url
  },
  // Systems
  {
    key: SYSTEMS.lighting_fixture_s.key,
    label: SYSTEMS.lighting_fixture_s.label,
    col: COL_2,
    row: ROW_1,
    size: NODE_SIZE,
    url: SYSTEMS.lighting_fixture_s.url
  },
  {
    key: SYSTEMS.electrical_distribution_s.key,
    label: SYSTEMS.electrical_distribution_s.label,
    col: COL_2,
    row: ROW_2,
    size: NODE_SIZE,
    url: SYSTEMS.electrical_distribution_s.url
  },
  {
    key: SYSTEMS.chilled_water_loop_s.key,
    label: SYSTEMS.chilled_water_loop_s.label,
    col: COL_2,
    row: ROW_3,
    size: NODE_SIZE,
    url: SYSTEMS.chilled_water_loop_s.url
  },
  {
    key: SYSTEMS.air_cooled_chiller_s.key,
    label: SYSTEMS.air_cooled_chiller_s.label,
    col: COL_2,
    row: ROW_4,
    size: NODE_SIZE,
    url: SYSTEMS.air_cooled_chiller_s.url
  },
  {
    key: SYSTEMS.chilled_water_loop.key,
    label: SYSTEMS.chilled_water_loop.label,
    col: COL_2,
    row: ROW_5,
    size: NODE_SIZE,
    url: SYSTEMS.chilled_water_loop.url
  },
  {
    key: SYSTEMS.condenser_water_loop.key,
    label: SYSTEMS.condenser_water_loop.label,
    col: COL_2,
    row: ROW_6,
    size: NODE_SIZE,
    url: SYSTEMS.condenser_water_loop.url
  },
  {
    key: SYSTEMS.water_cooled_chiller.key,
    label: SYSTEMS.water_cooled_chiller.label,
    col: COL_2,
    row: ROW_7,
    size: NODE_SIZE,
    url: SYSTEMS.water_cooled_chiller.url
  },
  {
    key: SYSTEMS.waterside_economizer.key,
    label: SYSTEMS.waterside_economizer.label,
    col: COL_2,
    row: ROW_8,
    size: NODE_SIZE,
    url: SYSTEMS.waterside_economizer.url
  },
  {
    key: SYSTEMS.const_spd_const_vol_air_handling_unit.key,
    label: SYSTEMS.const_spd_const_vol_air_handling_unit.label,
    col: COL_2,
    row: ROW_9,
    size: NODE_SIZE,
    url: SYSTEMS.const_spd_const_vol_air_handling_unit.url
  },
  {
    key: SYSTEMS.var_spd_var_vol_air_handling_unit.key,
    label: SYSTEMS.var_spd_var_vol_air_handling_unit.label,
    col: COL_2,
    row: ROW_10,
    size: NODE_SIZE,
    url: SYSTEMS.var_spd_var_vol_air_handling_unit.url
  },
  {
    key: SYSTEMS.air_to_air_energy_recovery.key,
    label: SYSTEMS.air_to_air_energy_recovery.label,
    col: COL_2,
    row: ROW_11,
    size: NODE_SIZE,
    url: SYSTEMS.air_to_air_energy_recovery.url
  },
  {
    key: SYSTEMS.boiler.key,
    label: SYSTEMS.boiler.label,
    col: COL_2,
    row: ROW_12,
    size: NODE_SIZE,
    url: SYSTEMS.boiler.url
  },
  {
    key: SYSTEMS.hot_water_loop.key,
    label: SYSTEMS.hot_water_loop.label,
    col: COL_2,
    row: ROW_13,
    size: NODE_SIZE,
    url: SYSTEMS.hot_water_loop.url
  },
  {
    key: SYSTEMS.feedwater_s.key,
    label: SYSTEMS.feedwater_s.label,
    col: COL_2,
    row: ROW_14,
    size: NODE_SIZE,
    url: SYSTEMS.feedwater_s.url
  },
  {
    key: SYSTEMS.steam_condensate_recovery_s.key,
    label: SYSTEMS.steam_condensate_recovery_s.label,
    col: COL_2,
    row: ROW_15,
    size: NODE_SIZE,
    url: SYSTEMS.steam_condensate_recovery_s.url
  },
  {
    key: SYSTEMS.steam_distribution_s.key,
    label: SYSTEMS.steam_distribution_s.label,
    col: COL_2,
    row: ROW_16,
    size: NODE_SIZE,
    url: SYSTEMS.steam_distribution_s.url
  },
  // Components
  {
    key: COMPONENTS.const_spd_const_vol_pump_motor.key,
    label: COMPONENTS.const_spd_const_vol_pump_motor.label,
    col: COL_3,
    row: ROW_1,
    size: NODE_SIZE,
    url: COMPONENTS.const_spd_const_vol_pump_motor.url
  },
  {
    key: COMPONENTS.var_spd_var_vol_pump_motor.key,
    label: COMPONENTS.var_spd_var_vol_pump_motor.label,
    col: COL_3,
    row: ROW_3,
    size: NODE_SIZE,
    url: COMPONENTS.var_spd_var_vol_pump_motor.url
  },
  {
    key: COMPONENTS.const_spd_const_vol_compressor_motor.key,
    label: COMPONENTS.const_spd_const_vol_compressor_motor.label,
    col: COL_3,
    row: ROW_5,
    size: NODE_SIZE,
    url: COMPONENTS.const_spd_const_vol_compressor_motor.url
  },
  {
    key: COMPONENTS.var_spd_var_vol_compressor_motor.key,
    label: COMPONENTS.var_spd_var_vol_compressor_motor.label,
    col: COL_3,
    row: ROW_7,
    size: NODE_SIZE,
    url: COMPONENTS.var_spd_var_vol_compressor_motor.url
  },
  {
    key: COMPONENTS.const_spd_const_vol_fan_motor.key,
    label: COMPONENTS.const_spd_const_vol_fan_motor.label,
    col: COL_3,
    row: ROW_9,
    size: NODE_SIZE,
    url: COMPONENTS.const_spd_const_vol_fan_motor.url
  },
  {
    key: COMPONENTS.var_spd_var_vol_fan_motor.key,
    label: COMPONENTS.var_spd_var_vol_fan_motor.label,
    col: COL_3,
    row: ROW_11,
    size: NODE_SIZE,
    url: COMPONENTS.var_spd_var_vol_fan_motor.url
  },
  {
    key: COMPONENTS.liquid_to_liquid_heat_exchanger.key,
    label: COMPONENTS.liquid_to_liquid_heat_exchanger.label,
    col: COL_3,
    row: ROW_13,
    size: NODE_SIZE,
    url: COMPONENTS.liquid_to_liquid_heat_exchanger.url
  },
  {
    key: COMPONENTS.air_to_air_heat_exchanger.key,
    label: COMPONENTS.air_to_air_heat_exchanger.label,
    col: COL_3,
    row: ROW_15,
    size: NODE_SIZE,
    url: COMPONENTS.air_to_air_heat_exchanger.url
  },
  // Measurement Techniques
  {
    key: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.key,
    label: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.label,
    col: COL_4,
    row: ROW_1,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.true_rms_power.key,
    label: MEASUREMENT_TECHNIQUE.true_rms_power.label,
    col: COL_4,
    row: ROW_2,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.true_rms_power.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key,
    label: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.label,
    col: COL_4,
    row: ROW_4,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.electrical_current.key,
    label: MEASUREMENT_TECHNIQUE.electrical_current.label,
    col: COL_4,
    row: ROW_5,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.electrical_current.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.motor_runtime.key,
    label: MEASUREMENT_TECHNIQUE.motor_runtime.label,
    col: COL_4,
    row: ROW_6,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.motor_runtime.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key,
    label: MEASUREMENT_TECHNIQUE.outdoor_air_temp.label,
    col: COL_4,
    row: ROW_7,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.outdoor_air_temp.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key,
    label: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.label,
    col: COL_4,
    row: ROW_8,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.water_flow_rate.key,
    label: MEASUREMENT_TECHNIQUE.water_flow_rate.label,
    col: COL_4,
    row: ROW_9,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.water_flow_rate.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.relative_humid.key,
    label: MEASUREMENT_TECHNIQUE.relative_humid.label,
    col: COL_4,
    row: ROW_11,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.relative_humid.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.air_flow_rate.key,
    label: MEASUREMENT_TECHNIQUE.air_flow_rate.label,
    col: COL_4,
    row: ROW_13,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.air_flow_rate.url
  },
  {
    key: MEASUREMENT_TECHNIQUE.system_air_temp.key,
    label: MEASUREMENT_TECHNIQUE.system_air_temp.label,
    col: COL_4,
    row: ROW_15,
    size: NODE_SIZE,
    url: MEASUREMENT_TECHNIQUE.system_air_temp.url
  },
  // Calculation Methodology
  {
    key: CALCULATION_METHODOLOGY.lighting_energy_consumption.key,
    label: CALCULATION_METHODOLOGY.lighting_energy_consumption.label,
    col: COL_5,
    row: ROW_1,
    size: NODE_SIZE,
    url: CALCULATION_METHODOLOGY.lighting_energy_consumption.url
  },
  {
    key: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key,
    label: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.label,
    col: COL_5,
    row: ROW_2,
    size: NODE_SIZE,
    url: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.url
  },
  {
    key: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key,
    label: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.label,
    col: COL_5,
    row: ROW_3,
    size: NODE_SIZE,
    url: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.url
  },
  {
    key: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key,
    label: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.label,
    col: COL_5,
    row: ROW_5,
    size: NODE_SIZE,
    url: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.url
  },
  {
    key: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key,
    label: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.label,
    col: COL_5,
    row: ROW_7,
    size: NODE_SIZE,
    url: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.url
  },
  {
    key: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key,
    label: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.label,
    col: COL_5,
    row: ROW_10,
    size: NODE_SIZE,
    url: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.url
  },
  {
    key: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.key,
    label: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.label,
    col: COL_5,
    row: ROW_13,
    size: NODE_SIZE,
    url: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.url
  },
  {
    key: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key,
    label: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.label,
    col: COL_5,
    row: ROW_15,
    size: NODE_SIZE,
    url: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.url
  }
]

// Create the nodes.
myNodes.forEach(value => {
  graph.addNode(value.key, {
    forceLabel: true,
    label: value.label,
    x: value.col,
    y: value.row,
    size: value.size,
    url: value.url,
    type: "square"
  })
})

// Construction edges
// Lighting Plant
// Plants -> System
graph.addEdge(
  PLANTS.lighting_p.key, 
  SYSTEMS.lighting_fixture_s.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.lighting_p.key, 
  SYSTEMS.electrical_distribution_s.key, 
  { size: EDGE_SIZE }
)
// Systems -> Measurement Techniques
graph.addEdge(
  SYSTEMS.lighting_fixture_s.key, 
  MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.electrical_distribution_s.key, 
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.electrical_distribution_s.key, 
  MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.electrical_distribution_s.key, 
  MEASUREMENT_TECHNIQUE.electrical_current.key, 
  { size: EDGE_SIZE }
)
// Measurement Techniques -> Calculation Methodology
graph.addEdge(
  MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.key, 
  CALCULATION_METHODOLOGY.lighting_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  CALCULATION_METHODOLOGY.lighting_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key, 
  CALCULATION_METHODOLOGY.lighting_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.electrical_current.key, 
  CALCULATION_METHODOLOGY.lighting_energy_consumption.key, 
  { size: EDGE_SIZE }
)

// Air-cooled Chilled Water Plant
// Plants -> Systems
graph.addEdge(
  PLANTS.air_cooled_chilled_water_p.key, 
  SYSTEMS.chilled_water_loop_s.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.air_cooled_chilled_water_p.key, 
  SYSTEMS.air_cooled_chiller_s.key, 
  { size: EDGE_SIZE }
)
// Systems -> Components
graph.addEdge(
  SYSTEMS.chilled_water_loop_s.key, 
  COMPONENTS.const_spd_const_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.chilled_water_loop_s.key, 
  COMPONENTS.var_spd_var_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.air_cooled_chiller_s.key, 
  COMPONENTS.const_spd_const_vol_compressor_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.air_cooled_chiller_s.key, 
  COMPONENTS.var_spd_var_vol_compressor_motor.key, 
  { size: EDGE_SIZE }
)
// Components -> Measurement Techniques
graph.addEdge(
  COMPONENTS.const_spd_const_vol_pump_motor.key, 
  MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.const_spd_const_vol_pump_motor.key, 
  MEASUREMENT_TECHNIQUE.motor_runtime.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.var_spd_var_vol_pump_motor.key, 
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.var_spd_var_vol_pump_motor.key, 
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.const_spd_const_vol_compressor_motor.key, 
  MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.const_spd_const_vol_compressor_motor.key, 
  MEASUREMENT_TECHNIQUE.water_flow_rate.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.const_spd_const_vol_compressor_motor.key, 
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.var_spd_var_vol_compressor_motor.key, 
  MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.var_spd_var_vol_compressor_motor.key, 
  MEASUREMENT_TECHNIQUE.water_flow_rate.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.var_spd_var_vol_compressor_motor.key, 
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.var_spd_var_vol_compressor_motor.key, 
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  { size: EDGE_SIZE }
)
// Measurement Techniques -> Calculation Methodology
graph.addEdge(
  MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key, 
  CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.motor_runtime.key, 
  CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key, 
  CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.water_flow_rate.key, 
  CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key, 
  { size: EDGE_SIZE }
)

// Water-cooled Chilled Water Plant
// Plants -> Systems
graph.addEdge(
  PLANTS.water_cooled_chilled_water_p.key, 
  SYSTEMS.chilled_water_loop.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.water_cooled_chilled_water_p.key, 
  SYSTEMS.condenser_water_loop.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.water_cooled_chilled_water_p.key, 
  SYSTEMS.water_cooled_chiller.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.water_cooled_chilled_water_p.key, 
  SYSTEMS.waterside_economizer.key, 
  { size: EDGE_SIZE }
)
// Systems -> Components
graph.addEdge(
  SYSTEMS.chilled_water_loop.key, 
  COMPONENTS.const_spd_const_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.chilled_water_loop.key, 
  COMPONENTS.var_spd_var_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.condenser_water_loop.key, 
  COMPONENTS.const_spd_const_vol_fan_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.condenser_water_loop.key, 
  COMPONENTS.var_spd_var_vol_fan_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.condenser_water_loop.key, 
  COMPONENTS.const_spd_const_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.condenser_water_loop.key, 
  COMPONENTS.var_spd_var_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.water_cooled_chiller.key, 
  COMPONENTS.const_spd_const_vol_compressor_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.water_cooled_chiller.key, 
  COMPONENTS.var_spd_var_vol_compressor_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.waterside_economizer.key, 
  COMPONENTS.liquid_to_liquid_heat_exchanger.key, 
  { size: EDGE_SIZE }
)
// Components -> Measurement Techniques
graph.addEdge(
  COMPONENTS.const_spd_const_vol_fan_motor.key, 
  MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.const_spd_const_vol_fan_motor.key, 
  MEASUREMENT_TECHNIQUE.relative_humid.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.const_spd_const_vol_fan_motor.key, 
  MEASUREMENT_TECHNIQUE.motor_runtime.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.const_spd_const_vol_fan_motor.key, 
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.var_spd_var_vol_fan_motor.key, 
  MEASUREMENT_TECHNIQUE.relative_humid.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.var_spd_var_vol_fan_motor.key, 
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.var_spd_var_vol_fan_motor.key, 
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.const_spd_const_vol_compressor_motor.key, 
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.liquid_to_liquid_heat_exchanger.key, 
  MEASUREMENT_TECHNIQUE.water_flow_rate.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.liquid_to_liquid_heat_exchanger.key, 
  MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key, 
  { size: EDGE_SIZE }
)
// Measurement Techniques -> Calculation Methodology
graph.addEdge(
  MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key, 
  CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.relative_humid.key, 
  CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.motor_runtime.key, 
  CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key, 
  CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.water_flow_rate.key, 
  CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.water_flow_rate.key, 
  CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key, 
  CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.key, 
  { size: EDGE_SIZE }
)

// Air Handling Plant
// Plants -> Systems
graph.addEdge(
  PLANTS.air_handling_p.key, 
  SYSTEMS.const_spd_const_vol_air_handling_unit.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.air_handling_p.key, 
  SYSTEMS.var_spd_var_vol_air_handling_unit.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.air_handling_p.key, 
  SYSTEMS.air_to_air_energy_recovery.key, 
  { size: EDGE_SIZE }
)
// Systems -> Components
graph.addEdge(
  SYSTEMS.const_spd_const_vol_air_handling_unit.key, 
  COMPONENTS.const_spd_const_vol_fan_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.var_spd_var_vol_air_handling_unit.key, 
  COMPONENTS.var_spd_var_vol_fan_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.air_to_air_energy_recovery.key, 
  COMPONENTS.air_to_air_heat_exchanger.key, 
  { size: EDGE_SIZE }
)
// Components -> Measurement Techniques
graph.addEdge(
  COMPONENTS.air_to_air_heat_exchanger.key, 
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.air_to_air_heat_exchanger.key, 
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.air_to_air_heat_exchanger.key, 
  MEASUREMENT_TECHNIQUE.air_flow_rate.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.air_to_air_heat_exchanger.key, 
  MEASUREMENT_TECHNIQUE.relative_humid.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  COMPONENTS.air_to_air_heat_exchanger.key, 
  MEASUREMENT_TECHNIQUE.system_air_temp.key, 
  { size: EDGE_SIZE }
)
// Measurement Techniques -> Calculation Methodology
graph.addEdge(
  MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key, 
  CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.motor_runtime.key, 
  CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.true_rms_power.key, 
  CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.outdoor_air_temp.key, 
  CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.air_flow_rate.key, 
  CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.relative_humid.key, 
  CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  MEASUREMENT_TECHNIQUE.system_air_temp.key, 
  CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key, 
  { size: EDGE_SIZE }
)

// Hot-water Heating Plant
// Plants -> System
graph.addEdge(
  PLANTS.hot_water_heating_p.key, 
  SYSTEMS.boiler.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.hot_water_heating_p.key, 
  SYSTEMS.hot_water_loop.key, 
  { size: EDGE_SIZE }
)
// Systems -> Components
graph.addEdge(
  SYSTEMS.boiler.key, 
  COMPONENTS.var_spd_var_vol_fan_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.hot_water_loop.key, 
  COMPONENTS.const_spd_const_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.hot_water_loop.key, 
  COMPONENTS.var_spd_var_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
// Components -> Measurement Techniques
graph.addEdge(
  COMPONENTS.const_spd_const_vol_fan_motor.key, 
  MEASUREMENT_TECHNIQUE.electrical_current.key, 
  { size: EDGE_SIZE }
)
// Measurement Techniques -> Calculation Methodology
graph.addEdge(
  MEASUREMENT_TECHNIQUE.electrical_current.key, 
  CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key, 
  { size: EDGE_SIZE }
)

// Steam Plant
// Plants -> Systems
graph.addEdge(
  PLANTS.steam_p.key, 
  SYSTEMS.feedwater_s.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.steam_p.key, 
  SYSTEMS.boiler.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.steam_p.key, 
  SYSTEMS.steam_condensate_recovery_s.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  PLANTS.steam_p.key, 
  SYSTEMS.steam_distribution_s.key, 
  { size: EDGE_SIZE }
)
// Systems -> Components
graph.addEdge(
  SYSTEMS.feedwater_s.key, 
  COMPONENTS.const_spd_const_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.feedwater_s.key, 
  COMPONENTS.var_spd_var_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.boiler.key, 
  COMPONENTS.const_spd_const_vol_fan_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.steam_condensate_recovery_s.key, 
  COMPONENTS.const_spd_const_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.steam_condensate_recovery_s.key, 
  COMPONENTS.var_spd_var_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.steam_distribution_s.key, 
  COMPONENTS.const_spd_const_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)
graph.addEdge(
  SYSTEMS.steam_distribution_s.key, 
  COMPONENTS.var_spd_var_vol_pump_motor.key, 
  { size: EDGE_SIZE }
)


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
  defaultNodeType: "square",
  nodeProgramClasses: {
    square: NodeCircleProgram
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
  if (graph.getNodeAttribute(node.node, "url").length <= 0) return
  window.open(graph.getNodeAttribute(node.node, "url"))
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
