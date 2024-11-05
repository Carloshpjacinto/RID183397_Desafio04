import { ProjetoArquitetura, ProjetoBlog, ProjetoCadastro, ProjetoLanding } from "@/assets";

interface projetos{

    nome:string;
    src?:any;
    textoParagrafo:string;
}

export const ListImgProjetos:projetos[] = [
    
    {nome:"Arquitetura", src: ProjetoArquitetura, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {nome: "Blog", src: ProjetoBlog, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {nome: "Cadastro", src: ProjetoCadastro, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {nome: "Landing Page", src: ProjetoLanding, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

]
