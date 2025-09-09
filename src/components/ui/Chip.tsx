export const Chip = ({ label }: { label: string }) => {
    return (
        <div className="flex flex-row justify-center items-center px-5 py-3 border border-gray-300 rounded-3xl text-[#050038] hover:bg-[#FDFCF1] cursor-pointer hover:border-[#FFDFC1] hover:text-[#F08018] transition-colors duration-200">
            {label}
        </div>
    )
}