export enum TipoAnimal {
  GATO = 'GATO',
  CACHORRO = 'CACHORRO',
}

export enum Genero {
	FEMEA = 'FEMEA',
	MACHO = 'MACHO'
}

export interface Animal {
	id?: number;
	nome: string;
	idade: number;
	raca: string;
	descricao: string;
	tipo_animal: TipoAnimal;
	genero: Genero;
}