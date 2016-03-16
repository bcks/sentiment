# Simple Twitter Sentiment Analysis and Visualization with Node.js

## Install

* Install [Node.js](https://nodejs.org/en/download/)
* [Download](https://github.com/bcks/sentiment/archive/master.zip) this package or clone it.
* From the command line, run `npm install .` from the root of the package directory to install the dependencies listed in package.json.
* Create the a MySQL database using mysql_schema.sql. (If you don't already have MySQL installed, you'll need to [install it](http://dev.mysql.com/downloads/).)
* Update credentials.js with your database information.
* Get Twitter API credentials [here](https://apps.twitter.com) and update credentials.js. (If you don't already have a Twitter account, you'll need to create one first.)


## Usage

Run consume.js to consume Tweets, analyze them  and save them to Twitter.

Run app.js to visualize Tweets.

I like (pm2)[https://github.com/Unitech/pm2] to keep node apps running.


## Warning

This demo should help you started. Do not run this *as is* on a public server. Passing URL parameters directly to your database is bad.


## License

MIT © [John Emerson](http://backspace.com)

