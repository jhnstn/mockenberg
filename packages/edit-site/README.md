# Edit Site

Edit Site Page Module for WordPress.

> This package is meant to be used only with WordPress core. Feel free to use it in your own project but please keep in mind that it might never get fully documented.

## Installation

```bash
npm install @wordpress/edit-site
```

## Usage

```js
/**
 * WordPress dependencies
 */
import { initialize } from '@wordpress/edit-site';

/**
 * Internal dependencies
 */
import blockEditorSettings from './block-editor-settings';

initialize( '#editor-root', blockEditorSettings );
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for such language features and APIs, you should include [the polyfill shipped in `@wordpress/babel-preset-default`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/babel-preset-default#polyfill) in your code._

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
