import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: pink;
    color: black;
    width: 300px;
    height: 500px;
    border-radius: 30px;
    padding: 50px 20px;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    color: black;
    border-radius: 50%;
    padding: 8px;
    width: 40px;
    height: 40px;
    transition: background-color 250ms ease, color 250ms ease;

    &:hover {
        background-color: #747bff;
        color: lime;
    }
`;
