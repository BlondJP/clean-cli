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
clean-cli -g FILE_TYPE -e MODULE_NAME -a ACTION: [creating, gettingOne, gettingAll, updating, removing]
```

Example

```
clean-cli -g controller -e user -a creating
clean-cli -g useCase -e user -a creating

```

or

```
clean-cli -g controller -e user -a gettingOne
clean-cli -g useCase -e user -a gettingOne

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
npm run build
```

then try

```
clean-cli -g controller -e user -a creating
```

## Author

- **Jean-Philippe BLOND**

## License

This project is licensed under the MIT License
