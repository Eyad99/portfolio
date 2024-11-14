const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const prod = true;
const port = prod ? process.env.PORT || 3000 : 3000;

const app = next({ dev: !prod });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		createServer((req, res) => {
			const parsedUrl = parse(req.url, true);
			const { pathname } = parsedUrl;
			handle(req, res, parsedUrl);
			console.log('pathname:', pathname);
		}).listen(port, (err) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port}`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});

// const { createServer } = require('http');
// const next = require('next');
//  const app = next({ dev: process.env.NEXT_PUBLIC_NODE_ENV !== 'production' });
//   const handle = app.getRequestHandler();
// const port = process.env.PORT || 3000;

// app.prepare().then(() => {
// 	createServer((req, res) => handle(req, res)).listen(port, () => {
// 		console.log(`> Ready on http://localhost:${port}`);
// 	});
// });
