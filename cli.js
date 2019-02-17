#!/usr/bin/env node

const { render } = require('prettyjson');

const me = {
    name: 'Jamil Hijjawi',
    title: 'Sotfware engineer - Front end developer',
    github: 'https://github.com/JamilHijjawi',
    linkedIn: 'https://www.linkedin.com/in/jamilhijjawi/',
    email: 'j.hijjawi@gmail.com',
    skills: `Javascript, Nodejs, Express, Angular, React, Ionic, Cordova, Stencil, Polymer, Scrum, CI/CD, TDD, Mysql, Gatsby, GraphQL, OOP, Functional Programming, Reactive Programming, Web Socket, Web development, SCSS, CSS, HTML`
};

const renderOpts = {
    dashColor: 'cyan',
    keysColor: 'blue',
    stringColor: 'white'
};

console.log(render(me, renderOpts));