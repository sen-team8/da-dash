## Based on surviveJS

`This branch doesn't have Redux`

* Has production splitting :D

### Quickstart
    $ npm install
    $ npm start

### Deploy
    $ npm run build

### Generating JavaDocs
JSDoc is used for genrating JavaDocs. To write documentation of a particular method, write the documentation just on top of it in the following manner,

---
/&#42;&#42;

 &#42; This function does this and that and so many cool things.

 &#42; @Funtion

 &#42; returns 2

 &#42;/


---

To generate the docs for any JS file, run the following command,


    $ npm run doc {filepath}

bundled app would be in build directory
