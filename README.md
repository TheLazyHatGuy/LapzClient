# LapzBot Client
[![Discord](https://discordapp.com/api/guilds/240347469999767552/widget.png)](https://discord.gg/gYRJ4T4)

The desktop client to interact with Lapzbot.

## Install from Source
[Install NodeJS 6.5.0](https://nodejs.org/download/release/v6.5.0/)

Clone the git and `cd` into the directory

Open a terminal and run the following commands to install the necessary dependencies
```
npm install babel-plugin-transform-react-jsx react-dom style-loader css-loader node-sass sass-loader webpack react babel-loader babel-core babel-preset-es2015
npm install electron -g
```
It is recommened that after you install the dependencies, you should upgrade to the latest version of [NodeJS](https://nodejs.org)

To build the LapzBot client use this commands
```
npm run build
```
To run the Lapzbot client use this command
```
npm run start
```
