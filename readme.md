# Simple Twitter Sentiment Analysis and Visualization with Node.js

## Install

* If you don't already have [Node.js](https://nodejs.org/en/download/) installed, download and install it.
* [Download](https://github.com/bcks/sentiment/archive/master.zip) this package or clone it.
* From the command line, run `npm install .` from the root of the package directory. This will install the dependencies listed in package.json.
* If you don't already have MySQL installed, [download](http://dev.mysql.com/downloads/) and install it.
* Create the a MySQL database using mysql_schema.sql.
* Update credentials.js with your database information.
* If you don't already have a Twitter account, [create one](https://twitter.com).
* Sign up for Twitter API credentials [here](https://apps.twitter.com) and update credentials.js.


## Usage

Run consume.js to consume Tweets, analyze them  and save them to Twitter.

Run app.js to visualize Tweets.

I like (pm2)[https://github.com/Unitech/pm2] to keep node apps running.


## Warning

This demo should help you started. Do not run this *as is* on a public server. Passing URL parameters directly to your database is bad.


## License

MIT © [John Emerson](http://backspace.com)

