export default function NextArrow({ parentClassName, className, children }: { parentClassName: string; className?: string; children?: React.ReactNode }) {
    return (
        <div className={`group ${parentClassName}`}>
            <svg width="2" height="83" viewBox="0 0 2 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.1733 41.4543L3.5147 0.795706C2.92891 0.209921 1.97917 0.20992 1.39338 0.795706C0.807594 1.38149 0.807594 2.33124 1.39338 2.91703L39.9307 41.4543L1.39338 79.9917C0.807594 80.5775 0.807594 81.5272 1.39338 82.113C1.97917 82.6988 2.92891 82.6988 3.5147 82.113L44.1733 41.4543Z"/>
            </svg>


            {children}
        </div>
    )
}