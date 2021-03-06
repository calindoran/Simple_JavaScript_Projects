# Some Simple JS Projects
- My repo to log and store my current work with JS. This includes two source folders, one containing ES6 called __src__, and the other called __lib__ containing ES5 generated using the JavaScript transcompiler Babel.

- Directory __src/work__ includes interview prep questions in ES6.
 

## Running the webapp
>If you would like to see how compatable our ES6 to Babel's ES5 is, you can simple run the index.html file with an extension like Live Server for VS Code.


## QUICK TIPS!
>For future reference, here is a list of the steps needed to set up the project for transpilation:

1. Initialize your project using npm init and create a directory called src

2. Install babel dependencies by running

```
npm install babel-cli -D
npm install babel-preset-env -D
```

3. Create a .babelrc file inside your project and add the following code inside it:

```json
{
  "presets": ["env"]
}
```

4. Add the following script to your scripts object in package.json:

```json
"build": "babel src -d lib"
```

5. Run npm run build whenever you want to transpile your code from your src to lib directories.
