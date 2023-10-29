// src/services/AuthService.ts
import axios from 'axios'

class AuthService {
  private baseURL: string

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL as string
  }

  public async login(email: any, password: any): Promise<any> {
    const response = await axios.post(`${this.baseURL}/login`, {
      email,
      password,
    })

    return response.data
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken')

    return !!token && token !== 'undefined'
  }

  public logout(): void {
    localStorage.removeItem('authToken')
    localStorage.clear()
  }
}

export const authService = new AuthService()
