import mediumZoom from "medium-zoom";

const defaultOptions = {
  margin: 20
};

export const onClientEntry = () => {
  // Inject styles.
  const styles = `
    .medium-zoom-overlay, .medium-zoom-image {
      z-index: 42;
    }
  `;

  const node = document.createElement(`style`);
  node.id = `medium-zoom-styles`;
  node.innerHTML = styles;
  document.head.appendChild(node);
};

export const onRouteUpdate = (_, pluginOptions) => {
  const options = { ...defaultOptions, ...pluginOptions };
  mediumZoom(".gatsby-resp-image-image", options);
};
