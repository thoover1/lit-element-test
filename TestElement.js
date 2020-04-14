import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

export class TestElement extends LitElement {
  tester = "tester";
  render() {
    return html`<existing-element></existing-element>`;
  }
}

customElements.define("test-element", TestElement);
