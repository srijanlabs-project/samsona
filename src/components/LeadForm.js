"use client";

import { useState } from "react";

export default function LeadForm(){

const [form,setForm]=useState({
name:"",
email:"",
phone:"",
message:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
}

const handleSubmit=(e)=>{
e.preventDefault();
alert("Inquiry submitted");
}

return(

<section className="py-20 bg-black text-white">

<div className="max-w-4xl mx-auto px-6">

<h2 className="text-3xl font-bold mb-8 text-center">
Contact Us
</h2>

<form onSubmit={handleSubmit} className="grid gap-6">

<input name="name" placeholder="Full Name" className="p-4 text-black rounded" onChange={handleChange}/>

<input name="email" placeholder="Email" className="p-4 text-black rounded" onChange={handleChange}/>

<input name="phone" placeholder="Phone" className="p-4 text-black rounded" onChange={handleChange}/>

<textarea name="message" placeholder="Message" className="p-4 text-black rounded" onChange={handleChange}/>

<button className="bg-red-600 py-4 rounded">
Submit
</button>

</form>

</div>

</section>

)

}