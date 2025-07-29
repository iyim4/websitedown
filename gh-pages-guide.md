# GitHub Pages guide 

from the [create react app guide](https://create-react-app.dev/docs/deployment/#github-pages)

## Step 1: Add homepage to `package.json`
in `package.json`
```
+  "homepage": "https://username.github.io/repo-name",
```

## Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

in terminal, run `npm install --save gh-pages`

in `package.json`
```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

## Step 3: Deploy the site by running `npm run deploy`

in terminal, run `npm run deploy`

## Step 4: verify deploy branch
My note. Go to https://github.com/username/repo-name/settings/pages

Under "Build and deployment" verify that Source is set to *Deploy from a branch* and Branch is *gh-pages* and *root*
