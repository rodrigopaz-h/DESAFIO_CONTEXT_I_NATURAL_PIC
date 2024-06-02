import { useContext } from "react";
import { PhotosContext } from "../Context/PhotosContext";

const Favorites = () => {
  const {favoritesPhotos}=useContext(PhotosContext)
  return (
    <div className="App">
      <h1 >Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
      {favoritesPhotos.map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.src.medium} alt={photo.alt} />
            <div className="photo-alt-text">{photo.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
