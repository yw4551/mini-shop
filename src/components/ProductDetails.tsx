import { MdFavorite, MdFavoriteBorder, MdLocalOffer } from "react-icons/md";
import type { Product } from "../types/product";
import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/favoritesStore";

interface ProductDetailsProps {
    product: Product;
}

function ProductDetails({ product }: ProductDetailsProps) {
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const isFavorite = useFavoritesStore((state) => state.isFavorite);

    return (
        <>
            <div className="product-details-card">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="card-content">
                    <h2>{product.title}</h2>
                    <p className="category-tag">
                        <MdLocalOffer /> {product.category}
                    </p>
                    <p className="price">${product.price}</p>
                    <p className="description">{product.description}</p>
                    <div className="product-btns">
                        <button
                            className="add-to-favorites"
                            onClick={() => toggleFavorite(product)}
                        >
                            {isFavorite(product.id) ? (
                                <>
                                    <MdFavorite /> Remove from Favorites
                                </>
                            ) : (
                                <>
                                    <MdFavoriteBorder /> Add to Favorites
                                </>
                            )}
                        </button>
                        <Link to="/">Back to products</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
