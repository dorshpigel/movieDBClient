# Getting Started with MovieDBClient

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### About this project and how to use it:

```
This is a MovieDB API client built with React.js & Typescript.
Note you should bring your own moviedb API token from home as this repo does not supply one.

Setup:

A.With Docker:
1.Run attached Dockerfile
2.Add your Token to the .env file on root
3.npm start (in case you shut it down after running the dockerfile)

B.Without a Dockerfile:
1.Create a .env file on root
2.add this variable into it: REACT_APP_MOVIE_DB_TOKEN and add your token.
3.run npm install on console on project root
4.run npm start on console on project root

You should be good to go.

Functionallity:
1.3 movie viewing lists:
a.Popular now
b.now playing
c.favorites (localStorage)
2.You can add/remove movies from your favorites list
3.View the movies drilled-down information by pressing the movie card
4.Paging

For any issues contact me and I'll assist however I can.

Enjoy
```
