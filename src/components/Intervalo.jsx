import React from "react";
import "./Intervalo.css";
import Card from "./Card";
import { connect } from 'react-redux';
import { alterNumMinimo, alterNumMaximo } from '../store/actions/num';

// Gerenciamento Estado com React
// export default props => {

//   const{min, max} = props

//   return (
//     <Card title="Intervalo de Números" red >
//       <div className="intervalo">
//         <span>
//           <strong> Mínimo: </strong>
//           <input type="number" value={min} onChange={e => props.onMinChange(+e.target.value)} />
//         </span>
//         <span>
//           <strong> Máximo: </strong>
//           <input type="number" value={max} onChange={e => props.onMaxChange(+e.target.value)}/>
//         </span>
//       </div>
//     </Card>
//   )
// }

////////////////////////////////////////////////////////////////////

// Gerenciamento Estado com REDUX
function Intervalo(props) {

  const { min, max } = props

  return (
    <Card title="Intervalo de Números" red >
      <div className="intervalo">
        <span>
          <strong> Mínimo: </strong>
          <input type="number" value={min} onc
            onChange={e => props.alterarMinimo(+e.target.value)} />
        </span>
        <span>
          <strong> Máximo: </strong>
          <input type="number" value={max}
            onChange={e => props.alterarMaximo(+e.target.value)} />
        </span>
      </div>
    </Card>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(newNumber) {
      const action = alterNumMinimo(newNumber)
      dispatch(action)
    },
    alterarMaximo(newNumber) {
      const action = alterNumMaximo(newNumber)
      dispatch(action)
    }
  }
}

function mapStateToProps(state) {
  return {
    min: state.num.min,
    max: state.num.max
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);