import Image from "next/image"

type ButtonProps={
    type: "button" | "submit";
    title:string;
    icon?:string;
    varient:"bg-black";
}

const Button = ({type, title, icon, varient}: ButtonProps) => {
  return (
    <div>
        <button
        className={`flex gap-3 rounded-full border $(varient)`} 
        type={type}>
            
            {icon && <Image src={icon} alt={title} width={24} height={24}/>}
            <label className="bold-16 text-white whitespace-nowrap">{"title"}</label>
        </button>
    </div>
  )
}

export default Button
