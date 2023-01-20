import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import ProductsCard from "./ProductsCard";

const ProductsList = () => {
  const [page, setPage] = useState(2);

  const getProducts = async ({ queryKey }) => {
    const response = await fetch(
      `https://peticiones.online/api/products?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status } = useQuery(["products", page], getProducts);

  if (status === "loading") {
    return <p>Recuperando los productos...</p>;
  }

  if (status === "error") {
    return <p>error</p>;
  }

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div>
        <button onClick={() => setPage(page - 1)}>Anterior</button>
        <button onClick={() => setPage(page + 1)}>Siguiente</button>
      </div>
      <div className="products">
        {data.results.map((prod) => (
          <ProductsCard product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
