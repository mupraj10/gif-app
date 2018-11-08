# D3 Technical Challenge

Hi! This is a coding challenge completed by [Maggy Prajapati](mailto:mupraj10@gmail.com)

This app is deployed [here](http://maggy.works/gif-app/);

## Instructions

1.  Navigate to [repo](https://github.com/mupraj10/gif-app) and clone locally using
    `git clone git@github.com:mupraj10/gif-add.git`
2.  Install dependencies using `npm install`
3.  Add a `secrets.js` and add in the GIPHY API KEY found in this [gist](https://gist.github.com/mupraj10/23864457025c50c693bcb198fd40f30a)
4.  Start your server using `npm start`, which should open up a window for the app in your browser if not continue on to step 5
5.  Navigate to app in [browser](http://localhost:3000)
6.  Enjoy!

## Problem

```
Task: create a simple web app that interfaces with the GIPHY API (https://developers.giphy.com) and render the results using React and Redux

Guidelines:
- Please do not use any jQuery
- Be creative! Anyone can render a list of images - creative use of input events and animations get bonus points!
- External dependencies are OK - but the more original code the better.
- Create something that showcases your styling and CSS skills.
- Clean, cool, sensible UIs are your friend.

For example, create a GIPHY bubble wrap app where you pop a bubble and get a gif. Be original and have fun with it!

Submission: Send us a link to your assignment repo and don't forget to include installation instructions in your readme. We look forward to seeing what you come up with!

```

## Notes

#### Things I was able to accomplish:

- User journey

  - As a user and the page load you can
    - select any theme to change the calendar theme
      - gif rendered and backgound color of the page will change
    - click any date and it will flip the card to display a gif
    - click multiple dates and multiple cards will flip
    - see the calendar state remain persistent within a session
    - find an easter egg to get a random gif opens when clicking the icon that scrolls on the right hand side of the screen

- Code

  - Data is fetched on by an action that is dispatach when the intial component mounts using a default theme of puppies using the Giphy API Search endpoint
  - Data is massaged before getting to the components to only contain the link of the gif, it's id, and the state of the card and whether it has been flipped or not
  - There is only one container `CalendarPage` where the store is connected to the app
  - All components retrieve the data needed via props
    - Most components are stateless
  - I added utility functions to make the code as dry as possible

- Tools
  - `create-react-app` - for the boilerplate and scaffold
  - `react-redux` - so I could use `connect`
  - `lodash` - to implement `shuffle` as I massaged the data
  - `immuntable` - to conserve the data and therefore have access to functions like `update` and `set`
  - `redux-thunk` - allow me to dispatch an action that fetchs the data
  - `axios` - to make the calls to the `giphy api`
  - `css` - plain old css to add styling

#### If I had more time:

- I would want to
  - add test specs
  - make the calendar more responsive (use css grid, flexbox)
  - more styling to the calendar depending on the themes
  - add more themes or allow the user to type in their own theme
