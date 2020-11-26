import Image from 'next/image';

export default function GalleryItem({ img, title,}) {

    return (
        <div className="gallery-wrapper-item">
            <div
                className="gallery-item-content">
                <div>
                    <img
                         className="img-link animated-intro-img" src={img} alt={title} />
                </div>
            </div>
        </div>
    )
}