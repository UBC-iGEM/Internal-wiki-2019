# Internal-wiki-2019
Wiki for the 2019 project, for internal use only

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development

### Prerequisites

* git: https://git-scm.com/downloads
* Node.js: https://nodejs.org/en/download/

### Installing

Clone a copy of the repository to your local machine
```
git clone https://github.com/UBC-iGEM/Internal-wiki-2019.git
```

cd into your working directory and start your server
```
cd Internal-wiki-2019
node app.js
```

If successfull, you should get a message
````
Server running at http://localhost:port/
````

Type the url in your web browser and you're good to go!

## Deployment

Deployment is done automatically through Heroku from the master branch
```
https://ubcigem2019-internal-wiki.herokuapp.com/
```

## Contributing

All work should be done on branches and reviewed by at least one person before merging to the master branch

```
// Checkout a new branch
git checkout -b new-branch

// Add your work
git add .
git commit -m "commit mesage"
git push
```

Submit a pull request and address and code reviews
Squash and merge to master branch

### Adding new pages
If you want to add a new page, add a new html file to the frontend folder with the content for that page and add a new route to backed/routes.js