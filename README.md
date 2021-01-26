# Asyncoload — Dynamic media loader

Asyncoload is an asynchronous React component for loading content like images, videos and audio with just one line of code.

## Getting Started

- Run `yarn add asyncoload` or `npm i asyncoload`
- Import it in your React project like so

```js
import AsyncoLoad from "asyncoload";
```

## Simple example

The file that I'll be using will be an image

```js
import AsyncoLoad from "asyncoload";

const App = () => {
  return (
    <AsyncoLoad
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
