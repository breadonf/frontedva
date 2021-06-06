import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

function SelectWrapper ({name, options, ...rest}) {
    
    
    
    const{ setFieldValue } =useFormikContext()
    const [field, meta] = useField(name)
    const handleChange =evt => {
        const { value } = evt.target
        console.log( value )
        setFieldValue(name, value)
    }
    const configSelect = {
        ...field,
        select: true, 
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange
    }
    
    if (meta && meta.touched && meta.error) {
        configSelect.error = true
        configSelect.helperText - meta.error
    }
    return (
  
            <TextField {...configSelect}>
                {Object.keys(options).map((item, pos) =>{
                    return(
                        <MenuItem key={pos} value={item}>
                            {options[items]}
                        </MenuItem>
                        
                        )
                })}
            </TextField>
       
    )
}

export default SelectWrapper
