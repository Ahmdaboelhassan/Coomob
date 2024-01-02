import { Processor } from './Processor';

export class Mobile {
  constructor(
    public Photo: string,
    public Name: string,
    public RAM: string,
    public Processor: Processor
  ) {}
}
