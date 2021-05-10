import {css} from "lit-element";

export default css`

  :host {
    display: block;
    padding: 10px;
    text-align: center;
    background: darkolivegreen;
  }

  .card-more-info {
    background: darkgreen;
    border-radius: 30px;
    width: 50%;
    padding: inherit;
    margin: auto;
    border: 2px solid #000000;
  }

  .card-more-info img {
    width: inherit;
  }

  .card {
    background: darkgreen;
    border-radius: 30px;
    display: inline-block;
    height: 300px;
    width: 200px;
    margin: 1rem;
    position: relative;
    text-align: center;
  }

  .card:hover {
    background-color: darkslategray;
    cursor: pointer;
  }

  .card img {
    width: 70%;
    height: 50%;
  }
`;
