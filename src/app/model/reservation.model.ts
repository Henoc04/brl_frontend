import { Client } from "./client.model";
import { Residence } from "./residence.model";

export class Reservation {
   idReservation! : number;
	 dateEntrer! : Date;
	 dateSortie! : Date;
	 dateReservation! : Date;
   total! : number;
	 residence! : Residence;
	 client! : Client;
   etatReservation! : string;
}
