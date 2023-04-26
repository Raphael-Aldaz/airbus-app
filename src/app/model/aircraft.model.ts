export interface Aircraft{
  id: number;
  prog: string;
  design: boolean;
  developpment: boolean;
}

export class Aircraft {
  id: number;
  prog: string;
  design: boolean;
  developpment: boolean;

  constructor(id: number, prog: string, design: boolean, developpment: boolean){
    this.id=id;
    this.prog=prog;
    this.design=design;
    this.developpment = developpment;
  }
}
