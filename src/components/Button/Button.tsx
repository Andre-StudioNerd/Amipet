interface ButtonProps {
  children: string;
  onClick: () => void;
  size?: "sm" | "lg";
}

const Button = ({ children, onClick, size = "lg" }: ButtonProps) => {
  const sizes = {
    sm: "w-[174px] h-[40px]",
    lg: "w-[362px] h-[48px]",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-[#ecb665] hover:bg-[#b47b27] text-black font-bold text-lg p-2 rounded-md ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
