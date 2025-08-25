import React from 'react';




export const ErrorMessage = ({errors}) => {
    return <div>
        {(errors && errors.length > 0) && <p className={"error-text"}>{errors[0]}</p>}
    </div>
}
