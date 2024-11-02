import styled from "styled-components";

import { ListTechnologies } from "@/resources";

const StyledHeader = styled.header`
    
    .headerCss{

       margin: 20rem 0rem 0rem 20rem;
    }

    .titleHeader{

        font-size: 6.4rem;
        font-weight: 600;

        cursor: default;

        margin: 0rem 0rem 2.5rem 0rem
    }

    .listTechnologies{

        grid-template-columns: repeat(4, 1fr);
        gap: 4.5rem;
    }

    .paragraphHeader{

        font-size: 1.5rem;
        font-weight: 600;

        margin: 0rem 0rem 0rem 4rem;

        cursor: default;
    }

    img{

        width: 3.2rem;
        height: 3.2rem;

        margin-right: 1.5rem;
    }

`

function Header(){

    return(
        <StyledHeader>
            <div className="headerCss">
                <h1 className="titleHeader">Tecnologias</h1>

                <div className="d-grid listTechnologies">
                    {
                        ListTechnologies.map((technologie) => (

                            <p className="paragraphHeader"><img src={technologie.src} alt="" />{technologie.nome}</p>
                        ))
                    }
                </div>
            </div>
        </StyledHeader>

    )
}

export default Header
