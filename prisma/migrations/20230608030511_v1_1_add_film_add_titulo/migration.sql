/*
  Warnings:

  - Added the required column `titulo` to the `films` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "films" ADD COLUMN     "titulo" TEXT NOT NULL;
