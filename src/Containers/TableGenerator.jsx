import React from 'react'
import MUIStar from '@material-ui/icons/Star'
import MUIStarEmpty from '@material-ui/icons/StarBorder'

import { Table } from '../Components'

const TableGenerator = (props) => {

    const generateStars = (count) => {
        let arr = new Array(5).fill(0);

        for (let i = 0; i < count; i++) {
            arr[i] = 1;
        }

        return arr.map((item, index) => {
            if (item === 1) {
                return <MUIStar />
            } else {
                return <MUIStarEmpty />
            }
        })
    }

    return (
        <Table width="80%" >
            <tbody>
            {
                props.values.map((values, i) => (
                    <tr key={i} >
                    {
                        values.map((val, index) => (
                            <td key={index} >{ 
                                typeof val === "number"
                                ? generateStars(val)
                                : typeof val === "object"
                                ? <a href={val.href} target="_blank" >{ val.text }</a>
                                : val
                            }</td>
                        ))
                    }
                    </tr>
                ))
            }
            </tbody>
        </Table>
    )
}

export default TableGenerator
