import axios, { AxiosInstance } from "axios";
import { IEmployee, IInventory } from ".";

const axiosApi: AxiosInstance = axios.create({
  baseURL: "http:localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Inventory
export const getStockById = (id: number) =>
  axiosApi.get(`/api/v1/inventory/${id}`).then((response) => response.data);

export const getAllStock = () =>
  axiosApi.get(`/api/v1/inventory`).then((response) => response.data);

export const getStocksPageable = (page: number = 0, size: number = 5) =>
  axiosApi
    .get(`/api/v2/inventory?page=${page}&size=${size}`)
    .then((response) => response.data);

export const updateStock = (id: number, value: IInventory) =>
  axiosApi
    .put(`/api/v1/inventory/${id}`, value)
    .then((response) => response.data);

export const deleteStockById = (id: number) =>
  axiosApi.delete(`/api/v1/inventory/${id}`).then((response) => response.data);

export const postStock = (value: IInventory) =>
  axiosApi
    .post(`/api/v1/inventory/create-stock`, value)
    .then((response) => response.data);

// Employee
export const getEmployeeById = (id: number) =>
  axiosApi.get(`/api/v1/employees/${id}`).then((response) => response.data);

export const getAllEmployee = () =>
  axiosApi.get(`/api/v1/employees`).then((response) => response.data);

export const getCalculationData = (username: string) =>
  axiosApi
    .get(`/api/v1/employees/get-calculation-data/${username}`)
    .then((response) => response.data);

export const getEmployeesPageable = (page: number = 0, size: number = 5) =>
  axiosApi
    .get(`/api/v2/employees?page=${page}&size=${size}`)
    .then((response) => response.data);

export const updateEmployee = (id: number, value: IEmployee) =>
  axiosApi
    .put(`/api/v1/employees/${id}`, value)
    .then((response) => response.data);

export const deleteEmployeeById = (id: number) =>
  axiosApi.delete(`/api/v1/employees/${id}`).then((response) => response.data);

export const postEmployee = (value: IEmployee) =>
  axiosApi
    .post(`/api/v1/employees/create-employee`, value)
    .then((response) => response.data);
