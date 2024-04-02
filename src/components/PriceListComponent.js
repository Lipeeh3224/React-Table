import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

function PriceList() {

    let produto_1 = {
        id: 1,
        nome: "Pneus",
        categoria: "Carros",
        quantidade: "100",
        valor_unitario: "R$ 200,00",
        total: "R$ 20.000,00",
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={"8"}>
                            VENDAS
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Produto</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário</th>
                        <th>Total</th>
                    </tr>

                    <tr>
                        <th>{produto_1.id}</th>
                        <th>{produto_1.nome}</th>
                        <th>{produto_1.categoria}</th>
                        <th>{produto_1.quantidade}</th>
                        <th>{produto_1.valor_unitario}</th>
                        <th>{produto_1.total}</th>
                    </tr>


                    <tr>
                        <th colSpan={"3"}></th>
                        <th>200</th>
                        <th>R$ 700,00</th>
                        <th>R$ 70.000,00</th>

                    </tr>
                </tbody>
            </Table>

        </>
    );
}

export default PriceList;