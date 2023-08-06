"use client";
interface MenuItemProps {
  onClick: () => void;
  label?: string | null | undefined;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
