export const characterAttributesMapping = {
    id: 'ID',
    descricao: 'Descrição',
    email: 'Email Address',
    contact: {
      _prefix: 'Contact ',
      street: 'Street',
      streetNumber: 'Street Number',
      zip: 'ZIP',
      city: 'City'
    },
    skills: {
      _prefix: 'Skill ',
      _listField: true
    }
  };

  export interface Character {
    id: string;
    descricao: string;
    email: string;
    contact: {
      street: string;
      streetNumber: string;
      zip: string;
      city: string;
    };
    skills: string[];
  }
