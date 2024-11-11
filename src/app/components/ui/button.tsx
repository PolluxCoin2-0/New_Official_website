import React from "react";
import { cn } from "@/lib/utils";
 // Update path to match your project structure

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const Button: React.FC<ButtonProps> = ({ 
  variant = "primary", 
  className, 
  ...props 
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded font-semibold transition-colors focus:outline-none",
        {
          "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
          "bg-gray-500 text-white hover:bg-gray-600": variant === "secondary",
          "border border-blue-500 text-blue-500 hover:bg-blue-50": variant === "outline",
          "bg-transparent text-gray-500 hover:text-gray-700": variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
};

export { Button };
