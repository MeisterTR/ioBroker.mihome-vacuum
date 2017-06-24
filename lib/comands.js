module.exports = {
  "find": {
    "method": "find_me"
  },
  "start": {
    "method": "app_start"
  },
  "pause": {
    "method": "app_pause"
  },
  "home": {
    "method": "app_charge"
  },
  "get_status": {
    "method": "get_status"
  },
  "get_consumable": {
    "method": "get_consumable"
  },
  "fan_power": {
    "method": "set_custom_mode"
  },
  "clean_summary": {
    "method": "get_clean_summary"
  },
  "clean_record": {
    "method": "get_clean_record"
  },
  "filter_reset": {
    "method": "reset_consumable",
    "params": "filter_work_time"
  },
  "sensors_reset": {
    "method": "reset_consumable",
    "params": "sensor_dirty_time"
  },
  "main_brush_reset": {
    "method": "reset_consumable",
    "params": "main_brush_work_time"
  },
  "side_brush_reset": {
    "method": "reset_consumable",
    "params": "side_brush_work_time"
  },
  "spotclean": {
    "method": "app_spot"
  }

}
