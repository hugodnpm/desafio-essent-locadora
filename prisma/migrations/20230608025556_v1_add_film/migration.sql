-- CreateTable
CREATE TABLE "films" (
    "id" TEXT NOT NULL,
    "ano" DECIMAL(65,30) NOT NULL,
    "imagem" TEXT NOT NULL,
    "sinopse" VARCHAR(1000) NOT NULL,
    "elenco" VARCHAR(255),
    "categoria" VARCHAR(255),
    "copia" VARCHAR(255),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "films_pkey" PRIMARY KEY ("id")
);
