import Link from 'next/link';




const Header = () => {
    return (
        <header>
            <nav className='hover:underline flex justify-center space-x-4 py-4  bg-[#004fff] text-black'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/service'>Service</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        
        </header>
    )
};

export default Header;