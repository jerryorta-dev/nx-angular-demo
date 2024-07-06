import { NgPatDeviceEffects } from './+device/device.effects';
import { ngPatDeviceFeatureKey, ngPatDeviceReducer, ngPatInitialDeviceState } from './+device/device.reducer';


export const ROOT_STATE_REDUCERS = {
  [ngPatDeviceFeatureKey]: ngPatDeviceReducer
}

export const ROOT_STATE_INITIALIZERS = {
  [ngPatDeviceFeatureKey]: ngPatInitialDeviceState
}

export const ROOT_STATE_EFFECTS = [
  NgPatDeviceEffects
]
