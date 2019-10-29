#!/bin/bash
DATETIME=$(date +"%Y-%m-%d_%M-%S")
echo -e "Ok, funcionou\n$DATETIME" > ./STARTED_$DATETIME.txt

if [ ! -f ~/.bash_aliases ]; then
  ln -s $GITPOD_REPO_ROOT/.profile_files/.bash_aliases ~/.bash_aliases
fi

source ~/.bashrc
