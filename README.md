# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Feedback about this app

First of all I would like to note that the XD document that I used was not provided with all the screens nesseary. Is caused me to use other images at some tools. If this was a real customer, I would have given this as my first feedback. That also caused that this app is not the pixel perfection I would have wanted to be.

## some further ideas.

At some point I use the `combineImages()` this is placing one image over the other. To make this nicer. I would have made the background the foreground, but made a mask where the face is placed. In that way the face always would have fit in the image. Also I added the background image directly in the source folder. I did this because react needed it. In a real situation I would have used a server (client server prefferd) to get the image from. In this cause because there is no server. I fixed it this way.

The setting select tool is now a plain image. In this case I would have created three canvases that returned array with the cases. In this way the silder would have been a [react-simple-image-slider](https://www.npmjs.com/package/react-simple-image-slider). This so it also works fine on mobile.
