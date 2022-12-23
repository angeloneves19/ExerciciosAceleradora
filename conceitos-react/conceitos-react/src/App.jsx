import {useState} from "react"

function Display (props) {
	return <div >{props.textoDisplay}</div>
}


function Tecla (props) {
	return <p onClick={() => props.alteraDisplay(props.textoTecla)}>{props.textoTecla}</p>
}



function Calculadora () {

	var [textoDisplay, setTextoDisplay] = useState("display vazio")

	var handleAlteraDisplay = (novoTexto) => {
		setTextoDisplay(textoDisplay + " " + novoTexto)
	} 

	return (
		<div>
			<Display textoDisplay={textoDisplay}/>
			{[1,2].map((numero,index) => <Tecla key={index} textoTecla={numero} alteraDisplay={handleAlteraDisplay}/>)}
		</div>
	)
}




export default Calculadora;