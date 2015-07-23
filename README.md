# mkdeb
Simple .deb packing tool using dpkg-deb

## Install

    npm install mkdeb

## usage

    mkdeb <target-folder>

Target folder should be named something like ```package-version-arch```.

In node scripts :

    var mkdeb = require("mkdeb");
    mkdeb("target-folder");

It's a synchronous script targeted at build processes.
