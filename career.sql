
CREATE TABLE Users(
	user_id INT NOT NULL,
	full_name VARCHAR(147),
	email VARCHAR(147) NOT NULL,
	gender VARCHAR(147),
	address VARCHAR(147),
	user_password VARCHAR(147)
 );

 CREATE TABLE Career_Counselor(
	counselor_id INT NOT NULL,
	csl_name VARCHAR(147),
	email VARCHAR(147),
	specialization VARCHAR(147)
 );

CREATE TABLE Advisor(
	adv_id INT NOT NULL,
	ad_name VARCHAR(147),
	email VARCHAR(147)
 );

 CREATE TABLE Appointment(
	counselor_id INT NOT NULL,
	user_id INT NOT NULL,
	apt_date DATE,
	apt_time TIME
 );

 CREATE TABLE Career_Resource(
	rsc_id INT NOT NULL,
	title VARCHAR(45),
	rsc_type VARCHAR(45),
	date_posted DATE,
	rsc_link VARCHAR(45)
 );

CREATE TABLE Hs_Student(
	user_id INT NOT NULL,
	grade_lvl INT,
	school_name VARCHAR(147)
 );

CREATE TABLE Clg_Student(
	user_id INT NOT NULL,
	study_year INT,
	clg_name VARCHAR(147),
	major VARCHAR(147)
 );


 ALTER TABLE User
 ADD CONSTRAINT Pk_User PRIMARY KEY AUTO_INCREMENT (user_id);

 ALTER TABLE Career_Counselor
 ADD CONSTRAINT Pk_Career_Counselor PRIMARY KEY (counselor_id);

 ALTER TABLE Career_Resource
 ADD CONSTRAINT Pk_Career_Resource PRIMARY KEY (rsc_id);

 ALTER TABLE Advisor
 ADD CONSTRAINT Pk_Advisor PRIMARY KEY (adv_id);

 ALTER TABLE Appointment
 ADD CONSTRAINT Fk_Appointment_Career_Counselor FOREIGN KEY (counselor_id)
 REFERENCES Career_Counselor(counselor_id);
 
 ALTER TABLE Appointment
 ADD CONSTRAINT Fk_Appointment_User FOREIGN KEY (user_id)
 REFERENCES User(user_id);

 ALTER TABLE Hs_Student
 ADD CONSTRAINT Fk_Hs_Student_User FOREIGN KEY (user_id)
 REFERENCES User(user_id);

 ALTER TABLE Clg_Student
 ADD CONSTRAINT Fk_Clg_Student_User FOREIGN KEY (user_id)
 REFERENCES User(user_id);


 INSERT INTO user(user_id, full_name, email, gender, address, user_password)
VALUES
	(1, 'Charles Nwabineli', 'CNWA@memail.com', 'Male', '12, Anike Street, Epe', 'onetwothree'),
	(2, 'Fregene David', 'FDAV@memail.com', 'Male', '13, Anike Street, Epe', 'twothreefour'),
	(3, 'Njoku Kelechi', 'NKEL@memail.com', 'Male', '13, Bosu Street, Epe', 'threefourfive'),
	(4, 'Esedo Stephanie', 'ESTN@memail.com', 'Female', '12, Bosu Street, Epe', 'fourfivesix'),
	(5, 'Fajebimo Isaac', 'FAJE@memail.com', 'Male', '13, Otito Street, Epe', 'onetwosix');

INSERT INTO  Career_Counselor( counselor_id,  csl_name, email,  specialization)
VALUES
	(3, 'Arinze Nwabineli', 'NWA@memail.com','Info Tech'),
	(1, 'Fregene Daniella', 'FDAN@memail.com','Architecture'),
	(4, 'Njoku Nathan', 'NNAT@memail.com', 'Medicine');

INSERT INTO  Career_Resource( rsc_id,  title, rsc_type,  date_posted, rsc_link)
VALUES
	(101, 'Edutech Inc', 'Training', '2024-11-25', ''),
	(104, 'Medtech Class Inc', 'Learning', '2024-10-25', ''),
	(106, 'Arctech Inc', 'Materials', '2024-11-14', '');

INSERT INTO Advisor( adv_id, adv_name, email)
VALUES
	(1, Etti Ottobong, ETTO@memail.com),
	(2, Anorue Nnaemeka, ANNA@memail.com),
	(3, Duru Arinze, DARU@memail.com);

INSERT INTO Appointment(  counselor_id,  user_id,  apt_date, apt_time)
VALUES
	(3, 1, '2024-12-15', '12:00'),
	(4, 5, '2024-12-15', '10:00'),
	(1, 3, '2024-12-15', '11:00');

INSERT INTO Clg_Student( user_id,  study_year, clg_name, major)
VALUES
	(1, 3, 'Babcock University', 'Software Engineering'),
	(3, 4, 'Babcock University', 'Computer Science'),
	(5, 3, 'Covenant University', 'Agriculture');

INSERT INTO Hs_Student( user_id,  grade_lvl, school_name)
VALUES
	(2, 3, 'Babcock Highschool'),
	(4, 2, 'Mere Mater');