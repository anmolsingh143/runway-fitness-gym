// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Pricing toggle
const studentBtn = document.getElementById('student-btn');
const regularBtn = document.getElementById('regular-btn');

studentBtn.addEventListener('click', function() {
    studentBtn.classList.add('bg-secondary', 'text-black');
    studentBtn.classList.remove('text-secondary');
    regularBtn.classList.remove('bg-secondary', 'text-black');
    regularBtn.classList.add('text-secondary');

    document.getElementById('basic-price').textContent = '₹640';
    document.getElementById('pro-price').textContent = '₹900';
    document.getElementById('elite-price').textContent = '₹2,500';
});

regularBtn.addEventListener('click', function() {
    regularBtn.classList.add('bg-secondary', 'text-black');
    regularBtn.classList.remove('text-secondary');
    studentBtn.classList.remove('bg-secondary', 'text-black');
    studentBtn.classList.add('text-secondary');

    document.getElementById('basic-price').textContent = '₹800';
    document.getElementById('pro-price').textContent = '₹1,100';
    document.getElementById('elite-price').textContent = '₹3,000';
});

// BMI Calculator
document.getElementById('calculate-btn').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m
    const weight = parseFloat(document.getElementById('weight').value);

    if (height && weight) {
        const bmi = (weight / (height * height)).toFixed(1);
        document.getElementById('bmi-value').textContent = bmi;

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        document.getElementById('bmi-category').textContent = category;
        document.getElementById('result').classList.remove('hidden');
    }
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Newsletter modal
setTimeout(() => {
    document.getElementById('newsletter-modal').classList.remove('hidden');
}, 5000); // Show after 5 seconds

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('newsletter-modal').classList.add('hidden');
});

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    document.getElementById('newsletter-modal').classList.add('hidden');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
