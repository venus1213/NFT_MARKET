"use client"

import React from 'react';
import { useAppKit } from '@reown/appkit/react'
import { Button } from '../ui/button';

interface CustomButtonProps {
  label?: string;
  size?: string; 
  styles?: string;
}

const CustomConnectButton: React.FC<CustomButtonProps> = ({ label = 'Connect Wallet' }) => {
  const { open } = useAppKit();

  const handleConnect = async () => {
    try {
      await open({ view: 'Connect' });
    } catch (error) {
      console.error('Error during connection:', error);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleConnect}
      className="w-full bg-purple font-medium text-sm hover:bg-purple700 text-white py-2 px-6 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {label}
    </Button>
  );
};

export default CustomConnectButton;
