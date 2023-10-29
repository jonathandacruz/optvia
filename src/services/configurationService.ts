// src/services/AuthService.ts
import axios from 'axios'

class ConfigurationService {
  private baseURL: string

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL as string
  }

  public async configurations(): Promise<any> {
    const response = await axios.get(`${this.baseURL}/api/configs`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    })

    return response.data
  }
}

export const configurationService = new ConfigurationService()
