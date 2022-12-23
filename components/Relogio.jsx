import {useState} from 'react'
 
function Relogio() {
        let horario = new Date().toLocaleTimeString()
        const [time, setTime] = useState(horario)

    const updateTime = () =>{
        horario = new Date().toLocaleTimeString()
        setTime(horario)
    }

    setInterval(updateTime, 1000)
        return(
            <h2 className='relogio'>
                {time}
            </h2>
        )

 }

export default Relogio