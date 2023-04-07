import { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Man Shirt',
            price: 999 ,
            count: 0,
            image: 'https://images.pexels.com/photos/16062375/pexels-photo-16062375.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: 2,
            name: 'Man T-Shirt',
            price: 799,
            count: 0,
            image: 'https://images.pexels.com/photos/14375209/pexels-photo-14375209.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: 3,
            name: 'Man Masks',
            price: 99,
            count: 0,
            image: 'https://images.pexels.com/photos/4604742/pexels-photo-4604742.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: 4,
            name: 'Women T-shirt',
            price: 1199,
            count: 0,
            image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
    ]);

    const handleAddToCart = (id) => {
        const newProducts = products.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    count: product.count + 1,
                };
            }
            return product;
        });
        setProducts(newProducts);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <div className="product-container">
                    {products.map((product) => (
                        <div key={product.id} className="product">
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>Price: {product.price} Rs</p>
                            <p>Count: {product.count}</p>
                            <button onClick={() => handleAddToCart(product.id)}>Add to cart</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
