import { ContaI } from './conta.interface';

export interface PerfilI {
  Nome: string;
  Conta: ContaI;
  Descricao?: string;
  ImagemUrl?: string;
  Restricao?: boolean;
}