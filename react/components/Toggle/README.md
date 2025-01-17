#### A Toggle is a control for turning an option ON or OFF. Its effect is usually automatically applied, which is one of the main differences compared to checkboxes, that need a submit.

### 👍 Dos
- Use the Semantic variation if turning this option ON is highly recommended from your application standpoint. In doubt prefer the default variation.
- Be mindful of the default value of this field.
- It's usually a good practice to be optimistic about its effect. Even if you're not sure if the resulting network request will be successful, pretend it does and let it change its state.

### Related components
- Consider using a <a href="#checkbox">Checkbox</a> if it's inside a form, or if the property doesn't have a clear "ON/OFF".


Default

```js
initialState = {
  checked: true,
  checked2: false,
  checkedLarge1: true,
  checkedLarge2: false
};
<div>
  <div className="dib">
    <Toggle
      label="Label"
      checked={state.checked}
      onChange={e => setState(prevState => ({ checked: !prevState.checked }))}
    />
  </div>
  <br />
  <div className="mt2 dib">
    <Toggle
      label="Label"
      checked={state.checked2}
      onChange={e => setState(prevState => ({ checked2: !prevState.checked2 }))}
    />
  </div>
  <br />
  <div className="mt6 dib">
    <Toggle
      label="Label (large)"
      size="large"
      checked={state.checkedLarge1}
      onChange={e =>
        setState(prevState => ({ checkedLarge1: !prevState.checkedLarge1 }))
      }
    />
  </div>
  <br />
  <div className="mt2 dib">
    <Toggle
      label="Label (large)"
      size="large"
      checked={state.checkedLarge2}
      onChange={e =>
        setState(prevState => ({ checkedLarge2: !prevState.checkedLarge2 }))
      }
      helpText="You can add help text!"
    />
  </div>
</div>;
```

Semantic
 
```js
initialState = {
  checked: true,
  checked2: false,
  checkedLarge1: true,
  checkedLarge2: false
};
<div>
  <div className="dib">
    <Toggle
      label="Label"
      semantic
      checked={state.checked}
      onChange={e => setState(prevState => ({ checked: !prevState.checked }))}
    />
  </div>
  <br />
  <div className="mt2 dib">
    <Toggle
      label="Label"
      semantic
      checked={state.checked2}
      onChange={e => setState(prevState => ({ checked2: !prevState.checked2 }))}
    />
  </div>
  <br />
  <div className="mt6 dib">
    <Toggle
      label="Label (large)"
      size="large"
      semantic
      checked={state.checkedLarge1}
      onChange={e =>
        setState(prevState => ({ checkedLarge1: !prevState.checkedLarge1 }))
      }
    />
  </div>
  <br />
  <div className="mt2 dib">
    <Toggle
      label="Label (large)"
      size="large"
      semantic
      checked={state.checkedLarge2}
      onChange={e =>
        setState(prevState => ({ checkedLarge2: !prevState.checkedLarge2 }))
      }
    />
  </div>
</div>;
```

Disabled

```js
<div>
  <div className="dib">
    <Toggle disabled checked label="Label" />
  </div>
  <br />
  <div className="dib">
    <Toggle disabled label="Label" />
  </div>
</div>
```
