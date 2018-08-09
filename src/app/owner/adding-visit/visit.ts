import {Pet} from '../../pet/pet';


export interface Visit {
  id: number;
  visitDate: string;
  description: string;
  pet: Pet;
}
