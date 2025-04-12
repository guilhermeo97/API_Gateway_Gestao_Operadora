export class ExibirPlanoDto {
  codigo: number;
  nome: string;
  custoMensal: number;
  descricao: string;
  dataUltimoPagamento: Date;

  constructor(
    codigo: number,
    nome: string,
    custoMensal: number,
    descricao: string,
    dataUltimoPagamento: Date,
  ) {
    this.codigo = codigo;
    this.nome = nome;
    this.custoMensal = custoMensal;
    this.descricao = descricao;
    this.dataUltimoPagamento = dataUltimoPagamento;
  }
}
