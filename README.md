# Willies-Burger

  ![express](https://img.shields.io/npm/l/express)
  ![Willies-Burger](https://img.shields.io/github/languages/top/skycode20/Willies-Burger)
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

  - by *Skyler Rencher*
  
  ## Description    

  Willie's Burger is a unique application where you can digitally grab a bite to eat from Harlem's famous burger joint. 

  My inspiration behind this project was to create a lighthearted and fun application that's enjoyable for all ages. The user can enter a burger they want to eat, the burger pops up on the left side of the app, then they can devour it. Once it is devoured the burger moves over to the right side of the app in the devoured section. The application remembers all of the burgers consumed. This is a good way for the user to keep track of how much they've eaten!

  The main challenge with this project has been troubleshooting the deployment of the application on Heroku. It runs absolutely fine locally but I keep getting an application error from Heroku. 
    <br>    
  <p align=center>
    <img src="public\assets\images\apperror.png" alt="picture of the application error pagee for Willie's Burgers." width= 50% height= 50%>
    <img src="public\assets\images\herokulog1.jpg" alt="picture of the heroku log." width= 50% height= 50%>
    <img src="public\assets\images\herokulog2.jpg" alt="picture of the heroku log." width= 50% height= 50%>
  </p>
  <br>

Consequently the application never successfully launched despite being deployed successfully. 

My aspirations for the future of this application are to expand its functionality to do the following:
- Connect to real burger restaurants to receive the desired burgers from their customers to actually be able to fulfill the order. Once the order is complete the customer can log in their app that it was devoured and write a review on the burger.
- Have the ability to sync to food journals so the users can keep track of their calorie intake with ease.

  ## Table Of Contents    

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation    

  The app is deployed on Heroku.

  To install the **Willie's Burger Application** please follow these steps:

  1. Download all of the project's source files `(clone the GitHub repository)`.
  2. Ensure your terminal is inside of the current folder that contains the source files.
  3. Install the following **NPMs** `(Node Package Managers)` in the system terminal:
        * Node.js
        * Express (command: ```npm i express```)
        * Express-Handlebars (command: ```npm i express-handlebars```)
        * MySQL (command: ```npm i mysql```)
        * **Or just ```npm i``` that will install the packages within the `package.json` file.**

  4. Go to the `schema.sql` file inside of the `db` directory and copy all of the code. Paste the code inside of your `MySQL Workbench` to create the table. Doing so will allow the app to access your table from the application.

  ## Usage    

  This application is very easy to use! You type the name of the burger you want into the user input and then press the button to submit it. Then you take a bite out of it by pressing the `DEVOUR` button. Then it moves into the devoured section with the rest of the consumed burgers.

  ## License    

  The express is covered under the following license: ![express](https://img.shields.io/npm/l/express)

  ## Contributing     

  If you are interested in contributing to this project please adhere to the set of guidelines set forth by the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). If any questions about the contributor guidelines feel free to contact me at skyler.rencher@gmail.com.

      
  

  ## Tests    

  Tested to see if it works but running the code each step of the way.

  ## Questions    

  If you have any questions about the project feel free to reach out to me on via email: skyler.rencher@gmail.com or via Git Hub: https://github.com/skycode20.
  
  ## Links

  * [Willies-Burger Application](https://github.com/skycode20/Willies-Burger)

