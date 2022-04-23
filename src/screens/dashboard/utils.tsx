// import React from 'react';
import apiService from '../../utils/apiService';
import {
  getBarcodeDetails,
  getCustomers,
  putCustomerAttachment,
} from '../../utils/endpoints';

export const checkRegStatus = async (barcodeId: string) => {
  try {
    const { data } = await apiService(putCustomerAttachment(barcodeId), 'put');
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllCustomers = async () => {
  try {
    const { data } = await apiService(getCustomers, 'get');
    return data;
  } catch (error) {
    return error;
  }
};

// export const getAllCustomers = async () => {
//   try {
//     const { data } = await apiService(getCustomers, 'get');
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

export const getBarcode = async (barcodeId: string) => {
  try {
    const { data } = await apiService(getBarcodeDetails(barcodeId), 'get');
    return data;
  } catch (error) {
    return error;
  }
};
