export class MunicipiosModel {
  id?: string;
  nome?: string;
  microrregiao?: Microrregiao;

  constructor(obj: Partial<MunicipiosModel>) {
    Object.assign(this, obj);
  }
}

export class Microrregiao {
  id?: number;
  nome?: string;
  mesorregiao?: Mesorregiao;

  constructor(obj: Partial<Microrregiao>) {
    Object.assign(this, obj);
  }
}

export class Mesorregiao {
  id?: number;
  nome?: string;

  constructor(obj: Partial<Mesorregiao>) {
    Object.assign(this, obj);
  }
}