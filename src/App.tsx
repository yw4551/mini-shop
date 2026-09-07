import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import ProductPage from "./pages/ProductPage";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
    return (
        <>
            <BrowserRouter>
                <ThemeContextProvider>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="/favorites"
                                element={<FavoritesPage />}
                            />
                            <Route
                                path="/products/:id"
                                element={<ProductPage />}
                            />
                        </Route>
                    </Routes>
                </ThemeContextProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
