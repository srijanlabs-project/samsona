export default function Solutions(){

const solutions = [

{
title:"Telecom Infrastructure",
desc:"Server racks, outdoor cabinets and telecom deployment systems."
},

{
title:"Digital Displays",
desc:"Commercial LED displays, kiosks and enterprise signage."
},

{
title:"Enterprise Experience Centers",
desc:"Video walls, digital branding systems and immersive environments."
},

{
title:"Workforce Solutions",
desc:"Technical manpower deployment and enterprise staffing."
}

]

return(

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-16">

Core Solutions

</h2>

<div className="grid md:grid-cols-4 gap-8">

{solutions.map((s,i)=>(

<div
key={i}
className="p-8 border rounded-xl hover:shadow-xl transition"
>

<h3 className="text-xl font-semibold">

{s.title}

</h3>

<p className="mt-4 text-gray-600">

{s.desc}

</p>

</div>

))}

</div>

</div>

</section>

)

}