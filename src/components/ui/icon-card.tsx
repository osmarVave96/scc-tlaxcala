import { ReactNode } from "react";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const IconCard = ({ icon, title, description, className = "" }: IconCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center ${className}`}>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}; 