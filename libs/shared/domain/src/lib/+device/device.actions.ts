import { createAction, props } from '@ngrx/store';
import { NgPatDeviceState } from './device.model';

export const ngPatLoadDevices = createAction(
  '[Device] Load Devices',
  props<{ device: Partial<NgPatDeviceState> }>()
);

export const ngPatInitDevice = createAction('[Device] Init');
