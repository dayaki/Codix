// const PROD_URL = 'https://codixmiddleware.azurewebsites.net';
const DEV_URL = 'https://xidoc-middleware.azurewebsites.net';
export const baseURL = `${DEV_URL}/api/v1`;

// Login
export const postLogin = `${baseURL}/account/login`;

export const getBarcodeDetails = (barcodeId: string) =>
  `${baseURL}/organisations/current/feedbacks/barcodes/${barcodeId}/getbarcode`;

export const putCustomerAttachment = (barcodeId: string) =>
  `${baseURL}/organisations/current/feedbacks/barcode/${barcodeId}/checkcustomerattachment`;

export const getProductById = (productId: string) =>
  `${baseURL}/organisations/current/products/${productId}/getproductbyid`;

export const getQuestions = `${baseURL}/organisations/current/feedbacks/getquestions`;

export const postSubmitFeedback = `${baseURL}/organisations/current/feedbacks/submitfeedback`;

export const getSingleCustomer = (customerId: string) =>
  `${baseURL}/organisations/current/customers/${customerId}/getsinglecustomer`;

export const getDevice = (deviceId: string) =>
  `${baseURL}/organisations/current/feedbacks/device/${deviceId}/getdevice`;

export const getCustomers = `${baseURL}/organisations/current/customers/getcustomers`;
export const getProducts = `${baseURL}/organisations/current/products/products`;
export const getProductBatches = (
  productId: string,
) => `${baseURL}/organisations/current/batches/product/${productId}/batchesbyproduct
`;
export const putNewProduct = (customerId: string, barcodeId: string) =>
  `${baseURL}/organisations/current/feedbacks/customer/${customerId}/barcode/${barcodeId}/attachproducttocustomer`;
export const postReportDevice = `${baseURL}/organisations/current/feedbacks/reportfaultydevice`;
