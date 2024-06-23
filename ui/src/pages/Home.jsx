import HomeClasses from './home.module.css';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);
    
    const fetchProducts = () => {
        fetch('http://localhost:4000/api/products/')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const { products } = data;
                setProducts(products);
            })
            .catch(err => {
                console.log(err.message);
            })
    }       

    useEffect(() => {
        fetchProducts();
    }, [])


    return ( <div className={HomeClasses['home']}>
        <div className={HomeClasses['product-grid']}>
            {
                products.map(p => {
                    return <ProductCard
                            key={p.id}
                            name={p.name}
                            price={p.price}
                        />
                })
            }
        </div>
    </div> );
}
 
export default Home;