export default function Services() {

const services = [
{
title:"Telecom Infrastructure",
desc:"Server racks, cabinets and telecom network solutions."
},
{
title:"Staffing Solutions",
desc:"Contract staffing and workforce deployment."
},
{
title:"Digital Displays",
desc:"Indoor and outdoor LED display systems."
}
]

return(

<section className="py-20 bg-gray-100">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-14">
Our Services
</h2>

<div className="grid md:grid-cols-3 gap-8">

{services.map((s,i)=>(
<div key={i} className="bg-white p-8 shadow rounded">

<h3 className="text-xl font-semibold">{s.title}</h3>

<p className="text-gray-600 mt-4">{s.desc}</p>

</div>
))}

</div>

</div>

</section>

)

}