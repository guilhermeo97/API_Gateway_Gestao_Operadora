import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AtualizarCustoPlanoDto } from '../dto/atualizarcusto-plano.dto';
import { ExibirPlanoDto } from '../dto/exibir-plano.dto';

@Injectable()
export class AtualizarCustoPlano {
  private readonly logger = new Logger(AtualizarCustoPlano.name);
  constructor(private readonly httpService: HttpService) {}

  async atualizar(
    codigo: string,
    atualizarCustoPlano: AtualizarCustoPlanoDto,
  ): Promise<ExibirPlanoDto | void> {
    const { data } = await firstValueFrom(
      this.httpService.patch<ExibirPlanoDto>(
        `http://localhost:3000/gestao/planos/${codigo}`,
        atualizarCustoPlano,
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
