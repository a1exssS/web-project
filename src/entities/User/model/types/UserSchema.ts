export interface User {
   username: string;
   firstName: string;
   lastName: string;
   age: number;
   Descritpion: string;
   Avatar: string;
   id: string;
}

export interface UserSchema {
   authData?: User;
}