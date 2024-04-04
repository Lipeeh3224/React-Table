import { useState } from "react";

function SecondExercise() {
    let [nome, setNome] = useState();  


    
    let salario = 1000;
    let reajuste = 5;

    let NovoSalario = salario * reajuste / 100;
    let total = salario + NovoSalario;

    function alterarNome(elemento){
    setNome(elemento.target.value)
    }

return (
<>
<table>


<tbody>
<tr>
    <td>
        Nome: {nome}
        <input onChange={alterarNome}></input>
    </td>
</tr>
<tr>
    <td>
        Salário: {salario}
    </td>
</tr>

<tr>
    <td>
        Reajuste: {reajuste}
    </td>
</tr>
<tr>
    <td>
        Novo Salário: {total}
    </td>
</tr>

<br/>




</tbody>


</table>


</>
)
}

export default SecondExercise;


