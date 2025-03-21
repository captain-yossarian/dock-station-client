enum DeviceStatus{
    Charging='charging',
    Powered='powered'

}
interface BaseDevice{
    ip: string;
    mac: string;
    name: string;
}

export interface Device extends BaseDevice {
    powered:boolean
    status:DeviceStatus

}
