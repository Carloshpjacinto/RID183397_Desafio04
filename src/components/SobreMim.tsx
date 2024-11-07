import styled from "styled-components";
import { ListaLinhaDoTempo, TituloH2 } from "@/resources";
import { TamanhoResponsivo } from "@/utils";

const StyledSobreMim = styled.div`

    margin-bottom: 55rem;

    .linhaDoTempo{

        width: 1320px;
        height: 1.2rem;
        background: white;
        margin: 15rem 0rem 0rem 7.5rem;
        border-radius: 50rem;
        text-align: center;
    }

    .marcadorDaLinha{

        position: absolute;
        background: rgba(255, 255, 255, 1);
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 100%;
    }

    .posicao{

        display:flex;
        align-items: center;
        flex-direction: column;
        margin: -1rem 0rem 0rem 0rem
    }

    .dataLinhaDoTempo{

        display:flex;
        margin: -5rem;
        font-size: 3.6rem;
    }

    .paragrafoLinhaDoTempo{

        display: flex;
        position: absolute;
        margin: 5.5rem 0rem 0rem 0rem;
        width: 34.4rem;
        height: 25.2rem;
        font-size: 2.8rem;
    }

    @media ${TamanhoResponsivo.laptop}{

        margin-bottom: 50rem;

        .linhaDoTempo{

            width: 75.5rem;
            margin: 10rem 0rem 0rem 5.5rem;
        }

        .paragrafoLinhaDoTempo{

            margin: 5.5rem 0rem 0rem 0rem;
            width: 15rem;
            height: 15rem;
            font-size: 1.7rem;
        }
    }
`

function SobreMim(){

    return(
        <StyledSobreMim id="SobreMim">

            <TituloH2 children="Sobre mim" />

            <div className="linhaDoTempo d-flex jc-between ">
                {
                    ListaLinhaDoTempo.map((linhaDoTempo) => (
                        <div className="posicao">
                            <h3 className="dataLinhaDoTempo" >{linhaDoTempo.data}</h3>

                            <div className="marcadorDaLinha"></div>
                            
                            <p className="paragrafoLinhaDoTempo">{linhaDoTempo.historia}</p>
                        </div>    
                    ))
                }
            </div>
        </StyledSobreMim>
    )
}
export default SobreMim
