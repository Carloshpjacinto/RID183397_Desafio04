interface aparelhos{

    mobileL:string;
    tablet:string;
    laptop:string;
    laptopL:string;
    desktop:string;
}

const TamanhoAparelho:aparelhos = {

    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const TamanhoResponsivo:aparelhos = {

    mobileL: `(min-width: ${TamanhoAparelho.mobileL})`,
    tablet: `(min-width: ${TamanhoAparelho.tablet})`,
    laptop: `(max-width: ${TamanhoAparelho.laptop})`,
    laptopL: `(min-width: ${TamanhoAparelho.laptopL})`,
    desktop: `(min-width: ${TamanhoAparelho.desktop})`,
}
