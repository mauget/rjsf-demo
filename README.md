# React JSON-Schema-Form Demo
This demonstration uses react-JSON-Schema-Form to 
generate a late-bound form to manage a collection accessed
by a REST API. Our test data resembles that which could be
a mailing list or contact list table.

React JSON-Schema-Form drives the creation of a UI form 
whose features and widgets 

## Getting Started

### Prerequisite Libraries

1. React >= 16
1. node.js (e.g. v14.13.0 used here)
2. yarn (e.g. 1.22.5 )

You will need Docker, as well, to run a REST server of test
persons. 

The service image is on DockerHub at `mauget/persons`.

`docker run --name person-service --rm -p 3004:3000 mauget/person-service:latest`

The REST service GET root is `/persons`, the port is `3004`.
This rjsf demo project assumes that serivce is running as reacable.

### Installation

The package.json specifies read-json-schema-form -`@rjsf/core`,
our chosen them, and material-ui theme — `@material-ui/core`,
with `@material-ui/icons.`

The project uses the airbnb eslint style guide as well. This
can be annoying at times, but it proves to mitigate 
more-annoying runtime errors.

Grab the dependecies:

`$ yarn install`

---------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
