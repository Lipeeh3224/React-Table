import Table from 'react-bootstrap/Table';
import { useState } from "react";
function ThirdExercise(){
    let [nome, setNome] = useState();  
    let [Vitórias, setVitórias] = useState();  
    let [Empate, setEmpate] = useState();  

    function alterarNome(elemento){
        setNome(elemento.target.value)
        }
    function alterarVitórias(elemento){
        setVitórias(elemento.target.value)
        }
    function alterarEmpate(elemento){
        setEmpate(elemento.target.value)
        }

    let totalVitórias = Vitórias * 3;
    let totalEmpate = Empate * 1;
    let total = totalVitórias + totalEmpate;

    
return(
<>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Time</th>
          <th>Vitórias</th>
          <th>Empates</th>
          <th>Total de Pontos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Nome:<input onChange={alterarNome}></input></td>

        <td> Vitórias:<input onChange={alterarVitórias}></input></td>

        <td> Empates:<input onChange={alterarEmpate}></input></td>

            <td> Pontos: {total}</td>
        </tr>
      </tbody>
    </Table>
      </>

)
}

export default ThirdExercise;