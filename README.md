# LapzBot Client
[![Discord](https://discordapp.com/api/guilds/240347469999767552/widget.png)](https://discord.gg/gYRJ4T4)
[![Build Status](https://travis-ci.org/TheLazyHatGuy/LapzClient.svg?branch=dev)](https://travis-ci.org/TheLazyHatGuy/LapzClient)

The desktop client to interact with Lapzbot.

## Install from Source
[Install NodeJS 6.5.0](https://nodejs.org/download/release/v6.5.0/)

Clone the git and `cd` into the directory

Open a terminal and run the following commands to install the necessary dependencies
```
npm install webpack babel-plugin-transform-react-jsx react-dom react babel-loader babel-core
npm install electron -g --save-dev
npm install --save-dev electron-compilers
npm install --save electron-compile
```
It is recommended that after you install the dependencies, you should upgrade to the latest version of [NodeJS](https://nodejs.org)

To run the Lapzbot client use this command
```
npm start
```
