import DataLoader from "dataloader";
import { Comment } from "../entities/Comment";
import { In } from "typeorm";

export const createCommentLoader = () =>
  new DataLoader<string, Comment | undefined>(async (commentIds) => {
    const comments = await Comment.find({
      where: { id: In(commentIds as string[]) },
    });
    const commentIdToComment: Record<string, Comment> = {};
    comments.forEach((comment) => {
      commentIdToComment[comment.id] = comment;
    });

    return commentIds.map((commentId) => commentIdToComment[commentId]);
  });
