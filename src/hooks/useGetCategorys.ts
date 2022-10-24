import {useEffect, useState} from 'react';
import {api, Categoria, CategoryResponse} from '../';

export const useGetCategorys = () => {
  const [category, setCategory] = useState<Categoria[]>([]);
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const {data} = await api.get<CategoryResponse>('/categorias');
    setCategory(data.categorias);
  };

  return {
    category,
  };
};
