import React from 'react'
import PropTypes from 'prop-types'

/** 
 * A basic text input field with colored border
 * @param {string} type the type of input
 * @param {boolean} hasLabel A flag to show an input label
 */
const Input = ({ type = 'text', placeholder = new Date(), labelColor = 'black', borderColor = 'grey', hasLabel = false, parentStyle, title, ...props }) => {
    return <div style={parentStyle ? { ...parentStyle } : {}}>
        TODO title: {title}<br/>
        {hasLabel && <label htmlFor='inputLabel' style={{color: labelColor}}>{type} input:&nbsp;</label>}
        <input id='inputLabel' data-testid='inputLabel' type={type} placeholder={placeholder.toString()} style={{ width: '150px', borderColor: borderColor }} />
    </div>
}

Input.prototype = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    labelColor: PropTypes.string,
    borderColor: PropTypes.string, // represents the color around the input field
    hasLabel: PropTypes.bool,
    parentStyle: PropTypes.string
}
export default Input