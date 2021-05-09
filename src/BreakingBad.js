import {html, LitElement} from 'lit-element';
import "./GetData";
import style from '../style/BreakingBadCss';

export class BreakingBad extends LitElement {
  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      characters: {type: Array},
      title: {type: String},
    };
  }

  constructor() {
    super();
    this.characters = [];
    this.title = "Breaking Bad Characters";
    this.addEventListener('GetAppData', (e) => {
      this.characters = e.detail.data;
    })
  }

  _renderHeaderInfo() {
    return html`
      <h1>${this.title}</h1>
    `;
  }

  _clickHandler() {
    console.log("TEST");
  }

  render() {
    return html`
      <get-data url="https://www.breakingbadapi.com/api/characters"
                method="GET">
      </get-data>
      ${this._renderHeaderInfo()}
      ${this.characters.map(character => html`
        <button class="card" @click=${this._clickHandler}>
          <h2>${character.name}</h2>
          <img src=${character.img} alt="">
          <p>${character.nickname} | ${character.status}</p>
        </button>
      `)
      }
    `;
  }
}
