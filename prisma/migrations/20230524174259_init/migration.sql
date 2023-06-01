-- CreateTable
CREATE TABLE "QuestionList" (
    "id" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "option1" TEXT,
    "option2" TEXT,
    "option3" TEXT,
    "option4" TEXT,
    "user_selected" TEXT,
    "correct_answer" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestionList_id_key" ON "QuestionList"("id");
