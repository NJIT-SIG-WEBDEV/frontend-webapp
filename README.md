# Introduction

Welcome to Front-End Website Development. This is the part where we make a beautiful looking, well functioning, and user friendly online interactive document to present our information, services, or products to the people. 

I believe that front-end development is just as important as the back end. As a matter of fact not too long ago it was all front-end development with just a database to query into, and even though systems nowadays are much more sophisticated, an extensive well developed back end would be nothing without designing a way to present that information to the visitors of your site. 

Now i want to get something straight. People often believe you have to be a great designer or have huge creativity to do front-end development, but you have to realize that you cannot paint everything with just one brush. There is a lot of parts, departments, expertise fields into front-end dev. If you want to be a UI or UX designer sure, you need that creative touch. But just like me, there are a lot of people who are more about making the little buttons and panels work rather than creating them in the first place. Its the collaboration of great design and well functioning code that make up the grandiose piece of wonder. Some people argue that even writing code is a form of art. I'll leave that discussion for another time :)

This semester we are going to learn what it takes for the developer or a team of developers to create this well looking/functioning website we are talking about. The biggest websites and web applications we see today, are a work of a coalition of people coming together, writing a lot of code, and using all the tools they have under their belt to make the development stage as smooth and easy as possible. 

<hr />
If you wanted to create a building, you don't need much more than some bricks and an adhesive to put those bricks together. To make your job easier you use tools like hammers, spatulas, and chisels. What makes the real difference though is those big tools like cranes, bulldozers, trucks, etc. So you use tools small and big, short and tall, to build a hut for yourself and your hubby :).

Web App Development is very similar. If you want to make a website you don't need anything much more than html,css,and javascript, BUT we are going to use tools small and large, extensive and simple, important and less, to shorten our development time and increase productivity. 

#### Lets go over some of the tools under our belt individually(in no particular order):

#####[Node/npm](https://nodejs.org/en/)
Before nodejs, the front-end frameworks would have to query the webserver for every little piece of information they had to retrieve. There was really no 'Runtime Environment' per say that prepared, organized, and presented back-end information to the website dynamically, which made things slow and hard to work with. So Nodejs came along, and didn't just change all that, but by building its structure on the same language as the front end, it made applications run super fast and made front-end/back-end teams work with each other flawlessly because they all understand each others code. So what does it have to do with us? Well it turns out, that these other tools that we use like Grunt or Bower, act as a node application even though they are for front end dev. So we need Node, and their package manager Npm so we can make Grunt/Bower work. 


####[Grunt](http://gruntjs.com/)

Your application goes through many stages as its getting built by you or a team. At the beginning you are at a development stage, where you are writing the base code and functions. During this time your application goes back and forth between dev stage and testing stage, where as you go along you are unit testing your application to make sure you didn't break anything. After dev stage you go into a build stage, where your code is compiled, cleaned, minified, uglified, concatenated, and presented as a final distribution folder. After this you go into the last stage which is deployment stage. This stage is usually handled by some back-end operation that presents the last folder to the webserver and gets it running. Grunt handles all of the tasks you need to run in each of these stages. It compiles your code, cleans it, minifies it, uglifies it, concatenates it, tests it, reloads it into a temporary server, and so much more. If it wasn't for Grunt, you would have to do all those things manually, and god that would take soo much time. 
###### Other Options: Gulp,Cake,Broccoli

####[Bower](http://bower.io/)
Before you start developing, your application is going to need some external third party libraries like Jquery or Bootstrap, or even Angularjs. So instead of going to each of their website, downloading their code and putting it into your project, or getting their cdn and including it in your index.html file, you can just use bower. Bower includes these things with just one line of code. `bower install bootstrap` for example puts bootstrap into your project, without you ever having to go to their website. Its awesome. 
###### Other Options: component, jam, volo

####[Jquery](https://jquery.com/)
Jquery is Javascript. Its just a simplified version of it. Doing Ajax calls and Dom manipulation takes a lot of Javascript code. Jquery takes all that code and puts it into methods that you can use again and again. This speeds up your development immensely. Jquery is an essential component of any website and i cant think of any website today that doesn't use Jquery

