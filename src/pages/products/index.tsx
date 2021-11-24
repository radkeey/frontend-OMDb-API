import React, { useEffect, useState } from "react";
import api from "../../services/api";

interface IProduct {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}


const Products = () => {
    const [ products, setProducts] = useState<IProduct[]>([]);
    const loadingProducts = async () => {
        const results = await api.get('/?apikey=2dd38d58&s=Chucky');
        setProducts(results.data.Search);
    };
    
    useEffect(() => {
        loadingProducts();
    }, []);
    
    return (
        <>
        <h1>products</h1>
        <ul>
            {products.map(p => {
                return(
                    <li>
                        <img src={p.Poster} />
                        {p.Title}
                    </li>
                );
            })}
        </ul>
        </>
    );
}
export default Products;
