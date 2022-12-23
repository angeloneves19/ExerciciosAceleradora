import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../pages/Home"
import PageBusca from "../pages/Busca"
import Contato from "../pages/Contato"

export default function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/busca" component={PageBusca} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  )
}