import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import FormInput from './FormInput'
const BmiCalculator = props => {
    const { getBmiValue } = props;
    const [heightUnit, setHeightUnit] = useState('cm');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [unit, setUnit] = useState('Metric');
    const [count, setCount] = useState({
        height: 0, inches: 0, weight: 0
    });
    const { height, inches, weight } = count;
    useEffect(() => {        
        if(unit==="Imperial"){
            imperialBmi(height, inches, weight)
        }
        else{
            metricBmi(height, weight);
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height, weight, inches])
    const onChangeInput = e => {
        const { name, value } = e.target;
        setCount(prevState => ({
            ...prevState,
            [name]: value
        }));

        //getBmiValue(3);
    };
    const metricBmi = (height, weight) => {
        if (height > 0 && weight > 0) {
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);
            getBmiValue(Math.round(bmi));
        }

    }
    const imperialBmi = (height, inches, weight) => {
        if ((height > 0 || inches > 0) && weight > 0) {
            const heightInInches = (height * 12) + parseInt(inches);
            debugger
            const bmi = 703 * (weight / (heightInInches * heightInInches));
            getBmiValue(Math.round(bmi));
        }

    }
    const onSelectChange = e => {
        setUnit(e.target.value);
        if (e.target.value === 'Metric') {
            setHeightUnit('cm');
            setWeightUnit('kg');
        }
        else {
            setHeightUnit('ft');
            setWeightUnit('lbs');
        }
        setCount({ height: 0, weight: 0, inches: 0 });
        getBmiValue(0);
    };
    const resetInput = e => {
        e.preventDefault();
        setUnit('Metric');
        setHeightUnit('cm');
        setWeightUnit('kg');
        setCount({ height: 0, weight: 0, inches: 0 });
        getBmiValue(0);
    }
    return (
        <div className="container">
            <div className="form-group col-md-12">
                <label>Unit</label>
                <select onChange={onSelectChange} className="form-control" id="selectUnit" value={unit}>
                    <option value="Metric">Metric</option>
                    <option value="Imperial">Imperial</option>
                </select>
            </div>
            <div>
                <FormInput title={`Height(${heightUnit})`} value={height} name="height" type="number" onChange={onChangeInput} />
                {
                    unit === 'Imperial' ? <FormInput title="Inches (in)" value={inches} name="inches" type="number" onChange={onChangeInput} /> : ""
                }
                <FormInput title={`Weight(${weightUnit})`} value={weight} name="weight" type="number" onChange={onChangeInput} />
            </div>
            <div className="reset-btn">
                <button className="btn-primary col-md-12" onClick={resetInput}>Reset</button>
            </div>
        </div>
    )
}
BmiCalculator.propTypes = {
    getBmiValue: PropTypes.func.isRequired
}

export default BmiCalculator
