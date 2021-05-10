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
      character: {type: Object},
      title: {type: String},
      showMoreInfo: {type: Boolean},
    };
  }

  constructor() {
    super();
    this.characters = [];
    this.character = {};
    this.showMoreInfo = false;
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

  _showMoreInfoHandler(character) {
    if (this.character === character) {
      this.showMoreInfo = !this.showMoreInfo;
    } else {
      this.showMoreInfo = true;
    }
    this.character = character;
  }

  _showMoreInfoModal() {
    return html`
      <div class="card-more-info">
        <h3>Name: ${this.character.name}</h3>
        <h3>Occupation: ${this.character.occupation.join(', ')}</h3>
        <h3>Birthday: ${this.character.birthday}</h3>
        <h3>Status: ${this.character.status}</h3>
        <h3>Nick name: ${this.character.nickname}</h3>
        <h3>Breaking Bad Seasons: ${this.character.appearance.join(', ')}</h3>
        ${this.character.better_call_saul_appearance.length > 0 ?
          html`<h3>Better Call Saul Seasons: ${this.character.better_call_saul_appearance.join(', ')} </h3>` : null}
        <h3>Actor name: ${this.character.portrayed}</h3>
      </div>
    `;
  }

  render() {
    return html`
      <get-data url="https://www.breakingbadapi.com/api/characters"
                method="GET">
      </get-data>
      ${this._renderHeaderInfo()}
      ${this.showMoreInfo ? html`${this._showMoreInfoModal()}` : null}
      ${this.characters.map(character => html`
        <button class="card" @click=${() => this._showMoreInfoHandler(character)}>
          <h2>${character.name}</h2>
          <img src=${character.img} alt="">
          <p>${character.nickname} | ${character.status}</p>
        </button>
      `)
      }
    `;
  }
}
