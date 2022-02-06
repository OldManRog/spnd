/*********************************************
 *  Post Value
 *
 * Add value to a user
 *
 *  HTTP Method: POST
 *
 *
 *
 * 
 */


// Primary Request Object
 export interface AddValueRequest {
  budgetFrequency: number;
  budgetedAmount: number;
  isFullyValued: boolean;
  lastUpdateAmount: number;
  valueName: string;
  valueAmount: number;
  valueByDate: string
  userId: number;
}

// Primary Response Object 
export interface AddValueResponse {
  success: boolean;
  systemMessage: string
  data: SingleValue;
  lastUpdateAmount: number;
  valueName: string;
  valueAmount: number;
  valueByDate: string;
  userId: number;
}
/*************************************
 *
 *
 * Get User
 *
 *
 * Get single user data. Can be used for home data as well as profile
 *
 * HTTP Method: POST
 *
 *
 */

// Primary Response Object
export interface GetSingleUserResponse {
  success: boolean;
  systemMessage: string;
  data: User;
}

//Primary Resquest Object
export interface GetSingleUserRequest {
  id: number;
}

/***************************************
 *
 *
 * Get all values from a specific user by the userId
 *
 * HTTP Method: POST
 *
 *
 */

// Primary Response Object
export interface GetAllValuesByUserIdResponse {
  success: boolean;
  systemMessage: string;
  data: Array<SingleValueResponse>;
}

export interface ValueTile {
  cols: number;
  rows: number;
  valueData: SingleValue;
}

export interface SingleValueResponse {
  value: SingleValue;
}


export interface SingleValue {
  valueId: number;
  valueAmount: number;
  valueName: string;
  budgetedAmount: number;
  lastUpdateAmount: number;
  budgetFrequency: number;
  valueByDate: string;
}

export interface SingleValue {
  valueId: number;
  valueAmount: number;
  valueName: string;
  budgetedAmount: number;
  lastUpdateAmount: number;
  budgetFrequency: number;
  valueByDate: string;
}

//Primary Resquest Object
export interface GetAllValuesByUserIdRequest {
  id: number;
}

/***************************************
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
