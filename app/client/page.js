
'use client';

import { useState } from 'react';

function ClientPage() {
    const [ count, setCount ] = useState(0);

    return (
        <>
            <h1 className="text-7xl font-bold mb-4">{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
                className="btn btn-primary"
            >
               Increase
            </button>
        </>
    )
}

export default ClientPage;