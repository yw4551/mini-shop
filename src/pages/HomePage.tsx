import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import type { Product } from "../types/product";
import { useFetch } from "../hooks/useFetch";
import ProductList from "../components/ProductList";
import "../styles/homePage.css";

function HomePage() {
    const [search, setSearch] = useState("");
    const url = "https://fakestoreapi.com/products";
    const { data, loading, error } = useFetch<Product[]>(url);
    const products = data ?? [];

    const filteredProducts = useMemo(
        () =>
            products.filter((product) =>
                product.title.toLowerCase().includes(search.toLowerCase()),
            ),
        [search, products],
    );

    if (loading) {
        return <h2>Loading Products...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <>
            <section className="products-container">
                <h1>Products</h1>
                <SearchBar searchValue={search} setSearchValue={setSearch} />
            </section>

            <section className="product-cards">
                {filteredProducts.length === 0 ? (
                    <h2>No product found</h2>
                ) : (
                    <ProductList products={filteredProducts} />
                )}
            </section>
        </>
    );
}

export default HomePage;
