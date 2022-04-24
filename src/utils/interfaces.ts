export interface Customer {
  address: string;
  customerName: string;
  customerNo: string;
  id: string;
}
export interface Product {
  description: string;
  categoryId: string;
  id: string;
  productServiceName: string;
}
export interface Batch {
  batchNumber: string;
  serialNo: string;
  id: string;
}

export type BarcodeData = {
  batch: Batch;
  customer: Customer;
  product: Product;
  id: string;
  organisationName: string;
};
export interface BarcodeInterface {
  id: string;
  customer: {
    id?: string;
    customerName: string;
    address: string;
  };
  product: {
    id?: string;
    productServiceName: string;
  };
  batch: {
    id?: string;
    batchNumber: string;
  };
}
