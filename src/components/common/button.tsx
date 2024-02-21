interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="bg-cyanLight max-w-28 px-4 py-1 rounded-lg border border-cyanDark  hover:bg-cyanDark hover:border-cyanLight hover:scale-105 transition"
    >
      <span className="font-primary font-bold text-sm">{children}</span>
    </button>
  );
}
