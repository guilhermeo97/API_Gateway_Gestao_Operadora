import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ListarAssinaturasCliente {
  private readonly logger = new Logger(ListarAssinaturasCliente.name);
  constructor(private readonly httpService: HttpService) {}

  async listarPorCliente(codCliente: string) {
    const { data } = await firstValueFrom(
      this.httpService.get<ExibirAssinaturaDto[]>(
        `http://localhost:3000/gestao/assinaturas/clientes/${codCliente}`,
      ),
    )
      .then((response) => {
        this.logger.log('Assinaturas encontradas com sucesso');
        return response;
      })
      .catch((error) => {
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
