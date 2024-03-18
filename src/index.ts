import * as fs from 'fs';
import { ProcessarSolicitacoes } from "./moduloClasses"

const arraySolicitacoes = JSON.parse(fs.readFileSync("./src/solicitacoes.json", "utf-8"))

const processar = ProcessarSolicitacoes.filtrarEInserirSolicitacoes(arraySolicitacoes, "./src/emprestimos-aprovados.json" )
console.log(processar)