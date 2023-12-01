export default function NextIcon({ parentClassName, className, children }: { parentClassName: string; className?: string; children?: React.ReactNode }) {
    return (
        <div className={`group ${parentClassName}`}>
            <svg width="67" height="66" viewBox="0 0 67 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.3574 6.00519C27.59 5.87252 21.0196 8.28654 15.9478 12.769C10.876 17.2515 7.6729 23.4755 6.97295 30.2079C6.27301 36.9404 8.12731 43.6901 12.1685 49.12C16.2097 54.55 22.143 58.264 28.793 59.5262C34.3734 60.5855 40.1168 59.8534 45.2178 57.4801L26.8406 32.21V42.984C26.8406 44.6409 25.4975 45.984 23.8406 45.984C22.1838 45.984 20.8406 44.6409 20.8406 42.984V22.9841C20.8406 21.6846 21.6772 20.5329 22.9129 20.1311C24.1487 19.7293 25.5026 20.1687 26.2669 21.2196L52.0835 56.7195C52.5738 57.3938 52.7615 58.2416 52.6015 59.0597C52.4415 59.8779 51.9483 60.5925 51.2402 61.0324C44.2126 65.3975 35.8018 66.9638 27.6741 65.421C19.5463 63.8782 12.2945 59.3389 7.35526 52.7023C2.41601 46.0657 0.149632 37.816 1.00512 29.5875C1.86061 21.3589 5.77555 13.7519 11.9744 8.27327C18.1732 2.79467 26.2037 -0.15581 34.475 0.00634619C42.7463 0.168503 50.655 3.43146 56.6343 9.14882C62.6136 14.8662 66.2274 22.6208 66.7597 30.8766C67.292 39.1323 64.7041 47.2868 59.5085 53.7247C58.4679 55.0141 56.5792 55.2158 55.2898 54.1752C54.0005 53.1347 53.7988 51.2459 54.8393 49.9566C59.0902 44.6892 61.2077 38.0173 60.7721 31.2626C60.3366 24.5079 57.3799 18.1632 52.4877 13.4854C47.5955 8.80756 41.1248 6.13787 34.3574 6.00519ZM43.8406 19.9841C45.4974 19.9841 46.8406 21.3272 46.8406 22.9841V32.984C46.8406 34.6409 45.4974 35.984 43.8406 35.984C42.1837 35.984 40.8406 34.6409 40.8406 32.984V22.9841C40.8406 21.3272 42.1837 19.9841 43.8406 19.9841Z" />
            </svg>



            {children}
        </div>
    )
}