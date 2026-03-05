"use client"

export default function Hero(){

return(

<section className="relative overflow-hidden bg-slate-900 text-white">

{/* gradient background */}

<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

{/* animated glow */}

<div className="absolute top-0 left-1/3 w-96 h-96 bg-red-500 opacity-20 blur-3xl animate-pulse"></div>

<div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>

<div className="relative max-w-7xl mx-auto px-6 py-36 text-center">

<h1 className="text-5xl md:text-6xl font-bold leading-tight">

Digital Infrastructure  
<span className="text-red-500">for Modern Enterprises</span>

</h1>

<p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">

Telecom infrastructure, digital display systems, enterprise
experience centers and workforce deployment solutions
designed for modern organizations.

</p>

<div className="mt-10 flex justify-center gap-6">

<a
href="/services"
className="bg-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
>

Explore Solutions

</a>

<a
href="/contact"
className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
>

Request Consultation

</a>

</div>

</div>

</section>

)

}