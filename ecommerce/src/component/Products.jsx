import { useEffect } from "react";

inmport React, { use state, use useEffect } from 'react';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentmounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const reponse = await fetch("https://fakestoreapi.com/products");
            if (componentmounted) {
                setData(await response.clone());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentmounted = false;
            }

       )
}


                    }

const Loading = () => {
    return (
        <>
            Loading....
        </>
    )
}
const ShowProducts = () => {
    return (
        <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-Z">All</button>
                <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                <button className="btn btn-outline-dark me-2">Jewelery</button>
                <button className="btn btn-outline-dark me-2">Electronic</button>
            </>
        </div >
        {
            filter.map((product) => {
                return (
                    <>
                        <div className="col-md-3">
                            <div class="card"">
                            <img src={product.image} class="card-img-top" alt={product.title}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                    ${product.price}
                                    </p>
                                    <a href="#"<div class="card" style="width: 18rem;">
                                    <img src="..." class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Card title</h5>
                                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">An item</li>
                                      <li class="list-group-item">A second item</li>
                                      <li class="list-group-item">A third item</li>
                                    </ul>
                                    <div class="card-body">
                                      <a href="#" class="card-link">Card link</a>
                                      <a href="#" class="card-link">Another link</a>
                                    </div>
                                  </div> {
                                        constructor(parameters) {
                                            
                                        }
                                    }></a>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">An item</li>
                                    <li class="list-group-item">A second item</li>
                                    <li class="list-group-item">A third item</li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                        </div>
                    </div >
                </>
            )
        }
        )

        }
    )
}
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
        <Products />
    </div>
);
}