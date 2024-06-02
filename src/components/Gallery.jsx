import { useContext } from 'react';
import {IconHeart} from './IconHeart';
import { PhotosContext } from '../Context/PhotosContext';

export const Gallery = () => {
  const { photos, toggleFavorites } = useContext(PhotosContext);

  if (!photos || photos.length === 0) {
    return <div className="gallery empty">No hay fotos para mostrar</div>;
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map(photo => (
        <div key={photo.id} className="photo-card">
          <img src={photo.src.medium} alt={photo.alt} />
          <button className="icon-heart-btn" onClick={() => toggleFavorites(photo.id)}>
            <IconHeart filled={photo.liked} />
          </button>
          <div className="photo-alt-text">{photo.alt}</div>
        </div>
      ))}
    </div>
  );
};
