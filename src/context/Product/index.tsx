import React, {createContext} from 'react';
import {ChildrenType, ProductsResponse} from '../../';

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

export const ProductsContext = createContext({} as ProductsResponse);

export const ProductsProvider = ({children}: ChildrenType) => {
  const loadProducts = () => {};

  const addProducts = ({categoryId, productName}: AddProduct) => {
    console.log('addProduct', {categoryId, productName});
  };

  const updateProducts = ({
    categoryId,
    productName,
    productId,
  }: UpdateProduct) => {
    console.log('updateProduct', {categoryId, productName, productId});
  };

  const deleteProducts = ({productId}: ProductById) => {
    console.log('deleteProducts', {productId});
  };

  const loadProductById = ({productId}: ProductById) => {
    console.log('loadProductById', {productId});
  };
  const uploadImage = ({data, productId}: UploadImg) => {
    console.log('loadProductById', {data, productId});
  };

  return (
    <ProductsContext.Provider
      value={{
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
