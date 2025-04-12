export class ExibirClientesDto {
  codigo: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;

  constructor(codigo: number, nome: string, email: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.email = email;
  }
}
