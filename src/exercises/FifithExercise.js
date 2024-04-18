import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";

function FifithExercise(){
    let [Cep, setCep]  = useState(); 
    let [Rua, setRua]  = useState([]); 
    let [status, setStatus]  = useState({
        "variant": "",
        "message":""
    });  

    function alterarCep(elemento){
        setCep(elemento.target.value)
        } 


function buscarCep(){
 axios.get("https://viacep.com.br/ws/"+Cep+"/json/").then(function(response){ 
    setStatus({
        "variant": "success",
        "message": "Deu Tudo Certo (:"
    })
 setRua(response.data)
 
 
}).catch(function (error) {
    console.log(error);
    setStatus({
        "variant": "danger",
        "message": "Deu Tudo Errado ):"
    })
});

}  
return(
<>
<div className = "container pt-2"></div>
    <div className = "card p-2"></div>

    <div class="col-sm-12 col-md-12 col-lg-12">
                <label class="label-control"> CEP: </label>
                <input onChange={alterarCep} class="form-control" type="number" maxLength={8} placeholder='Digite o CEP'></input></div> 
                <button className='col-sm-12 col-md-12 col-lg-12 btn btn-info' onClick={buscarCep}> Buscar Cep </button>
                <Alert variant = {status.variant} >
                    {status.message}
                </Alert>

                <div className="col-12">
                    <div className="row-12">
                     Rua: {Rua.logradouro}
                     
                    </div>
                </div>


</>

)
}





export default FifithExercise;