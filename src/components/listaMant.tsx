import { Alimento } from "@/data/types/alimentos";
import React, { Key } from "react";
import Mantimentos from "./mantimentos";

interface ListaMantProps {
  alimentos: Alimento[];
}

const ListaMant: React.FC<ListaMantProps> = ({alimentos}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Categoria</th>
            <th>Funções</th>
          </tr>
        </thead>
        <tbody>
        {alimentos.map((alimento) => (
            <Mantimentos key={alimento.id} alimentos={alimento} />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaMant;