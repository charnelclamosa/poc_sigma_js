import nodes_config from "./nodes_config"
const PLANTS = nodes_config.plants
const SYSTEMS = nodes_config.systems
const COMPONENTS = nodes_config.components
const MEASUREMENT_TECHNIQUE = nodes_config.measurement_technicques
const CALCULATION_METHODOLOGY = nodes_config.calculation_methodology
const COL_1 = 120
const COL_2 = 430
const COL_3 = 750
const COL_4 = 1075
const COL_5 = 1400
const ROW_1 = 100
const ROW_2 = 225
const ROW_3 = 350
const ROW_4 = 475
const ROW_5 = 600
const ROW_6 = 725
const ROW_7 = 850
const ROW_8 = 975
const ROW_9 = 1100
const ROW_10 = 1225
const ROW_11 = 1350
const ROW_12 = 1475
const ROW_13 = 1600
const ROW_14 = 1725
const ROW_15 = 1850
const ROW_16 = 1975
const ICON_PLANT = "plant-icon.png"
const ICON_SYSTEM = "system-icon.png"
const ICON_COMPONENT = "component-icon.png"
const ICON_CALC = "calc-icon.png"
const ICON_MEASUREMENT = "measurement-icon.png"

export default [
  /**
   * 1st row
   */
  {
    data: {
      id: PLANTS.lighting_p.key, 
      name: PLANTS.lighting_p.name, 
      url: PLANTS.lighting_p.url,
      icon: ICON_PLANT
    },
    position: {x: COL_1, y: ROW_1}
  },
   {
     data: {
       id: SYSTEMS.lighting_fixture_s.key, 
       name: SYSTEMS.lighting_fixture_s.name, 
       url: SYSTEMS.lighting_fixture_s.url,
       icon: ICON_SYSTEM
     },
     position: {x: COL_2, y: ROW_1}
   },
  {
    data: {
      id: COMPONENTS.const_spd_const_vol_pump_motor.key,
      name: COMPONENTS.const_spd_const_vol_pump_motor.name,
      url: COMPONENTS.const_spd_const_vol_pump_motor.url,
      icon: ICON_COMPONENT
    },
    position: {x: COL_3, y: ROW_1}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.key,
      name: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.name,
      url: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_1}
  },
  {
    data: {
      id: CALCULATION_METHODOLOGY.lighting_energy_consumption.key,
      name: CALCULATION_METHODOLOGY.lighting_energy_consumption.name,
      url: CALCULATION_METHODOLOGY.lighting_energy_consumption.url,
      icon: ICON_CALC
    },
    position: {x: COL_5, y: ROW_1}
  },
  /**
   * 2nd row
   */
  {
    data: {
      id: SYSTEMS.electrical_distribution_s.key, 
      name: SYSTEMS.electrical_distribution_s.name, 
      url: SYSTEMS.electrical_distribution_s.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_2}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.true_rms_power.key,
      name: MEASUREMENT_TECHNIQUE.true_rms_power.name,
      url: MEASUREMENT_TECHNIQUE.true_rms_power.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_2}
  },
  {
    data: {
      id: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key,
      name: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.name,
      url: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.url,
      icon: ICON_CALC
    },
    position: {x: COL_5, y: ROW_2}
  },
  /**
   * 3rd row
   */
  {
    data: {
      id: PLANTS.air_cooled_chilled_water_p.key, 
      name: PLANTS.air_cooled_chilled_water_p.name, 
      url: PLANTS.air_cooled_chilled_water_p.url,
      icon: ICON_PLANT
    },
    position: {x: COL_1, y: ROW_3}
  },
  {
    data: {
      id: COMPONENTS.var_spd_var_vol_pump_motor.key,
      name: COMPONENTS.var_spd_var_vol_pump_motor.name,
      url: COMPONENTS.var_spd_var_vol_pump_motor.url,
      icon: ICON_COMPONENT
    },
    position: {x: COL_3, y: ROW_3}
  },
  {
    data: {
      id: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key,
      name: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.name,
      url: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.url,
      icon: ICON_CALC
    },
    position: {x: COL_5, y: ROW_3}
  },
  /**
   * 4th row
   */
  {
    data: {
      id: SYSTEMS.air_cooled_chiller_s.key, 
      name: SYSTEMS.air_cooled_chiller_s.name, 
      url: SYSTEMS.air_cooled_chiller_s.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_4}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key,
      name: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.name,
      url: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_4}
  },
  /**
   * 5th row
   */
  {
    data: {
      id: SYSTEMS.chilled_water_loop.key, 
      name: SYSTEMS.chilled_water_loop.name, 
      url: SYSTEMS.chilled_water_loop.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_5}
  },
  {
    data: {
      id: COMPONENTS.const_spd_const_vol_compressor_motor.key,
      name: COMPONENTS.const_spd_const_vol_compressor_motor.name,
      url: COMPONENTS.const_spd_const_vol_compressor_motor.url,
      icon: ICON_COMPONENT
    },
    position: {x: COL_3, y: ROW_5}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.electrical_current.key,
      name: MEASUREMENT_TECHNIQUE.electrical_current.name,
      url: MEASUREMENT_TECHNIQUE.electrical_current.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_5}
  },
  {
    data: {
      id: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key,
      name: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.name,
      url: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.url,
      icon: ICON_CALC
    },
    position: {x: COL_5, y: ROW_5}
  },
  /**
   * 6th row
   */
  {
    data: {
      id: PLANTS.water_cooled_chilled_water_p.key, 
      name: PLANTS.water_cooled_chilled_water_p.name, 
      url: PLANTS.water_cooled_chilled_water_p.url,
      icon: ICON_PLANT
    },
    position: {x: COL_1, y: ROW_6}
  },
  {
    data: {
      id: SYSTEMS.condenser_water_loop.key, 
      name: SYSTEMS.condenser_water_loop.name, 
      url: SYSTEMS.condenser_water_loop.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_6}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.motor_runtime.key,
      name: MEASUREMENT_TECHNIQUE.motor_runtime.name,
      url: MEASUREMENT_TECHNIQUE.motor_runtime.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_6}
  },
  /**
   * 7th row
   */
  {
    data: {
      id: SYSTEMS.water_cooled_chiller.key, 
      name: SYSTEMS.water_cooled_chiller.name, 
      url: SYSTEMS.water_cooled_chiller.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_7}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key,
      name: MEASUREMENT_TECHNIQUE.outdoor_air_temp.name,
      url: MEASUREMENT_TECHNIQUE.outdoor_air_temp.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_7}
  },
  {
    data: {
      id: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key,
      name: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.name,
      url: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.url,
      icon: ICON_CALC
    },
    position: {x: COL_5, y: ROW_7}
  },

  /**
   * 
   */
  {
    data: {
      id: SYSTEMS.waterside_economizer.key,
      name: SYSTEMS.waterside_economizer.name,
      url: SYSTEMS.waterside_economizer.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_8}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key,
      name: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.name,
      url: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_8}
  },
  /**
   * 8th row
   */

  {
    data: {
      id: PLANTS.air_handling_p.key, 
      name: PLANTS.air_handling_p.name, 
      url: PLANTS.air_handling_p.url,
      icon: ICON_PLANT
    },
    position: {x: COL_1, y: ROW_9}
  },
  {
    data: {
      id: SYSTEMS.const_spd_const_vol_air_handling_unit.key,
      name: SYSTEMS.const_spd_const_vol_air_handling_unit.name,
      url: SYSTEMS.const_spd_const_vol_air_handling_unit.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_9}
  },
  {
    data: {
      id: COMPONENTS.const_spd_const_vol_fan_motor.key,
      name: COMPONENTS.const_spd_const_vol_fan_motor.name,
      url: COMPONENTS.const_spd_const_vol_fan_motor.url,
      icon: ICON_COMPONENT
    },
    position: {x: COL_3, y: ROW_9}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.water_flow_rate.key,
      name: MEASUREMENT_TECHNIQUE.water_flow_rate.name,
      url: MEASUREMENT_TECHNIQUE.water_flow_rate.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_9}
  },
  /**
   * 9th row
   */
  {
    data: {
      id: SYSTEMS.var_spd_var_vol_air_handling_unit.key,
      name: SYSTEMS.var_spd_var_vol_air_handling_unit.name,
      url: SYSTEMS.var_spd_var_vol_air_handling_unit.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_10}
  },
  {
    data: {
      id: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key,
      name: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.name,
      url: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.url,
      icon: ICON_CALC
    },
    position: {x: COL_5, y: ROW_10}
  },
  /**
   * 10th row
   */
  {
    data: {
      id: SYSTEMS.air_to_air_energy_recovery.key,
      name: SYSTEMS.air_to_air_energy_recovery.name,
      url: SYSTEMS.air_to_air_energy_recovery.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_11}
  },
  {
    data: {
      id: COMPONENTS.var_spd_var_vol_fan_motor.key,
      name: COMPONENTS.var_spd_var_vol_fan_motor.name,
      url: COMPONENTS.var_spd_var_vol_fan_motor.url,
      icon: ICON_COMPONENT
    },
    position: {x: COL_3, y: ROW_11}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.relative_humid.key,
      name: MEASUREMENT_TECHNIQUE.relative_humid.name,
      url: MEASUREMENT_TECHNIQUE.relative_humid.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_11}
  },
  /**
   * 11th row
   */
  {
    data: {
      id: PLANTS.hot_water_heating_p.key, 
      name: PLANTS.hot_water_heating_p.name, 
      url: PLANTS.hot_water_heating_p.url,
      icon: ICON_PLANT
    },
    position: {x: COL_1, y: ROW_12}
  },
  {
    data: {
      id: SYSTEMS.boiler.key,
      name: SYSTEMS.boiler.name,
      url: SYSTEMS.boiler.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_12}
  },
  /**
   * 12th row
   */
  {
    data: {
      id: SYSTEMS.hot_water_loop.key,
      name: SYSTEMS.hot_water_loop.name,
      url: SYSTEMS.hot_water_loop.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_13}
  },
  {
    data: {
      id: COMPONENTS.liquid_to_liquid_heat_exchanger.key,
      name: COMPONENTS.liquid_to_liquid_heat_exchanger.name,
      url: COMPONENTS.liquid_to_liquid_heat_exchanger.url,
      icon: ICON_COMPONENT
    },
    position: {x: COL_3, y: ROW_13}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.air_flow_rate.key,
      name: MEASUREMENT_TECHNIQUE.air_flow_rate.name,
      url: MEASUREMENT_TECHNIQUE.air_flow_rate.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_13}
  },
  {
    data: {
      id: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.key,
      name: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.name,
      url: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.url,
      icon: ICON_CALC
    },
    position: {x: COL_5, y: ROW_13}
  },
  /**
   * 13th row
   */
  {
    data: {
      id: SYSTEMS.feedwater_s.key,
      name: SYSTEMS.feedwater_s.name,
      url: SYSTEMS.feedwater_s.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_14}
  },
  /**
   * 14th row
   */
  {
    data: {
      id: PLANTS.steam_p.key, 
      name: PLANTS.steam_p.name, 
      url: PLANTS.steam_p.url,
      icon: ICON_PLANT
    },
    position: {x: COL_1, y: ROW_15}
  },
  {
    data: {
      id: SYSTEMS.steam_condensate_recovery_s.key,
      name: SYSTEMS.steam_condensate_recovery_s.name,
      url: SYSTEMS.steam_condensate_recovery_s.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_15}
  },
  {
    data: {
      id: COMPONENTS.air_to_air_heat_exchanger.key,
      name: COMPONENTS.air_to_air_heat_exchanger.name,
      url: COMPONENTS.air_to_air_heat_exchanger.url,
      icon: ICON_COMPONENT
    },
    position: {x: COL_3, y: ROW_15}
  },
  {
    data: {
      id: MEASUREMENT_TECHNIQUE.system_air_temp.key,
      name: MEASUREMENT_TECHNIQUE.system_air_temp.name,
      url: MEASUREMENT_TECHNIQUE.system_air_temp.url,
      icon: ICON_MEASUREMENT
    },
    position: {x: COL_4, y: ROW_15}
  },
  {
    data: {
      id: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key,
      name: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.name,
      url: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.url,
      icon: ICON_CALC
    },
    position: {x: COL_5, y: ROW_15}
  },
  /**
   * 15th row
   */
  {
    data: {
      id: SYSTEMS.steam_distribution_s.key,
      name: SYSTEMS.steam_distribution_s.name,
      url: SYSTEMS.steam_distribution_s.url,
      icon: ICON_SYSTEM
    },
    position: {x: COL_2, y: ROW_16}
  }
]