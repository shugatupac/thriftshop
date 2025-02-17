// Simple auth state management
let isAuthenticated = true;

export const auth = {
  isAuthenticated: () => isAuthenticated,
  login: () => {
    isAuthenticated = true;
  },
  logout: () => {
    isAuthenticated = false;
    // Clear any stored tokens or user data here
    localStorage.removeItem("user");
    window.location.href = "/login";
  },
};
