import { useState, useEffect } from 'react'

const Busca = () => {
  const [personagens, setPersonagens] = useState([])
  const [personagensFiltrados, setPersonagensFiltrados] = useState([])
  const [busca, setBusca] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setPersonagens(data.results))
  }, [])

  useEffect(() => {
    setPersonagensFiltrados(personagens.filter(pessoa => 
      pessoa.name.includes(busca)
    ))
  }, [personagens, busca])
  return (
    <>
      <input 
        placeholder='nome' 
        onChange={e => setBusca(e.target.value)}
      />
      {personagensFiltrados.map(pessoa => <li key={pessoa.id}>{pessoa.name}</li>)}
    </>
  )
}

export default Busca