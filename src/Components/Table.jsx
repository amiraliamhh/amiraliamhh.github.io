import styled from 'styled-components'

const Table = styled.table`
    width: ${(props) => props.width || "100%"};

    td {
        padding-bottom: 2em;
        text-align: center;

        :nth-child(odd) {
            color: #111;
        }

        :nth-child(even) {
            color: #777;
        }
    }
`

export default Table
