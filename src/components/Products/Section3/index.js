import React, { useEffect, useState } from "react";
import Card from "../../shared/CardProduct";

async function getCosmeticos() {
  try {
    let response = await fetch("http://localhost:3000/api/products.json");
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function Cosmeticos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCosmeticos().then((data) => {
      setProducts(data["cosmeticos"]);
    });
  }, []);

  return (
    <section>
      <div>
        <h4 style={{ textAlign: "center" }}>Cosméticos!</h4>
        {products.map((product, index) => (
          <Card
            key={index}
            id={product.id}
            imagem={product.img_url}
            name={product.name}
            price={product.price}
            disponibility={product.disponibilidade}
            link={product.link}
          />
        ))}
      </div>
    </section>
  );
}