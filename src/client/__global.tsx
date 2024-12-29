// Extend the Window interface to include the api property

export {};

declare global {
  interface Window {
    api: {
      login: (credentials: {
        username: string;
        password: string;
      }) => Promise<{ success: boolean; message: string }>;
    };
  }
}
