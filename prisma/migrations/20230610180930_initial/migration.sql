-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(255),
    "atorFavorito" VARCHAR(255),
    "diretorfavorito" VARCHAR(255),
    "categoriaFavorito" VARCHAR(255),
    "role" VARCHAR(255),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "films" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "ano" DECIMAL(65,30) NOT NULL,
    "imagem" TEXT NOT NULL,
    "sinopse" VARCHAR(1000) NOT NULL,
    "elenco" VARCHAR(255),
    "categoria" VARCHAR(255),
    "copia" VARCHAR(255),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "films_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentFilm" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "filmId" TEXT NOT NULL,
    "dataRetirada" DATE NOT NULL,
    "dataDevolucao" DATE NOT NULL,
    "horaDevolucao" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RentFilm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clients_cpf_key" ON "clients"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "films_titulo_key" ON "films"("titulo");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "RentFilm_clientId_idx" ON "RentFilm"("clientId");

-- CreateIndex
CREATE INDEX "RentFilm_filmId_idx" ON "RentFilm"("filmId");

-- AddForeignKey
ALTER TABLE "RentFilm" ADD CONSTRAINT "RentFilm_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentFilm" ADD CONSTRAINT "RentFilm_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
