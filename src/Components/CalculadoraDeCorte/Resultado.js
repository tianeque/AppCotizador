import React from 'react'
import { Table } from 'reactstrap'

const Resultados = () => {
    return(
      <div>
        Resultado
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ejemplares por pliego</td>
              <td id="cortes_pliego">valor</td>
            </tr>
            <tr>
              <td>Horizontales</td>
              <td id="numero_cortes_horizontal">valor</td>
            </tr>
            <tr>
              <td>Verticales</td>
              <td id="numero_cortes_vertical">valor</td>
            </tr>
            <tr>
              <td>Total Pliegos</td>
              <td id="pliegos">valor</td>
            </tr>
            <tr>
              <td>Total Ejemplares</td>
              <td id="numero_cortes">valor</td>
            </tr>
            <tr>
              <td>% utilizado</td>
              <td>valor</td>
            </tr>
            <tr>
              <td>Ejemplares por pliego</td>
              <td>valor</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }

export default Resultados