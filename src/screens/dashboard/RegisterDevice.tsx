import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Button, SelectSheet, SelectSheetBatch, Spinner } from '../../common';
import apiService from '../../utils/apiService';
import {
  getCustomers,
  getProductBatches,
  getProducts,
  putNewProduct,
} from '../../utils/endpoints';
import { styles } from '../styles';
import { checkRegStatus } from './utils';

interface Customer {
  address: string;
  customerName: string;
  customerNo: string;
  id: string;
}
interface Product {
  description: string;
  categoryId: string;
  id: string;
  productServiceName: string;
}
interface Batch {
  batchNumber: string;
  serialNo: string;
  id: string;
}

const RegisterDevice = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [page, setPage] = useState(1);
  const [barcode, setBarcode] = useState('');
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [batches, setBatches] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [selectedBatch, setSelectedBatch] = useState<Batch>();
  const customerRef = useRef();
  const productRef = useRef();
  const batchRef = useRef();
  const batchDataRef = useRef(null);

  useEffect(() => {
    if (batches) {
      // console.log('batchDataRef.current', batchDataRef.current);
      // console.log('updated Batches', batches);
      batchDataRef.current = batches;
      // set;
    }
  }, [batches]);

  const onSuccess = async ({ data }: { data: string }) => {
    setSpinner(true);
    const barcodeIds = data.split(' ');
    const [barcodeId] = barcodeIds;
    setBarcode(barcodeId);
    const { isAttachedToCustomer } = await checkRegStatus(barcodeId);
    if (isAttachedToCustomer) {
      setSpinner(false);
      Alert.alert('Error', 'This device is already registered.');
      navigation.navigate('dashboard');
    } else {
      try {
        const { data: customersData } = await apiService(getCustomers, 'get');
        setCustomers(customersData);
        console.log('setCustomers', customersData);
        const { data: productsData } = await apiService(getProducts, 'get');
        setProducts(productsData);
        console.log('getProducts', productsData);
        setPage(2);
        setSpinner(false);
      } catch (error: any) {
        console.log('onSuccess Err', error);
        Alert.alert('Error', error.message);
        setSpinner(false);
      }
    }
  };

  const productSelection = async (selected: Product) => {
    setSelectedProduct(selected);
    const { data } = await apiService(getProductBatches(selected.id), 'get');
    setBatches(data);
  };

  const handleSubmit = () => {
    if (!selectedCustomer || !selectedProduct || !selectedBatch) {
      Alert.alert('Error', 'You need to select the fields');
      return;
    }
    setIsLoading(true);
    apiService(putNewProduct(selectedCustomer.id, barcode), 'put', {
      productId: selectedProduct.id,
      batchId: selectedBatch.id,
      customerId: selectedCustomer.id,
    })
      .then(({ message, data }) => {
        console.log('data uploaded', data);
        setIsLoading(false);
        navigation.navigate('success', { message: message });
      })
      .catch(err => {
        console.log('data upload ERR', err);
        setIsLoading(false);
        Alert.alert('Error', err.message);
      });
  };

  return (
    <>
      <Spinner visible={spinner} />
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.backBtnBlock}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/images/back2.png')}
            resizeMode="cover"
            style={styles.backImage}
          />
        </TouchableOpacity>
        <Text style={styles.page_title}>Register Device</Text>
        <Text style={styles.label}>
          Scan a QR code to register a new device.
        </Text>
        <View>
          {page === 1 ? (
            <QRCodeScanner
              fadeIn
              reactivate
              reactivateTimeout={60000}
              cameraStyle={styles.qrScanner}
              onRead={onSuccess}
            />
          ) : (
            <>
              <View style={styles.form}>
                <View style={styles.select}>
                  <Text style={styles.selectTitle}>Customer</Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.selectBtn}
                    onPress={() => customerRef.current?.open()}>
                    <Text style={styles.selectLabel}>
                      {selectedCustomer?.customerName || 'Select Customer'}
                    </Text>
                    <Image
                      source={require('../../../assets/images/down-arrow.png')}
                      resizeMode="cover"
                      style={styles.selectImage}
                    />
                  </TouchableOpacity>
                </View>
                {/*  */}
                <View style={styles.select}>
                  <Text style={styles.selectTitle}>Product</Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.selectBtn}
                    onPress={() => productRef.current?.open()}>
                    <Text style={styles.selectLabel}>
                      {selectedProduct
                        ? selectedProduct.productServiceName
                        : 'Select Product'}
                    </Text>
                    <Image
                      source={require('../../../assets/images/down-arrow.png')}
                      resizeMode="cover"
                      style={styles.selectImage}
                    />
                  </TouchableOpacity>
                </View>
                {/*  */}
                <View style={styles.select}>
                  <Text style={styles.selectTitle}>Batch</Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.selectBtn}
                    onPress={() => batchRef.current?.open()}>
                    <Text style={styles.selectLabel}>
                      {selectedBatch
                        ? selectedBatch?.batchNumber
                        : 'Select Batch'}
                    </Text>
                    <Image
                      source={require('../../../assets/images/down-arrow.png')}
                      resizeMode="cover"
                      style={styles.selectImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <SelectSheet
                  openRef={customerRef}
                  title="Select Customer"
                  data={customers}
                  useName="customerName"
                  useLabel="customerNo"
                  showLabel={true}
                  onSelect={(text: any) => setSelectedCustomer(text)}
                />
              </View>
              {batches && (
                <View>
                  <SelectSheetBatch
                    openRef={batchRef}
                    title="Select Batch"
                    data={batches}
                    useName="serialNo"
                    useLabel="batchNumber"
                    showLabel={true}
                    onSelect={(val: any) => setSelectedBatch(val)}
                  />
                </View>
              )}
              <View>
                <SelectSheet
                  openRef={productRef}
                  title="Select Product"
                  data={products}
                  useName="productServiceName"
                  useLabel="description"
                  showLabel={true}
                  onSelect={productSelection}
                />
              </View>
              <Button
                style={{ marginTop: 50 }}
                title="Register New Device"
                isLoading={isLoading}
                onPress={handleSubmit}
              />
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default RegisterDevice;
