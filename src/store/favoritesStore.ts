import { create } from "zustand";
import type { Product } from "../types/product";

interface FavoritesStore {
    favorites: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
    toggleFavorite: (product: Product) => void;
    isFavorite: (productId: number) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
    favorites: [],
    addProduct: (product) => {
        set((prev) =>
            prev.favorites.some((p) => p.id === product.id)
                ? prev
                : { favorites: [...prev.favorites, product] },
        );
    },
    removeProduct: (product) => {
        set((prev) => ({
            favorites: prev.favorites.filter((p) => p.id !== product.id),
        }));
    },
    toggleFavorite: (product) => {
        set((prev) => ({
            favorites: prev.favorites.some((p) => p.id === product.id)
                ? prev.favorites.filter((p) => p.id !== product.id)
                : [...prev.favorites, product],
        }));
    },
    isFavorite: (productId) => {
        return get().favorites.some((p) => p.id === productId);
    },
}));
