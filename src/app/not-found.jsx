import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
        <div className="text-center mt-5 space-y-4">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/"  className='btn btn-outline'>Back to home</Link>
        </div>
    );
}
