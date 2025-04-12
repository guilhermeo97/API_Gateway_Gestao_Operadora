export class ExibirAssinaturaDto {
  codigo: number;
  codPlano: number;
  codCli: number;
  inicioFidelidade: Date;
  fimFidelidade: Date;
  status: string;
  dataUltimoPagamento: Date;
  custoFinal: number;
  descricao: string;

  constructor(
    codigo: number,
    codPlano: number,
    codCli: number,
    inicioFidelidade: Date,
    fimFidelidade: Date,
    status: string,
    dataUltimoPagamento: Date,
    custoFinal: number,
    descricao: string,
  ) {
    this.codigo = codigo;
    this.codPlano = codPlano;
    this.codCli = codCli;
    this.inicioFidelidade = inicioFidelidade;
    this.fimFidelidade = fimFidelidade;
    this.dataUltimoPagamento = dataUltimoPagamento;
    this.custoFinal = custoFinal;
    this.descricao = descricao;
    this.status = status;
  }
}
