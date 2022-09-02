<div align="center">

## World Cup Album Api

<sub>Built with ❤︎ by <a href="https://github.com/maganezf">Maganez
Filho</a></sub>

</div>

## :pushpin: Table of Contents

- [Technologies](#computer-technologies)
- [Purpose and Features](#dart-purpose-and-features)
- [Api Routes](#spiral_note_pad-api-routes)
- [How to Run](#construction_worker-how-to-run)
- [Found a bug? Missing a specific feature?](#bug-issues)
- [Contributing](#tada-contributing)
- [License](#closed_book-license)

## :computer: Technologies

This project was made using the follow technologies:

- [Nest.js](https://nestjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Editorconfig](https://editorconfig.org/)

### :dart: Purpose and Features

- A simple api project made with Nest.js (Node.js) and Typescript for purpose studies

### :spiral_note_pad: Api Routes

| Method | Route                              | Has params or body?                             | Description                           |
| :----- | :--------------------------------- | :---------------------------------------------- | :------------------------------------ |
| POST   | /api/stickers/create               | HAS BODY                                        | crate a new sticker                   |
| GET    | /api/stickers                      | NO                                              | get all stickers                      |
| GET    | /api/stickers/all-from-user?id=:id | HAS QUERY PARAM (id: string)                    | get all stickers from a specific user |
| GET    | /api/stickers/:id                  | HAS PARAM (id: string)                          | get a specific sticker by id          |
| PATCH  | /api/stickers/:id?id=:id           | HAS PARAM and QUERY PARAM (id: string for both) | update a specific sticker by id       |
| DELETE | /api/stickers/:id                  | HAS PARAM (id: string )                         | remove a specific sticker by id       |

## :construction_worker: How to Run

```bash
# Clone Repository and change directory to project
$ git clone https://github.com/maganezf/world-cup-album-api.git && cd world-cup-album-api
```

```bash
# Install Dependencies
$ npm install or yarn install

# Run Application:

# development
$ npm or yarn run start

# watch mode
$ npm or yarn run start:dev

# production mode
$ npm or yarn run start:prod
```

Go to <http://localhost:3333/api> to see the result.

## :bug: Issues

Feel free to **file a new issue** with a respective title and description on
this repository. If you already found a solution to your problem, **i would love
to review your pull request**!

## :tada: Contributing

First of all, thank you for being interested in helping out, your time is always
appreciated in every way. 💯

Here's some tips:

- Check the
  [issues page](https://github.com/maganezf/world-cup-album-api/issues)
  for already opened issues (or maybe even closed ones) that might already
  address your question/bug/feature request.
- Feature requests are welcomed! Provide some details on why it would be helpful
  for you and others, explain how you're using bull-board and if possible even
  some screenshots if you are willing to mock something!

## :closed_book: License

Released in 2022.

Made with ❤︎ by [Maganez Filho](https://github.com/maganezf) 🚀.

Give a ⭐ if this project helped you!
