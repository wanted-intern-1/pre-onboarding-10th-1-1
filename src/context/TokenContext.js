import { createContext } from "react";

let token = localStorage.getItem('token');
export const AccessTokenContext = createContext(token);