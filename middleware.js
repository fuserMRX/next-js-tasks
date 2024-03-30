// by default will be invoked for every route in your project

// export function middleware(request) {
//     return Response.json({ msg: 'hello there' });
// }

// export const config = {
//     matcher: '/about',
// };


import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
// block all requests to /about/*
export const config = {
    matcher: ['/about/:path*'],
};