import "./Menu.css"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <ul>
      <li className="item-lista">
        <Link to="/" className="item-link">Página inicial</Link>
      </li>
      <li className="item-lista">
        <Link to="/busca" className="item-link">Busca</Link>
      </li>
      <li className="item-lista">
        <Link to="/contato" className="item-link">Contato</Link>
      </li>
    </ul>
  )
}

export default Menu