CREATE DATABASE wordpress;
CREATE USER 'myuser'@'<web-server-private-ip>' IDENTIFIED BY '<your-password>';
GRANT ALL ON wordpress.* TO 'myuser'@'<web-server-private-ip>';
FLUSH PRIVILEGES;
SHOW DATABASES;
