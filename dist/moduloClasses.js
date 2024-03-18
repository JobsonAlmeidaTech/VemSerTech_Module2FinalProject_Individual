"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessarSolicitacoes = void 0;
const fs = __importStar(require("fs"));
class ProcessarSolicitacoes {
    static filtrarSolicitacoes(arraySolicitacoes) {
        let solicitacoesAprovadas = [];
        try {
            for (let solicitacao of arraySolicitacoes) {
                if ((solicitacao.idade >= 18) &&
                    (solicitacao.emprestimo.valorTotal >= solicitacao.emprestimo.valorRequerido) &&
                    (solicitacao.emprestimo.valorTotal === (solicitacao.emprestimo.numeroParcelas * solicitacao.emprestimo.valorParcela))) {
                    solicitacoesAprovadas.push(solicitacao);
                }
            }
        }
        catch (e) {
            console.error("Erro: " + e.message);
            throw new Error(`Erro ao filtrar solicitações`);
        }
        return solicitacoesAprovadas;
    }
    static inserirDadosFiltrados(solicitacoesAprovadas, filePath) {
        try {
            const dados = JSON.stringify(solicitacoesAprovadas);
            fs.writeFileSync(filePath, dados, 'utf-8');
        }
        catch (e) {
            console.error("Erro: " + e.message);
            throw new Error(`Erro ao inserir dado no arquivo: ${filePath}`);
        }
        return true;
    }
    static filtrarEInserirSolicitacoes(arraySolicitacoes, filePath) {
        let solicitacoesFiltradas = [];
        let statusInsercao = false;
        try {
            solicitacoesFiltradas = ProcessarSolicitacoes.filtrarSolicitacoes(arraySolicitacoes);
        }
        catch (e) {
            console.error("Erro: " + e.message);
            throw new Error(`Erro ao filtrar solicitações`);
        }
        try {
            statusInsercao = ProcessarSolicitacoes.inserirDadosFiltrados(solicitacoesFiltradas, filePath);
        }
        catch (e) {
            console.error("Erro: " + e.message);
            throw new Error(`Erro ao inserir dado no arquivo: ${filePath}`);
        }
        if (solicitacoesFiltradas.length === 0) {
        }
        return `Número de solicitacões filtradas: ${solicitacoesFiltradas.length}\nInserção com sucesso no arquivo: ${filePath}`;
    }
}
exports.ProcessarSolicitacoes = ProcessarSolicitacoes;
