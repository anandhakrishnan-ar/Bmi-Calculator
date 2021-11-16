import React, { useState } from 'react'
import FormInput from './FormInput'
const BmiCalculator = () => {
    const [heightUnit, setHeightUnit] = useState('cm');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [unit, setUnit] = useState('Metric');
    const onChangeInput = e => {

    };
    const onSelectChange = e => {
        setUnit(e.target.value);
        if(e.target.value==='Metric'){
            setHeightUnit('cm');
            setWeightUnit('kg');
        }
        else{
            setHeightUnit('ft');
            setWeightUnit('lbs');
        }
    };
    return (
        <div className="">
            <div className="form-group col-md-3">
            <label for="selectUnit">Unit</label>
                <select onChange={onSelectChange} className="form-control" name="selectUnit">
                    <option value="Metric">Metric</option>
                    <option value="Imperial">Imperial</option>
                </select>
            </div>
            <div>
                <FormInput title={`Height(${heightUnit})`} value="0" name="height" type="text" onChange={onChangeInput} />
                {
                    unit === 'Imperial' ? <FormInput title="Inches (in)" value="0" name="inches" type="text" onChange={onChangeInput} /> : ""
                }
                <FormInput title={`Weight(${weightUnit})`} value="0" name="weight" type="text" onChange={onChangeInput} />
            </div>

        </div>
    )
}


export default BmiCalculator
