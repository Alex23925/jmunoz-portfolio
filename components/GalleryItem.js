import Image from 'next/image'

export default function GalleryItem(props) {
    return (
        <div className="gallery-wrapper-item">
            <div className="gallery-item-portrait">
                <div className="gallery-item-content">
                    <a href="#" className="img-link">
                        <Image
                            src="/bothBMW.jpeg"
                            alt="Picture of the red and silver BMW"
                            width={305}
                            height={400}
                        />
                    </a>
                    <div className="non-hover-title"><span>BMW - </span><span>Car</span></div>
                    <div className="hover-title">browse all photos from this session</div>
                </div>
            </div>
        </div>
    )
}