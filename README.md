# react-firebase-authentication

This is a project to show how to use Firebase Authentication with React and Redux.

Demo: https://react-firebase-auth-4526d.firebaseapp.com/

To run locally,

```
$ git clone git@github.com:stozuka/react-firebase-authentication.git
$ cd react-firebase-authentication
$ cp .env.local.example .env.local
```

Add your fireabase project information to `.env.local`.

```
$ yarn install
$ yarn start
```

Go to `http://localhost:3000/`.

## Todo list

- Add email verification when signing up.
- Add functionality to delete registered account.
- Add styles.
- Add spinner when connecting to the auth services.
- Refactoring.
