import {css} from "lit-element";

export default css`

  :host {
    display: block;
    padding: 10px;
    text-align: center;
    background: darkolivegreen;
  }

  .card {
    background: darkgreen;
    border-radius: 2px;
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
