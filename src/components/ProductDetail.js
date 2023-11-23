import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { items } from "./Data";
import Product from "./Product";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  console.log(items, "itemsssss");
  console.log(id, "id");
  console.log(items[0].id,"item id");
  useEffect(() => {
    const filterProduct = items.filter((product) => product.id==id); 
    console.log(filterProduct, "filtered product");
    setProduct(filterProduct.length > 0 ? filterProduct[0] : null);

    const relatedProduct = items.filter(
      (products) => products.category === product?.category
    );
    // console.log("RelatedProduct= ", relatedProduct)
    setRelatedProducts(relatedProduct);
  }, [id, product?.category]);
  //   console.log(relatedProducts,"prodcuts");

  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product?.imgSrc} alt="" />
        </div>
        <div className="text-center ">
          <h1 className="card-title">{product?.title}</h1>
          <p className="card-text">{product?.description}</p>

          <button className="btn btn-primary mx-3">{product?.price}₹</button>
          <button className="btn btn-warning">Add To Cart</button>
        </div>
      </div>
      <Product items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
