# IT Society Website

[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
[![npm](https://img.shields.io/npm/v/npm.svg)]()


Website for the IT Society at the University of Portsmouth.

Utilises React (with Semantic). Written in ES6, but transpiled, with Webpack and a Babel Polyfill+Transpile.

## Setup
1. Clone the project

`git clone https://github.com/hjfitz/itsoc-site.git`
2. Install all dependencies

`yarn install`
3. Build the software

`yarn run build`
4. Serve it!

`heroku local`

### Note
If you're developing on linux (RHEL/Debian based), you may need to run the following:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

This is because by default, Linux is limited to the number of files that can be watched. [Source.](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers)
