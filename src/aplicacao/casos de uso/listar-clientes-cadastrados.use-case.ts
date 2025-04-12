import { Injectable, Logger } from '@nestjs/common';

import { ExibirClientesDto } from '../dto/exibir-clientes.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ListarClientesCadastrados {
  private readonly logger = new Logger(ListarClientesCadastrados.name);
  constructor(private readonly httpService: HttpService) {}

  async listarTodosClientes(): Promise<ExibirClientesDto[] | void[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<ExibirClientesDto[]>(
        `http://localhost:3000/gestao/clientes`,
      ),
    ).catch((error) => {
      this.logger.error('Erro ao listar assinaturas', error);
      throw new Error('Erro ao listar assinaturas');
    });
    if (!data) {
      this.logger.error('Nenhuma assinatura encontrada');
      throw new Error('Nenhuma assinatura encontrada');
    }
    return data;
  }
}
