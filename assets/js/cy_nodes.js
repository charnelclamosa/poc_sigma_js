import nodes_config from "./nodes_config"
const PLANTS = nodes_config.plants
const SYSTEMS = nodes_config.systems
const COMPONENTS = nodes_config.components
const MEASUREMENT_TECHNIQUE = nodes_config.measurement_technicques
const CALCULATION_METHODOLOGY = nodes_config.calculation_methodology
const COL_1 = 100
const COL_2 = 435
const COL_3 = 750
const COL_4 = 1075
const COL_5 = 1400

export default [
  /**
   * 1st row
   */
  {
    data: {
      id: PLANTS.lighting_p.key, 
      name: PLANTS.lighting_p.name, 
      url: PLANTS.lighting_p.url
    },
    position: {x: COL_1, y: 100}
  },
   {
     data: {
       id: SYSTEMS.lighting_fixture_s.key, 
       name: SYSTEMS.lighting_fixture_s.name, 
       url: SYSTEMS.lighting_fixture_s.url
     },
     position: {x: COL_2, y: 100}
   },
  // {
  //   data: {
  //     id: COMPONENTS.const_spd_const_vol_pump_motor.key,
  //     name: COMPONENTS.const_spd_const_vol_pump_motor.name,
  //     url: COMPONENTS.const_spd_const_vol_pump_motor.url
  //   },
  //   position: {x: COL_3, y: 100}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.key,
  //     name: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.name,
  //     url: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.url
  //   },
  //   position: {x: COL_4, y: 100}
  // },
  // {
  //   data: {
  //     id: CALCULATION_METHODOLOGY.lighting_energy_consumption.key,
  //     name: CALCULATION_METHODOLOGY.lighting_energy_consumption.name,
  //     url: CALCULATION_METHODOLOGY.lighting_energy_consumption.url
  //   },
  //   position: {x: COL_5, y: 100}
  // },
  // /**
  //  * 2nd row
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.electrical_distribution_s.key, 
  //     name: SYSTEMS.electrical_distribution_s.name, 
  //     url: SYSTEMS.electrical_distribution_s.url
  //   },
  //   position: {x: COL_2, y: 200}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.true_rms_power.key,
  //     name: MEASUREMENT_TECHNIQUE.true_rms_power.name,
  //     url: MEASUREMENT_TECHNIQUE.true_rms_power.url
  //   },
  //   position: {x: COL_4, y: 200}
  // },
  // {
  //   data: {
  //     id: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key,
  //     name: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.name,
  //     url: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.url
  //   },
  //   position: {x: COL_5, y: 200}
  // },
  // /**
  //  * 3rd row
  //  */
  // {
  //   data: {
  //     id: PLANTS.air_cooled_chilled_water_p.key, 
  //     name: PLANTS.air_cooled_chilled_water_p.name, 
  //     url: PLANTS.air_cooled_chilled_water_p.url
  //   },
  //   position: {x: COL_1, y: 300}
  // },
  // {
  //   data: {
  //     id: COMPONENTS.var_spd_var_vol_pump_motor.key,
  //     name: COMPONENTS.var_spd_var_vol_pump_motor.name,
  //     url: COMPONENTS.var_spd_var_vol_pump_motor.url
  //   },
  //   position: {x: COL_3, y: 300}
  // },
  // {
  //   data: {
  //     id: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key,
  //     name: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.name,
  //     url: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.url
  //   },
  //   position: {x: COL_5, y: 300}
  // },
  // /**
  //  * 4th row
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.air_cooled_chiller_s.key, 
  //     name: SYSTEMS.air_cooled_chiller_s.name, 
  //     url: SYSTEMS.air_cooled_chiller_s.url
  //   },
  //   position: {x: COL_2, y: 400}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key,
  //     name: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.name,
  //     url: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.url
  //   },
  //   position: {x: COL_4, y: 400}
  // },
  // /**
  //  * 5th row
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.chilled_water_loop.key, 
  //     name: SYSTEMS.chilled_water_loop.name, 
  //     url: SYSTEMS.chilled_water_loop.url
  //   },
  //   position: {x: COL_2, y: 500}
  // },
  // {
  //   data: {
  //     id: COMPONENTS.const_spd_const_vol_compressor_motor.key,
  //     name: COMPONENTS.const_spd_const_vol_compressor_motor.name,
  //     url: COMPONENTS.const_spd_const_vol_compressor_motor.url
  //   },
  //   position: {x: COL_3, y: 500}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.electrical_current.key,
  //     name: MEASUREMENT_TECHNIQUE.electrical_current.name,
  //     url: MEASUREMENT_TECHNIQUE.electrical_current.url
  //   },
  //   position: {x: COL_4, y: 500}
  // },
  // {
  //   data: {
  //     id: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key,
  //     name: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.name,
  //     url: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.url
  //   },
  //   position: {x: COL_5, y: 500}
  // },
  // /**
  //  * 6th row
  //  */
  // {
  //   data: {
  //     id: PLANTS.water_cooled_chilled_water_p.key, 
  //     name: PLANTS.water_cooled_chilled_water_p.name, 
  //     url: PLANTS.water_cooled_chilled_water_p.url
  //   },
  //   position: {x: COL_1, y: 600}
  // },
  // {
  //   data: {
  //     id: SYSTEMS.condenser_water_loop.key, 
  //     name: SYSTEMS.condenser_water_loop.name, 
  //     url: SYSTEMS.condenser_water_loop.url
  //   },
  //   position: {x: COL_2, y: 600}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.motor_runtime.key,
  //     name: MEASUREMENT_TECHNIQUE.motor_runtime.name,
  //     url: MEASUREMENT_TECHNIQUE.motor_runtime.url
  //   },
  //   position: {x: COL_4, y: 600}
  // },
  // /**
  //  * 7th row
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.water_cooled_chiller.key, 
  //     name: SYSTEMS.water_cooled_chiller.name, 
  //     url: SYSTEMS.water_cooled_chiller.url
  //   },
  //   position: {x: COL_2, y: 700}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key,
  //     name: MEASUREMENT_TECHNIQUE.outdoor_air_temp.name,
  //     url: MEASUREMENT_TECHNIQUE.outdoor_air_temp.url
  //   },
  //   position: {x: COL_4, y: 700}
  // },
  // {
  //   data: {
  //     id: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key,
  //     name: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.name,
  //     url: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.url
  //   },
  //   position: {x: COL_5, y: 700}
  // },

  // /**
  //  * 
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.waterside_economizer.key,
  //     name: SYSTEMS.waterside_economizer.name,
  //     url: SYSTEMS.waterside_economizer.url
  //   },
  //   position: {x: COL_2, y: 800}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key,
  //     name: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.name,
  //     url: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.url
  //   },
  //   position: {x: COL_4, y: 800}
  // },
  // /**
  //  * 8th row
  //  */

  // {
  //   data: {
  //     id: PLANTS.air_handling_p.key, 
  //     name: PLANTS.air_handling_p.name, 
  //     url: PLANTS.air_handling_p.url
  //   },
  //   position: {x: COL_1, y: 900}
  // },
  // {
  //   data: {
  //     id: SYSTEMS.const_spd_const_vol_air_handling_unit.key,
  //     name: SYSTEMS.const_spd_const_vol_air_handling_unit.name,
  //     url: SYSTEMS.const_spd_const_vol_air_handling_unit.url
  //   },
  //   position: {x: COL_2, y: 900}
  // },
  // {
  //   data: {
  //     id: COMPONENTS.const_spd_const_vol_fan_motor.key,
  //     name: COMPONENTS.const_spd_const_vol_fan_motor.name,
  //     url: COMPONENTS.const_spd_const_vol_fan_motor.url
  //   },
  //   position: {x: COL_3, y: 900}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.water_flow_rate.key,
  //     name: MEASUREMENT_TECHNIQUE.water_flow_rate.name,
  //     url: MEASUREMENT_TECHNIQUE.water_flow_rate.url
  //   },
  //   position: {x: COL_4, y: 900}
  // },
  // /**
  //  * 9th row
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.var_spd_var_vol_air_handling_unit.key,
  //     name: SYSTEMS.var_spd_var_vol_air_handling_unit.name,
  //     url: SYSTEMS.var_spd_var_vol_air_handling_unit.url
  //   },
  //   position: {x: COL_2, y: 1000}
  // },
  // {
  //   data: {
  //     id: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key,
  //     name: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.name,
  //     url: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.url
  //   },
  //   position: {x: COL_5, y: 1000}
  // },
  // /**
  //  * 10th row
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.air_to_air_energy_recovery.key,
  //     name: SYSTEMS.air_to_air_energy_recovery.name,
  //     url: SYSTEMS.air_to_air_energy_recovery.url
  //   },
  //   position: {x: COL_2, y: 1100}
  // },
  // {
  //   data: {
  //     id: COMPONENTS.var_spd_var_vol_fan_motor.key,
  //     name: COMPONENTS.var_spd_var_vol_fan_motor.name,
  //     url: COMPONENTS.var_spd_var_vol_fan_motor.url
  //   },
  //   position: {x: COL_3, y: 1100}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.relative_humid.key,
  //     name: MEASUREMENT_TECHNIQUE.relative_humid.name,
  //     url: MEASUREMENT_TECHNIQUE.relative_humid.url
  //   },
  //   position: {x: COL_4, y: 1100}
  // },
  // /**
  //  * 11th row
  //  */
  // {
  //   data: {
  //     id: PLANTS.hot_water_heating_p.key, 
  //     name: PLANTS.hot_water_heating_p.name, 
  //     url: PLANTS.hot_water_heating_p.url
  //   },
  //   position: {x: COL_1, y: 1200}
  // },
  // {
  //   data: {
  //     id: SYSTEMS.boiler.key,
  //     name: SYSTEMS.boiler.name,
  //     url: SYSTEMS.boiler.url
  //   },
  //   position: {x: COL_2, y: 1200}
  // },
  // /**
  //  * 12th row
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.hot_water_loop.key,
  //     name: SYSTEMS.hot_water_loop.name,
  //     url: SYSTEMS.hot_water_loop.url
  //   },
  //   position: {x: COL_2, y: 1300}
  // },
  // {
  //   data: {
  //     id: COMPONENTS.liquid_to_liquid_heat_exchanger.key,
  //     name: COMPONENTS.liquid_to_liquid_heat_exchanger.name,
  //     url: COMPONENTS.liquid_to_liquid_heat_exchanger.url
  //   },
  //   position: {x: COL_3, y: 1300}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.air_flow_rate.key,
  //     name: MEASUREMENT_TECHNIQUE.air_flow_rate.name,
  //     url: MEASUREMENT_TECHNIQUE.air_flow_rate.url
  //   },
  //   position: {x: COL_4, y: 1300}
  // },
  // {
  //   data: {
  //     id: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.key,
  //     name: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.name,
  //     url: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.url
  //   },
  //   position: {x: COL_5, y: 1300}
  // },
  // /**
  //  * 13th row
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.feedwater_s.key,
  //     name: SYSTEMS.feedwater_s.name,
  //     url: SYSTEMS.feedwater_s.url
  //   },
  //   position: {x: COL_2, y: 1400}
  // },
  // /**
  //  * 14th row
  //  */
  // {
  //   data: {
  //     id: PLANTS.steam_p.key, 
  //     name: PLANTS.steam_p.name, 
  //     url: PLANTS.steam_p.url
  //   },
  //   position: {x: COL_1, y: 1500}
  // },
  // {
  //   data: {
  //     id: SYSTEMS.steam_condensate_recovery_s.key,
  //     name: SYSTEMS.steam_condensate_recovery_s.name,
  //     url: SYSTEMS.steam_condensate_recovery_s.url
  //   },
  //   position: {x: COL_2, y: 1500}
  // },
  // {
  //   data: {
  //     id: COMPONENTS.air_to_air_heat_exchanger.key,
  //     name: COMPONENTS.air_to_air_heat_exchanger.name,
  //     url: COMPONENTS.air_to_air_heat_exchanger.url
  //   },
  //   position: {x: COL_3, y: 1500}
  // },
  // {
  //   data: {
  //     id: MEASUREMENT_TECHNIQUE.system_air_temp.key,
  //     name: MEASUREMENT_TECHNIQUE.system_air_temp.name,
  //     url: MEASUREMENT_TECHNIQUE.system_air_temp.url
  //   },
  //   position: {x: COL_4, y: 1500}
  // },
  // {
  //   data: {
  //     id: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key,
  //     name: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.name,
  //     url: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.url
  //   },
  //   position: {x: COL_5, y: 1500}
  // },
  // /**
  //  * 15th row
  //  */
  // {
  //   data: {
  //     id: SYSTEMS.steam_distribution_s.key,
  //     name: SYSTEMS.steam_distribution_s.name,
  //     url: SYSTEMS.steam_distribution_s.url
  //   },
  //   position: {x: COL_2, y: 1600}
  // }
]