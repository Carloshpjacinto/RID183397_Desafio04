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

        margin-left: 25rem;
    }

    .linksGitLinke{

        width: 3.2rem;
        height: 3.2rem;
        margin-left: 2rem;
        cursor: pointer;
    }

    .linksGitLinke:last-child{

        margin-right: 20rem
    }

`

function NavBar(){

    return(

        <StyledNav>
            <div className="d-flex jc-between">
                <div>
                    <a className="linksNav" href="">Projetos</a>
                    <a className="linksNav" href="">Tecnologias</a>
                    <a className="linksNav" href="">Sobre mim</a>
                </div>

                <div>
                    <a className="linksGitLinke" href="https://github.com/Carloshpjacinto"><img src={LogoGitHub} alt="Logo GitHub" /></a>
                    <a className="linksGitLinke" href="https://www.linkedin.com/in/carlos-henrique-parreira-jacinto-1962b0179/"><img src={LogoLinkedin} alt="Logo Linkedin" /></a>
                </div>
            </div>

        </StyledNav>

    )
}

export default NavBar
