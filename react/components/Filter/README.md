#### Filters are for filtering

### 👍 Dos
- Filter

### 👎 Don'ts
- Not filter

Default

```js
initialState = { name: '' };
<div>
  <Filter
    options={[
      {
        propLabel: 'name',
        filterLabel: `Name: ${state.name || 'Any'}`,
        filterValue: state.name,
        onChangeFilterValue: (data, propName) => setState({ [propName]: data }),
        type: 'input',
        alwaysVisible: true
      },
    ]}
  />
</div>
```
