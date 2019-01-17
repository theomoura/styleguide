#### A Select lets the user pick one or more options from a list.

### 👍 Dos

- Mind the order of the options, like putting more probable to be picked on that. In doubt, sort them alphanumerically (from A to Z and from 0 to 9).

### 👎 Don'ts

- If there are just a few options to choose from (like 4), consider a **Radio Group** (for single select) or **Checkbox** (for multi select).


Simple

```js
const options = [
  {
    value: { id: 0, name: 'first-option' },
    label: 'First Option',
  },
  {
    value: { id: 1, name: 'second-option' },
    label: 'Second Option',
  },
]

;<div>
  <div className="mb5">
    <Select
      defaultValue={options[0]}
      size="small"
      isMulti={true}
      label="Small"
      options={options}
      onChange={values => {
        console.log(`[Select] Selected: ${JSON.stringify(values, null, 2)}`)
      }}
      onSearchInputChange={value => {
        console.log('[Select] onSeachInputChange: ' + value)
      }}
    />
  </div>
  <div className="mb5">
    <Select
      defaultValue={options[0]}
      isMulti={true}
      label="Regular"
      options={options}
      onChange={values => {
        console.log(`[Select] Selected: ${JSON.stringify(values, null, 2)}`)
      }}
    />
  </div>
  <div className="mb5">
    <Select
      defaultValue={options[0]}
      size="large"
      isMulti={true}
      label="Large"
      options={options}
      onChange={values => {
        console.log(`[Select] Selected: ${JSON.stringify(values, null, 2)}`)
      }}
    />
  </div>
</div>
```

Single

```js
const options = [
  {
    value: 'first-option',
    label: 'First Option',
  },
  {
    value: 'second-option',
    label: 'Second Option',
  },
]

;<div>
  <Select
    label="Single option select"
    options={options}
    isMulti={false}
    onChange={values => {
      console.log(`[Select] Selected: ${JSON.stringify(values, null, 2)}`)
    }}
  />
</div>
```

Multi Select

```js
const options = [{
  value: 'first-option',
  label: 'First option',
},
{
  value: 'second-option',
  label: 'Second option',
}];

<div>
  <Select
    label="Label"
    options={options}
    isMulti={true}
    onChange={values => {
      console.log(`[Select] Selected: ${JSON.stringify(values, null, 2)}`)
    }}
  />
</div>
```

With Error

```js
const options = [
  {
    value: 'first-option',
    label: 'First Option',
  },
  {
    value: 'second-option',
    label: 'Second Option',
  },
]

;<div>
  <Select
    label="Label"
    options={options}
    isMulti={true}
    errorMessage="Required!"
    onChange={values => {
      console.log(`[Select] Selected: ${JSON.stringify(values, null, 2)}`)
    }}
  />
</div>
```

Disabled

```js
const options = [
  {
    value: 'first-option',
    label: 'First Option',
  },
  {
    value: 'second-option',
    label: 'Second Option',
  },
]

;<div>
  <Select
    isDisabled={true}
    label="Label"
    options={options}
    isMulti={true}
    onChange={values => {
      console.log(`[Select] Selected: ${JSON.stringify(values, null, 2)}`)
    }}
  />
  <div className="mv5">
    <Select
      isDisabled={true}
      label="Label"
      options={options}
      isMulti={true}
      onChange={values => {
        console.log(`[Select] Selected: ${JSON.stringify(values, null, 2)}`)
      }}
      value={[
        {
          value: 'first-option',
          label: 'First Option',
        },
      ]}
    />
  </div>
</div>
```

Loading state

```js
const options = [
  {
    value: 'first-option',
    label: 'First Option',
  },
  {
    value: 'second-option',
    label: 'Second Option',
  },
]

;<div>
  <Select
    isLoading={true}
    label="Label"
    options={options}
    isMulti={true}
    onChange={values => {
      console.log(`[Select] Selected: ${JSON.stringify(values, null, 2)}`)
    }}
  />
</div>
```