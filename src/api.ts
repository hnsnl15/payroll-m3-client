import axios, { AxiosInstance } from "axios";
import { IAttendance, IEmployee, IInventory, ILogin } from ".";

/**
 * Axios instance for API requests.
 */
const axiosApi: AxiosInstance = axios.create({
  baseURL: "http:localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Inventory

/**
 * Get stock by ID.
 * @param id - Stock ID.
 * @returns Promise that resolves to the stock data.
 */
export const getStockById = (id: number) =>
  axiosApi.get(`/api/v1/inventory/${id}`).then((response) => response.data);

/**
 * Get all stocks.
 * @returns Promise that resolves to an array of all stocks.
 */
export const getAllStock = () =>
  axiosApi.get(`/api/v1/inventory`).then((response) => response.data);

/**
 * Get pageable stocks.
 * @param page - Page number.
 * @param size - Number of items per page.
 * @returns Promise that resolves to an array of pageable stocks.
 */
export const getStocksPageable = (page: number = 0, size: number = 5) =>
  axiosApi
    .get(`/api/v2/inventory?page=${page}&size=${size}`)
    .then((response) => response.data);

/**
 * Update stock.
 * @param id - Stock ID.
 * @param value - Updated stock data.
 * @returns Promise that resolves to the updated stock data.
 */
export const updateStock = (id: number, value: IInventory) =>
  axiosApi
    .put(`/api/v1/inventory/${id}`, value)
    .then((response) => response.data);

/**
 * Delete stock by ID.
 * @param id - Stock ID.
 * @returns Promise that resolves to the deleted stock data.
 */
export const deleteStockById = (id: number) =>
  axiosApi.delete(`/api/v1/inventory/${id}`).then((response) => response.data);

/**
 * Create a new stock.
 * @param value - Stock data to be created.
 * @returns Promise that resolves to the created stock data.
 */
export const postStock = (value: IInventory) =>
  axiosApi
    .post(`/api/v1/inventory/create-stock`, value)
    .then((response) => response.data);

// Employee

/**
 * Get employee by ID.
 * @param id - Employee ID.
 * @returns Promise that resolves to the employee data.
 */
export const getEmployeeById = (id: number) =>
  axiosApi.get(`/api/v1/employees/${id}`).then((response) => response.data);

/**
 * Get all employees.
 * @returns Promise that resolves to an array of all employees.
 */
export const getAllEmployee = () =>
  axiosApi.get(`/api/v1/employees`).then((response) => response.data);

/**
 * Get pageable employees.
 * @param page - Page number.
 * @param size - Number of items per page.
 * @returns Promise that resolves to an array of pageable employees.
 */
export const getEmployeesPageable = (page: number = 0, size: number = 5) =>
  axiosApi
    .get(`/api/v2/employees?page=${page}&size=${size}`)
    .then((response) => response.data);

/**
 * Get calculation data for an employee.
 * @param username - Employee username.
 * @param startDate - Start date for calculation.
 * @param endDate - End date for calculation.
 * @returns Promise that resolves to the calculation data.
 */
export const getCalculationData = (
  username: string,
  startDate: string,
  endDate: string
) =>
  axiosApi
    .get(
      `/api/v1/employees/get-calculation-data/${username}?startDate=${startDate}&endDate=${endDate}`
    )
    .then((response) => response.data);

/**
 * Update employee.
 * @param id - Employee ID.
 * @param value - Updated employee data.
 * @returns Promise that resolves to the updated employee data.
 */
export const updateEmployee = (id: number, value: IEmployee) =>
  axiosApi
    .put(`/api/v1/employees/${id}`, value)
    .then((response) => response.data);

/**
 * Delete employee by ID.
 * @param id - Employee ID.
 * @returns Promise that resolves to the deleted employee data.
 */
export const deleteEmployeeById = (id: number) =>
  axiosApi.delete(`/api/v1/employees/${id}`).then((response) => response.data);

/**
 * Create a new employee.
 * @param value - Employee data to be created.
 * @returns Promise that resolves to the created employee data.
 */
export const postEmployee = (value: IEmployee) =>
  axiosApi
    .post(`/api/v1/employees/create-employee`, value)
    .then((response) => response.data);

// Attendance

/**
 * Create a new attendance record.
 * @param value - Attendance data to be created.
 * @returns Promise that resolves to the created attendance data.
 */
export const postAttendance = (value: IAttendance) =>
  axiosApi
    .post(`/api/v1/create-attendance`, value)
    .then((response) => response.data);

/**
 * Get all attendance records.
 * @returns Promise that resolves to an array of all attendance records.
 */
export const getAllAttendance = () =>
  axiosApi.get(`/api/v1/attendances`).then((response) => response.data);

/**
 * Get pageable attendance records.
 * @param page - Page number.
 * @param size - Number of items per page.
 * @returns Promise that resolves to an array of pageable attendance records.
 */
export const getAttendancesPageable = (page: number = 0, size: number = 5) =>
  axiosApi
    .get(`/api/v2/attendances?page=${page}&size=${size}`)
    .then((response) => response.data);

/**
 * Get pageable attendance records for a specific date and employee.
 * @param date - Date for attendance records.
 * @param id - Employee ID.
 * @param page - Page number.
 * @param size - Number of items per page.
 * @returns Promise that resolves to an array of pageable attendance records.
 */
export const getAttendancesByDateWithIdPageable = (
  date: string,
  id: number,
  page: number = 0,
  size: number = 5
) =>
  axiosApi
    .get(
      `/api/v2/attendances/date?date=${date}&id=${id}&page=${page}&size=${size}`
    )
    .then((response) => response.data);

/**
 * Get hours worked by an employee within a date range.
 * @param username - Employee username.
 * @param startDate - Start date for hours calculation.
 * @param endDate - End date for hours calculation.
 * @returns Promise that resolves to the hours worked data.
 */
export const getHoursWorked = (
  username: string,
  startDate: string,
  endDate: string
) =>
  axiosApi
    .get(
      `/api/v1/calculate/hours-worked/${username}?startDate=${startDate}&endDate=${endDate}`
    )
    .then((response) => response.data);

/**
 * Get attendance record by ID.
 * @param id - Attendance record ID.
 * @returns Promise that resolves to the attendance record data.
 */
export const getAttendanceById = (id: number) =>
  axiosApi.get(`/api/v1/attendances/${id}`).then((response) => response.data);

/**
 * Get attendance records for an employee.
 * @param page - Page number.
 * @param size - Number of items per page.
 * @param id - Employee ID.
 * @returns Promise that resolves to an array of attendance records.
 */
export const getAttendanceByEmployee = (
  page: number = 0,
  size: number = 5,
  id: number
) =>
  axiosApi
    .get(`/api/v1/attendances/employee?page=${page}&size=${size}&id=${id}`)
    .then((response) => response.data);

/**
 * Get pageable attendance records for a specific date.
 * @param date - Date for attendance records.
 * @param page - Page number.
 * @param size - Number of items per page.
 * @returns Promise that resolves to an array of pageable attendance records.
 */
export const getAttendancesByDatePageable = (
  date: string,
  page: number = 0,
  size: number = 5
) =>
  axiosApi
    .get(`/api/v1/attendances/date?date=${date}&page=${page}&size=${size}`)
    .then((response) => response.data);

// JWT Token

/**
 * Get JWT token.
 * @param value - Login credentials.
 * @returns Promise that resolves to the JWT token.
 */
export const getJwtToken = (value: ILogin) =>
  axiosApi.post(`/api/auth-token`, value);
