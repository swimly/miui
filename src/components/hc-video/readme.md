# hc-video



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default      |
| ---------- | ---------- | ----------- | --------- | ------------ |
| `autoplay` | `autoplay` |             | `boolean` | `false`      |
| `controls` | `controls` |             | `boolean` | `false`      |
| `current`  | `current`  |             | `number`  | `0`          |
| `duration` | `duration` |             | `number`  | `0`          |
| `height`   | `height`   |             | `number`  | `undefined`  |
| `loaded`   | `loaded`   |             | `number`  | `0`          |
| `muted`    | `muted`    |             | `boolean` | `undefined`  |
| `network`  | `network`  |             | `number`  | `undefined`  |
| `play`     | `play`     |             | `boolean` | `false`      |
| `poster`   | `poster`   |             | `string`  | `undefined`  |
| `preload`  | `preload`  |             | `string`  | `'metadata'` |
| `src`      | `src`      |             | `string`  | `undefined`  |


## Dependencies

### Depends on

- [hc-video-controls](../hc-video-controls)

### Graph
```mermaid
graph TD;
  hc-video --> hc-video-controls
  hc-video-controls --> hc-row
  hc-video-controls --> hc-col
  hc-video-controls --> hc-switch
  hc-video-controls --> hc-slider
  hc-switch --> hc-icon
  style hc-video fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
