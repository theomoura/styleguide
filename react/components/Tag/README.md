#### A Tag represents a status or a tag.

### 👍 Dos

- Do use semantic colors that have a clear and contextualized meaning in your application, such as _green_ for success and _red_ for errors. However, if your application employs a richer palette with unambiguous usage of colors don't hesitate to use your Tags with them.
- Do play with contrast to convey the visual prominence more suited to your application. Use high contrast for high proeminence, and low contrast for low proeminence.

### 👎 Don'ts

- Don't do make the Tag other than the optional close button, otherwise they should always be read-only.
- Don't use color contrast combinations that don't pass Accessibility tests.

**@todo: update examples to use VTEX Tachyons colors without hardcoding them**

Default

```js
<Tag>Pending</Tag>
```

Types

```js
<span className="mr4">
  <Tag type="error">
    Error
  </Tag>
</span>
<span className="mr4">
  <Tag type="warning">
    Warning
  </Tag>
</span>
<span className="mr4">
  <Tag type="success">
    Success
  </Tag>
</span>
```

Low prominence

```js
<div>
  <span className="mr4">
    <Tag bgColor="#FFE6E6" color="#FF4C4C">
      Error
    </Tag>
  </span>
  <span className="mr4">
    <Tag bgColor="#FFF6E0" color="#FFB100">
      Warning
    </Tag>
  </span>
  <span className="mr4">
    <Tag bgColor="#EAFCE3" color="#8BC34A">
      Success
    </Tag>
  </span>
  <span className="mr4">
    <Tag bgColor="#E3E4E6" color="#979899">
      Neutral
    </Tag>
  </span>
</div>
```

Custom colors

```js
<span className="mr4">
  <Tag bgColor="#F71963" color="#FFFFFF">
    Label
  </Tag>
</span>
<span className="mr4">
  <Tag bgColor="#142032" color="#D6D8E0">
    Label
  </Tag>
</span>
<span className="mr4">
  <Tag bgColor="#00BBD4" color="#FFFFFF">
    Label
  </Tag>
</span>
```

With remove

```js
<span className="mr4">
  <Tag onClick={() => console.log('callback')}>Default</Tag>
</span>
<span className="mr4">
  <Tag onClick={() => console.log('callback')} bgColor="#000" color="#ffb100">With color</Tag>
</span>
<span className="mr4">
  <Tag  disabled onClick={() => console.log('callback')}>Disabled</Tag>
</span>
<span className="mr4">
  <Tag onClick={() => console.log('callback')} type="error">
    Error
  </Tag>
</span>
<span className="mr4">
  <Tag onClick={() => console.log('callback')} type="warning">
    Warning
  </Tag>
</span>
<span className="mr4">
  <Tag onClick={() => console.log('callback')} type="success">
    Success
  </Tag>
</span>
```
