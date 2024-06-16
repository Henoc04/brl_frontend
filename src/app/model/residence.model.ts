import { TypeResidence } from "./type-residence.model";

export class Residence {
  idResidence! : number;
  nameResidence! : string;
  localisationResidence! : string;
  prixResidence! : number;
  typeResidence! : TypeResidence;
  etatResidence! : string;
}
