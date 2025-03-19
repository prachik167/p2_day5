import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 10px;

    padding: 10;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    background-color: #f4f4f4;
    color: #333;
  }

  nav {
    display: flex;
    justify-content: space-around;
    padding:0.5rem;
    background: #007bff;
    color: white;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
     padding:0.5rem;
  }

  button {
    background: #28a745;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  button:hover {
    background: #218838;
  }

  input {
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #ccc;
    /* align-items:center; */

  }
`;

export default GlobalStyles;
