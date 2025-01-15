import { useSelector } from 'react-redux';

const useProductInfo = () => {

    function isValidImageUrl(url) {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, false);
        try {
            xhr.send();
            const contentType = xhr.getResponseHeader('Content-Type');
            return contentType && contentType.startsWith('image/');
        } catch (error) {
            console.error('Error fetching the image:', error);
            return false;
        }
    }

    const getValidImageUrl = (url) => {
        const isValid = isValidImageUrl(url);

        if (isValid)
            return url;
        return null;
    };

    const products = useSelector(state => state.product.products);

    const productInfo = () => {
        const getImage = (productImage, index = 0) => {
            if (Array.isArray(productImage)) {
                return getValidImageUrl(productImage[index]);
            } else {
                return getValidImageUrl(productImage);
            }
        };

        return products.map((product) => (
            {
                ...product,
                img: getImage(product.img),
                getImage: (index) => { return getImage(product.img, index) },
            }
        ));
    };

    return { productInfo };
};

export default useProductInfo;