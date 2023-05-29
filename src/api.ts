import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IAttendance, IEmployee, IInventory, ILogin, IPayables } from ".";
import Cookies from "js-cookie";
import { TOKEN_COOKIE_NAME } from "./hooks/useAuth";

/**
 * Axios instance for API requests.
 * @type {AxiosInstance}
 */
const axiosApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosApi.interceptors.request.use(
  (config) => {
    const cookieInstance = Cookies.get(TOKEN_COOKIE_NAME); // Set this based on whether authorization is available or not
    if (cookieInstance !== undefined) {
      config.headers["Authorization"] = `Bearer ${cookieInstance}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Inventory

/**
 * Get stock by ID.
 * @param {number} id - Stock ID.
 * @returns {Promise<AxiosResponse<IInventory>>} Promise that resolves to the stock data.
 */
export const getStockById = (id: number): Promise<AxiosResponse<IInventory>> =>
  axiosApi.get(`/api/v1/inventory/${id}`);

/**
 * Get all stocks.
 * @returns {Promise<AxiosResponse<IInventory[]>>} Promise that resolves to an array of all stocks.
 */
export const getAllStock = (): Promise<AxiosResponse<IInventory[]>> =>
  axiosApi.get(`/api/v1/inventory`);

/**
 * Get pageable stocks.
 * @param {number} page - Page number.
 * @param {number} size - Number of items per page.
 * @returns {Promise<AxiosResponse<IInventory[]>>} Promise that resolves to an array of pageable stocks.
 */
export const getStocksPageable = (
  page: number = 0,
  size: number = 5
): Promise<AxiosResponse<IInventory[]>> =>
  axiosApi.get(`/api/v2/inventory?page=${page}&size=${size}`);

/**
 * Update stock.
 * @param {number} id - Stock ID.
 * @param {IInventory} value - Updated stock data.
 * @returns {Promise<AxiosResponse<IInventory>>} Promise that resolves to the updated stock data.
 */
export const updateStock = (
  id: number,
  value: IInventory
): Promise<AxiosResponse<IInventory>> =>
  axiosApi.put(`/api/v1/inventory/${id}`, value);

/**
 * Delete stock by ID.
 * @param {number} id - Stock ID.
 * @returns {Promise<AxiosResponse<IInventory>>} Promise that resolves to the deleted stock data.
 */
export const deleteStockById = (
  id: number
): Promise<AxiosResponse<IInventory>> =>
  axiosApi.delete(`/api/v1/inventory/${id}`);

/**
 * Create a new stock.
 * @param {IInventory} value - Stock data to be created.
 * @returns {Promise<AxiosResponse<IInventory>>} Promise that resolves to the created stock data.
 */
export const postStock = (
  value: IInventory
): Promise<AxiosResponse<IInventory>> =>
  axiosApi.post(`/api/v1/inventory/create-stock`, value);

// Employee

/**
 * Get employee by ID.
 * @param {number} id - Employee ID.
 * @returns {Promise<AxiosResponse<IEmployee>>} Promise that resolves to the employee data.
 */
export const getEmployeeById = (
  id: number
): Promise<AxiosResponse<IEmployee>> => axiosApi.get(`/api/v1/employees/${id}`);

/**
 * Get all employees.
 * @returns {Promise<AxiosResponse<IEmployee[]>>} Promise that resolves to an array of all employees.
 */
export const getAllEmployee = (): Promise<AxiosResponse<IEmployee[]>> =>
  axiosApi.get(`/api/v1/employees`);

/**
 * Get pageable employees.
 * @param {number} page - Page number.
 * @param {number} size - Number of items per page.
 * @returns {Promise<AxiosResponse<IEmployee[]>>} Promise that resolves to an array of pageable employees.
 */
export const getEmployeesPageable = (
  page: number = 0,
  size: number = 5
): Promise<AxiosResponse<IEmployee[]>> =>
  axiosApi.get(`/api/v2/employees?page=${page}&size=${size}`);

/**
 * Get calculation data for an employee.
 * @param {string} username - Employee username.
 * @param {string} startDate - Start date for calculation.
 * @param {string} endDate - End date for calculation.
 * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the calculation data.
 */
export const postCalculationData = (
  username: string,
  startDate: string,
  endDate: string
): Promise<AxiosResponse<IPayables>> =>
  axiosApi.post(
    `/api/v1/employees/get-calculation-data/${username}?startDate=${startDate}&endDate=${endDate}`
  );

/**
 * Update employee.
 * @param {number} id - Employee ID.
 * @param {IEmployee} value - Updated employee data.
 * @returns {Promise<AxiosResponse<IEmployee>>} Promise that resolves to the updated employee data.
 */
export const updateEmployee = (
  id: number,
  value: IEmployee
): Promise<AxiosResponse<IEmployee>> =>
  axiosApi.put(`/api/v1/employees/${id}`, value);

/**
 * Delete employee by ID.
 * @param {number} id - Employee ID.
 * @returns {Promise<AxiosResponse<IEmployee>>} Promise that resolves to the deleted employee data.
 */
export const deleteEmployeeById = (
  id: number
): Promise<AxiosResponse<IEmployee>> =>
  axiosApi.delete(`/api/v1/employees/${id}`);

/**
 * Create a new employee.
 * @param {IEmployee} value - Employee data to be created.
 * @returns {Promise<AxiosResponse<IEmployee>>} Promise that resolves to the created employee data.
 */
export const postEmployee = (
  value: IEmployee
): Promise<AxiosResponse<any, any> | undefined> =>
  axiosApi.post(`/api/v1/create-employee`, value);

// Attendance

/**
 * Create a new attendance record.
 * @param {IAttendance} value - Attendance data to be created.
 * @returns {Promise<AxiosResponse<IAttendance>>} Promise that resolves to the created attendance data.
 */
export const postAttendance = (
  value: IAttendance
): Promise<AxiosResponse<IAttendance>> =>
  axiosApi.post(`/api/v1/create-attendance`, value);

/**
 * Get all attendance records.
 * @returns {Promise<AxiosResponse<IAttendance[]>>} Promise that resolves to an array of all attendance records.
 */
export const getAllAttendance = (): Promise<AxiosResponse<IAttendance[]>> =>
  axiosApi.get(`/api/v1/attendances`);

/**
 * Get pageable attendance records.
 * @param {number} page - Page number.
 * @param {number} size - Number of items per page.
 * @returns {Promise<AxiosResponse<IAttendance[]>>} Promise that resolves to an array of pageable attendance records.
 */
export const getAttendancesPageable = (
  page: number = 0,
  size: number = 5
): Promise<AxiosResponse<IAttendance[]>> =>
  axiosApi.get(`/api/v2/attendances?page=${page}&size=${size}`);

/**
 * Get pageable attendance records for a specific date and employee.
 * @param {string} date - Date for attendance records.
 * @param {number} id - Employee ID.
 * @param {number} page - Page number.
 * @param {number} size - Number of items per page.
 * @returns {Promise<AxiosResponse<IAttendance[]>>} Promise that resolves to an array of pageable attendance records.
 */
export const getAttendancesByDateWithIdPageable = (
  date: string,
  id: number,
  page: number = 0,
  size: number = 5
): Promise<AxiosResponse<IAttendance[]>> =>
  axiosApi.get(
    `/api/v2/attendances/date?date=${date}&id=${id}&page=${page}&size=${size}`
  );

/**
 * Get hours worked by an employee within a date range.
 * @param {string} username - Employee username.
 * @param {string} startDate - Start date for hours calculation.
 * @param {string} endDate - End date for hours calculation.
 * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the hours worked data.
 */
export const getHoursWorked = (
  username: string,
  startDate: string,
  endDate: string
): Promise<AxiosResponse<any>> =>
  axiosApi.get(
    `/api/v1/calculate/hours-worked/${username}?startDate=${startDate}&endDate=${endDate}`
  );

/**
 * Get attendance record by ID.
 * @param {number} id - Attendance record ID.
 * @returns {Promise<AxiosResponse<IAttendance>>} Promise that resolves to the attendance record data.
 */
export const getAttendanceById = (
  id: number
): Promise<AxiosResponse<IAttendance>> =>
  axiosApi.get(`/api/v1/attendances/${id}`);

/**
 * Get attendance records for an employee.
 * @param {number} page - Page number.
 * @param {number} size - Number of items per page.
 * @param {number} id - Employee ID.
 * @returns {Promise<AxiosResponse<IAttendance[]>>} Promise that resolves to an array of attendance records.
 */
export const getAttendanceByEmployeeId = (
  page: number = 0,
  size: number = 5,
  id: number
): Promise<AxiosResponse<IAttendance[]>> =>
  axiosApi.get(
    `/api/v1/attendances/employee?page=${page}&size=${size}&id=${id}`
  );

/**
 * Get pageable attendance records for a specific date.
 * @param {string} date - Date for attendance records.
 * @param {number} page - Page number.
 * @param {number} size - Number of items per page.
 * @returns {Promise<AxiosResponse<IAttendance[]>>} Promise that resolves to an array of pageable attendance records.
 */
export const getAttendancesByDatePageable = (
  date: string,
  page: number = 0,
  size: number = 5
): Promise<AxiosResponse<IAttendance[]>> =>
  axiosApi.get(
    `/api/v1/attendances/date?date=${date}&page=${page}&size=${size}`
  );

// JWT Token

/**
 * Get JWT token.
 * @param {ILogin} value - Login credentials.
 * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the JWT token.
 */
export const getJwtToken = (value: ILogin): Promise<AxiosResponse<any>> =>
  axiosApi.post(`/api/auth-token`, value);
