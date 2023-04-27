import styled from "styled-components";

export const Header = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 60px;
    padding: 5px;
    border: 1px solid lightgrey;
    border-radius: 0px 0px 5px 5px;
    z-index: 2;
    background-color: white;

    button {
        margin: 0px 10px 0px 10px;
    }

    .whatsapp {
        background-color: #00A884;
        padding: 5px;
        border-radius: 30px;
        width: 10em;
        border: 1px solid transparent;
    }
`