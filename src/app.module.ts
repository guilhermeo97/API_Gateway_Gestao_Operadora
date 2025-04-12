import { Module } from '@nestjs/common';
import { AssinaturaController } from './apresentacao/controladores/assinatura.controller';

import { HttpModule } from '@nestjs/axios';
import { CriarAssinatura } from './aplicacao/casos de uso/criar-assinatura.use-case';
import { ListarAssinaturasCadastradas } from './aplicacao/casos de uso/listar-assinatas.use-case';
import { ListarAssinaturasCliente } from './aplicacao/casos de uso/listar-assinaturas-cliente.use-case';
import { ListarAssinaturasPlano } from './aplicacao/casos de uso/listar-assinaturas-plano.use-case';
import { ListarAssinaturaStatus } from './aplicacao/casos de uso/listar-assinatura.use-case';
import { ClienteController } from './apresentacao/controladores/cliente.controller';
import { ListarClientesCadastrados } from './aplicacao/casos de uso/listar-clientes-cadastrados.use-case';
import { PlanoController } from './apresentacao/controladores/plano.controller';
import { ListarPlanosCadastrados } from './aplicacao/casos de uso/listar-planos-cadastrados.use-case';
import { AtualizarCustoPlano } from './aplicacao/casos de uso/atualizar-custo-plano.use-case';
import { PagamentoController } from './apresentacao/controladores/pagamento.controller';
import { RegistrarPagamento } from './aplicacao/casos de uso/registrar-pagamento.use-case';

@Module({
  imports: [HttpModule],
  controllers: [
    AssinaturaController,
    ClienteController,
    PlanoController,
    PagamentoController,
  ],
  providers: [
    CriarAssinatura,
    ListarAssinaturasCadastradas,
    ListarAssinaturasCliente,
    ListarAssinaturasPlano,
    ListarAssinaturaStatus,
    ListarClientesCadastrados,
    ListarPlanosCadastrados,
    AtualizarCustoPlano,
    RegistrarPagamento,
  ],
})
export class AppModule {}
