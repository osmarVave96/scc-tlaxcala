import { IItemsSectionCards } from "@/types/settings";

export const Chip = (
  { label, id, isSelected = false, eventClick, section}: 
  { label: string, id?: string, section: IItemsSectionCards, isSelected?: boolean, eventClick?: (section: IItemsSectionCards) => void }) => {
    const handleSectionClick = (sectionId: string) => {
        if (!sectionId) return;
        if(eventClick) {
          return eventClick(section);
        } 
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 100; // Account for fixed header
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
    };

    return (
        <div onClick={() => handleSectionClick(id || "")}
            className={`flex flex-row justify-center items-center px-4 py-1.5 border 
            border-gray-300 rounded-3xl text-[#050038] 
            hover:bg-[#FDFCF1] cursor-pointer hover:border-[#FFDFC1] hover:text-[#F08018] 
            transition-colors duration-200 ${isSelected ? 'bg-[#FDFCF1] border-[#FFDFC1] text-[#F08018]' : null}`}>
            {label}
        </div>
    )
}