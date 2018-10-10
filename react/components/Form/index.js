import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RJSForm from 'react-jsonschema-form'

import ArrayFieldTemplate from './ArrayFieldTemplate'
import BaseInput from './BaseInput'
import FieldTemplate from './FieldTemplate'
import ObjectFieldTemplate from './ObjectFieldTemplate'

import Button from '../Button'

class Form extends Component {
  constructor(props) {
    super(props)

    this.widgets = {
      BaseInput,
    }

    this.state = {
      formData: props.formData,
    }
  }

  handleChange = event => {
    this.props.onChange && this.props.onChange(event)
  }

  handleError = event => {
    this.props.onError && this.props.onError(event)
  }

  handleSubmit = event => {
    event && event.preventDefault && event.preventDefault()
    const { formData } = this.state
    event.data = formData
    this.props.onSubmit && this.props.onSubmit(event)
  }

  handleCancel = event => {
    this.props.onCancel && this.props.onCancel(event)
  }

  generateDefaultUiSchema = () => {
    const { uiSchema } = this.props
    return {
      ...uiSchema,
      displayLabel: false,
      classNames: 'bn',
    }
  }

  render() {
    const {
      schema,
      onCancel,
      cancelBtnLabel,
      onSubmit,
      submitBtnLabel,
    } = this.props
    const { formData } = this.state

    return (
      <RJSForm
        className="flex flex-column"
        schema={schema}
        uiSchema={this.generateDefaultUiSchema()}
        formData={formData}
        onChange={this.handleChange}
        onError={this.handleError}
        onSubmit={this.handleSubmit}
        // react-jsonschema-form customizations
        ObjectFieldTemplate={ObjectFieldTemplate}
        FieldTemplate={FieldTemplate}
        ArrayFieldTemplate={ArrayFieldTemplate}
        widgets={this.widgets}
      >
        <div className="flex justify-end mt5">
          {onCancel && cancelBtnLabel && (
            <Button
              size="small"
              variation="tertiary"
              onClick={this.handleCancel}>
              {cancelBtnLabel}
            </Button>
          )}
          {onSubmit && submitBtnLabel && (
            <Button
              onClick={this.handleSubmit}
              size="small"
              type="submit"
              variation="primary"
            >
              {submitBtnLabel}
            </Button>
          )}
        </div>
      </RJSForm>
    )
  }
}

Form.defaultProps = {
  schema: { properties: {} },
  uiSchema: {},
  formData: {},
}

Form.propTypes = {
  /** Json schema */
  schema: PropTypes.object.isRequired,
  /** ui extension json schema */
  uiSchema: PropTypes.object,
  /** Form data */
  formData: PropTypes.object,
  /** Form change callback */
  onChange: PropTypes.func,
  /** Form error callback */
  onError: PropTypes.func,
  /** Form submit callback */
  onSubmit: PropTypes.func,
  /** Form submit btn label */
  submitBtnLabel: PropTypes.func,
  /** Form cancel callback */
  onCancel: PropTypes.func,
  /** Form cancel btn label */
  cancelBtnLabel: PropTypes.func,
}

export default Form
