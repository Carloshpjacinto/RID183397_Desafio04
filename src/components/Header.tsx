import styled from "styled-components";

import { ListTechnologies, TituloH2 } from "@/resources";

import { StyledButton } from '@/components'

const StyledHeader = styled.header`

    .titleHeader{

        margin: 25rem 0rem 5rem 0rem;

    }

    .listTechnologies{

        grid-template-columns: repeat(4, 1fr);
        gap: 4.5rem;
        margin: 0rem 0rem 9.5rem 2.5rem;
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
        <StyledHeader>
            <div className="headerCss">
                <TituloH2 className="titleHeader" children="Tecnologias"/>

                <div className="d-grid listTechnologies">
                    {
                        ListTechnologies.map((technologie) => (

                            <p className="paragraphHeader"><img src={technologie.src} alt="" />{technologie.nome}</p>
                        ))
                    }
                </div>

                <StyledButton className="buttonHeader buttonPosition" children="Saber mais"/>
            </div>
        </StyledHeader>

    )
}

export default Header
