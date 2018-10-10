import React from 'react'
import PropTypes from 'prop-types'

function Label(props) {
  const { label, required, id } = props
  if (!label) {
    return <div />
  }
  return (
    <label className="control-label f6 db gray" htmlFor={id}>
      {label}
      {required && <span className="required">*</span>}
    </label>
  )
}

Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default function FieldTemplate(props) {
  const {
    id,
    classNames,
    label,
    children,
    errors,
    help,
    description,
    hidden,
    required,
  } = props

  if (hidden) {
    return children
  }

  return (
    <div className={classNames || 'mv3 w-100'}>
      {children.props.schema.type === 'boolean'
        ? null /* boolean fields doesn't require labels,
        the description field or children content is enough.
        if a label is rendered the same text appears twice... */
        : <Label label={label} required={required} id={id} />
      }
      {description && description}
      {children}
      {errors}
      {help}
    </div>
  )
}

FieldTemplate.propTypes = {
  id: PropTypes.string,
  classNames: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.element,
  required: PropTypes.bool,
  description: PropTypes.element,
  errors: PropTypes.object,
  children: PropTypes.element,
  displayLabel: PropTypes.bool,
  hidden: PropTypes.bool,
}
