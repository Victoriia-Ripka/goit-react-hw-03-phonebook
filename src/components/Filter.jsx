import React from 'react'
import PropTypes from 'prop-types'

export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={onChange} value={value} name="filter" />
    </label>
  )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}
