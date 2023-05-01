export interface Aircraft{
  id : number;
  prog: string;
  design: boolean;
  developpment: boolean;
  modification? : string []
}

export class Aircraft {

  prog: string;
  design: boolean;
  developpment: boolean;
  modification?: string[];

  constructor( prog: string, design: boolean, developpment: boolean, modification?: string[]){
    this.prog=prog;
    this.design=design;
    this.developpment = developpment;
    this.modification = modification;
  }
}
