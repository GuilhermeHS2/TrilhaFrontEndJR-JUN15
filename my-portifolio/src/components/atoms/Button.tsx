import style from 'styled-components'

const Button = style.button `
background-color: #0070f3;
color: white;
border: none;
padding: 8px 16px;
cursor: pointer;

&:hover {
background-color: #0053b3;
}
`

export default Button