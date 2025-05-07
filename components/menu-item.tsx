"use client"

interface menuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<menuItemProps> = ({
    onClick,
    label
}) => {
  return (
    <div 
    onClick={onClick} 
    className="font-light text-xs md:text-sm text-gray-400 flex flex-col hover:text-purple transition cursor-pointer">
        {label}
        </div>
  )
}

export default MenuItem;