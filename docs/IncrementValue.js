import { html, LitElement, customElement, property } from 'lit-element';
import { getValue, setValue } from './core.js';


export class IncrementValue extends LitElement {

  static get properties() {
    return {
      value: {type: Number},
    };
  }

  constructor() {
    super();
    this.value;
  }

  firstUpdated() {
    this.value = getValue();
  }

  increment() {
    this.value += 1;
    setValue(this.value);
  }

  render() {
    return html` <button @click=${this.increment}>${this.value}</button> `;
  }
}

customElements.define('increment-value', IncrementValue);

