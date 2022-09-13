# verse generative example

## Introduction

This repository demostrates an example code for generative project of how to access hash and other parameters such as edition number and total number of editions.

`index.html` file expects to receive `hash` and `params` query parameters. `hash` is accepted as a string while `params` is URI encoded object.

## Query parameters

For example, given a link `index.html?params=%7B"edition"%3A`**3**`%2C"totalEditions"%3A`**50**`%7D&hash=`**123**. This cryptic link in itself has `hash`, `edition` and `totalEditions` and will result in

`hash` - 123

`edition` - 3

`totalEditions` - 50

To test with different parameters you can update numbers `3` and `50` the this URL.

`index.html?params=%7B"edition"%3A`**3**`%2C"totalEditions"%3A`**50**`%7D`

The reason we decided to pass encoded struct in query parameters as it will allow simple generalisation for upcoming features.

## Details

URL query parameters are connstructed by converting the follow object to URI encoded string.

```javascript
let obj = { edition: 10, totalEditions: 50 };
console.log(encodeURIComponent(JSON.stringify(obj))); //%7B"edition"%3A3%2C"totalEditions"%3A50%7D
```
