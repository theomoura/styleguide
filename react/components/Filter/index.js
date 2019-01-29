import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ButtonWithIcon from '../ButtonWithIcon'
import IconCaretDown from '../icon/CaretDown'
import Input from '../Input'
// import Checkbox from '../Checkbox'
import Menu from './Menu'
// import Statement from '../EXPERIMENTAL_Conditions/Statement'

const generateStateFromOptionProps = options => {
  const state = {}
  options.map(option => {
    state[option.propLabel] = option[option.filterValue]
  })
  return state
}

class Filter extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      ...generateStateFromOptionProps(props.options),
      isMenuOpen: false,
    }
  }

  handleToggleMenu = () => {
    const { isMenuOpen } = this.state
    this.setState({ isMenuOpen: !isMenuOpen })
  }

  render() {
    const { options } = this.props
    const { isMenuOpen } = this.state
    return (
      options.length > 0 && (
        <div className="flex flex-row w-100">
          {options.map(option => {
            switch (option.type) {
              case 'input':
                return (
                  <Menu
                    open={isMenuOpen}
                    align="left"
                    button={
                      <ButtonWithIcon
                        variation="tertiary"
                        onClick={this.handleToggleMenu}
                        icon={<IconCaretDown size={12} color="currentColor" />}>
                        {option.filterLabel}
                      </ButtonWithIcon>
                    }>
                    <Input
                      value={option.filterValue}
                      onChange={e =>
                        option.onChangeFilterValue(
                          e.target.value,
                          option.propLabel
                        )
                      }
                    />
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

Filter.defaultProps = {
  options: [],
}

Filter.propTypes = {
  /** filter options */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      propLabel: PropTypes.string,
      filterLabel: PropTypes.string,
      filterValue: PropTypes.any,
      /** (data: any, prop: string) => {} */
      onChangeFilterValue: PropTypes.func,
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

export default Filter
