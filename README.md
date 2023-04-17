<div align="center">
	<br />
	</p>
	<br />
	<p>
		<a href="https://discord.gg/TKz7BMwEap"><img src="https://img.shields.io/discord/909261119103832084?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/myfacts"><img src="https://img.shields.io/npm/v/myfacts.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/myfacts"><img src="https://img.shields.io/npm/dt/myfacts.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

# myFacts NPM Package

This is an NPM package that provides random facts in various categories. The package includes the following categories:

- Google
- Software
- Discord
- Youtube

## Installation

To install the package, run the following command:

```ssh
npm install myfacts
```

## Usage

To use the package, first import the `getFact` function from the package:

```js
// TypeScript: import getFact from "myfacts";
const getFact = require("myfacts");
```

Then, call the `getFact` function with a category parameter to get a random fact from that category:

```js
const fact = getFact("Google");
console.log(fact);
```

This will log a random fact from the Google category to the console. You can replace "Google" with "Software" or "Discord" to get a random fact from those categories instead.

You can also optionally pass an index parameter to `getFact` to get a specific fact from the array:

```js
const fact = getFact("Google", 2);
console.log(fact);
```

This will log the third fact (index 2) from the Google category to the console.

## Contributing

If you'd like to contribute to the package, feel free to submit a pull request with your changes.

## License

MIT License

Copyright (c) 2023 Ducko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
