import React from "react";
import "./Intervalo.css";
import Card from "./Card";

export default props => {

  const{min, max} = props

  return (
    <Card title="Intervalo de Números" red >
      <div className="intervalo">
        <span>
          <strong> Mínimo: </strong>
          <input type="number" value={min} />
        </span>
        <span>
          <strong> Máximo: </strong>
          <input type="number" value={max} />
        </span>
      </div>
    </Card>
  )
}