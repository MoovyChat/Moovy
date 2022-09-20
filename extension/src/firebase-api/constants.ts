export const UserCollection = 'users';
export const UserNameCollection = 'usernames';
export const CommentCollection = (movieId: string) =>
  `movies/${movieId}/comments`;
export const ReplyCollection = (movieId: string, commentId: string) =>
  `movies/${movieId}/comments/${commentId}/replies`;
export const MovieCollection = 'movies';
