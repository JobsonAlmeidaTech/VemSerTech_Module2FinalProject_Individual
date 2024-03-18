import * as fs from 'fs';
import {IObject} from "./moduloInterfaces.js";

export abstract class ProcessarSolicitacoes {
   
    static filtrarSolicitacoes(arraySolicitacoes: IObject[]){

        let solicitacoesAprovadas: IObject[]= []

        try{
            for(let solicitacao of arraySolicitacoes){

                if((solicitacao.idade >=18) &&
                   (solicitacao.emprestimo.valorTotal >= solicitacao.emprestimo.valorRequerido) &&
                   (solicitacao.emprestimo.valorTotal === (solicitacao.emprestimo.numeroParcelas * solicitacao.emprestimo.valorParcela))){
                
                    solicitacoesAprovadas.push(solicitacao)
    
                }           
            }
        }
        catch(e:any){
            console.error("Erro: " + e.message)
            throw new Error(`Erro ao filtrar solicitações`) 
        }    

        return solicitacoesAprovadas
        
    }

    static inserirDadosFiltrados(solicitacoesAprovadas: IObject[], filePath: any){

        try{
            const dados = JSON.stringify(solicitacoesAprovadas)
            fs.writeFileSync(filePath, dados,'utf-8');       
        }
        catch(e: any){
            console.error("Erro: " + e.message)
            throw new Error(`Erro ao inserir dado no arquivo: ${filePath}`) 
        }
       
        return true

    }

    static filtrarEInserirSolicitacoes(arraySolicitacoes: IObject[], filePath: any){

        let solicitacoesFiltradas: IObject[] = []
        let  statusInsercao: boolean = false
       
        try{
            solicitacoesFiltradas = ProcessarSolicitacoes.filtrarSolicitacoes(arraySolicitacoes)
        }
        catch(e: any){
            console.error("Erro: " + e.message)
            throw new Error(`Erro ao filtrar solicitações`)
        }

        try{
            statusInsercao = ProcessarSolicitacoes.inserirDadosFiltrados(solicitacoesFiltradas, filePath)
        }
        catch(e: any){
            console.error("Erro: " + e.message)
            throw new Error(`Erro ao inserir dado no arquivo: ${filePath}`) 
        }
      
        return `Número de solicitacões filtradas: ${solicitacoesFiltradas.length}\nInserção com sucesso no arquivo: ${filePath}`
    }

}