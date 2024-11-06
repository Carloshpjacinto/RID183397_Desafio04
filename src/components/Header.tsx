import styled from "styled-components";

import { ListTechnologies, TituloH2 } from "@/resources";

import { StyledButton } from '@/components'

const StyledHeader = styled.header`

    .listTechnologies{

        grid-template-columns: repeat(4, 1fr);
        gap: 4.5rem;
        margin: 5.5rem 0rem 9.5rem 2.5rem;
    }

    .paragraphHeader{

        font-size: 2rem;
        font-weight: 600;

        margin: 0rem 0rem 0rem 5rem;

        cursor: default;
    }

    img{

        width: 3.2rem;
        height: 3.2rem;

        margin-right: 1.5rem;
    }

    .buttonPosition{

        margin: 0rem 0rem 0rem 5.5rem;
    }

`

function Header(){

    return(
        <StyledHeader id="Card">
            <div className="headerCss">
                <TituloH2 className="titleHeader" children="Tecnologias"/>

                <div className="d-grid listTechnologies">
                    {
                        ListTechnologies.map((technologie) => (

                            <p className="paragraphHeader"><img src={technologie.src} alt="" />{technologie.nome}</p>
                        ))
                    }
                </div>

                <a href="https://softdesign.com.br/blog/dicionario-de-tecnologias-para-web/" target="_blank"><StyledButton className="buttonHeader buttonPosition" children="Saber mais"/></a>
            </div>
        </StyledHeader>

    )
}

export default Header
