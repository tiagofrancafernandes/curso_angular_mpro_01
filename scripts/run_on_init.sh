#!/bin/bash
DATETIME=$(date +"%Y-%m-%d_%M-%S")
echo -e "Ok, funcionou\n$DATETIME" > ./STARTED_$DATETIME.txt
cd .. && ln -s $(pwd)/.profile_files/.bash_aliases ~/.bash_aliases && source ~/.bashrc
