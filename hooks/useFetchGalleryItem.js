import { useState, useEffect } from "react";
import Prismic from "prismic-javascript";

export default function useFetchGalleryItem(type) {
    const apiEndpoint = 'https://jmunoz-portfolio.cdn.prismic.io/api/v2';
    const accessToken = '';

    const Client = Prismic.client(apiEndpoint, { accessToken });
    const [galleryItems, setGalleryItemsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at('document.type', type)
            )
            if (response) {
                setGalleryItemsData(response.results)
            }
        }
        fetchData()
    }, [])

    return galleryItems;
}