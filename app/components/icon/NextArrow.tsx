export default function NextArrow({ parentClassName, className, children }: { parentClassName: string; className?: string; children?: React.ReactNode }) {
    return (
        <div className={`group ${parentClassName}`}>
            <svg width="58" height="111" viewBox="0 0 58 111" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.439114 0.43934C-0.146671 1.02513 -0.146671 1.97487 0.439114 2.56066L53.3785 55.5L0.439114 108.439C-0.146671 109.025 -0.146671 109.975 0.439114 110.561C1.0249 111.146 1.97465 111.146 2.56044 110.561L57.6211 55.5L2.56044 0.43934C1.97465 -0.146447 1.0249 -0.146447 0.439114 0.43934Z"/>
            </svg>


            {children}
        </div>
    )
}