import styled from "styled-components";
import { ListaLinhaDoTempo, TituloH2 } from "@/resources";

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

    h3{

        display:flex;
        margin: -5rem;
        font-size: 3.6rem;
    }

    p{
        display: flex;
        position: absolute;
        margin: 5.5rem 0rem 0rem 0rem;
        width: 34.4rem;
        height: 25.2rem;
        font-size: 2.8rem;
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
                            <h3>{linhaDoTempo.data}</h3>
                            <div className="marcadorDaLinha"></div>
                            <p>{linhaDoTempo.historia}</p>
                        </div>    
                    ))
                }
            </div>
        </StyledSobreMim>
    )
}
export default SobreMim
