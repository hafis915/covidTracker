import React from 'react'

import "./Table.css"
const Table : React.FC = () => {
    return(
        <div
        className="tableContainer"
        >
        <table className="tableContent">
            <thead>
                <tr>
                    <th>Region</th>
                    <th>Total Victim</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>Makassar</td>
                    <td>200</td>
                </tr>

                <tr>
                    <td>Makassar</td>
                    <td>200</td>
                </tr>


                <tr>
                    <td>Makassar</td>
                    <td>200</td>
                </tr>


                <tr>
                    <td>Makassar</td>
                    <td>200</td>
                </tr>


                <tr>
                    <td>Makassar</td>
                    <td>200</td>
                </tr>

            </tbody>
                

        </table>
        </div>

    )
}

export default Table