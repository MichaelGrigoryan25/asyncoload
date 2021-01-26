# Media — Dynamic media loader

Media is an asynchronous and dynamic React component for loading content like images, videos and audios with just one line of code.

## Getting Started

- Run `yarn add @michaelgrigoryan25/react-media` or `npm i @michaelgrigoryan25/react-media`
- Import it in your React project like so

```js
import Media from "@michaelgrigoryan25/react-media";
```

## Simple example

The file that I'll be using will be an image

```js
import Media from "@michaelgrigoryan25/react-media";

const App = () => {
  return (
    <Media
      height="200"
      src="https://audubon.org/sites/default/files/styles/hero_image/public/Hummingbird_Hero_Roger_Levien.jpeg"
    />
  );
};
```

Result:

<img
src="https://i.imgur.com/WeY2nPG.png"
/>

## Contributing

Contributions are more than welcome to this project!
