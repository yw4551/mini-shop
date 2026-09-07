import { MdDelete, MdFavorite } from "react-icons/md";
import { useFavoritesStore } from "../store/favoritesStore";
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface FavoriteListProps {
    favorites: Product[];
}

function FavoritesList({ favorites }: FavoriteListProps) {
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const removeProduct = useFavoritesStore((state) => state.removeProduct);

    return (
        <ul className="product-favorites-cards">
            {favorites.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product}>
                        {(product) => (
                            <div className="card-content">
                                <img src={product.image} alt={product.title} />
                                <button onClick={() => toggleFavorite(product)}>
                                    <MdFavorite size={24} />
                                </button>
                                <p>{product.title}</p>
                                <p className="price">${product.price}</p>
                                <button
                                    className="remove-product"
                                    onClick={() => removeProduct(product)}
                                >
                                    <MdDelete /> Remove
                                </button>
                            </div>
                        )}
                    </ProductCard>
                </li>
            ))}
        </ul>
    );
}

export default FavoritesList;
