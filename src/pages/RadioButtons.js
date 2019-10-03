import React from 'react'
import Radio from '../components/Radio'
import { RadioGroup, FormControlLabel, FormLabel, FormControl } from '@material-ui/core'

function RadioButtonsPage() {
  const [value, setValue] = React.useState('apples')
  const handleChange = (event) => setValue(event.target.value)

  return (
    <>
      <div>
        <Radio color="success">
          Mdcs success
        </Radio>

        <Radio color="info">
          Mdcs success
        </Radio>

        <Radio color="warning">
          Mdcs success
        </Radio>

        <Radio color="danger">
          Mdcs success
        </Radio>

        <Radio color="primary">
          Mdcs success
        </Radio>

        <Radio color="secondary">
          Mdcs success
        </Radio>
      </div>

      <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Fruits</FormLabel>
        <RadioGroup
          aria-label="fruits"
          name="fruits"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="apples" control={<Radio color="success" />} label="Apples" />
          <FormControlLabel value="oranges" control={<Radio color="info" />} label="Oranges" />
          <FormControlLabel value="bananas" control={<Radio color="warning" />} label="Bananas" />
          <FormControlLabel value="kiwi" control={<Radio color="danger" />} label="Kiwi" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
      </div>
    </>
  )
}

export default RadioButtonsPage
