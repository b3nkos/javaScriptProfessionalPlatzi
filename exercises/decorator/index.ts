import { validateLocaleAndSetLanguage } from "typescript";

class Field {
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    let errorMessage: HTMLElement = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextElementSibling);

    this.input.addEventListener('input', () => {
      this.errors = [];
      this.validate();
      errorMessage.innerHTML = this.errors[0] || '';
    });
  }

  validate() {

  }
}

function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validate;
  
  field.validate = function() {
    validate();
    let value = field.input.value;
    if(!value) {
      field.errors.push("Required");
    }
  }
  return field;
}

function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate;
  
  field.validate = function() {
    validate();
    let value = field.input.value;
    if(value.indexOf('@') === -1) {
      field.errors.push("Should be and email");
    }
  }
  return field;
}

let field = new Field(document.querySelector('#email'));
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);