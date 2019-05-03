CREATE DATABASE social_network;

USE social_network;

CREATE TABLE sn_user(
	user_id INT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    hashed_password VARCHAR(60) NOT NULL,
    realname VARCHAR(100),
    gender ENUM('M', 'F') NOT NULL,
    city VARCHAR(255),
    country VARCHAR(255),
    profile_picture_url VARCHAR(255),
    birth_date DATE,
    date_created DATE NOT NULL,
    active_status ENUM('Y', 'N')
);

CREATE TABLE sn_post(
post_id INT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL,
user_id int(20) NOT NULL,
caption  VARCHAR(255),
type ENUM('text','image', 'video', 'text-image', 'text-video'),
post_url VARCHAR(255) NOT NULL,
date_created DATE NOT NULL,
FOREIGN KEY (user_id) REFERENCES sn_user(user_id)
);

CREATE TABLE sn_comment(
comment_id INT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL,
post_id INT NOT NULL,
user_id INT NOT NULL,
content TEXT NOT NULL,
date_created DATE NOT NULL,
FOREIGN KEY (post_id) REFERENCES sn_post(post_id),
FOREIGN KEY (user_id) REFERENCES sn_user(user_id)
);

CREATE TABLE sn_like(
user_id INT NOT NULL,
post_id INT NOT NULL,
date_created DATE NOT NULL,
PRIMARY KEY (user_id, post_id),
UNIQUE INDEX (post_id, user_id),
FOREIGN KEY (post_id) REFERENCES sn_post(post_id),
FOREIGN KEY (user_id) REFERENCES sn_user(user_id)
);