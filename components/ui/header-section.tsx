
interface HeaderSectionProps {
    title: string;
    category: string;
    subtitle: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
    title,
    category,
    subtitle
}) => {

  return (
    <div className="bg-gradient-to-r from-lightPink via-purple to-blue grid grid-col justify-center ">
        <div className="font-bold text-3xl md:text-4xl text-white mt-10 md:mt-20">{title}</div>
   
        
        <div className="mt-5 pb-10 flex justify-center ">
        <div className="text-slate-300">{category}</div>
        <div className="text-white"> &nbsp; {subtitle}</div>
           
    </div>
    </div>
  )
}

export default HeaderSection;