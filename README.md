# Menta
A Mentor/ Mentee Matchmaking App

# Development

## Running Locally

### API

Clone the repo

Configure and setup the venv
```shell
cd Menta/api
python -m venv mentavenv
source mentavenv/bin/activate
# OR: source mentavenv/Scripts/activate
pip install -r reaquirements.txt 
```

Start the server
```shell
python menta.py
```

Check it out on your browser.

http://127.0.0.1:5000/

To get out of venv
```shell
deactivate
```

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

Start with ubuntu 22.04 LTS

### One-Time
#### Prep Machine
```shell
sudo apt update
sudo apt install python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools
sudo apt install python3-venv
```

#### Prep Project
```shell
cd ~
git clone [menta https url]
cd ~/Menta/api
python3 -m venv mentavenv
source mentavenv/bin/activate
pip install -r requirements.txt
deactivate
```

#### Create and Start Gunicorn Service
```shell
sudo vim /etc/systemd/system/menta.service
```
Add the following contents:
```text
[Unit]
Description=Gunicorn instance to serve menta
After=network.target

[Service]
User=jameskrepelka
Group=www-data
WorkingDirectory=/home/jameskrepelka/menta
Environment="PATH=/home/jameskrepelka/menta/mentavenv/bin"
ExecStart=/home/jameskrepelka/menta/mentavenv/bin/gunicorn --workers 3 --bind unix:menta.sock -m 007 wsgi:app

[Install]
WantedBy=multi-user.target
```
Then:
```shell
sudo systemctl start myproject
sudo systemctl enable myproject
```
And confirm it works with
```shell
sudo systemctl status
```

#### Configure Nginx

```shell
sudo vim /etc/nginx/sites-available/menta
```
Add the following contents:
```text
server {
    listen 80;
    server_name api.menta.dev;

    location / {
        include proxy_params;
        proxy_pass http://unix:/home/jameskrepelka/menta/menta.sock;
    }
}
```
Then enable the site.
```shell
sudo ln -s /etc/nginx/sites-available/menta /etc/nginx/sites-enabled
```
Ensure there aren't any other `default` sites enabled.
```shell
ls /etc/nginx/sites-enabled
```
Ensure nginx is happy with the config.
```shell
sudo nginx -t
```
Restart nginx.
```shell
sudo systemctl restart nginx
```
Open the Firewall
```shell
sudo ufw allow 'Nginx Full'
```
Share the home dir with nginx
```shell
sudo chmod 755 /home/jameskrepelka
```

### Every-Time

```shell
cd ~/Menta/api
git pull
sudo systemctl restart menta
```