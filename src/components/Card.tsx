import styled from "styled-components";
import { ListImgProjetos, TituloH2 } from "@/resources";
import { StyledButton } from "./Button";

const StyledCard = styled.div`

    .sessaoCard{

        grid-template-columns: repeat(2, 1fr);
    }

    .CardProjetos{

        width: 55rem;
        height: 70rem;
        border: .1rem solid #0F1624;
        border-top-left-radius: 5rem;
        border-bottom-right-radius: 5rem;
        margin: 10rem 0rem 0rem 10rem;
        box-shadow: .1rem .1rem 1.5rem #FFFFFF;   
    }

    img{

        width: 50rem;
        height: 26.6rem;
        border-radius: .8rem;

        margin: 3rem 0rem 0rem 0rem;
    }

    .paragrafoCard{

        font-size: 2.8rem;
        margin: 0rem 0rem 3rem 3rem
    }

    .textoProjeto{

        font-size: 3.6rem;
        margin: 2rem 0rem 4rem 0rem
    }
`

function Card(){

    return(
        <StyledCard id="Projeto">
            <TituloH2 className="tituloCard" children="Projetos" />
            <div className="d-grid sessaoCard">
                {
                    ListImgProjetos.map((listaProjetos) => (
                        <div className="CardProjetos">
                            <div className="d-flex fd-column al-center">
                                <img src={listaProjetos.src}/>
                                <h2 className="textoProjeto">{listaProjetos.nome}</h2>
                            </div>
                            <p className="paragrafoCard">{listaProjetos.textoParagrafo}</p>
                            <a href={listaProjetos.linkProjeto} target="_blank"><StyledButton className="buttonCard" children="Clique aqui"/></a>
                        </div>
                    ))
                }
            </div>
        </StyledCard>

    )
}
export default Card
