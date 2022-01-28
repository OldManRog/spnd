


export interface GetSingleUserResponse {
  success: boolean;
  systemMessage: string;
  data: User;
}


export interface GetSingleUserRequest {
 id : number;


}

/**
 * Get all values from a specific user by the userId
 * 
 * HTTP Method: GET
 * 
 * 
 */

// Primary Response Object
export interface GetAllValuesByUserIdResponse {
  success: boolean;
  systemMessage: string;
  data: Array<SingleValueResponse>;
} 

export interface SingleValueResponse {
  value: APIResponse<SingleValue>
} 

export interface SingleValue{
  valueId: number;
  valueAmount: number;
  valueName: string;
  lastUpdateAmount: number;
  budgetFrequency: number;
  valueByDate: string;
}

//Primary Resquest Object

export interface GetAllValuesByUserIdRequest{
 id:number
}

/**
 * 
 * User Object used for multiple APIs within
 * 
 */


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

export interface ValueTile {
  cols: number;
  rows: number;
}

