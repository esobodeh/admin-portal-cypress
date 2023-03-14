# admin-portal-cypress

> This readme file will guide you in setting up your system for cypress automation

## Pre-requisite (Things you need to have installed on your laptop)
 - NodeJS click [here](https://nodejs.org/en/download/) to download for windows or mac
 - Git for [Mac](https://git-scm.com/download/mac) or for [Windows](https://git-scm.com/download/win)
 - VS Code - Click [here](https://code.visualstudio.com/download) to download
 - GitHub account if you don't already have one. [Open-a-Github-Account](https://github.com/)
 - Get an invite to this repository (ask your QA lead)

## After you have all the above pre-requisite, you will need to do the following

    Clone this repositiory by running the following commands on your laptop terminal (for Mac users) or ("git Command Prompt" for Windows Users)

  ### Steps For Mac Users:
  - Open Mac `Terminal` app from mac Launchpad
  - Run `cd ~/Documents/` in your terminal to navigate to your Documents Folder
  - Run `mkdir repos && cd repos` to create a folder called repos and navigate into that repos folder
  - Once you are in the repos folder, clone the automation repository (repo) by running `git clone https://github.com/<your-github-username>/admin-portal-cypress.git`
  - Navigate to your cloned/downloaded repo using this command `cd admin-portal-cypress`
  - Run `npm install`  -  all cypress packages will be downloaded and installed
  - Run `npx cypress open` and run any test script to ensure cypress has been installed and configured properly

  ### Steps For Windows Users:
  - Create and Navigate to your prefered directory e.g `Documents/Repos Folder`
  - Clone the repo by running `git clone https://github.com/<your-github-username>/admin-portal-cypress.git`
  - Navigate to your cloned/downloaded repo/folder using this command `cd admin-portal-cypress`
  - Run `npm install`  -  all cypress packages will be downloaded and installed
  - Run `npx cypress open` and run any test script to ensure cypress has been installed and configured properly