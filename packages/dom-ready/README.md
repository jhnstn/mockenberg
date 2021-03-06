# DOM Ready

Execute callback after the DOM is loaded.

## Installation

Install the module

```bash
npm install @wordpress/dom-ready --save
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for such language features and APIs, you should include [the polyfill shipped in `@wordpress/babel-preset-default`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/babel-preset-default#polyfill) in your code._

## API

<!-- START TOKEN(Autogenerated API docs) -->

### default

Specify a function to execute when the DOM is fully loaded.

_Usage_

```js
import domReady from '@wordpress/dom-ready';

domReady( function () {
	//do something after DOM loads.
} );
```

_Parameters_

-   _callback_ `Callback`: A function to execute after the DOM is ready.

_Returns_

-   `void`:

<!-- END TOKEN(Autogenerated API docs) -->

## Browser support

See <https://make.wordpress.org/core/handbook/best-practices/browser-support/>

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
