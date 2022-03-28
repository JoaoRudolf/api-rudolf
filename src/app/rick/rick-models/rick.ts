export class Rick {
    id?:number;
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
    image?: {};
    episode?: [];
    url?: string;

    
  
    constructor(object: Partial<Rick>){
      Object.assign(this, object);
    }
}
