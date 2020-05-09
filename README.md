Reproduction case for https://github.com/mapbox/node-sqlite3/issues/1323

Run `npm start` and wait a while. I think the crash occurs when closing the database when a query is still in progress.
I couldn't find a good way to force that to happen, so the reproduction case is stochastic in nature.

The crash should take down the Electron renderer process and should print 'app crashed' to the command line that you executed the `npm start` command in.


