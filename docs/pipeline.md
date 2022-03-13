## Pipeline Process:

2. install nodejs
1. checkout code
1. install aws-cli
1. install eb-cli
1. run command `npm run frontend:install` to install front-end dependencies
1. run command `npm run backend:install` to install api dependencies
1. run command `npm run frontend:build` to build front-end
1. run command `npm run backend:build` to build api
1. run command `npm run frontend:deploy` to deploy on S3
1. run command `npm run backend:deploy` to deploy api on eb
