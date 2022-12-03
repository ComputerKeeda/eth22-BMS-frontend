import { configureStore } from '@reduxjs/toolkit';
import sidebar from '../slices/sidebar';
import test from '../slices/test';


export const store = configureStore({
  reducer: {
    testColor : test,
    sidebarCollapse : sidebar,
  },
});