import { AdverseReactionsComponent } from "../adverse-reactions/adverse-reactions.component";
import { AdverseReactions } from "../adverse-reactions/adverse-reactions.model";
import { Manufacturer } from "../manufacturer/manufacturer.model";

export class Medication{
    constructor(
        public id: number,
        public anvisaRegistrationNumber: string,
        public name: string,
        public expirationDate: Date ,
        public telephoneSac: string,
        public price: number,
        public quantityPills: number,
        public manufacturer: Manufacturer,
        public adverseReactions: AdverseReactions[]
    ){}
}