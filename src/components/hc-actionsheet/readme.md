# hc-actionsheet



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default    |
| -------- | --------- | ----------- | -------- | ---------- |
| `mode`   | `mode`    |             | `string` | `'single'` |
| `titles` | `titles`  |             | `string` | `"请选择"`    |


## Methods

### `destory() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [hc-drawer](../hc-drawer)
- [hc-row](../hc-row)
- [hc-col](../hc-col)
- [hc-button](../hc-button)

### Graph
```mermaid
graph TD;
  hc-actionsheet --> hc-drawer
  hc-actionsheet --> hc-row
  hc-actionsheet --> hc-col
  hc-actionsheet --> hc-button
  hc-drawer --> hc-masker
  hc-button --> hc-ripple
  hc-button --> hc-icon
  style hc-actionsheet fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
