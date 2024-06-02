import { useEffect, useState, createContext } from "react";

const PhotosContext = createContext();

const PhotosProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]);
    const [favoritesPhotos, setFavoritesPhotos] = useState([]);

    useEffect(() => {
        fetch('/photos.json')
        .then(response => response.json())
        .then(data => setPhotos(data.photos));
    }, []);

    const toggleFavorites = (id) => {
        setPhotos((savedPhotos) =>
            savedPhotos.map((photo) =>
                photo.id === id ? { ...photo, liked: !photo.liked } : photo
            )
        );

        setFavoritesPhotos((savedFavorites) => {
            const isFavorite = savedFavorites.some((photo) => photo.id === id);
            if (isFavorite) {
                return savedFavorites.filter((photo) => photo.id !== id);
            } else {
                const savedFavorite = photos.find((photo) => photo.id === id);
                return [...savedFavorites, { ...savedFavorite, liked: true }];
            }
        });
    };

    return (
        <PhotosContext.Provider value={{ photos, favoritesPhotos, toggleFavorites }}>
            {children}
        </PhotosContext.Provider>
    );
};

export { PhotosContext, PhotosProvider };
