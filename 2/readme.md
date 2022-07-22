## start

```
npm start
```

## Why Css-In-Js

Dynamicly solution should be always prefered, then you will never worry about the flexibility and expansibility in the future.

- Jsx > template
- Css-In-Js > tailwind, css, less ,saas, bem...
- .js > .json, .yaml, .ini

## Only partly follow the Design draft

Never Follow the Design draft, follow the design specification, the Design language. **In well designed project, there is needn't design drafts**.

there will be a long article to explain this...In this project, I find the design specification by guess.

## Css Statement Order

```
.declaration-order {
  /* 1.Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* 2.Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* 3.Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* 4.Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* 5.Misc */
  opacity: 1;
}
```
