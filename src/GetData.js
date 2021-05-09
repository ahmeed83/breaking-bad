import {LitElement} from 'lit-element';

export class GetData extends LitElement {

  constructor() {
    super();
  }

  static get properties() {
    return {
      url: {type: String},
      method: {type: String}
    }
  }

  connectedCallback() {
    this.getData();
  }

  _dispatchData(data) {
    this.dispatchEvent(new CustomEvent('GetAppData', {
      detail: {data}, bubbles: true, composed: true
    }));
  }

  getData() {
    fetch(this.url, {method: this.method})
      .then(response => {
        if (response.ok)
          return response.json();
        return Promise.reject(response);
      })
      .then(data => {
        this._dispatchData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

customElements.define("get-data", GetData);
