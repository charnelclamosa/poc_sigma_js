import nodes_config from "./nodes_config"
const PLANTS = nodes_config.plants
const SYSTEMS = nodes_config.systems
const COMPONENTS = nodes_config.components
const MEASUREMENT_TECHNIQUE = nodes_config.measurement_technicques
const CALCULATION_METHODOLOGY = nodes_config.calculation_methodology

export default [
  /**
   * 1st row
   */
  {
    data: {
      source: PLANTS.lighting_p.key,
      target: SYSTEMS.lighting_fixture_s.key
    },
  },
  {
    data: {
      source: PLANTS.lighting_p.key,
      target: SYSTEMS.electrical_distribution_s.key
    }
  },
  {
    data: {
      source: SYSTEMS.lighting_fixture_s.key,
      target: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.lighting_fixture_runtime.key,
      target: CALCULATION_METHODOLOGY.lighting_energy_consumption.key
    }
  },
  /**
   * 2nd row
   */
  {
    data: {
      source: SYSTEMS.electrical_distribution_s.key,
      target: MEASUREMENT_TECHNIQUE.true_rms_power.key
    }
  },
  {
    data: {
      source: SYSTEMS.electrical_distribution_s.key,
      target: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key
    }
  },
  {
    data: {
      source: SYSTEMS.electrical_distribution_s.key,
      target: MEASUREMENT_TECHNIQUE.electrical_current.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.true_rms_power.key,
      target: CALCULATION_METHODOLOGY.lighting_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.true_rms_power.key,
      target: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.true_rms_power.key,
      target: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.true_rms_power.key,
      target: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.true_rms_power.key,
      target: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.true_rms_power.key,
      target: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.true_rms_power.key,
      target: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.true_rms_power.key,
      target: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key
    }
  },
  /**
   * 3rd row
   */
  {
    data: {
      source: PLANTS.air_cooled_chilled_water_p.key,
      target: SYSTEMS.chilled_water_loop.key
    }
  },
  {
    data: {
      source: PLANTS.air_cooled_chilled_water_p.key,
      target: SYSTEMS.air_cooled_chiller_s.key
    }
  },
  {
    data: {
      source: SYSTEMS.chilled_water_loop.key,
      target: COMPONENTS.const_spd_const_vol_pump_motor.key
    }
  },
  /**
   * 4th row
   */
  {
    data: {
      source: SYSTEMS.air_cooled_chiller_s.key,
      target: COMPONENTS.const_spd_const_vol_compressor_motor.key
    }
  },
  {
    data: {
      source: SYSTEMS.air_cooled_chiller_s.key,
      target: COMPONENTS.var_spd_var_vol_compressor_motor.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key,
      target: CALCULATION_METHODOLOGY.lighting_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key,
      target: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key,
      target: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.electrical_spot_measurements.key,
      target: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key
    }
  },
  /**
   * 5TH ROW
   */
  {
    data: {
      source: SYSTEMS.chilled_water_loop.key,
      target: COMPONENTS.const_spd_const_vol_pump_motor.key
    }
  },
  {
    data: {
      source: COMPONENTS.const_spd_const_vol_compressor_motor.key,
      target: MEASUREMENT_TECHNIQUE.true_rms_power.key
    }
  },
  {
    data: {
      source: COMPONENTS.const_spd_const_vol_compressor_motor.key,
      target: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key
    }
  },
  {
    data: {
      source: COMPONENTS.const_spd_const_vol_compressor_motor.key,
      target: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key
    }
  },
  {
    data: {
      source: COMPONENTS.const_spd_const_vol_compressor_motor.key,
      target: MEASUREMENT_TECHNIQUE.water_flow_rate.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.electrical_current.key,
      target: CALCULATION_METHODOLOGY.lighting_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.electrical_current.key,
      target: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key
    }
  },
  /**
   * 6th row
   */
  {
    data: {
      source: PLANTS.water_cooled_chilled_water_p.key,
      target: SYSTEMS.chilled_water_loop.key
    }
  },
  {
    data: {
      source: PLANTS.water_cooled_chilled_water_p.key,
      target: SYSTEMS.condenser_water_loop.key
    }
  },
  {
    data: {
      source: PLANTS.water_cooled_chilled_water_p.key,
      target: SYSTEMS.water_cooled_chiller.key
    }
  },
  {
    data: {
      source: PLANTS.water_cooled_chilled_water_p.key,
      target: SYSTEMS.waterside_economizer.key
    }
  },
  {
    data: {
      source: SYSTEMS.condenser_water_loop.key,
      target: COMPONENTS.const_spd_const_vol_pump_motor.key
    }
  },
  {
    data: {
      source: SYSTEMS.condenser_water_loop.key,
      target: COMPONENTS.const_spd_const_vol_fan_motor.key
    }
  },
  {
    data: {
      source: SYSTEMS.condenser_water_loop.key,
      target: COMPONENTS.var_spd_var_vol_fan_motor.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.motor_runtime.key,
      target: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.motor_runtime.key,
      target: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.motor_runtime.key,
      target: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key
    }
  },
  /**
   * 7TH ROW
   */
  {
    data: {
      source: SYSTEMS.water_cooled_chiller.key,
      target: COMPONENTS.const_spd_const_vol_compressor_motor.key
    }
  },
  {
    data: {
      source: SYSTEMS.water_cooled_chiller.key,
      target: COMPONENTS.var_spd_var_vol_compressor_motor.key
    }
  },
  {
    data: {
      source: COMPONENTS.var_spd_var_vol_compressor_motor.key,
      target: MEASUREMENT_TECHNIQUE.true_rms_power.key
    }
  },
  {
    data: {
      source: COMPONENTS.var_spd_var_vol_compressor_motor.key,
      target: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key
    }
  },
  {
    data: {
      source: COMPONENTS.var_spd_var_vol_compressor_motor.key,
      target: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key
    }
  },
  {
    data: {
      source: COMPONENTS.var_spd_var_vol_compressor_motor.key,
      target: MEASUREMENT_TECHNIQUE.water_flow_rate.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key,
      target: CALCULATION_METHODOLOGY.pump_motors_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key,
      target: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key,
      target: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key,
      target: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key,
      target: CALCULATION_METHODOLOGY.fan_motor_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key,
      target: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key
    }
  },
  {
    data: {
      source: SYSTEMS.waterside_economizer.key,
      target: COMPONENTS.liquid_to_liquid_heat_exchanger.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key,
      target: CALCULATION_METHODOLOGY.air_cooled_chiller_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key,
      target: CALCULATION_METHODOLOGY.water_cooled_chiller_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key,
      target: CALCULATION_METHODOLOGY.liquid_to_liquid_heat_exchanger_heat_transfer.key
    }
  },
  {
    data: {
      source: PLANTS.air_handling_p.key,
      target: SYSTEMS.const_spd_const_vol_air_handling_unit.key
    }
  },
  {
    data: {
      source: PLANTS.air_handling_p.key,
      target: SYSTEMS.var_spd_var_vol_air_handling_unit.key
    }
  },
  {
    data: {
      source: PLANTS.air_handling_p.key,
      target: SYSTEMS.air_to_air_energy_recovery.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.relative_humid.key,
      target: CALCULATION_METHODOLOGY.cooling_towers_fans_energy_consumption.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.relative_humid.key,
      target: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key
    }
  },
  {
    data: {
      source: PLANTS.hot_water_heating_p.key,
      target: SYSTEMS.boiler.key
    }
  },
  {
    data: {
      source: PLANTS.hot_water_heating_p.key,
      target: SYSTEMS.hot_water_loop.key
    }
  },
  {
    data: {
      source: SYSTEMS.boiler.key,
      target: COMPONENTS.const_spd_const_vol_fan_motor.key
    }
  },
  {
    data: {
      source: SYSTEMS.boiler.key,
      target: COMPONENTS.var_spd_var_vol_fan_motor.key
    }
  },
  {
    data: {
      source: SYSTEMS.hot_water_loop.key,
      target: COMPONENTS.const_spd_const_vol_pump_motor.key
    }
  },
  {
    data: {
      source: COMPONENTS.liquid_to_liquid_heat_exchanger.key,
      target: MEASUREMENT_TECHNIQUE.pipe_surface_water_temp.key
    }
  },
  {
    data: {
      source: COMPONENTS.liquid_to_liquid_heat_exchanger.key,
      target: MEASUREMENT_TECHNIQUE.water_flow_rate.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.air_flow_rate.key,
      target: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key
    }
  },
  {
    data: {
      source: SYSTEMS.feedwater_s.key,
      target: COMPONENTS.const_spd_const_vol_pump_motor.key
    }
  },
  {
    data: {
      source: PLANTS.steam_p.key,
      target: SYSTEMS.boiler.key
    }
  },
  {
    data: {
      source: PLANTS.steam_p.key,
      target: SYSTEMS.feedwater_s.key
    }
  },
  {
    data: {
      source: PLANTS.steam_p.key,
      target: SYSTEMS.steam_condensate_recovery_s.key
    }
  },
  {
    data: {
      source: PLANTS.steam_p.key,
      target: SYSTEMS.steam_distribution_s.key
    }
  },
  {
    data: {
      source: SYSTEMS.steam_condensate_recovery_s.key,
      target: COMPONENTS.const_spd_const_vol_pump_motor.key
    }
  },
  {
    data: {
      source: COMPONENTS.air_to_air_heat_exchanger.key,
      target: MEASUREMENT_TECHNIQUE.true_rms_power.key
    }
  },
  {
    data: {
      source: COMPONENTS.air_to_air_heat_exchanger.key,
      target: MEASUREMENT_TECHNIQUE.outdoor_air_temp.key
    }
  },
  {
    data: {
      source: COMPONENTS.air_to_air_heat_exchanger.key,
      target: MEASUREMENT_TECHNIQUE.relative_humid.key
    }
  },
  {
    data: {
      source: COMPONENTS.air_to_air_heat_exchanger.key,
      target: MEASUREMENT_TECHNIQUE.air_flow_rate.key
    }
  },
  {
    data: {
      source: COMPONENTS.air_to_air_heat_exchanger.key,
      target: MEASUREMENT_TECHNIQUE.system_air_temp.key
    }
  },
  {
    data: {
      source: MEASUREMENT_TECHNIQUE.system_air_temp.key,
      target: CALCULATION_METHODOLOGY.air_to_air_heat_exchanger_heat_transfer.key
    }
  },
  {
    data: {
      source: SYSTEMS.steam_distribution_s.key,
      target: COMPONENTS.const_spd_const_vol_pump_motor.key
    }
  },
]