import React from "react";
import Card from "./Card";
import { connect } from 'react-redux';

// Gerenciamento Estado com React
// export default props => {

//   const { min, max } = props

//   return (
//     <Card title="Soma dos Números" blue>
//       <div>
//         <span>
//           <span> Resultado: </span>
//           <strong> {min + max} </strong>
//         </span>
//       </div>
//     </Card>
//   )
// }

////////////////////////////////////////////////////////

// Gerenciamento com REDUX
function Soma(props) {

  const { min, max } = props

  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span> Resultado: </span>
          <strong> {min + max} </strong>
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

export default connect(mapStateToProps)(Soma);