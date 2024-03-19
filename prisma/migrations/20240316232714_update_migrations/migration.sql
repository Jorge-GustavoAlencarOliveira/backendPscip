-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "medidasSeguranca" JSONB,
ADD COLUMN     "niveldeRisco" JSONB,
ADD COLUMN     "riscosEspeciais" JSONB;
