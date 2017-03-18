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


Install pip

```bash
sudo easy_install pip
```


Install virtualenv via pip:

```bash
$ pip install virtualenv
```


Create a virtual environment:

```bash
$ cd my_project_folder
$ virtualenv my_project
```


To begin using the virtual environment, it needs to be activated:

```bash
$ source my_project/bin/activate
```


Install packages as usual, for example:
```bash
$ pip install requests
```


Export DJANGO_SETTINGS_MODULE

```bash
$ export DJANGO_SETTINGS_MODULE=hello.settings
```


Third, install the requirements.

```bash
$ pip install -r requirements.txt
```


Now, let's apply this migration:

```bash
./manage.py migrate
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


If you are done working in the virtual environment for the moment, you can deactivate it:
```bash
$ deactivate