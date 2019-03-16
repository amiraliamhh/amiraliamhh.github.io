import styled from 'styled-components'

const Box = styled.div`
    border-radius: 3px;
    background: white;
    width: ${(props) => props.width || '100%'};
    padding: ${(props) => props.padding || '2em'};
    box-sizing: border-box;
    display: flex;
    justify-content: center;    
`

export default Box
