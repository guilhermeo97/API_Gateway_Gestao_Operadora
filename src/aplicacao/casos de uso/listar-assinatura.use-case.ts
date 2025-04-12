import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ListarAssinaturaStatus {
  private readonly logger = new Logger(ListarAssinaturaStatus.name);
  constructor(private readonly httpService: HttpService) {}

  async buscar(codAss: string) {
    const { data } = await firstValueFrom(
      this.httpService.get<boolean>(
        `http://localhost:3002/planosativos/${codAss}`,
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
