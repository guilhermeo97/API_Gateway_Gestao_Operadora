import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ExibirPlanoDto } from '../dto/exibir-plano.dto';

@Injectable()
export class ListarPlanosCadastrados {
  private readonly logger = new Logger(ListarPlanosCadastrados.name);
  constructor(private readonly httpService: HttpService) {}

  async listarTodosPlanos(): Promise<ExibirPlanoDto[] | void[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<ExibirPlanoDto[]>(
        `http://localhost:3000/gestao/planos`,
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
