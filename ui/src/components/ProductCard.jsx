import ProductCardClasses from './product-card.module.css';

const ProductCard = ({name, price}) => {
    return ( <div className={ProductCardClasses['product-card']}>
        <h1>{name}</h1>
        <h1>{price}</h1>
    </div> );
}
 
export default ProductCard;