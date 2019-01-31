/* eslint-disable camelcase */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ButtonWithIcon from '../ButtonWithIcon'
import IconCaretDown from '../icon/CaretDown'
import Button from '../Button'
import Input from '../Input'
// import Checkbox from '../Checkbox'
// import Statement from '../EXPERIMENTAL_Conditions/Statement'

import Menu from './Menu'

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
const MAX_FILTER_LABEL_SIZE = 10
const truncateFilterLabel = filterLabel => {
  if (filterLabel && filterLabel.length >= MAX_FILTER_LABEL_SIZE) {
    return `${filterLabel.substring(0, MAX_FILTER_LABEL_SIZE)}…`
  } else if (filterLabel) {
    return filterLabel
  }
  return ''
}

/**
 * @visibleName Filter
 */
class EXPERIMENTAL_Filter extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      openMenus: [],
    }
  }

  handleToggleMenu = prop => {
    const { openMenus } = this.state
    const newOpenMenus = [
      ...(openMenus.indexOf(prop) === -1 ? [prop] : []),
      ...openMenus.map(i => i !== prop),
    ]
    this.setState({ openMenus: newOpenMenus })
  }

  handleChangeFilter = (value, option) => {
    option.onChangeFilterValue(value, option.propLabel)
  }

  render() {
    const { options } = this.props
    const { openMenus } = this.state
    return (
      options.length > 0 && (
        <div className="flex flex-row w-100">
          {options.map(option => {
            switch (option.type) {
              case 'input':
                return (
                  <Menu
                    open={openMenus.includes(option.propLabel)}
                    align="left"
                    button={
                      <ButtonWithIcon
                        variation="tertiary"
                        size="small"
                        onClick={() => this.handleToggleMenu(option.propLabel)}
                        icon={<IconCaretDown size={12} color="currentColor" />}
                        iconPosition="right">
                        {`${option.filterLabel}: ${
                          option.filterValue && option.filterValue.length > 0
                            ? truncateFilterLabel(option.filterValue)
                            : option.emptyFilterLabel
                        }`}
                      </ButtonWithIcon>
                    }>
                    <div className="ma5">
                      <Input
                        label={capitalize(option.propLabel)}
                        value={option.filterValue}
                        onChange={e =>
                          this.handleChangeFilter(e.target.value, option)
                        }
                      />
                      <div className="flex justify-end mt4">
                        <Button
                          onClick={() =>
                            this.handleToggleMenu(option.propLabel)
                          }>
                          OK
                        </Button>
                      </div>
                    </div>
                  </Menu>
                )
              case 'check':
                return (
                  <Menu>
                    <ButtonWithIcon />
                  </Menu>
                )
              case 'default':
              default:
                return <span>wat</span>
            }
          })}
        </div>
      )
    )
  }
}

EXPERIMENTAL_Filter.defaultProps = {
  options: [],
}

EXPERIMENTAL_Filter.propTypes = {
  /** filter options */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Label that appears on button prefix */
      filterLabel: PropTypes.string,
      /** Label that appears on button suffix when specific filterValue is empty */
      emptyFilterLabel: PropTypes.string,
      /** Actual value of specific filter (type depends on filter type) */
      filterValue: PropTypes.any,
      /** (data: any[depends on filter type], prop: string) => {} */
      onChangeFilterValue: PropTypes.func,
      /** Prop Name used in onChange callback  */
      propLabel: PropTypes.string,
      type: PropTypes.oneOf([
        'input',
        'dropdown',
        'check',
        'statement',
        'custom',
      ]),
      alwaysVisible: PropTypes.bool,
    })
  ).isRequired,
}

export default EXPERIMENTAL_Filter
