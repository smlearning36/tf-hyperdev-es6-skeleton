Thinkful HyperDev ES6 skeleton app
==================================

ES6-ready Express app. 

HyperDev currently runs on a build of Node 4.4.3 (at time of writing, see package.json in this app to confirm), which does not support ES6 out of the box.

To enable ES6, we've activated [harmony mode](https://nodejs.org/en/docs/es6/) in our start script inside of package.json:

```json
"scripts": {
	"start": "node --harmony server.js"
},
```

Note that in this HyperDev environment, in order to use `let`, `const`, and `class` inside a file, you need to set `'use strict'` at the top, as in the server.js file for this app.

