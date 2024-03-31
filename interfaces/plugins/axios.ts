import axios from 'axios';
import type { App } from 'vue'; // Import the App type
 // Import the App type

export default ({}, app: App) => {
  const instance = axios.create({
    baseURL: process.env.apiUrl,
  });
  app.config.globalProperties.$axios = instance;
};
