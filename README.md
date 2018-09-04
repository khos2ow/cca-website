BUILD REQUIREMENTS
==================

Install Dependencies
--------------------

We're using `hugow` which will download specified Hugo binary defined in `.hugo/version`
(currently: `v0.47.1`). If you need to use Hugo binary directly instead of `make` command,
make sure to execute: `./hugow` instead of plain `hugo`.

**MacOS or Linux**

Make sure `npm` is installed on your system.

```bash
npm install less -g
npm install uglifycss -g
npm install uglify-js -g
```

*MacOS*

```bash
brew install fswatch
```

*Linux*

```bash
apt install inotify-tools
```

Prepare Project
-------------

This will compile and concatenate all the static resources (`less`, `css`, `js` and `config` files).

```bash
make prepare
```

Run Project
-----------

To run the site locally and access it on http://localhost:1313/

```bash
make run
```

Pass additional arguments to the `hugo` command by using the following format.

```bash
make -- run --buildDrafts --baseURL http://rebrand.cloud.ca
```

Watch For Changes
-----------------

Once you run `make run` you will want to have changes to the `less` and other files in the `resources` folder to get rebuild.  In order to do this, you need to run the command in new terminal.

```bash
make watch
```

Build Project
-------------

To build the site and have it available in `public` folder.

```bash
make build
```

Pass additional arguments to the `hugo` command by using the following format.

```bash
make -- build --buildDrafts --baseURL http://rebrand.cloud.ca
```

**Note** when you run `make build` the `public` folder will be force deleted before being rebuilt.

Deploy Project
--------------

Deploy requires that you have an OpenStack Swift account which you can push the files to.  Additionally, deploy depends on the following syncing tool: https://github.com/swill/swiftly

Add the following details to the file: `./config.mk`

```toml
IDENTITY = <tenant>:<user>
PASSWORD = <password>
DOMAIN = <domain>
```

build first:

```bash
make build [-- additional flags]
```

then deploy:

```bash
make deploy
```
