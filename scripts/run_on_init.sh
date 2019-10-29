#!/bin/bash
DATETIME=$(date +"%Y-%m-%d_%M-%S")
echo -e "Ok, funcionou\n$DATETIME" > ./STARTED_$DATETIME.txt

source ../.profile_files/.bash_aliases

sleep 5s
source ~/.bashrc

alias start-mongo-express='mongo-express -H 127.0.0.1 & mongod'
mongo-express -H 127.0.0.1 & mongod
