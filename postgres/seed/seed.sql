BEGIN TRANSACTION;

INSERT INTO users (name,email,entries,joined) VALUES('Andre','andre@gmail.com',2,'2018-10-24');
INSERT INTO login (hash,email) VALUES('$2a$10$hbUloqNY.ZfqEbyuWJQtL.gj.ip7JLkfAo7Yon4BzUkKwG5cCDMcK','andre@gmail.com');


COMMIT;