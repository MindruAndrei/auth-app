export type User = {
  authenticated: boolean;
  user: {
    email: string;
    name: string;
    createdAt: Date | null;
  };
};

export type LoginResponse = {
  token: string;
};
