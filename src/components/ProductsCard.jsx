import React from "react";
const ProductsCard = ({ product }) => {
  return (
    <div className="product">
      <div
        className="left"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="right">
          <h5 className="title">{product.name}</h5>
          <div className="bodySuit">
            <p>{product.description}</p>
            <p>Categoria: {product.category}</p>
            <p>Precio: {product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
