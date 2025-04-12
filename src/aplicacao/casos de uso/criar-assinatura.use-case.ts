import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';
import { CriarAssinaturaDto } from '../dto/criar-assinatura.dto';

@Injectable()
export class CriarAssinatura {
  private readonly logger = new Logger(CriarAssinatura.name);
  constructor(private readonly httpService: HttpService) {}

  async salvar(
    criarAssinaturaDto: CriarAssinaturaDto,
  ): Promise<ExibirAssinaturaDto> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = await firstValueFrom(
      this.httpService
        .post<ExibirAssinaturaDto>('http://localhost:3000/gestao/assinaturas', {
          criarAssinaturaDto,
        })
        .pipe(
          catchError((error) => {
            this.logger.error('Erro ao criar assinatura', error);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return throwError(
              () =>
                new InternalServerErrorException('Erro ao criar assinatura'),
            );
          }),
        ),
    );
    return data;
  }
}
