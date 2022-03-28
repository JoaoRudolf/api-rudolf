import { ResponseLink } from "./response-link";

export class RickList {
    info?: {
        count?: number;
        pages?: number;
        next?: string;
        prev?: string;
    };
    results: ResponseLink[] = [];
  
    constructor(object: Partial<RickList>){
      Object.assign(this, object);
    }
}
