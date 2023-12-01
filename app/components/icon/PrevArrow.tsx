export default function PrevArrow({ parentClassName, className, children }: { parentClassName: string; className?: string; children?: React.ReactNode }) {
    return (
        <div className={`group ${parentClassName}`}>
            <svg width="42" height="83" viewBox="0 0 42 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.734863 41.4543L41.3935 0.795706C41.9793 0.209921 42.929 0.20992 43.5148 0.795706C44.1006 1.38149 44.1006 2.33124 43.5148 2.91703L4.9775 41.4543L43.5148 79.9917C44.1006 80.5775 44.1006 81.5272 43.5148 82.113C42.929 82.6988 41.9793 82.6988 41.3935 82.113L0.734863 41.4543Z" />
            </svg>


            {children}
        </div>
    )
}