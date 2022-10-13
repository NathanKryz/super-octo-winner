# super-octo-winner

## Description

This project is command-line exclusive function to run Javascript functions entirely on the backend through Node.js, the content of said project is a team builder,
one where a user can enter the names of team members as a manager, engineers, or interns, as well as submit their ids, emails, and a fourth option dependent on which
specific class of user is being inputted: office number for the manager, a github url for engineers, or the present school of study for interns. Coupled with the 
command line nature of this project, it also features using multiple classes and a single super class in order to build objects to populate the end result with, being a
stylized html sheet with all of the inputted data presented in an easy to read and process format. It also features a few tests to ensure the objects function as intended, with room for further development as a result.

## Installation

To install, first make sure to download or clone the local repository, then from the command line, be sure to invoke 'npm install' or 'npm i' to ensure the packages
are installed properly so that the code can function.

## Usage

With a console open and in the directory proper, typing in 'node index.js' will prompt the code to begin running. From there, a series of prompts will appear in the
console that must be answered, from there, a list prompt will appear asking for the role of the next edition; 'engineer' or 'intern', or an option to conclude the function through 'Finish Building.'
Then, so long as the user wishes, they can keep adding more and more individuals to team to be built, until they finally select the 'Finishing Building' option when
prompted. From there, the script to generate and print the index.html will be executed, and the user can find the generated file under the dist directory.

[Video demo showcasing functionality](https://drive.google.com/file/d/1sIJUsyRN6h8AFJDa_G9jubq1bUEBe0qy/view)

## Credits

[Bootstrap](https://getbootstrap.com/)

[Node.js](https://nodejs.org/en/)

## Tests

This project includes 4 test files with a total of 15 tests across them for all of the attributes relating to the objects and their constructors, in order to run 
these tests, you will want to make sure jest is installed, then invoke 'npm test' to run the tests. Feel free to add more down the line.
