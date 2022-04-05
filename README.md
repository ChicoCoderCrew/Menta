# Menta
A Mentor/ Mentee Matchmaking App

# Deployment

## Frontend

IP: 34.122.108.133
URL: https://www.menta.dev

To Deploy:

Ask @Jooms to do the following

1. Change to correct directory
   ```shell
   cd ~/Menta/frontend/
   ```
2. Pull down new changes
   ```shell
   git checkout main
   git pull
   ```
3. Build prod assets
   ```shell
   npm run build
   ```
4. Deploy to webserver
   ```shell
   sudo cp -r build/* /var/www/html/
   ```

## Backend

TODO(Jooms): Fix backend deployment and record instructions here.