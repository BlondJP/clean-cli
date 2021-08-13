# Clean CLI

Install a Command Line Interface to generate the boilerplate you need to develop a Clean Architecture.

## Getting Started

You need to have a nodejs project and go to the root directory.

### Prerequisites

```
npm
node 14+
```

### Installing

If you got an old version of clean-cli.

```shell
npm uninstall clean-cli -g
```

then

```shell
npm install clean-cli -g
```

### Usage

To generate your files:
Pattern

```shell
clean-cli generate [LAYER] [ACTION] [DATA]
```

Example

```shell
clean-cli generate allLayers gettingOne user
# Equivalent to 
clean-cli generate controller gettingOne user
clean-cli generate useCase gettingOne user
clean-cli generate dataAccess gettingOne user
clean-cli generate entity gettingOne user
```

## Example in an express server

### Generate Server

Execute the command to create all the layers of your endpoint.
```shell
clean-cli generate allLayers creating user
```

Create an index.js initializing the server
```js
// src/index.js

const express = require('express')
const app = express()
const port = 3000
const {createUser} = require('./controllers');

app.post('/user', createUser);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

Then execute:
```shell
# If the project is brand new
npm init 
npm install express --save
```

### Carry out the Dependency injection

Copy this file in src/controllers/ :
```js
// src/controllers/index.js

/* Dependencies */
const {addUser} = require('../use-cases');

/* Factories */
const makeCreateUser = require('./create-user');

/* Injections */
const createUser = makeCreateUser(addUser);

/* Exports */
exports.createUser = createUser;
```

Copy this file in src/entities/ :
```js
// src/entities/index.js

/* Dependencies */

/* Factories */
const makeBuildUser = require('./build-user');

/* Injections */
const buildUser = makeBuildUser();

/* Exports */
exports.buildUser = buildUser;

```

Copy this file in src/data-access/ :
```js
// src/data-access/index.js

/* Dependencies */

/* Factories */
const makeUserDb = require('./user-db');

/* Injections */
const userDb = makeUserDb();

/* Exports */
exports.userDb = userDb;
```

Copy this file in src/use-cases/ :
```js
// src/use-cases/index.js

/* Dependencies */
const {buildUser} = require('../entities');
const {userDb} = require('../data-access');

/* Factories */
const makeAddUser = require('./add-user');

/* Injections */
const addUser = makeAddUser(buildUser, userDb);

/* Exports */
exports.addUser = addUser;
```

### Fill the Skeletons

Fill your controller, here is an example :
```js
// src/controller/create-user.js

module.exports = (addUser) =>
async function createUser(request, response) {
    const user = await addUser({username: 'Linus'});
    console.log('user', user);
    return response.send(user);
}
```
Fill your useCase, here is an example :
```js
// src/use-cases/add-user.js

module.exports = (buildUser, userDb) =>
async function addUser(userInfo) {
    const user = buildUser(userInfo);
    const added = await userDb.insert(user);
    console.log(added);
    return added;
}
```
Fill your entity, here is an example :
```js
// src/entities/build-user.js

module.exports = () =>
async function buildUser(userInfo) {
    const user = {};
    
    if (userInfo && typeof userInfo?.username === 'string') {
        user.username = userInfo.username;
    }
    
    return user;
}
```
Fill your dataAccess, here is an example :
```js
// src/data-access/user-db.js

module.exports = () => {

  const users = [];
        
  async function insert(user) {
    users.push(user);
    return user;
  }

return Object.freeze({insert})

}
```

### Test your app

Launch the server
```shell
node src/index.js
```

Then consume your endpoint
```shell
curl --request POST --url http://localhost:3000/user
```

## About Clean Architecture

If you need more information about clean architecture, I highly recommend this video :
```
https://www.youtube.com/watch?v=fy6-LSE_zjI&t=1831s&ab_channel=DevMastery
```

## Development on the package

First

```
git clone https://github.com/BlondJP/clean-cli clean-cli
```

Then

```
cd clean-cli
```

Then

```
npm install
```

Then

```
npm run build
```

Then
```
npm link
```

then try

```
clean-cli generate controller creating user
```

### Testing

To launch unit tests

```
npm run test
```

## Author

- **Jean-Philippe BLOND**

## The project

Clean-cli is an open source project, it is functional in his state.<br>
It is also forkable if you need to adapt it to your needs.


If this project helped you, please star his repository.<br>
https://github.com/BlondJP/clean-cli

## License

This project is licensed under the MIT License
