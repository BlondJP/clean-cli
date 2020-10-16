# Clean CLI

Install a Command Line Interface to generate the boilerplate you need to develop a Clean Architecture.

## Getting Started

You need to have a nodejs project and go to the root directory.

### Prerequisites

```
npm
node
```

### Installing

If you got an old version of clean-cli.

```
npm uninstall clean-cli -g
```

then

```
npm install clean-cli -g
```

### Usage

To generate your files:
Pattern

```
clean-cli generate [LAYER] [ACTION] [DATA]
```

Example

```
clean-cli generate controller creating user
clean-cli generate useCase creating user
clean-cli generate dataAccess creating user
clean-cli generate entity creating user

```

or

```
clean-cli generate controller gettingOne user
clean-cli generate useCase gettingOne user
clean-cli generate dataAccess gettingOne user
clean-cli generate entity gettingOne user

```

### Development on the package

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

## License

This project is licensed under the MIT License
