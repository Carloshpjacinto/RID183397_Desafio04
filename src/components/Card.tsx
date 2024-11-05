import styled from "styled-components";
import { ListImgProjetos } from "@/resources";
import { StyledButton } from "./Button";

const StyledCard = styled.div`

    .sessaoCard{

        grid-template-columns: repeat(2, 1fr);
        margin-left: 20rem;
    }

    .titleHeader{

        font-size: 6.4rem;
        font-weight: 600;

        cursor: default;

        margin: 10rem 0rem 5rem 20rem;
    }

    .CardProjetos{

        width: 55rem;
        height: 70rem;
        border: .1rem solid;
        border-top-left-radius: 5rem;
        border-bottom-right-radius: 5rem;
        margin-bottom: 10rem;
    }

    img{

        width: 50rem;
        height: 26.6rem;
        border-radius: .8rem;

        margin: 3rem 0rem 0rem 0rem;
    }

    p{
        font-size: 2.8rem;
        margin: 0rem 0rem 2.5rem 0rem
    }

    h2{

        font-size: 3.6rem;
        margin: 2rem 0rem 5rem 0rem
    }
`

function Card(){

    return(
        <StyledCard>

            <h2 className="titleHeader" >Projetos</h2>

            <div className="d-grid sessaoCard">

                {
                    ListImgProjetos.map((listaProjetos) => (

                        <div className="CardProjetos">
                            <div className="d-flex fd-column al-center">
                                <img src={listaProjetos.src}/>
                                <h2>{listaProjetos.nome}</h2>
                            </div>
                            <p>{listaProjetos.textoParagrafo}</p>
                            <StyledButton className="buttonCard" children="Clique aqui"/>
                        </div>

                    ))
                }
            </div>
        </StyledCard>

    )
}

export default Card
