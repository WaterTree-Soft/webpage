import React from "react";
import { ColourfulText } from "../ui/colorfulText";
interface HeaderWithSubtitleProps { 
    header: string;
    subtitle: string;
    helilightedText?: string;
    heilightedTextColor?: string;
}

const HeaderWithSubtitle: React.FC<HeaderWithSubtitleProps> = ({ header, subtitle, helilightedText, heilightedTextColor = "text-blue-500" }) => {
    return (
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {header}
          {helilightedText && (
            <span
              className={`ml-2 ${heilightedTextColor}`}
            >
                        {/* {helilightedText} */}
                        <ColourfulText text={helilightedText} />
            </span>
          )}
        </h1>
        <p className="text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
    );
}
export default HeaderWithSubtitle;



 <div className="text-center mb-16 animate-fade-in">
   <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
     Our{" "}
     <span className="bg-gradient-primary bg-clip-text text-transparent">
       Services
     </span>
   </h2>
   <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
     Comprehensive IT solutions designed to accelerate your business growth and
     digital transformation
   </p>
 </div>;