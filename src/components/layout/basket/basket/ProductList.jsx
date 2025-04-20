import ProductBox from './ProductBox';

const ProductList = ({ className = '' }) => {
    const products = [
        {
            title: 'تی شرت یقه گرد آستین کوتاه',
            price: 1_700_000,
            image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/product-man-sample-7-300x300.jpg',
        },
        {
            title: 'تی شرت یقه گرد آستین کوتاه',
            price: 1_700_000,
            image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/product-man-sample-7-300x300.jpg',
        },
    ];

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {products.map((item, index) => (
                <ProductBox key={index} {...item} />
            ))}
        </div>
    );
};

export default ProductList;
