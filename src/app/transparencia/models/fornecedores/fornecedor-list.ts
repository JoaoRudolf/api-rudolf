export class FornecedorList {
    _links?: {};
    _embedded: Embedded = new Embedded({});
    count?: number;
    offset?: number;

    constructor(object: Partial<FornecedorList>) {
        Object.assign(this, object);
    }

}

export class Embedded {
    pregoes?: Links[];

    constructor(object: Partial<Embedded>) {
        Object.assign(this, object);
    }
}

export class Links {
    _links?: Self[];

    constructor(object: Partial<Links>) {
        Object.assign(this, object);
    }
}

export class Self {
    href?: string;
    title?: string;

    constructor(object: Partial<Self>) {
        Object.assign(this, object);
    }
}
