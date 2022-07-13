import api from "@/utils/api";
import { AxiosRequestConfig } from "axios";

class HttpClient {
  async get(path: string, config?: AxiosRequestConfig) {
    try {
      const response = await api.get(path, config);

      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async post(path: string, data: any) {
    try {
      const response = await api.post(path, data);

      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async patch(path: string, id: number, data: any) {
    try {
      const response = await api.patch(`${path}/${id}/`, data);

      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async delete(path: string, id: number) {
    try {
      const response = await api.delete(`${path}/${id}/`);

      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new HttpClient();
