export default function PrevArrow({ parentClassName, className, children }: { parentClassName: string; className?: string; children?: React.ReactNode }) {
    return (
        <div className={`group ${parentClassName}`}>
            <svg width="58" height="111" viewBox="0 0 58 111" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path fillRule="evenodd" clipRule="evenodd" d="M57.5609 0.43934C58.1467 1.02513 58.1467 1.97487 57.5609 2.56066L4.62155 55.5L57.5609 108.439C58.1467 109.025 58.1467 109.975 57.5609 110.561C56.9751 111.146 56.0254 111.146 55.4396 110.561L0.378906 55.5L55.4396 0.43934C56.0254 -0.146447 56.9751 -0.146447 57.5609 0.43934Z" />
            </svg>


            {children}
        </div>
    )
}