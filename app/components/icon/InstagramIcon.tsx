export default function InstagramIcon({ className, children }: { className?: string, children?: React.ReactNode }) {
    return (
        <div>
            <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M6.73994 0.0016861H15.1399C18.3399 0.0016861 20.9399 2.60169 20.9399 5.80169V14.2017C20.9399 15.7399 20.3289 17.2152 19.2412 18.3029C18.1535 19.3906 16.6782 20.0017 15.1399 20.0017H6.73994C3.53994 20.0017 0.939941 17.4017 0.939941 14.2017V5.80169C0.939941 4.26343 1.55101 2.78818 2.63872 1.70047C3.72643 0.612756 5.20169 0.0016861 6.73994 0.0016861ZM6.53994 2.00169C5.58516 2.00169 4.66949 2.38097 3.99436 3.0561C3.31923 3.73123 2.93994 4.64691 2.93994 5.60169V14.4017C2.93994 16.3917 4.54994 18.0017 6.53994 18.0017H15.3399C16.2947 18.0017 17.2104 17.6224 17.8855 16.9473C18.5607 16.2721 18.9399 15.3565 18.9399 14.4017V5.60169C18.9399 3.61169 17.3299 2.00169 15.3399 2.00169H6.53994ZM16.1899 3.50169C16.5215 3.50169 16.8394 3.63338 17.0738 3.8678C17.3082 4.10222 17.4399 4.42017 17.4399 4.75169C17.4399 5.08321 17.3082 5.40115 17.0738 5.63557C16.8394 5.86999 16.5215 6.00169 16.1899 6.00169C15.8584 6.00169 15.5405 5.86999 15.3061 5.63557C15.0716 5.40115 14.9399 5.08321 14.9399 4.75169C14.9399 4.42017 15.0716 4.10222 15.3061 3.8678C15.5405 3.63338 15.8584 3.50169 16.1899 3.50169ZM10.9399 5.00169C12.266 5.00169 13.5378 5.52847 14.4755 6.46615C15.4132 7.40383 15.9399 8.6756 15.9399 10.0017C15.9399 11.3278 15.4132 12.5995 14.4755 13.5372C13.5378 14.4749 12.266 15.0017 10.9399 15.0017C9.61386 15.0017 8.34209 14.4749 7.40441 13.5372C6.46673 12.5995 5.93994 11.3278 5.93994 10.0017C5.93994 8.6756 6.46673 7.40383 7.40441 6.46615C8.34209 5.52847 9.61386 5.00169 10.9399 5.00169ZM10.9399 7.00169C10.1443 7.00169 9.38123 7.31776 8.81862 7.88037C8.25601 8.44297 7.93994 9.20604 7.93994 10.0017C7.93994 10.7973 8.25601 11.5604 8.81862 12.123C9.38123 12.6856 10.1443 13.0017 10.9399 13.0017C11.7356 13.0017 12.4987 12.6856 13.0613 12.123C13.6239 11.5604 13.9399 10.7973 13.9399 10.0017C13.9399 9.20604 13.6239 8.44297 13.0613 7.88037C12.4987 7.31776 11.7356 7.00169 10.9399 7.00169Z" />
            </svg>

            {children}
        </div>
    )
}
