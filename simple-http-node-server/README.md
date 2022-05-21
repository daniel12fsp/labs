# Introduction

It's simple http node server without external dependecies.

It's perfect for run simple aplication on container for testes and another environments


## Commands

### Build a image
`docker build . -t simple-http-node-server`

### Run a image

`docker run -p 3000:3000 --name simple-server simple-http-node-server`

See your http://localhost:3000



