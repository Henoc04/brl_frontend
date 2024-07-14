import { Residence } from "./residence.model";

export class Depense {

  idDepense! : number;
  libeleDepense! : string;
  montantDepense! : number;
  descriptionDepense! : string;
  residence! : Residence;
  dateDepense! : Date;
}
