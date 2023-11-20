import React from 'react'
import PropTypes from 'prop-types'

/** 
 * A basic text input field with colored border
 * @param {string} type the type of input
 * @param {boolean} hasLabel A flag to show an input label
 */
const Input = ({ type = 'text', placeholder = new Date(), borderColor = 'grey', hasLabel = false, parentStyle, ...props }) => {
    return <div style={parentStyle ? { ...parentStyle } : {}}>
        {hasLabel && <label htmlFor='inputLabel'>{type} input:&nbsp;</label>}
        <input id='inputLabel' type={type} placeholder={placeholder.toString()} style={{ width: '150px', borderColor: borderColor }} />
    </div>
}

Input.prototype = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    borderColor: PropTypes.string, // represents the color around the input field
    hasLabel: PropTypes.bool,
    parentStyle: PropTypes.string
}
export default Input