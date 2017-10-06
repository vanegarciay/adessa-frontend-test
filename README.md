# Falabella Frontend Test

- [Minimum requirements](#minimum-requirements)
- [Running the Application](#running-the-application)
- [Test instructions](#test-instructions)


## Minimum requirements

- [Node 6.9.1][nodejs]


## Running the Application

- Running the Express Application

```shell
$ npm run dev
```

- Running the frontend application with webpack

```shell
$ npm run webpack
```


## Test Instructions

The goal of this test is to implement a simple, working shopping cart.

It must have two important sections:

- An Item list, showing a catalog of products that can be added to the cart
- A Cart list, which contains all the items that are going to be purchased by the user.

These are the business rules:

- Each item in the catalog list must have an action button to `add item to cart`.

- Each item added to the cart must have an action button to `remove item from cart`.


Here is a demo video showing how the application should behave when finished:

[demo video][demo]

### Bonus points if

- The application state is managed with Redux.
- There is an adequate use of the map, filter, reduce, forEach methods.
- The use of functional components is favored in your application.

[nodejs]: https://nodejs.org/en/download/
[demo]: https://www.dropbox.com/s/t6k4oypu2kg3h40/adessa-demo-video.mp4
