import type { Product } from "../types/product";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useFavoritesStore } from "../store/favoritesStore";
import "../styles/product-list.css";

interface ProductListProps {
    products: Product[];
}

function ProductList({ products }: ProductListProps) {
    const favorites = useFavoritesStore((state) => state.favorites);
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

    return (
        <>
            <ul className="product-grid">
                {products.map((product) => {
                    const favorite = favorites.some((p) => p.id === product.id);

                    return (
                        <li key={product.id}>
                            <ProductCard product={product}>
                                {(product) => (
                                    <div className="product-content">
                                        <Link to={`/products/${product.id}`}>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                            />
                                            <h2>{product.title}</h2>
                                        </Link>
                                        <p>${product.price}</p>
                                        <button
                                            onClick={() =>
                                                toggleFavorite(product)
                                            }
                                        >
                                            {favorite ? (
                                                <MdFavorite size={24} />
                                            ) : (
                                                <MdFavoriteBorder size={24} />
                                            )}
                                        </button>
                                    </div>
                                )}
                            </ProductCard>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default ProductList;
