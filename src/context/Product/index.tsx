import React, {createContext, useEffect, useState} from 'react';
import {
  ChildrenType,
  ProductsResponse,
  api,
  Categoria,
  Producto,
  ProviderProps,
} from '../../';

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

export type ProductsContextProps = {
  products: Producto[];
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

export const ProductsProvider = ({children}: ProviderProps) => {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const {
        data: {productos},
      } = await api.get<ProductsResponse>('/productos?limit=10');

      setProducts([...productos]);
    } catch (error) {
      console.log('error', error);
    }
  };

  const addProducts = async ({categoryId, productName}: AddProduct) => {
    try {
      const {data} = await api.post<ResponseAddProduct>('/productos', {
        categoryId,
        productName,
      });
      setProducts();
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
        products,
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
