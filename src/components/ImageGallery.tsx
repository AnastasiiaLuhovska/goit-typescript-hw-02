import ImageCard from "./ImageCard";
import s from './ImageGallery.module.css'
import {OpenModal, Photo} from "../types";
import React, {FC} from "react";

interface GalleryProps {
    photos: Photo[],
    openModal: OpenModal
}

const ImageGallery: FC<GalleryProps> = ({photos, openModal}) => {
    return (
        <ul className={s.list}>
            {photos.map(photo => <ImageCard key={photo.id} photo={photo} openModal={openModal}/>)}
        </ul>
    );
};

export default ImageGallery;