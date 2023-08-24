export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  [key: string]: any;
}

export interface Comment {
  postID: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
