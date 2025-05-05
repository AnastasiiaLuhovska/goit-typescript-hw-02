import s from './ImageCard.module.css'

const ImageCard = ({photo, openModal}) => {
    const {urls, alt_description} = photo
    return (
        <li className={s.card} onClick={() => openModal(photo)}>
            <div>
                <img src={urls.small} alt={alt_description}/>
            </div>
        </li>
    );
};

export default ImageCard;