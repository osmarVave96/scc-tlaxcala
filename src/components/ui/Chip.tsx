export const Chip = ({ label, id }: { label: string, id?: string }) => {
    const handleSectionClick = (sectionId: string) => {
        if (!sectionId) return;
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
            className="flex flex-row justify-center items-center px-5 py-3 border border-gray-300 rounded-3xl text-[#050038] hover:bg-[#FDFCF1] cursor-pointer hover:border-[#FFDFC1] hover:text-[#F08018] transition-colors duration-200">
            {label}
        </div>
    )
}