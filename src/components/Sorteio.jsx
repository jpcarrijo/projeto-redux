import React from "react";
import Card from "./Card";
import { connect } from 'react-redux';

// Gerenciamento Estado com React
// export default props => {

//   const{min, max} = props
//   const aleatorio = parseInt(Math.random() * (max-min)) + min

//   return (
//     <Card title="Sorteio dos Números" purple>
//       <div>
//         <span>
//           <span> Resultado: </span>
//           <strong> {aleatorio} </strong>
//         </span>
//       </div>
//     </Card>
//   )
// }

///////////////////////////////////////////////////////////

// Gerenciamento Estado com REDUX
function Sorteio(props) {

  const{min, max} = props
  const aleatorio = parseInt(Math.random() * (max-min)) + min

  return (
    <Card title="Sorteio dos Números" purple>
      <div>
        <span>
          <span> Resultado: </span>
          <strong> {aleatorio} </strong>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    min: state.num.min,
    max: state.num.max
  }
}

export default connect(mapStateToProps)(Sorteio);