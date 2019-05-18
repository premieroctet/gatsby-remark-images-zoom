
# 👀 gatsby-remark-images-zoom

Bring [medium-zoom](https://github.com/francoischalifour/medium-zoom) to [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)

> **Note**: this plugin requires [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)

## Install

`yarn add gatsby-remark-images-zoom`

## How to use

```js
// In your gatsby-config.js

plugins: [
  {
    resolve: "gatsby-remark-images-zoom",
    options: {
      margin: 24,
      background: '#FFFFFF',
      scrollOffset: 0,
    }
  }
];
```

## Configuration

All options from [medium zoom](https://github.com/francoischalifour/medium-zoom) are available:

| Property       | Type                                  | Default  | Description                                      |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------ |
| `margin`       | `number`                              | `0`      | The space outside the zoomed image               |
| `background`   | `string`                              | `"#fff"` | The background of the overlay                    |
| `scrollOffset` | `number`                              | `40`     | The number of pixels to scroll to close the zoom |
| `container`    | `string` \| `HTMLElement` \| `object` | `null`   | The viewport to render the zoom in               |
| `template`     | `string` \| `HTMLTemplateElement`     | `null`   | The template element to display on zoom          |
