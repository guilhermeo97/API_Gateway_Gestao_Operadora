import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RegistrarPagamento {
  private readonly logger = new Logger(RegistrarPagamento.name);
  constructor(private readonly httpService: HttpService) {}

  async salvar(codAss: number, valorPago: number, dataPagamento: Date) {
    await firstValueFrom(
      this.httpService.post<void>(`http://localhost:3001/registrarpagamento`, {
        codAss: codAss,
        valorPago: valorPago,
        dataPagamento: dataPagamento,
      }),
    ).catch((error) => {
      this.logger.error('Erro ao listar assinaturas', error);
      throw new Error('Erro ao listar assinaturas');
    });
  }
}
