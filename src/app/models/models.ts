

export interface GetSingleUserResponse {
  success: boolean;
  systemMessage: string;
  data: User;
}


export interface GetSingleUserRequest {
 id : number;
}

export interface User {
  name: string;
  email: string;
  homeAddress: string;
  phoneNumber: string;
  lastLoginDate: string;
}

export interface APIResponse<T> {
  results: Array<T>;
}

// interface Genre {
//   name: string;
// }

// interface ParentPlatform {
//   platform: {
//     name: string;
//     slug:string;
//   };
// }

// interface Publishers {
//   name: string;
// }

// interface Rating {
//   id: number;
//   count: number;
//   title: string;
// }

// interface Screenshots {
//   image: string;
// }

// interface Trailer {
//   data: {
//     max: string;
//   };
// }
