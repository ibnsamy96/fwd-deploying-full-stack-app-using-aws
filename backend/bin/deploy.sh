eb init --platform node.js --region us-east-1
eb use fwd-proj-backend
eb deploy fwd-proj-backend
eb setenv PORT=$PORT ENV=$ENV DB_USER=$DB_USER DB_PASSWORD=$DB_PASSWORD DB_HOST=$DB_HOST DB_NAME=$DB_NAME DB_PORT=$DB_PORT