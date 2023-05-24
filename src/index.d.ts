/**
 * Represents an employee.
 */
export interface IEmployee {
  /**
   * The employee ID.
   */
  employeeId?: number;
  /**
   * The role of the employee.
   */
  role: ERole;
  /**
   * The username of the employee.
   */
  username?: string;
  /**
   * The password of the employee.
   */
  password?: string;
  /**
   * The last name of the employee.
   */
  lastName: string;
  /**
   * The first name of the employee.
   */
  firstName: string;
  /**
   * The birthday of the employee.
   */
  birthday: string;
  /**
   * The address of the employee.
   */
  address: string;
  /**
   * The phone number of the employee.
   */
  phoneNumber: string;
  /**
   * The Social Security System (SSS) number of the employee.
   */
  sssNo: string;
  /**
   * The Philippine Health Insurance Corporation (PhilHealth) number of the employee.
   */
  philhealthNo: string;
  /**
   * The Tax Identification Number (TIN) of the employee.
   */
  tinNo: string;
  /**
   * The Home Development Mutual Fund (HDMF) or Pag-IBIG number of the employee.
   */
  pagibigNo: string;
  /**
   * The status of the employee.
   */
  status: string;
  /**
   * The position of the employee.
   */
  position: string;
  /**
   * The immediate supervisor of the employee.
   */
  immediateSupervisor: string;
  /**
   * The basic salary of the employee.
   */
  basicSalary: number;
  /**
   * The rice subsidy amount for the employee.
   */
  riceSubsidy: number;
  /**
   * The phone allowance amount for the employee.
   */
  phoneAllowance: number;
  /**
   * The clothing allowance amount for the employee.
   */
  clothingAllowance: number;
  /**
   * The gross semi-monthly rate of the employee.
   */
  grossSemiMonthlyRate: number;
  /**
   * The hourly rate of the employee.
   */
  hourlyRate: number;
}

/**
 * Represents an inventory item.
 */
export interface IInventory {
  /**
   * The ID of the inventory item.
   */
  id: number;
  /**
   * The date when the inventory item was entered.
   */
  dateEntered: string;
  /**
   * The stock label of the inventory item.
   */
  stockLabel: EStockLabel;
  /**
   * The brand of the inventory item.
   */
  brand: string;
  /**
   * The engine number of the inventory item.
   */
  engineNumber: string;
  /**
   * The status of the inventory item.
   */
  status: EStatus;
}

/**
 * Represents login credentials.
 */
export interface ILogin {
  /**
   * The username for login.
   */
  username: string;
  /**
   * The password for login.
   */
  password: string;
}

/**
 * Represents attendance data.
 */
export interface IAttendance {
  /**
   * The ID of the attendance record.
   */
  id: number;
  /**
   * The name of the employee.
   */
  name: string;
  /**
   * The date of the attendance record.
   */
  date: string;
  /**
   * The time when the employee clocked in.
   */
  timeIn: string;
  /**
   * The time when the employee clocked out.
   */
  timeOut: string;
  /**
   * Indicates whether the employee was late.
   */
  isLate: boolean;
  /**
   * Indicates whether the employee was absent.
   */
  isAbsent: boolean;
}

/**
 * Represents benefits data for an employee.
 */
export interface IBenefitsData {
  /**
   * The Social Security System (SSS) contributions.
   */
  sss: string;
  /**
   * The Philippine Health Insurance Corporation (PhilHealth) contributions.
   */
  philhealth: string;
  /**
   * The Home Development Mutual Fund (HDMF) or Pag-IBIG contributions.
   */
  pagibig: string;
  /**
   * The net income of the employee.
   */
  netIncome: string;
  /**
   * The number of leave hours for the employee.
   */
  leaveHours: number;
  /**
   * The total deductions from the employee's salary.
   */
  totalDeductions: string;
}

/**
 * Represents the role of an employee.
 */
export enum ERole {
  USER,
  ADMIN,
}

/**
 * Represents the stock label of an inventory item.
 */
export enum EStockLabel {
  OLD,
  NEW,
}

/**
 * Represents the status of an inventory item.
 */
export enum EStatus {
  OnHand,
  Sold,
}

/**
 * Interface representing the authentication methods.
 */
export interface IUseAuth {
  /**
   * Logs in the user with the provided JWT token.
   * @param {string} token - The JWT token to be used for authentication.
   * @returns {Promise<void>} - A promise that resolves when the login is successful.
   */
  login: (token: string) => Promise<void>;

  /**
   * Logs out the currently authenticated user.
   * @returns {Promise<void>} - A promise that resolves when the logout is successful.
   */
  logout: () => Promise<void>;
}

/**
 * Represents the authentication context.
 * @interface IAuthContext
 */
export interface IAuthContext {
  /**
   * The authentication token.
   * @type {string}
   */
  token: string;

  /**
   * A function to set the authentication token.
   * @type {React.Dispatch<React.SetStateAction<string>>}
   */
  setToken: React.Dispatch<React.SetStateAction<string>>;

  /**
   * Indicates whether the user is authenticated.
   * @type {boolean}
   */
  authenticated: boolean;

  /**
   * A function to set the authenticated status.
   * @type {React.Dispatch<React.SetStateAction<boolean>>}
   */
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * The cookie instance.
   * @type {string | undefined}
   */
  cookieInstance: string | undefined;
}
