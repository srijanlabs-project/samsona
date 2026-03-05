"use client"

import { Server, MonitorSmartphone, Users, Building2 } from "lucide-react"

export default function Solutions(){

const solutions = [

{
icon: Server,
title: "Telecom & IT Infrastructure",
desc: "Server racks, telecom cabinets, networking infrastructure and deployment systems."
},

{
icon: MonitorSmartphone,
title: "Digital Displays & Signage",
desc: "LED displays, digital standees, commercial screens and interactive kiosks."
},

{
icon: Building2,
title: "Enterprise Experience Centers",
desc: "Video walls, immersive digital branding environments and corporate display systems."
},

{
icon: Users,
title: "Workforce & Staffing Solutions",
desc: "Technical manpower deployment and enterprise workforce solutions."
}

]

return(

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-16">

Enterprise Solutions

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{solutions.map((item,i)=>{

const Icon = item.icon

return(

<div
key={i}
className="p-8 rounded-xl border hover:shadow-xl transition duration-300 group"
>

<Icon className="w-10 h-10 text-red-500 mb-6 group-hover:scale-110 transition"/>

<h3 className="text-xl font-semibold mb-4">

{item.title}

</h3>

<p className="text-gray-600 text-sm leading-relaxed">

{item.desc}

</p>

</div>

)

})}

</div>

</div>

</section>

)

}