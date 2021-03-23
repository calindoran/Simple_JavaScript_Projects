# Some Simple JS Projects #
 A repo to store and log my current work with JS.


## QUICK TIPS! ##
For future reference, here is a list of the steps needed to set up the project for transpilation:

1. Initialize your project using npm init and create a directory called src

2. Install babel dependencies by running

npm install babel-cli -D
npm install babel-preset-env -D

3. Create a .babelrc file inside your project and add the following code inside it:

{
  "presets": ["env"]
}

4. Add the following script to your scripts object in package.json:

"build": "babel src -d lib"

5. Run npm run build whenever you want to transpile your code from your src to lib directories.
