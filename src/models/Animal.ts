export enum TipoAnimal {
  GATO = 'GATO',
  CACHORRO = 'CACHORRO',
}

export interface Animal {
	id?: number;
	nome: string;
	idade: number;
	raca: string;
	descricao: string;
	tipo_animal: TipoAnimal;
}