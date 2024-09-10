import React, { useState, useEffect } from 'react';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let componentMounted = true;

        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (componentMounted) {
                    const products = await response.json();
                    setData(products);
                    setFilter(products);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                if (componentMounted) {
                    setLoading(false);
                }
            }
        };

        getProducts();

        return () => {
            componentMounted = false;
        };
    }, []);

    const Loading = () => (
        <div>Loading....</div>
    );

    const ShowProducts = () => (
        <div>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2">All</button>
                <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                <button className="btn btn-outline-dark me-2">Jewelry</button>
                <button className="btn btn-outline-dark me-2">Electronics</button>
            </div>
            <div className="row">
                {filter.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100 text-center p-4">
                            <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title.substring(0, 12)}</h5>
                                <p className="card-text">${product.price}</p>
                                <a href="#" className="btn btn-outline-dark">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;
