import React, {createContext, useState} from 'react';
import {ChildrenType, ProductsResponse, api, Categoria} from '../../';

interface ResponseAddProduct {
  precio: number;
  _id: string;
  nombre: string;
  categoria: Categoria;
  usuario: Categoria;
}

interface CrudProps {
  categoryId: string;
  productName: string;
  productId: string;
  data: any;
}

type AddProduct = Omit<CrudProps, 'productId' | 'data'>;
type ProductById = Omit<CrudProps, 'categoryId' | 'productName' | 'data'>;
type UpdateProduct = Omit<CrudProps, 'data'>;
type UploadImg = Omit<CrudProps, 'categoryId' | 'productName'>;

type ProductsContextProps = {
  products: ProductsResponse[];
  loadProducts: () => Promise<void>;
  addProducts: ({categoryId, productName}: AddProduct) => Promise<void>;
  updateProducts: ({
    categoryId,
    productName,
    productId,
  }: UpdateProduct) => Promise<void>;
  deleteProducts: (productId: ProductById) => Promise<void>;
  loadProductById: (productId: ProductById) => Promise<ProductsResponse>;
  uploadImage: ({data, productId}: UploadImg) => Promise<void>; //todo change any
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({children}: ChildrenType) => {
  const [productos, setProductos] = useState<ProductsResponse[]>([]);

  const loadProducts = async () => {};

  const addProducts = async ({categoryId, productName}: AddProduct) => {
    console.log('addProduct', {categoryId, productName});
    try {
      const {data} = await api.post<ResponseAddProduct>('/productos', {
        categoryId,
        productName,
      });
      setProductos([]);
    } catch (error) {
      console.log('error', error);
    }
  };

  const updateProducts = async ({
    categoryId,
    productName,
    productId,
  }: UpdateProduct) => {
    console.log('updateProduct', {categoryId, productName, productId});
  };

  const deleteProducts = async ({productId}: ProductById) => {
    console.log('deleteProducts', {productId});
  };

  const loadProductById = async ({productId}: ProductById) => {
    throw new Error('Not implemented');
  };
  const uploadImage = async ({data, productId}: UploadImg) => {
    console.log('loadProductById', {data, productId});
  };

  return (
    <ProductsContext.Provider
      value={{
        productos,
        loadProducts,
        addProducts,
        updateProducts,
        deleteProducts,
        loadProductById,
        uploadImage,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
