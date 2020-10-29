import React, {useState} from 'react';

const Form = (initialFormValue) => {
    const [values, setValues] = useState(initialFormValue);
    const handleInput = (e) => {
        const {name, value} = e.target
        console.log('hello')
        setValues({
            ...value,
            name: value
        })
    }
    return {
        values,
        setValues,
        handleInput
    };
}
 
export default Form;