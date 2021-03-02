import React from 'react'
import PropTypes from 'prop-types'

export const TextField = props => {
  const { name, id, type, placeholder, label } = props
  return (
    <>
      <div className="outline-textfield">
        <input
          name={name}
          placeholder={placeholder}
          id={id}
          type={type}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  )
}

TextField.defaultProps = {
  type: `text`,
  placeholder: ``,
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'password',
    'number',
    'tel',
    'email',
    'date',
    'time',
    'datetime-local',
    'month',
    'week',
    'url',
  ]),
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default TextField
