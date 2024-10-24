This is a simple project develop using WebdriverIO and Cucumber


Steps to setup and run this code in your local:
1. In your local go to another folder and open the terminal and do git clone https://github.com/Rathna-Reddy/WebDriverIO-Cucumber.git
2. or you can clone directly using any IDE for example using Visual Studio Code
3. if the node.js and npm is not installed in your local, you can verify it using npm -v, run the following commands in your local: 
4. Install Homebrew (if not already installed)
5. /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
6. Install Node.js via Homebrew
7. brew update
8. brew install node
9. Steps 7 and 8 install the latest version of Node.js and npm.
10. verify Installation of Node.js and npm using
    node -v
    npm -v
11. if you want to run a feature file for example login.demo.feature, you can run the following command from terminal
    npx wdio --spec features/login.demo.feature
