import Menu from "../components/Menu/Menu"
import Lupa from "../assets/lupa.png"

export default function Home() {
  return (
    <div>
      <Menu />
      <h1>Boas vindas!</h1>

      <img src={Lupa} alt="Ícone de lupa" />
    </div>
  )
}