export default function GitIcon({ parentClassName, className, children }:{ parentClassName: string; className?: string; children?: React.ReactNode }) {
    return (
        <div className={`group ${parentClassName}`}>
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M24.1614 6.26935C24.4227 5.33795 24.4947 4.36361 24.3731 3.40392C24.2515 2.44422 23.9388 1.51864 23.4534 0.681847C23.3337 0.474586 23.1616 0.302469 22.9544 0.182787C22.7471 0.0631049 22.5121 7.46516e-05 22.2727 2.8682e-05C21.1813 -0.00304319 20.1034 0.240673 19.1195 0.712951C18.1356 1.18523 17.2712 1.87384 16.5909 2.7273H14.3182C13.6379 1.87384 12.7735 1.18523 11.7896 0.712951C10.8057 0.240673 9.72775 -0.00304319 8.63636 2.8682e-05C8.39704 7.46516e-05 8.16194 0.0631049 7.95469 0.182787C7.74745 0.302469 7.57534 0.474586 7.45568 0.681847C6.97031 1.51864 6.65758 2.44422 6.53599 3.40392C6.41439 4.36361 6.48639 5.33795 6.74773 6.26935C6.2042 7.27627 5.91622 8.40125 5.90909 9.54548V10.4546C5.91123 11.9808 6.42451 13.4623 7.36703 14.6627C8.30954 15.8631 9.62698 16.7132 11.1091 17.0773C10.6793 17.8288 10.4536 18.6797 10.4545 19.5455V20H8.63636C8.0336 20 7.45552 19.7606 7.0293 19.3344C6.60308 18.9081 6.36364 18.3301 6.36364 17.7273C6.36213 16.4017 5.83487 15.1308 4.89751 14.1934C3.96015 13.2561 2.68926 12.7288 1.36364 12.7273C1.00198 12.7273 0.655131 12.871 0.3994 13.1267C0.143668 13.3824 0 13.7293 0 14.0909C0 14.4526 0.143668 14.7994 0.3994 15.0552C0.655131 15.3109 1.00198 15.4546 1.36364 15.4546C1.9664 15.4546 2.54448 15.694 2.9707 16.1202C3.39692 16.5465 3.63636 17.1245 3.63636 17.7273C3.63787 19.0529 4.16513 20.3238 5.10249 21.2612C6.03985 22.1985 7.31074 22.7258 8.63636 22.7273H10.4545V24.0909C10.4545 24.4526 10.5982 24.7994 10.8539 25.0552C11.1097 25.3109 11.4565 25.4546 11.8182 25.4546C12.1798 25.4546 12.5267 25.3109 12.7824 25.0552C13.0382 24.7994 13.1818 24.4526 13.1818 24.0909V19.5455C13.1818 18.9427 13.4213 18.3646 13.8475 17.9384C14.2737 17.5122 14.8518 17.2728 15.4545 17.2728C16.0573 17.2728 16.6354 17.5122 17.0616 17.9384C17.4878 18.3646 17.7273 18.9427 17.7273 19.5455V24.0909C17.7273 24.4526 17.8709 24.7994 18.1267 25.0552C18.3824 25.3109 18.7292 25.4546 19.0909 25.4546C19.4526 25.4546 19.7994 25.3109 20.0551 25.0552C20.3109 24.7994 20.4545 24.4526 20.4545 24.0909V19.5455C20.4554 18.6797 20.2298 17.8288 19.8 17.0773C21.2821 16.7132 22.5995 15.8631 23.5421 14.6627C24.4846 13.4623 24.9979 11.9808 25 10.4546V9.54548C24.9929 8.40125 24.7049 7.27627 24.1614 6.26935ZM22.2727 10.4546C22.2727 11.5396 21.8417 12.5801 21.0745 13.3473C20.3073 14.1145 19.2668 14.5455 18.1818 14.5455H12.7273C11.6423 14.5455 10.6018 14.1145 9.83456 13.3473C9.06737 12.5801 8.63636 11.5396 8.63636 10.4546V9.54548C8.64802 8.73288 8.88953 7.94018 9.33295 7.25912C9.4743 7.07612 9.56526 6.85929 9.59676 6.63021C9.62826 6.40113 9.59921 6.1678 9.5125 5.95344C9.12134 4.94262 9.10521 3.82512 9.46705 2.80344C10.0794 2.91626 10.662 3.1541 11.1784 3.50212C11.6947 3.85014 12.1338 4.30087 12.4682 4.82617C12.5915 5.01874 12.7612 5.17722 12.9617 5.28703C13.1623 5.39684 13.3873 5.45445 13.6159 5.45457H17.292C17.5209 5.45464 17.7461 5.39712 17.9468 5.2873C18.1476 5.17748 18.3175 5.0189 18.4409 4.82617C18.7751 4.30073 19.2142 3.84991 19.7306 3.50187C20.247 3.15383 20.8296 2.91606 21.442 2.80344C21.8039 3.82512 21.7878 4.94262 21.3966 5.95344C21.3134 6.16941 21.2865 6.403 21.3185 6.63222C21.3505 6.86144 21.4404 7.07874 21.5795 7.26367C22.0211 7.94373 22.2614 8.73475 22.2727 9.54548V10.4546Z" />
            </svg>

            {children}
        </div>
    )
}