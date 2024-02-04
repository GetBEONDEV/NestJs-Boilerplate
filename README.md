<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

## To run this project it is necessary to have nodeJs, and everything corresponding to nestJs. You must also have Docker installed. The first step is to give permission to our bash file that will help us run the project easily.

The 'sudo ./setup.sh' script already has all the configurations to run the project locally if you meet the conditions previously stated and necessary to run the project, we use PostGis in this project to manage the space area in the geolocations and give better management to these, also through the Script p.json we use seed to create test data by default

```bash 
$ chmod +x setup.sh
```

## followed by this we run the bash file for run the app

```bash 
$ sudo ./setup.sh 
```

## Here we can find the documentation of the services

(http://localhost:3000/docs)


## This would be enough to run the project at your location.

To run the project again if I have already run the script and everything was correct, I can run it in the following way

## Running the app
```bash
# watch mode
$ sudo npm run start:dev
```

To enter the PGAdmin Administrator and see the local db you can do the following, at the root of the project execute

```bash
# watch mode
$ docker ps
```

Then copy the CONTAINER ID of taxi24-postgres example '2c2154a226fc', after we have this id we execute the command

```bash
# watch mode
$ docker inspect <ID DE CONTAINER>
```

After executing this command, we copy the IP Address of Our Local DB and go to the following Route
(http://localhost:5050/login?next=%2F) The credentials are the ones we gave in the docker-compose.yml

There we connect to our DB where the Host is the IP address that we previously copied obtained from the docker inspect <CONTAINER ID> command and the data is also what we gave to the db in the docker-compose.yml

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Nicolas Escorcia](https://www.linkedin.com/in/nicolas-escorcia-23b9a117a/)

## License

Nest is [MIT licensed](LICENSE).