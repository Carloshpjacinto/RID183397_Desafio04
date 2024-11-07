import styled from "styled-components";
import { LogoFigma, LogoGitHub, LogoLinkedin } from "@/assets";
import { TamanhoResponsivo } from "@/utils";

const StyledFooter = styled.footer`

    margin-bottom: 10rem;

    .contato{

        font-size: 4.2rem;
        margin: -5rem;
    }

    .contato:last-child{

        margin-left: 15rem;
    }

    .LogoFooter{

        width: 7rem;
        height: 7rem;
        margin-left: 5rem;
        cursor: pointer;
    }

    @media ${TamanhoResponsivo.laptop}{

        margin-bottom: 5rem;

        .contato{

            font-size: 2.5rem;
            margin: -5rem;
        }

        .contato:last-child{

            margin-left: 10rem;
        }

        .LogoFooter{

            width: 5rem;
            height: 5rem;
            margin-left: 3rem;
            cursor: pointer;
        }

        .posicaoLink{

            margin-right: -5rem;
        }
    
    }
`

function Footer(){

    return(
        <StyledFooter className="d-flex jc-between al-center">
            
            <div className="d-flex">
                <h3 className="contato">Meu contato:<br/>(11) 954544761</h3>

                <h3 className="contato">Email:<br/>carlo.henrique37@gmail.com</h3>
            </div>
            <div className="posicaoLink">
                <a href="https://github.com/Carloshpjacinto" target="_blank"><img className="LogoFooter" src={LogoGitHub} alt="Logo GitHub" /></a>

                <a href="https://www.linkedin.com/in/carlos-henrique-parreira-jacinto-1962b0179/" target="_blank"><img className="LogoFooter" src={LogoLinkedin} alt="Logo Linkedin" /></a>

                <a><img className="LogoFooter" src={LogoFigma} alt="Logo Figma" /></a>
            </div>
        </StyledFooter>
    )
}

export default Footer
