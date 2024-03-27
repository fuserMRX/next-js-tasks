import Link from 'next/link';

function AboutPage() {
    return (
        <>
            <h1 className="text-7xl">About Page</h1>
            <Link href='/' className='text-xl'>Home page</Link>
        </>
    )
}

export default AboutPage