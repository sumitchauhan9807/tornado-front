import { production } from '@/env'
import axios from 'axios';

export const baseURL = production ? 'https://strapi.tornadodialer.net/api' : "http://localhost:1337/api"
export const assetsURL = production ? 'https://strapi.tornadodialer.net' : "http://localhost:1337"
export const api = axios.create({
  baseURL: baseURL
});