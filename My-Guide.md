# Cloning Guide
How to clone this react app.

## Required software
[Download Git](https://git-scm.com/downloads) and remember to update these!
```
git config --global user.name "[name]"
git config --global user.email "[email@example.com]"
```

[Download Node.js](https://nodejs.org/en/download). If there's a "running scripts is disabled" error on windows, run 
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

[Download Visual Studio Code](https://code.visualstudio.com/Download) (Optional). AKA VS Code, it's my preferred code editor.


## Cloning the repo
You only need to run these once.

run `git clone https://github.com/iyim4/websitedown.git`, which will create a folder/directory named *websitedown*. This clones with HTTPS, meaning you must login with your GitHub account on a browser. Alternatively, you can clone with ssh, which requires creating and adding an ssh key.

run `cd websitedown`, which moves the *websitedown* folder/directory

run `npm install`, which installs all the node dependencies.

## Starting the web app (AKA Node start)
You need to run this every time to start the web app.

run `npm start` to start the web app, which will appear on your computer's http://localhost:3000/ after a few seconds.

Use ctrl+C in the terminal (bottom pane of VS code, hothey: ctrl+`) to stop running the web app

## Editing
- run `git pull` to get updates from the GitHub repo
- run `git add [filename]` to stage files. In VS Code's Source Control (ctrl + shift + G), this is the + plus button
- run `git commit -m "[message]"` to commit staged files. 
- run `git push` to upload all the local commits to GitHub
- run `npm install --save gh-pages` to install github pages, which is for deployment (deployment guide below)
- run `npm run deploy` to update the website at https://iyim4.github.io/websitedown/

## GitHub Pages Guide - mini 

From the [create react app guide](https://create-react-app.dev/docs/deployment/#github-pages).

### Step 1: Add homepage to `package.json`
in `package.json`
```
+  "homepage": "https://username.github.io/repo-name",
```

### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

in terminal, run `npm install --save gh-pages`

in `package.json`
```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

### Step 3: Deploy the site by running `npm run deploy`

in terminal, run `npm run deploy`

### Step 4: verify deploy branch
My note. Go to https://github.com/username/repo-name/settings/pages

Under "Build and deployment" verify that Source is set to *Deploy from a branch* and Branch is *gh-pages* and *root*
