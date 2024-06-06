import styled from "styled-components";

export const Users = styled.li`
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0 10px 20px 10px;
    border-radius: 8px;

    &:hover {
        cursor: pointer;
        background-color: #98fb98;
        color: black;
        transition: 1000ms ease;
    }
`;
