interface CustomButtonProps{
    label: string;
    className?: string;
    onClick: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
  return (
    <div 
        onClick= {onClick}
        className={`w-full py-4 text-center bg-blue-600 hover:bg-blue-800 text-white rounded-xl transition cursor-pointer ${className}`}
    >
        {label}
    </div>
  )
}

export default CustomButton