####[Bootstrap](http://getbootstrap.com/)
Do you remember when, back in the day, most websites had a subdomain m.something when you went to that website on your phone? It would always be m.somewebsite.com. I still see it from time to time, but its usually in some small unupdated websites. Todays modern approach into building websites that are "mobile friendly" is Responsive Website Development(RWD). RWD is the way to go and its even Googles recommended design pattern. You see, instead of loading a separate url or a subdomain, you write one code, one HTML, but write it using Bootstrap or some other Responsive CSS Framework so your code gets rendered separately depending on which device your using. 
This saves production time, speeds up your website(especially if you concatenate all your bootstrap together), and is overall a better practice. So Bootstrap is what you use to make everything all nice and responsive looking.
###### Other Options: foundation, skeleton, Bourbon

####[Modernizr](https://modernizr.com/)
You know how i said RWD renders your code depending on which browser or device your using? Well how does it know which one you use? Thats where Modernizr comes in. Modernizr can tell you which device your using, which browser, and its version. If you are using some super new, super unique Jquery method, Modernizr can also tell you if a certain browser supports it or not. Read more about it on their website.

####[Sass](http://sass-lang.com/)
Syntactically Awesome Stylesheets(Yes thats really its name) brings some of the features of high level programming languages to css like a type system, loops, inheritance, dependence, etc. This makes it immensely easier to write and organize your css code, and be able to perform some of the functions of your website straight in your css when you before had to do it using Javascript. You can write a Grunt task that will automatically compile your sass code and present it to your site, or you can use a compiler and do it manually.
######Other Options: Less, Stylus, CssCrush

####[AngularJS](https://angularjs.org/)
AngularJS is the big tool we were talking about earlier. It's the crane, it's the truck, its the thing that you always need on site in any building project but not a lot of people can operate it and the operators make a lot of money? Thats AngularJs. Almost all crane operators can use a hammer to hit a nail, but not everyone who can hit a nail with a hammer can be a crane operator, you get me? Thats why my cousin can make 90k a year operating cranes in NYC, and AngularJS developers starting salary is 90K. So what is it?

If you look at any big web application, most of the time the front-end tech stack is about 60-80% Javascript. If you think about it, thats A LOT of Js code. Angulars library angular.js has over 30,000 Lines of Javascript code in it. And thats nothing compared to Google Chromes 8 million lines of code. Or the lines of code on Facebook reaching over 60 million. Holy shiit..ake mushrooms! So how do you deal with all this much code? How do you compartmentalize it, organize it, making sure it all works together? Thats where Angularjs comes in. 

Even though Angular is described as a Javascript Framework, its really just a tool-set that lets you build your own JS Framework swiftly and efficiently. It gives you the tools and connections, but how you layer the structure of your application is up to you.(even though they give suggestions). Even though it all sounds cool and easy, it can get pretty complicated as the scale of your application grows. I am still in the process of learning more and more about Angular, and i don't think i will ever stop. Its the meat and potatoes, the name of the game, the quintessential part of building a web application, and thats why they pay you the big $$$.

###### Other Options: backbonejs, reactjs, ember, ractive

####[Yeoman](http://yeoman.io/)
Ill take it right out of their mouth 
>"Yeoman helps you to kickstart new projects, prescribing best practices and tools to help you stay productive". 

Yeoman puts all of the tools we have discussed above, and some other ones, together in a nice big scaffolding to get your web app started. It creates a folder structure, generates basic grunt tasks, downloads and installs dependencies, etc. Its an amazing tool. Think about being able to buy the trucks,buy the cranes, hire the construction workers, get the bricks, get the hammers and nails, all in one call. Its really awesome. 
###### Other Options: ManifoldJs
<br>
<br>
<hr />
There is a couple more tools that we can talk about, like Requirejs, mocha, webpack, etc.. but im all out of coffee :). 
Let me go grab some more and in the meantime i hope you learned something by reading this introduction :) Happy Coding...

[Awesome Drawing i found showing how it all works](https://assets.toptal.io/uploads/blog/image/25/toptal-blog-image-1374849974023.png)


# How to Install

#### [Watch My Video](https://www.youtube.com/watch?v=UZULI_yxCkY)

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
