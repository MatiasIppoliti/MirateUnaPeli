import styled from "styled-components";

export const Wrapper = styled.div`
    display: block;
    background: var(--darkGrey);
    width: 10%;
    min-width: 160px;
    height: 40px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    p {
        display: flex;
        justify-content: center;
        font-size: 25px;
        padding: 3px;
        
    }

    :hover {
        opacity: 0.8;
    }
`;