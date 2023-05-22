import axios, { AxiosInstance } from "axios";
import { IInventory } from ".";

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

export const getStocksPageable = () =>
  axiosApi.get(`/api/v2/inventory`).then((response) => response.data);

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
