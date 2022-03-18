import { ReactNode } from "react";

// Context

export interface User {
    name: string;
    email: string;
}

export type AuthContextType = {
    user: User[];
    leftBar: boolean;
    isAuthenticated: boolean;
    setUser: (newState: User[]) => void;
    setLeftBar: (newState: boolean) => void;
    signIn: (cookies: Cookies) => Promise<boolean | undefined>;
};

export type Cookies = {
    [key: string]: string;
};

export type Children = {
    children: ReactNode
}