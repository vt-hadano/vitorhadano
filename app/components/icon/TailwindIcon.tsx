export default function TailwindIcon({ parentClassName, className, children }: { parentClassName: string; className?: string; children?: React.ReactNode }) {
    return (
        <div className={`group ${parentClassName}`}>
            <svg width="60" height="36" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M30 0C21.99 0 17.01 3.99 15 12C18 8.01 21.51 6.51 25.5 7.5C27.78 8.07 29.43 9.72 31.23 11.55C34.17 14.55 37.5 18 45 18C53.01 18 57.99 14.01 60 6C57 9.99 53.49 11.49 49.5 10.5C47.22 9.93 45.6 8.28 43.77 6.45C40.83 3.45 37.5 0 30 0ZM15 18C6.99 18 2.01 21.99 0 30C3 26.01 6.51 24.51 10.5 25.5C12.78 26.07 14.4 27.72 16.23 29.55C19.17 32.55 22.5 36 30 36C38.01 36 42.99 32.01 45 24C42 27.99 38.49 29.49 34.5 28.5C32.22 27.93 30.6 26.28 28.77 24.45C25.83 21.45 22.5 18 15 18Z" />
            </svg>



            {children}
        </div>
    )
}