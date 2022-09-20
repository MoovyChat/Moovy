export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
[K in keyof T]: T[K];
};
export type Scalars = {
ID: string;
String: string;
Boolean: boolean;
Int: number;
Float: number;
};

export type UserInput = {
uid: string;
email: string;
joinedAt: string;
name: string;
nickname: string;
photoURL: string;
};
export type MovieInput = {
mid: string;
name: string;
likes: string[];
platformId: number;
};
export type CommentInput = {
cid: string;
message: string;
likes: string[];
likesCount: number;
movieId: string;
commentedUserId: string;
platformId: number;
};
export type UserMovieOptions = {
like?: boolean;
favorite?: boolean;
};
