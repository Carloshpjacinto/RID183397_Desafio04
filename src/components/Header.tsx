import styled from "styled-components";

import { ListTechnologies, TituloH2 } from "@/resources";

import { StyledButton } from '@/components'

const StyledHeader = styled.header`

    .listTechnologies{

        grid-template-columns: repeat(4, 1fr);
        gap: 4.5rem;
        margin: 5.5rem 0rem 9.5rem 2.5rem;
    }

    .paragrafoHeader{

        font-size: 2rem;
        font-weight: 600;
        margin: 0rem 0rem 0rem 5rem;
        cursor: default;
    }

    .imgTecnologias{

        width: 3.2rem;
        height: 3.2rem;
        margin-right: 1.5rem;
    }
`

function Header(){

    return(
        <StyledHeader id="Card">
            <div>
                <TituloH2 className="titleHeader" children="Tecnologias"/>

                <div className="d-grid listTechnologies">
                    {
                        ListTechnologies.map((technologie) => (

                            <p className="paragrafoHeader"><img className="imgTecnologias" src={technologie.src} alt="..." />{technologie.nome}</p>
                        ))
                    }
                </div>
                <a href="https://softdesign.com.br/blog/dicionario-de-tecnologias-para-web/" target="_blank"><StyledButton className="botaoHeader" children="Saber mais"/></a>
            </div>
        </StyledHeader>
    )
}

export default Header
