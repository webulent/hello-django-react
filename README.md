This repo is a implementation of Django - React project. You could use it as a base to build your own simple web app.

## How to use

First, clone the repo.

```bash
$ git clone git@github.com:webulent/hello-django-react.git <yourAppName>
$ cd <yourAppName>
```

Second, install the dependencies.

```bash
$ npm install
```

Third, install the requirements.

```bash
$ pip install -r requirements.txt
```

Then, with the root file in place, you can now simply run webpack like this (in root directory: webpack.config.js):

```bash
$ ./node_modules/.bin/webpack --config webpack.config.js
    or simply use
$ npm start
```

Latest, just run your server with prefered port.
```bash
$ ./manage.py runserver 8000
```

Now you should see a new browser window/tab opening and a content of "Hello World" in http://127.0.0.1:8080.