import { ContaI } from './conta.interface';

export interface PerfilI {
  Nome: string;
  Conta: ContaI;
  ImagemUrl?: string;
  Restricao?: boolean;
}