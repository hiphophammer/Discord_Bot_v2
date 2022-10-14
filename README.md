# Discord_Bot_v2

This is my attempt to migrate a Discord bot, made with Discord.py, to a Discord.js bot.

The repo of its predecessor can be accessed [here](https://github.com/hiphophammer/Discord_Bot_v2).

## Why bother?

Simply put, there were many problem with the previous version.
* Discord.py was discontinued for quite a while; the Discord.js module would offer much more versatility.
* I wanted to practice some **JavaScript** and **Node.js** (frankly the biggest reason).
* The predecessor was created without scalability in mind, hence, the code has become unbearably ugly and messy.
* I wanted to **docker**ize the environment so that I can code from anywhere without worrying about dependencies.
* Forgot to mention that I also wanted to practice building a database using PostgreSQL

## Functions

The basic functions that the previous version offered:
* Get LCK standings
* Get today's games
* Get an upcoming game for a specific team
* Alert users if there's a game (=LCK gone live)
* Upload appropriate memes according to keyword

Additional functions to be:
* Get Worlds info (maybe other regions too? But we'll see. No one in the channel watches them anyway)
* Store gathered info into a SQL instead of constantly bothering the website every hour
