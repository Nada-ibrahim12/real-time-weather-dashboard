import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

export const BASE_URL = "https://api.weatherapi.com/v1";
export const API_KEY = import.meta.env.VITE_API_KEY;
