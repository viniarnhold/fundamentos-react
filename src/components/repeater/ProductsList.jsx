import React from "react";
import Products from "../../data/Products";
import "./ProductsList.css"

const ProductsList = () => {
    const products = Products.map((product, i) => {
        return <tr key={product.id} className={i % 2 === 0 ? 'Par':'Impar'}>
            <td>{product.id}</td>
            <td>{product.nome}</td>
            <td>R$ {product.preco.toFixed(2)}</td>
        </tr>
    })
    return (
        <div className="ProductsList">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList;