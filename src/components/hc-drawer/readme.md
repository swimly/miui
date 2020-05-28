# hc-drawer



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default     |
| ----------- | ----------- | ----------- | --------- | ----------- |
| `clickable` | `clickable` |             | `boolean` | `true`      |
| `command`   | `command`   |             | `boolean` | `false`     |
| `content`   | `content`   |             | `string`  | `undefined` |
| `display`   | `display`   |             | `boolean` | `undefined` |
| `masker`    | `masker`    |             | `boolean` | `true`      |
| `place`     | `place`     |             | `string`  | `'down'`    |
| `rounder`   | `rounder`   |             | `boolean` | `undefined` |


## Methods

### `destory() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `generate(option?: object) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [hc-actionsheet](../hc-actionsheet)
 - [hc-keyboard](../hc-keyboard)
 - [hc-picker-view](../hc-picker-view)

### Depends on

- [hc-masker](../hc-masker)

### Graph
```mermaid
graph TD;
  hc-drawer --> hc-masker
  hc-actionsheet --> hc-drawer
  hc-keyboard --> hc-drawer
  hc-picker-view --> hc-drawer
  style hc-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
