import { create } from "zustand";
import { Bomboniere } from "../types/bomboniere";
import { getProductList } from "../services/bomboniere";

type ProductStore = {
  productList: Bomboniere[];
  hasFetched: boolean;
  fetchProductList: () => Promise<void>;
  // getProductById: (id: string) => Bomboniere | undefined;
  updateproductList: (Product: Bomboniere) => void;
  addProduct: (Product: Bomboniere) => void;
  removeProduct: (id: string) => void;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  productList: [],
  hasFetched: false,

  fetchProductList: async () => {
    if (get().hasFetched) return;

    const list = await getProductList();

    set({ productList: list, hasFetched: true });
  },

  // getProductById: (id: string) =>
  //   get().productList.find((Product) => Product.idFilme === id),

  updateproductList: (updatedProduct: Bomboniere) => {
    set((state) => ({
      productList: state.productList.map((Product) =>
        Product._id === updatedProduct._id ? updatedProduct : Product
      ),
    }));
  },

  addProduct: (newProduct: Bomboniere) => {
    set((state) => ({
      productList: [...state.productList, newProduct],
    }));
  },

  removeProduct: (id: string) => {
    set((state) => ({
      productList: state.productList.filter((Product) => Product._id !== id),
    }));
  },
}));
