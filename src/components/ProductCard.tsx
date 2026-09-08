import type { ReactNode } from "react";
import type { Product } from "../types/product";
import "../styles/product-card.css";

interface ProductsCardProp {
    product: Product;
    children: (product: Product) => ReactNode;
}

function ProductCard({ product, children }: ProductsCardProp) {
    return (
        <>
            <div className="product-card">{children(product)}</div>
        </>
    );
}

export default ProductCard;
