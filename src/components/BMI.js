import React, { useState, useEffect } from 'react'
import BmiCalculator from './BmiCalculator'

const BMI = () => {
    const [bmiValue, setBmiValue] = useState(0);
    const [result, setResult] = useState('')
    useEffect(() => {
        if (bmiValue > 0 && bmiValue < 18.5) {
            setResult('Underweight')
        }
        else if (bmiValue >= 18.5 && bmiValue < 23) {
            setResult('Normal')
        }
        else if (bmiValue >= 23 && bmiValue < 25) {
            setResult('Overweight')
        }
        else if (bmiValue >= 25 && bmiValue < 30) {
            setResult('Pre-Obese')
        }
        else if (bmiValue >= 30) {
            setResult('Obese')
        }
        else {
            setResult('')
        }

    }, [bmiValue])
    return (
        <div className="calculator-wrapper">
            <div className="app-header"><h3>BMI CALCULATOR</h3></div>
            <div className="app-header">
                Body Mass Index(BMI) : {bmiValue}
            </div>
            <div className="app-result font-weight-light">
                {result}
            </div>
            <BmiCalculator getBmiValue={setBmiValue} />
        </div>
    )
}

export default BMI
