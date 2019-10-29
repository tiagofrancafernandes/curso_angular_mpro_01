#!/bin/bash
DATETIME=$(date +"%Y-%m-%d_%M-%S")
BASHBIN=$(which bash)
echo -e "Ok, funcionou\n$DATETIME" > ./STARTED_$DATETIME.txt

echo "source $GITPOD_REPO_ROOT/.profile_files/.bash_aliases" >> $HOME/.bashrc

$BASHBIN --rcfile $HOME/.bashrc

#mongo-express -H 127.0.0.1 &
#mongod &
