import React from "react";
import Card from "./Card";
import { connect } from 'react-redux';

// Gerenciamento de Estado com React
// export default props => {

//   const{min, max} = props

//   return (
//     <Card title="Média dos Números" green>
//       <div>
//         <span>
//           <span> Resultado: </span>
//           <strong> {(min + max) / 2} </strong>
//         </span>
//       </div>
//     </Card>
//   )
// }

////////////////////////////////////////////////////////////////

// Gerenciamento Estado com REDUX
function Media(props) {

  const{min, max} = props

  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span> Resultado: </span>
          <strong> {(min + max) / 2} </strong>
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

export default connect(mapStateToProps)(Media);