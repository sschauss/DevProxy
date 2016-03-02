#1 DEVProxy

Just run `npm i -g git+https://github.com/sschauss/DevProxy.git` and then `devproxy [file.json]`

e.g. 

`[
	{
		"source": "/",
		"target": "http://localhost:16924"
	},
	...
]`

Notes:
- The path to the proxy file *must* be absolute.
- Tested with Node.js 4.3.1 LTS.
