export interface IEmprestimo{
    valorTotal: number
    valorRequerido: number
    valorParcela: number
    numeroParcelas: number
}

export interface IObject{
    nome: string
    idade: number
    rg: string
    sexo: string
    cidade: string
    estado: string
    emprestimo: IEmprestimo
}