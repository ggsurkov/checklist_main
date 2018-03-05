import { Component } from '@angular/core';

/**
 * Generated class for the DefaultTemplateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'default-template',
  templateUrl: 'default-template.html'
})
export class DefaultTemplateComponent {

  text: string;

  constructor() {
    console.log('Hello DefaultTemplateComponent Component');
    this.text = 'Hello World';
  }

}
