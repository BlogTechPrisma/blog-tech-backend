/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Comments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Comments_id_key" ON "Comments"("id");
