import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { Product } from "../types/product";
import ProductDetails from "../components/ProductDetails";

function ProductPage() {
    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    const { data, loading, error } = useFetch<Product>(url);

    if (loading) {
        return <h2>Product is loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    if (!data) {
        return <h2>Product not found</h2>;
    }

    return <ProductDetails product={data} />;
}

export default ProductPage;
