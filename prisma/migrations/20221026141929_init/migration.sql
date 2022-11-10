-- CreateTable
CREATE TABLE "Integration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "participants" INTEGER NOT NULL,
    "date_start" DATETIME NOT NULL,
    "date_end" DATETIME NOT NULL
);
