# I just need a bit of data from a mongoDB

I had just the same issue, and in general this is the simplest way to create a node.js api and react front end to display a single item.

the node api and react front end are seperately deployable, I have a Procfile to let heroku know that the node app needs to run as a worker and the react front end is ready to 'npm build' and deploy wherever you like. each project has their own package.json, 'npm i' the node app, and 'yarn' the react app and they should be good to customize.