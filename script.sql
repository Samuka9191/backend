DROP DATABASE IF EXISTS locadora;
CREATE DATABASE locadora;

USE locadora;

CREATE TABLE usuarios (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(20) NOT NULL
);

CREATE TABLE filmes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idioma VARCHAR(50) NOT NULL,
    quantidade INT NOT NULL
);

CREATE TABLE locacoes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_locacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_devolucao TIMESTAMP NULL,
    id_filme INT,
    id_usuario INT,
    CONSTRAINT fk_filmes_locacoes FOREIGN KEY (id_filme) REFERENCES filmes(id),
    CONSTRAINT fk_usuarios_locacoes FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios VALUES (DEFAULT, "Joaozinho 244 da Silva", "123.456.789-00", "gios@gmail.com", "123456");
INSERT INTO usuarios VALUES (DEFAULT, "Flavin do Pneu", "987.654.321-00", "pneu@gmail.com", "654321");

INSERT INTO filmes VALUES (DEFAULT, "O poderoso chefão", "portugues", 10);
INSERT INTO filmes VALUES (DEFAULT, "Joao e o pe de feijao", "portugues", 17);

INSERT INTO locacoes VALUES (DEFAULT, DEFAULT, NULL, 2, 1);
INSERT INTO locacoes VALUES (DEFAULT, DEFAULT, NULL, 1, 2);