import { Injectable, Logger } from '@nestjs/common';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ListarAssinaturasPlano {
  private readonly logger = new Logger(ListarAssinaturasPlano.name);
  constructor(private readonly httpService: HttpService) {}

  async listarPorPlano(codPlano: string) {
    const { data } = await firstValueFrom(
      this.httpService.get<ExibirAssinaturaDto[]>(
        `http://localhost:3000/gestao/assinaturas/planos/${codPlano}`,
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
