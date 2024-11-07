import styled from "styled-components";
import { LogoGitHub, LogoLinkedin } from '@/assets'

const StyledNav = styled.nav`

    margin-top: 3rem;

    .linksNav{
        color: #FFFFFF;
        text-decoration: none;
        font-size: 3rem;
        font-weight: 500;
        margin-left: 7rem;
    }

    .linksNav:first-child{

        margin-left: 30rem;
    }

    .imgLinks{

        width: 3.2rem;
        height: 3.2rem;
        margin-left: 2rem;
        cursor: pointer;
    }
`

function NavBar(){

    return(
        <StyledNav>

            <div className="d-flex jc-between">

                <div>
                    <a className="linksNav" href="#Projeto">Projetos</a>
                    <a className="linksNav" href="#Card">Tecnologias</a>
                    <a className="linksNav" href="#SobreMim">Sobre mim</a>
                </div>

                <div>
                    <a className="imgLinks" href="https://github.com/Carloshpjacinto" target="_blank"><img src={LogoGitHub} alt="Logo GitHub" /></a>
                    <a className="imgLinks" href="https://www.linkedin.com/in/carlos-henrique-parreira-jacinto-1962b0179/" target="_blank"><img src={LogoLinkedin} alt="Logo Linkedin" /></a>
                </div>
            </div>
        </StyledNav>
    )
}

export default NavBar
