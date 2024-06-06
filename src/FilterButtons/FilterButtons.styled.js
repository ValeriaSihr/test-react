import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const ListBtn = styled.button`
    padding: 8px;
    width: 100px;
    height: 45px;
    background-color: #228b22;
    color: black;
    margin-bottom: 40px;

    &:hover {
        box-shadow: 0px 0px 15px 4px rgba(218, 247, 166, 0.49);
        width: 110px;
        height: 50px;
        transition: 250ms ease;
    }
`;
