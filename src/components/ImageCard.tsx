import s from './ImageCard.module.css'
import {OpenModal, Photo} from "../types";
import {FC} from "react";

interface CardProps{
    photo: Photo,
    openModal: OpenModal
}
const ImageCard: FC<CardProps> = ({photo, openModal}) => {
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