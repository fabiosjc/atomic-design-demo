import styled from "styled-components";

const StyledLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 4px 10px;
    border-bottom: 1px solid transparent;    

    :hover {
        border-bottom: 1px solid;
        transition: .3s ease-in;
    }    
`

 export {StyledLink}