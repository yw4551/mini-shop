import { useFavoritesStore } from "../store/favoritesStore";
import FavoritesList from "../components/FavoritesList";

function FavoritesPage() {
    const favorites = useFavoritesStore((state) => state.favorites);

    return (
        <>
            <h1>Favorites</h1>

            {favorites.length === 0 ? (
                <h2>No favorites yet</h2>
            ) : (
                <FavoritesList favorites={favorites} />
            )}
        </>
    );
}

export default FavoritesPage;
