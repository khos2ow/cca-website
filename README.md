BUILD REQUIREMENTS
==================

Install Dependencies
--------------------

*~~Make sure you have `hugo` version `v.41` or higher~~*

We're using `hugow` which will download specified Hugo binary defined in `.hugo/version`
(currently: `v0.45.1`). If you need to use Hugo binary directly instead of `make` command,
make sure to execute: `./hugow` instead of plain `hugo`.

**MacOS or Linux**

Make sure `npm` is installed on your system.

```bash
npm install less -g
npm install uglifycss -g
npm install uglify-js -g
```

Build Project
-------------

```bash
make build
```

Run Project
-----------

```bash
make run
```

Pass additional arguments to the `hugo` command by using the following format.
```
make -- run --buildDrafts -b http://rebrand.cloud.ca
```
