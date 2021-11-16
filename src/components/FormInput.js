import React from 'react'
// import PropTypes from 'prop-types'

const FormInput = props => {
    const {
        type,
        name,
        value,
        title,
        onChange
    } = props;


    return (
        <div className="col-md-3 form-group">
            <span className="">{title}:</span>
            <input className="form-control form-control-sm" type={type} name={name} value={value} onChange={onChange} />
        </div>
    )
}

// FormInput.propTypes = {
//     type:PropTypes.oneOf(["text","number"]),
//     name:PropTypes.string,
//     value:PropTypes.string,
// }

export default FormInput
