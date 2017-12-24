import React, {Component} from 'react'
import { Table } from 'reactstrap'
import faker from '../../data'



class Gestion extends Component {

    constructor(){
        super()
        this.state = {
            nombre: 'Marta',
            caracteristica: 'reeeeeeeeeca',
        }

        this.data = [
            {
                n:1, 
                firstName: faker.name.findName(), 
                lastName: faker.name.findName(), 
                userName: '@mdo'
            },
            {
                n:2, 
                firstName: 'Sebastian', 
                lastName: 'Castillo', 
                userName: '@scs'
            },
            {
                n:2, 
                firstName: 'Pablo', 
                lastName: 'Castillo', 
                userName: '@pcr'
            }
        ]
        
    }

    render() {
        
        return(
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
                {
                    this.data.map(n => {
                        return(
                            <tr>
                                <th scope="row">{n.n}</th>
                                <td>{n.firstName}</td>
                                <td>{n.lastName}</td>
                                <td>{n.userName}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
          </Table>
        )
    }
}

export default Gestion