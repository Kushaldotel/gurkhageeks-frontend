import React from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  type?: "button" | "submit";
  loading?: boolean;
  label?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  className?: string;
  onClick?: ()=>void;
}
const AppButton: React.FC<ButtonProps> = ({
  type = "button",
  variant = "default",
  size = "default",
  loading = false,
  label = "",
  className = "",
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      className={className}
      disabled={loading}
      type={type}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
};

export default AppButton;
