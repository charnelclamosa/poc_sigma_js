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
const ICON_PLANT = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-80q-29 0-56-10.5T375-360h210q-22 19-49 29.5T480-320Zm-138-80q-8-14-13-29t-7-31h316q-2 16-7 31t-13 29H342Zm-20-100q2-16 7-31t13-29h276q8 14 13 29t7 31H322Zm53-100q22-19 49-29.5t56-10.5q29 0 56 10.5t49 29.5H375ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>'
const ICON_SYSTEM = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M372-529q0 19 6.5 37t18.5 33q2-12 8-23.5t15-19.5l60-58 59 59q9 8 15 19t8 23q11-15 19.5-32t8.5-36q0-19-6-36.5T566-596q-11 5-22.5 8t-23.5 3q-30 0-55-17t-38-45q-12 12-22 25.5T387.5-593q-7.5 15-11.5 31t-4 33Zm108 53-17 17q-4 4-5.5 8t-1.5 9q0 10 7 16t17 6q10 0 17-6t7-16q0-5-1.5-9t-5.5-8l-17-17Zm0-284v76q0 17 12 28.5t29 11.5q11 0 20-6.5t16-15.5l7-10q41 23 63.5 62.5T650-527q0 70-50 118.5T480-360q-70 0-119-49t-49-119q0-77 49-137t119-95ZM240-80q-33 0-56.5-23.5T160-160v-560q0-66 47-113t113-47h320q66 0 113 47t47 113v560q0 33-23.5 56.5T720-80H240Zm0-160v80h480v-80q-30 0-48 20t-72 20q-54 0-70.5-20T480-240q-33 0-49.5 20T360-200q-54 0-70.5-20T240-240Zm120-40q33 0 49.5-20t70.5-20q54 0 72 20t48 20q30 0 48-20t72-20v-400q0-33-23.5-56.5T640-800H320q-33 0-56.5 23.5T240-720v400q54 0 70.5 20t49.5 20Z"/></svg>'
const ICON_COMPONENT = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M424-80q-51 0-77.5-30.5T320-180q0-26 11.5-50.5T367-271q22-14 35.5-36t18.5-47l-12-6q-6-3-11-7l-92 33q-17 6-33 10t-33 4q-63 0-111.5-55T80-536q0-51 30.5-77.5T179-640q26 0 51 11.5t41 35.5q14 22 36 35.5t47 18.5l6-12q3-6 7-11l-33-92q-6-17-10-33t-4-32q0-64 55-112.5T536-880q51 0 77.5 30.5T640-781q0 26-11.5 51T593-689q-22 14-35.5 36T539-606l12 6q6 3 11 7l92-34q17-6 32.5-9.5T719-640q81 0 121 67t40 149q0 51-32 77.5T777-320q-25 0-48.5-11.5T689-367q-14-22-36-35.5T606-421l-6 12q-3 6-7 11l33 92q6 16 10 30.5t4 30.5q1 65-54 115T424-80Zm56-340q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm-46-192q6-2 12.5-3.5T459-618q8-42 30.5-78t59.5-60q5-4 8-10t3-15q0-8-6-13.5t-18-5.5q-38 0-86 16.5T400-719q0 9 2.5 17t4.5 15l27 75ZM240-400q14 0 33-7l75-27q-2-6-3.5-12.5T342-459q-42-8-78-30.5T204-549q-4-5-10.5-8t-14.5-3q-9 0-14 6t-5 18q0 54 20.5 95t59.5 41Zm184 240q47 0 92.5-19t43.5-66q0-8-2.5-15t-4.5-13l-27-75q-6 2-12.5 3.5T501-342q-8 42-30.5 78T411-204q-5 4-8.5 10.5T400-180q1 8 6 14t18 6Zm353-240q9 0 16-5t7-19q0-38-16-86.5T719-560q-9 0-17 2t-15 4l-75 28q2 6 3.5 12.5T618-501q42 8 78 30.5t60 59.5q3 5 9 8t12 3ZM618-501ZM459-618ZM342-459Zm159 117Z"/></svg>'
const ICON_CALC = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-160v-80l260-240-260-240v-80h480v120H431l215 200-215 200h289v120H240Z"/></svg>'
const ICON_MEASUREMENT = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>'

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