# verse generative example

## Introduction

This repository demostrates an example code for generative project of how to access hash and other parameters such as edition number and total number of editions.

## Playground

![alt text](docs/assets/playground-demo.gif "Title")

To test your project with different parameters you can open `playground.html` and provide your *IFrame URL*. This file may be locally on your computer or online.

You can also access playground remotely [here](http://playground-generative.s3-website-eu-west-1.amazonaws.com/). We will be improving playground as we go to add new variables and examples. 

### Examples
You can try running few example projects on Playground using *IFrame URL* below
Basic - [http://playground-generative.s3-website-eu-west-1.amazonaws.com/examples/basic.html](http://playground-generative.s3-website-eu-west-1.amazonaws.com/examples/basic.html)

p5js example - [http://playground-generative.s3-website-eu-west-1.amazonaws.com/examples/p5-example.html](http://playground-generative.s3-website-eu-west-1.amazonaws.com/examples/p5-example.html)


Note - playground options appear on hover.

## Instructions

Verse system will need to hash and other parameters to your project's  
`index.html` during minting. To allow your code accept these parameters you should include following `js` code. You can now continue using

```js
// Parse payload from query params
const payload = JSON.parse(decodeURIComponent(atob(new URLSearchParams(window.location.search).get("payload") || "")))

// Use available payload variables in your code
const hash = payload.hash
const editionNumber = payload.editionNumber
const totalEditions = payload.totalEditions
```

After that you can use Playground to test.

## Examples

There are few examples in `examples/` folder