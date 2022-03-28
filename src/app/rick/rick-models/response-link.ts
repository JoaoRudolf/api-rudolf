export class ResponseLink {
    id?: number;
    name?: string;
    status?: string;
    species?:string;
    type?: string;
    gender?: string;
    origin?: {};
    location?: {};
  
    constructor(object: Partial<ResponseLink>){
      Object.assign(this, object);
    }
  }