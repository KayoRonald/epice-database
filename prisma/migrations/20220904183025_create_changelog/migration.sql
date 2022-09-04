-- CreateTable
CREATE TABLE "changelog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "adminId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "changelog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
