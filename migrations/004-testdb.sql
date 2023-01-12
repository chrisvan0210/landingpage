--Up

CREATE TABLE Admin(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
);
INSERT INTO Admin (username, password) values('admin', '12345678');

CREATE TABLE Information (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        meta1 TEXT,
        meta2 TEXT
);
INSERT INTO Information (meta1, meta2) values('Seo1', 'Seo2');


-- Down
DROP TABLE Admin;
DROP TABLE Information;