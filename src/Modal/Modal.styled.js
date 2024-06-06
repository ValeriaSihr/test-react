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
    background-color: #e6e6fa;
    color: black;
    width: 300px;
    height: auto;
    border-radius: 30px;
    padding: 50px 20px;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    color: black;
    border-radius: 10px;
    padding: 8px;
    width: 40px;
    height: 40px;
    transition: background-color 500ms ease, color 500ms ease;

    &:hover {
        background-color: #d8bfd8;
        color: #663399;
        box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);
    }
`;

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);
`;
