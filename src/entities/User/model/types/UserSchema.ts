export interface User {
   username: string;
   firstName: string;
   lastName: string;
   age: number;
   descritpion: string;
   avatar: string;
   id: string;
}

export interface UserSchema {
   authData?: User;

   _inited: boolean
}

export interface Counter {
   value: number
} 