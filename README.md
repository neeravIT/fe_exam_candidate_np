# SCOIR Technical Interview for Front-End Engineers
This repo contains an exercise intended for Front-End Engineers.

## Instructions
1. Fork this repo.
1. Using technology of your choice, complete [the assignment](./Assignment.md).
1. Update this README with
    * a `How-To` section containing any instructions needed to run/access your system.
    * an `Assumptions` section containing documentation on any assumptions made while interpreting the requirements.
1. Before the deadline, submit a pull request with your solution.

## Expectations
1. Please take no more than 8 hours to work on this exercise. Complete as much as possible and then submit your solution.
1. This exercise is meant to showcase how you work. With consideration to the time limit, do your best to treat it like a production system.


#How-To run demo project
1. First go to branch dog-cacher-Ang-1.x inside project on termina,
    cd dog-cacher-Ang-1.x
2. Run npm install command in terminal
    it will also do bower install command
3. Run npm start command to start server
4 go to http://localhost:8000/ on browser


#Assumptions
-Used Angular 1.x with ui-router and bootstrap
-instead of calling random api for random generation, used json iteration to reduce api call
-instead of calling sub breed api for getting sub breed data for particular breed, used json iteration to reduce api call
-might have to wait few seconds before using random method and search via keystrokes after loading in slow internet
to ensure initial getALLBreed call  happened
-instead of showing special message for not allowed search text kept not found message
-showed dog cards starting from left
-"The order of dog cards should show the most recently added dog first." had question about this requirement
    what is recenetly added dog? there is no adding functionality
-clear all will also send you to default page with new scope variables
-didnot use specific error to handle server side errors
-didnot use proxy for added protection
-main focus was on functional part rather then design aspect
