import React from 'react'

const HomePage = ({ textInput, numberInput, submitButton, cancelButton }) => {
    return <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
        <table>
            <tr>
                <td>
                    {textInput}
                </td>
            </tr>
            <tr>
                <td>{numberInput}</td>
            </tr>
            <tr>
                <div>
                    {submitButton}
                </div>
                <div>
                    {cancelButton}
                </div>
            </tr>
        </table>
    </div>
}

export default HomePage