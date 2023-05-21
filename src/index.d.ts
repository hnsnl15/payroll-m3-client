export interface IEmployee {
  employeeId: number;
  role: string;
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
  stockLabel: string;
  brand: string;
  engineNumber: string;
  status: string;
}

export interface ILogin {
  username: string;
  password: string;
}

interface IAttendance {
  id: number;
  name: string;
  date: string;
  timeIn: string;
  timeOut: string;
  isLate: boolean;
  isAbsent: boolean;
}
