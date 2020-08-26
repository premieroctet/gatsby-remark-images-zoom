<p align="center">
<img width="207" alt="image" src="https://user-images.githubusercontent.com/1102595/56277368-832c6900-6104-11e9-93fa-9d27636e3fb5.png">
</p>

# gatsby-remark-images-zoom 👀

> Bring [medium-zoom](https://github.com/francoischalifour/medium-zoom) to gatsby-remark-images. Try the demo [here](https://www.premieroctet.com/blog/react-amsterdam-2019/)

## Install

```
yarn add gatsby-remark-images-zoom
```

## How to use

👉 This plugin requires [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/) and [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark). You have to set the `linkImagesToOriginal` option to `false` in gatsby-remark-images.

```js
// In your gatsby-config.js, under gatsby-transformer-remark plugins

plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-images-zoom`,
      ],
    },
  },
],
```

## Configuration

All options from [medium zoom](https://github.com/francoischalifour/medium-zoom) are available:

| Property       | Type                                  | Default  | Description                                      |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------ |
| `margin`       | `number`                              | `0`      | The space outside the zoomed image               |
| `background`   | `string`                              | `"#fff"` | The background of the overlay                    |
| `zIndex`       | `number`                              | `42`     | The z-index of the overlay                       |
| `scrollOffset` | `number`                              | `40`     | The number of pixels to scroll to close the zoom |
| `container`    | `string` \| `HTMLElement` \| `object` | `null`   | The viewport to render the zoom in               |
| `template`     | `string` \| `HTMLTemplateElement`     | `null`   | The template element to display on zoom          |
