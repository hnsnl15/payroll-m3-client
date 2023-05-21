export interface IEmployee {
  employeeId: number;
  role: ERole;
  username: string;
  password: string;
  lastName: string;
  firstName: string;
  birthday: string;
  address: string;
  phoneNumber: string;
  sssNo: string;
  philhealthNo: string;
  tinNo: string;
  pagibigNo: string;
  status: string;
  position: string;
  immediateSupervisor: string;
  basicSalary: number;
  riceSubsidy: number;
  phoneAllowance: number;
  clothingAllowance: number;
  grossSemiMonthlyRate: number;
  hourlyRate: number;
}

export interface IInventory {
  id: number;
  dateEntered: string;
  stockLabel: EStockLabel;
  brand: string;
  engineNumber: string;
  status: EStatus;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IAttendance {
  id: number;
  name: string;
  date: string;
  timeIn: string;
  timeOut: string;
  isLate: boolean;
  isAbsent: boolean;
}

export interface IBenefitsData {
  sss: string;
  philhealth: string;
  pagibig: string;
  netIncome: string;
  leaveHours: number;
  totalDeductions: string;
}

export enum ERole {
  USER,
  ADMIN,
}

export enum EStockLabel {
  OLD,
  NEW,
}

export enum EStatus {
  OnHand,
  Sold,
}
