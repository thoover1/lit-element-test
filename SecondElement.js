import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
import "./TestElement.js";

class SecondElement extends LitElement {
  render() {
    return html` <test-element></test-element> `;
  }
}

customElements.define("second-element", SecondElement);
