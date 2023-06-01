-- DropIndex
DROP INDEX "QuestionList_id_key";

-- AlterTable
CREATE SEQUENCE questionlist_id_seq;
ALTER TABLE "QuestionList" ALTER COLUMN "id" SET DEFAULT nextval('questionlist_id_seq'),
ADD CONSTRAINT "QuestionList_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE questionlist_id_seq OWNED BY "QuestionList"."id";
