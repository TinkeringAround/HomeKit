export type TCredential = {
  email: string
  password: string
}

export type TDatabase = {
  rooms: Array<TRoom>
  devices: Array<TDevice>
}

export type TRoom = {
  name: string
  devices: Array<string>
}

export type TDevice = {
  id: string
  name: string
  lastActive: string
}

export type TStyled = {
  margin?: string
  active?: boolean
  fontSize?: string
}

export type TDeviceData = {
  id: string
  type: string
  lastUpdated: string
  values: Array<TVariable>
}

export type TVariable = {
  variable: string
  value: string
}

export type THistory = {
  legend: string
  steps: string
  lines: Array<any>
}

export type TMeasurement = {
  timestamp: string
  value: string
}

export type TChartData = {
  x: string
  y: string
}
