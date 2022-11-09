# Books List API

This project was generated with ASP.NET version 6.0.

## Prerequisites

Create a local database or create it on a sql server, once is created the DB run the next script:

Create table bookslist(
  id int identity(1,1) not null primary key,
  name varchar(50) not null,
  author varchar(50) not null,
  wishlist bit not null
);

Once is created run the next script to add dummy data:

INSERT INTO bookslist (name, author, wishlist)
VALUES ('El resplandor', 'Stephen King', 'false');

INSERT INTO bookslist (name, author, wishlist)
VALUES ('El evangelio del mal', 'Patrick Graham', 'true');

INSERT INTO bookslist (name, author, wishlist)
VALUES ('Viaje al fin de la noche', 'Louis-Ferdinand Céline', 'false');

Replace the connection string to the database on the next route api\Books\appsettings.json

## Build / Run

This solution was build on Visual Studio 2022, recommended to use

Click on the the solution to run the application and the swagger should open the application, probably the solution will request a certificate to use https