var testimonials = [{
    "name": "Gyasuddin Khan",
    "attribution": "Gyasuddin Khan, Student, IIT Madras",
    "quote": "<b>Data</b> is a map of the world, and every point tells a story waiting to be explored."
}]


testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
    document.getElementById("quote-quote").innerHTML = testimonial.quote
    document.getElementById("quote-attrib").innerHTML = testimonial.attribution
    document.getElementById("quote-wrapper").className = testimonial.name