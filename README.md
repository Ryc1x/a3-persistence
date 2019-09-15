# CS 4241 Assignment 3: Better Name Book

Author: Rui Huang

## How to use the web app?
### Run locally
Install `npm` and `Node.js`, then run:

`
$ npm install
`
`
$ npm start
`

And go to `localhost:3000/login.html`

### Online application
Or you can also view the online application here:

Link to the web app: http://a3-ryc1x.glitch.me

## Authentication

This application uses simple authentication method, to access the index page, you need to first **go to login page** to login with existing account or register a new account to continue. To register, please enter username and password then click "register".

To view available users, please view [users.json](/public/json/users.json)

## Summary
- This is a name book web app which allows user to manage a list of people with simple authentication method.
- The user can add a person to the list or modify/delete a person on the list.
- Whenever a person is added/modified/deleted, the page get latest list from the server and refreshes the page
- 6 middleware used are: static, body-parser, morgan, cookie-parser, serve-favicon, and error-handling
- Navbar and footers are added to the app to make it looks better.

### Technical Achievements
- **Registration**: Allow users to register new account on login page
- **Auto-reindexing**: The index of rows are calculated automatically each time the page refereshes
- **Age calculation**: The age can be calculated in the server with given date of birth info
- **Additional Middleware**: Used morgan for logging, favicon for favorite icon.
- **Major dropbox**: Read the major.json that stores all major info and filled the dropbox with it

### Design/Evaluation Achievements

- **Login Page**: Designed the login page using Bootstrap
- **Footer Design**: Designed the color of the footer and re-defined the anchor element
- **Table Design**: Used the table from bootstrap and tweaked it to make it fit the whole theme
- **Gradient transparent background**: The top background image is gradient transparent which seems really cool
- **Title and subtitle**: I used a semi-transparent black label for name and a hand-written font for subtitle
- **Avatar**: Uploaded an avatar to the app and hover on it will...

## Note
The web app uses resources from following sites:
- Booststrap
- jQuery
- Google Fonts
- League of Legends
