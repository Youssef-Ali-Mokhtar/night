import HomeClasses from './home.module.css';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';

const productsData = [
    {
        id:'prod_1', 
        name:'sneakers', 
        price:100
    },
    {
        id:'prod_2', 
        name:'jacket', 
        price:200
    },
    {
        id:'prod_3', 
        name:'shirt', 
        price:150
    },
    {
        id:'prod_4', 
        name:'jeans', 
        price:80
    }
];

const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(productsData);
    }, [])
    // const fetchProducts = () => {
    //     fetch('')
    // }

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