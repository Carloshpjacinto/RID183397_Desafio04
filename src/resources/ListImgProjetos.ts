import { ProjetoArquitetura, ProjetoBlog, ProjetoBootcamp, ProjetoLanding } from "@/assets";

interface projetos{

    nome:string;
    src?:any;
    textoParagrafo:string;
    linkProjeto?:string
}

export const ListImgProjetos:projetos[] = [
    
    {nome:"Arquitetura", src: ProjetoArquitetura, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkProjeto: "https://dnc-project-page-arquitetura.vercel.app/"},
    {nome: "Blog", src: ProjetoBlog, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkProjeto: "https://thenewsdev.netlify.app/"},
    {nome: "Bootcamp", src: ProjetoBootcamp, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkProjeto: "https://dncbootcamppage.netlify.app/"},
    {nome: "Landing Page", src: ProjetoLanding, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkProjeto: "https://landinpagednc.netlify.app/"},

]
