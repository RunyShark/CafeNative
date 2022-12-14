// Generated by https://quicktype.io

export interface ProductsResponse {
  total: number;
  productos: Producto[];
}

export interface Producto {
  precio: number;
  _id: string;
  nombre: string;
  usuario: Categoria;
  categoria: Categoria;
  disponible: boolean;
  img?: string;
}

export interface Categoria {
  _id: string;
  nombre: string;
}

// Generated by https://quicktype.io
// Generated by https://quicktype.io

export interface CategoryResponse {
  total: number;
  categorias: Categoria[];
}

export interface Categoria {
  _id: string;
  nombre: string;
  usuario: Usuario;
}

export interface Usuario {
  _id: string;
  nombre: string;
}
