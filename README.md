# How to Install

First make sure you download and install on your computer.
* [Node JS](https://nodejs.org/en/)
* [Git](https://git-scm.com/)

When you install all of them run terminal or git bash and type,

`node -v`, and
`git --version`

If you get version numbers on both then you are good to go. If you got an exception or not found, check your installation.


Then git clone your repo by typing `git clone https://github.com/NJIT-SIG-WEBDEV/frontend-webapp.git`

Once you clone it you should have a frontend-webapp folder which has the app folder, test folder, Gruntfile.js etc..

The web application has many modules or dependencies it needs to build and run on your computer, and these are not pushed up to the repo. Instead all of these dependencies are listed in the package.json and bower.json files. To install them you need to run two commands.

`npm install` and `bower install -g` and `grunt install -g`

Each installation will take time, npm installation especially.

after you run these two commands you will see two new folders in your directory. "node_modules" & "bower_components"

These folders hold all the modules/components of your webapp.

**Now the good stuff**. As we said in the first meeting Grunt is a task runner, and you have to tell what task you want it to run.

Yeoman generator already puts into the Gruntfile.js all the basic tasks that you would run on any kind of web application which is awesome.

so to run your web application, all you type is,

`grunt serve`

Grunt will run many tasks for you and open up your web application.

After running everything the last task it will run is `Watch` which watches for any changes in your project and updates them automatically.

However to have your webpage automatically reload you have to get an extension on Google Chrome called "LiveReload". Idk what its called in other browsers.

And there you have it. You should see a simple page show up at your 'localhost:9000' address. And if you have the livereload extension running any changes you make will automatically be reflected in your webapp.

If you have any questions email me at ak634@njit.edu or open up an issue on Github. Thanks




















