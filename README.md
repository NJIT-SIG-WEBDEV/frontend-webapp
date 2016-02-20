# How to Install

### Videos
* #### [How To Install Video](https://www.youtube.com/watch?v=UZULI_yxCkY)
* #### [Getting Angular Setup](https://youtu.be/tHWHcszpil0)


First make sure you download and install on your computer.
* [Node JS](https://nodejs.org/en/)
* [Git](https://git-scm.com/)

When you install all of them please run terminal or git bash in Administrator Mode and type,

`node -v`, and
`git --version`

If you get version numbers(something like v4.3.0) on both then you are good to go. If you got an exception or not found, check your installation.


Then git clone your repo by typing `git clone https://github.com/NJIT-SIG-WEBDEV/frontend-webapp.git`

Once you clone it you should have a frontend-webapp folder which has the app folder, test folder, Gruntfile.js etc..

The web application has many modules or dependencies it needs to build and run on your computer, and these are not pushed up to the repo. Instead all of these dependencies are listed in the package.json and bower.json files.

At first please type `npm install`. Once the installation is done you should see a "node_modules" folder in your directory.

Next, please download [Grunt](http://gruntjs.com/getting-started) by typing `npm install -g grunt-cli` in your cmd.
To confirm, type `grunt --version`. You should see something like

`grunt-cli v0.1.13 grunt v0.4.5`.

Next, please download [Bower](http://bower.io/) by typing `npm install -g bower` in your cmd.
To confirm, type `bower --version`. You should see something like '1.7.7'.

IF you are getting errors while trying to download Grunt or Bower, you might not have the right permissions. Please check this link out [https://docs.npmjs.com/getting-started/fixing-npm-permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

And lastly, please type `bower install` in your command line to install all the libraries. after the installation you should see a new folder in your directory called "bower_components"

You are Good to GO! to run your webapp type `grunt serve`. It will run all of the tasks and open up a page in `localhost:9000` with a big heading that says "'Allo, 'Allo!"

However to have your webpage automatically reload you have to get an extension on Google Chrome called "LiveReload". Idk what its called in other browsers.


If you have any questions email me at ak634@njit.edu or open up an issue on Github. Thanks
