#### Filters are for filtering

### 👍 Dos
- Filter

### 👎 Don'ts
- Not filter

Default

```js
class MyFilter extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      email: "",
    }
    this.stateSetter = this.stateSetter.bind(this)
  }

  stateSetter(data, propName) {
    console.log('onChange! ', { [propName]: data })
    this.setState({ [propName]: data })
  }

  render() {
    return (
      <EXPERIMENTAL_Filter
        options={[
          {
            propLabel: 'name',
            filterLabel: 'Name',
            emptyFilterLabel: 'Any',
            filterValue: state.name,
            onChangeFilterValue: this.stateSetter,
            onSubmitFilterValue: this.stateSetter,
            type: 'input',
            alwaysVisible: true
          },
          {
            propLabel: 'email',
            filterLabel: 'Email',
            emptyFilterLabel: 'Any',
            filterValue: state.email,
            onChangeFilterValue: this.stateSetter,
            onSubmitFilterValue: this.stateSetter,
            type: 'input',
            alwaysVisible: true
          },
        ]}
      />
    )
  }
};<MyFilter />
```
