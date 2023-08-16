#!/bin/sh

PROJECT="ng-coffeezone"

cp -r /tmp/$PROJECT/node_modules /usr/src/$PROJECT
yes n | yarn run start
