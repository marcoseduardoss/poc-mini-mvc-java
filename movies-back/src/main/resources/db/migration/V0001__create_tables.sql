CREATE SEQUENCE hibernate_sequence INCREMENT 1;

CREATE TABLE book (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    isbn VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publication_year NUMERIC(4,0) NOT NULL
);

CREATE TABLE student (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    enrollment VARCHAR(255) UNIQUE NOT NULL
);

CREATE TYPE BOOK_LENDING_STATUS AS ENUM ('LENT','RETURNED');

CREATE TABLE book_lending (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    book_id BIGINT NOT NULL REFERENCES book(id),
    student_id BIGINT NOT NULL REFERENCES student(id),
    status BOOK_LENDING_STATUS NOT NULL
);
