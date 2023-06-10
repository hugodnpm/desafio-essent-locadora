-- CreateTable
CREATE TABLE "RentFilm" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "filmId" TEXT NOT NULL,
    "dataRetirada" DATE NOT NULL,
    "dataDevolucao" DATE NOT NULL,
    "horaDevolucao" TIME NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RentFilm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RentFilm_clientId_idx" ON "RentFilm"("clientId");

-- CreateIndex
CREATE INDEX "RentFilm_filmId_idx" ON "RentFilm"("filmId");

-- AddForeignKey
ALTER TABLE "RentFilm" ADD CONSTRAINT "RentFilm_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentFilm" ADD CONSTRAINT "RentFilm_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
