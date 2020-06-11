import { PerfilI } from 'src/app/core/interfaces/perfil.interface';
import { ContaI } from 'src/app/core/interfaces/conta.interface';

export class Perfil implements PerfilI {
  Nome: string;
  Conta: ContaI;
  Descricao?: string;
  ImagemUrl?: string;
  Restricao?: boolean;
  constructor(
    nome: string,
    conta: ContaI,
    descricao?: string,
    imagemUrl?: string,
    restricao?: boolean
  ) {
    this.Nome = nome;
    this.Conta = conta;
    this.Descricao = descricao;
    this.ImagemUrl = imagemUrl;
    this.Restricao = restricao;
  }
}
