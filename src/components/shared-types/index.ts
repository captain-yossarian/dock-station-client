export enum DeviceStatus {
  Charging = "charging",
  Powered = "powered",
  Disconnected = "disconnected",
}
interface BaseDevice {
  ip: string;
  mac: string;
  name: string;
}

export interface Device extends BaseDevice {
   status: DeviceStatus;
}
