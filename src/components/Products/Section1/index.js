import React, { useEffect, useState } from "react";
import Card from "../../shared/CardProduct";

async function getHidratantes() {
  try {
    let response = await fetch("http://localhost:3000/api/products.json");
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function Hidratantes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getHidratantes().then((data) => {
      setProducts(data["hidratantes"]);
    });
  }, []);

  return (
    <section>
      <div>
        <h4 style={{ textAlign: "center" }}>Hidratantes!</h4>
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
