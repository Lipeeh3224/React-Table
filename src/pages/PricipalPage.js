import { First } from 'react-bootstrap/esm/PageItem';
import PriceList from '../components/PriceListComponent';
import '../style/custom.css';
import { useState } from 'react';
import FirstExercise from '../exercises/FirstExercise';
import SecondExercise from '../exercises/SecondExercise';
import ThirdExerciseExercise from '../exercises/ThirdExercise';
import FourthExercise from '../exercises/FourthExercise';
import FifithExercise from '../exercises/FifithExercise';
import SixthExercise from '../exercises/SixthExercise';


function PrincipalPage(){

    let variavel = "Gustavo";
    const constante = 3;

    return(
        <div className ="container">
            <FirstExercise />
            <SecondExercise/>
            <ThirdExerciseExercise/>
            <FourthExercise/>
            <FifithExercise/>
            <br/>
            <br/>
            <SixthExercise/>
        </div>
    );
}

export default PrincipalPage;