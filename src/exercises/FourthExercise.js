import { useState } from "react";
import Alert from 'react-bootstrap/Alert';

function FourthExercise(){
 
    let [Preço, setPreço]             = useState();  
    let [Porcentagem, setPorcentagem] = useState();  
    let [Total, setTotal]             = useState(); 
    

    function alterarPreço(elemento){
        setPreço(elemento.target.value)
        }
    function alterarPorcentagem(elemento){
        setPorcentagem(elemento.target.value)
        }
    function acaoBotao(elemento){
        setTotal(Total= parseFloat(Preço) + (parseFloat(Preço) * (parseFloat(Porcentagem) / 100 )));
        }

return(
<>
<div>
    <div class="container">
        <div class="card"> 
        <div class="card-title p-2 border-bottom card-header">
        <h3>Exercício 4</h3> </div>

        <div class="card-body">
        <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-3">
                <label class="label-control"> Nome da Mercadoria: </label>
                <input class="form-control" type="text" placeholder='Mercadoria'></input></div>

        <div class="col-sm-12 col-md-12 col-lg-3">
                <label class="label-control"> Preço: </label>
                <input onChange={alterarPreço} class="form-control" type="number" placeholder='Digite o Preço'></input></div> 

        <div class="col-sm-12 col-md-12 col-lg-3">
                <label class="label-control"> Porcentagem de Aumento: </label>
                <input onChange={alterarPorcentagem} class="form-control" type="number" placeholder='% De Aumento' disabled= {!Preço}></input></div> 
        
        <div class="col-sm-12 col-md-12 col-lg-3 mt-4"> 
            <button onClick={acaoBotao} className='col-sm-12 col-md-12 col-lg-9 btn btn-success' disabled= {!Preço || !Porcentagem}>Calcular </button> 
        <div> <Alert variant="success col-sm-12 col-md-12 col-lg-9"><Alert.Heading>Valor Alterado: {Total}</Alert.Heading><hr /><p className="mb-0"></p></Alert></div></div>  
                
                <div class="col-sm-12 col-md-12 col-lg-3 ml-4"> 
                <button className='col-sm-12 col-md-12 col-lg-6 btn btn-danger'> Limpar </button></div>              
            
    </div>
    </div>
    </div>
    </div>
    </div>
</>
)
}


export default FourthExercise;