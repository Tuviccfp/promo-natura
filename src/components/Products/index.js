import React from "react";
import Hidratantes from "./Section1";
import { ProducComponent } from "./style";
import Sabonetes from "./Section2";
import Cosmeticos from "./Section3";
import Perfumes from "./Section4";

export default function Products() {
    return (
        <ProducComponent>
            <Hidratantes />
            <Sabonetes />
            <Cosmeticos />
            <Perfumes />
        </ProducComponent>
    )
}