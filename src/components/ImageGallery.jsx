import ImageCard from "./ImageCard.jsx";
import s from './ImageGallery.module.css'

const ImageGallery = ({photos, openModal}) => {
    return (
        <ul className={s.list}>
            {photos.map(photo => <ImageCard key={photo.id} photo={photo} openModal={openModal}/>)}
        </ul>
    );
};

export default ImageGallery;