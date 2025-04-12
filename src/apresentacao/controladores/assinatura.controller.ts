/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  Get,
  Param,
  //   Get,
  //   Param,
  //   ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CriarAssinatura } from 'src/aplicacao/casos de uso/criar-assinatura.use-case';
import { ListarAssinaturasCadastradas } from 'src/aplicacao/casos de uso/listar-assinatas.use-case';
import { ListarAssinaturaStatus } from 'src/aplicacao/casos de uso/listar-assinatura.use-case';
import { ListarAssinaturasCliente } from 'src/aplicacao/casos de uso/listar-assinaturas-cliente.use-case';
import { ListarAssinaturasPlano } from 'src/aplicacao/casos de uso/listar-assinaturas-plano.use-case';
import { CriarAssinaturaDto } from 'src/aplicacao/dto/criar-assinatura.dto';
import { ExibirAssinaturaDto } from 'src/aplicacao/dto/exibir-assinatura.dto';

@Controller('/gestao/assinaturas')
export class AssinaturaController {
  constructor(
    private readonly criarAssinatura: CriarAssinatura,
    private readonly listarAssinaturasCadastradas: ListarAssinaturasCadastradas,
    private readonly listarAssinaturasCliente: ListarAssinaturasCliente,
    private readonly listarAssinaturasPlano: ListarAssinaturasPlano,
    private readonly listarAssinaturaStatus: ListarAssinaturaStatus,
  ) {}

  @Post()
  async salvar(
    @Body() criarAssinaturaDto: CriarAssinaturaDto,
  ): Promise<ExibirAssinaturaDto> {
    return await this.criarAssinatura.salvar(criarAssinaturaDto);
  }

  @Get('planosativos/:codAss')
  async planoEstaAtivo(@Param('codAss') codAss: string): Promise<boolean> {
    return await this.listarAssinaturaStatus.buscar(codAss);
  }

  @Get('clientes/:codCliente')
  async listarPorCliente(
    @Param('codCliente') codCliente: string,
  ): Promise<ExibirAssinaturaDto[]> {
    return await this.listarAssinaturasCliente.listarPorCliente(codCliente);
  }

  @Get('planos/:codPlano')
  async listarPorPlano(
    @Param('codPlano') codPlano: string,
  ): Promise<ExibirAssinaturaDto[]> {
    return await this.listarAssinaturasPlano.listarPorPlano(codPlano);
  }

  @Get(':tipo')
  async listar(@Param('tipo') tipo: string): Promise<ExibirAssinaturaDto[]> {
    return await this.listarAssinaturasCadastradas.listar(tipo);
  }
}
