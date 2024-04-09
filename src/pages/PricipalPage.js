import { First } from 'react-bootstrap/esm/PageItem';
import PriceList from '../components/PriceListComponent';
import '../style/custom.css';
import { useState } from 'react';
import FirstExercise from '../exercises/FirstExercise';
import SecondExercise from '../exercises/SecondExercise';
import ThirdExerciseExercise from '../exercises/ThirdExercise';
import FourthExercise from '../exercises/FourthExercise';

function PrincipalPage(){

    let variavel = "Gustavo";
    const constante = 3;

    return(
        <>
            <FirstExercise />
            <SecondExercise/>
            <ThirdExerciseExercise/>
            <FourthExercise/>
        </>
    );
}

export default PrincipalPage;