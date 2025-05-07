// src/utils/authUtils.ts

export interface AuthResponse {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
      // Add other user fields as needed
    };
  }
  
  export const loginUser = async (
    credentials: { username: string; password: string }
  ): Promise<AuthResponse> => {
    // Replace with actual API call
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Failed to login');
    }
  
    return response.json();
  };
  
  export const logoutUser = async (): Promise<void> => {
    // Replace with actual API call
    const response = await fetch('/api/logout', {
      method: 'POST',
    });
  
    if (!response.ok) {
      throw new Error('Failed to logout');
    }
  };
  