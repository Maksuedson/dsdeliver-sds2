import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ProductsList from './ProductsList'; 
import StepsHeader from './StepsHeader';
import OrderSummary from './OrderSummary';
import {OrderLocationData, Product} from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import Footer from '../Footer/Index';
import './styles.css';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalprice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    },0)

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = selectedProducts.some(item => item.id === product.id);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    return(
        <>
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList
            products={products}
            onSelectProduct={handleSelectProduct}
            selectedProducts={selectedProducts}
            />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSummary 
            amount={selectedProducts.length} 
            totalprice={totalprice}
            onSubmit={handleSubmit}
            />
        </div>
        <Footer />
        </>
    )
}

export default Orders;