# Image Sharing Web Framework #

## Synopsis ##
This is an implementation of an image sharing website using NodeJS and MongoDB.
The framework needs to be run on diffrent systems connected to the same network so that several users in different end systems can view images uploaded by other users as well.
Any incoming image from a user is stored in MongoDB binary format in his system as well as other's systems as well.

## Procedure ##

* It is a must to set up a network connection over a LAN for its functioning.
* Once connection is set, run the script **server.js** using the command:

```
node server.js
```
* Make sure that mongo daemon and MongoDB server is running. 

##  Working  ##

![alt tag](http://i.imgur.com/IHIMwWl.gif)
