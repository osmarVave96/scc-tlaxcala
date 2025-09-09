export const ContentText = ({ title, paragraph }: { title: string, paragraph: string }) => {
    return (
        <div className="flex flex-col items-start pt-[23px] pr-[34.55px] pb-[44px] pl-[24px] gap-[29px] w-[402.55px] h-[296px] flex-none order-1">
            <h2 className="w-[344px] h-[56px] font-bold text-2xl leading-7 flex items-start justify-start tracking-tight text-[#572772] flex-none order-0" style={{ textAlign: 'start' }}>{title}</h2>
            <p className="w-[301.4px] h-[144px] font-normal text-lg leading-6 flex items-start justify-center text-[rgba(5,0,56,0.6)] flex-none order-1" style={{ textAlign: 'justify' }}>{paragraph}</p>
        </div>
    )
}