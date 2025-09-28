
export interface RegisterSchema {
   error?: string;
   isLoading: boolean;

   username: string;
   password: string;

   firstName: string;
   lastName: string;
   phone: string;
   age: number;
   // avatar?: string;
} 