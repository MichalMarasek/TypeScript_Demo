Demo project using typescript.


You need node installed.

Project was initialised using:
npm init -y

You can use javascript code in typescript.
You can't use typescript files *.ts in html pages.
Typescript files must be compiled to javascript first.

To install typescript globally on your machine use:
npm i -g typescript

tsconfig.json file handles rules for compilation from js to ts
src - folder with ts files
dist - folder with compiled js files


You can use 
tsc
or
npm run compile
command in terminal to compile ts code to js (you can see compiler options and directories in tsconfig.json file)

in package.json file there is 
 "scripts": {
    "compile": "tsc --watch" 
  },
  
  this is responsible for auto compiling our code whenever we do any correct changes, but you need to run
  
  npm run compilefirst or juts use 
  tsc --watch
  in terminal
  
  
  
  
  