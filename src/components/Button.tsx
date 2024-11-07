import styled from "styled-components";

export const StyledButton = styled.button<
    React.ButtonHTMLAttributes<HTMLButtonElement>
>`
        font-family: "Poppins", sans-serif;
        border-radius: 83rem;
        background: linear-gradient(280deg, #13ADC7, #6978D1,#945DD6);
        border: 0rem;
        color: #FFFFFF;
        font-weight: 600;
        cursor: pointer;

        &.botaoHeader{

            font-size: 2.8rem;
            width: 28rem;
            height: 8rem;
            margin: 0rem 0rem 0rem 5.5rem;
        }

        &.botaoHeader:hover{

            box-shadow: .2rem .2rem 2.5rem #6978D1;
            transition-duration: 0.5s;
        }

        &.botaoCard{

            font-size: 2rem;
            width: 20rem;
            height: 6rem;

            margin-left: 2.5rem;
        }

        &.botaoCard:hover{

            box-shadow: .2rem .2rem 2.5rem #6978D1;
            transition-duration: 0.5s;
        }
`
