const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

<script src="https://kit.fontawesome.com/your-font-awesome-key.js" crossorigin="anonymous"></script>


// JavaScript untuk menangani pengiriman form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Menampilkan pesan konfirmasi
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    // Mengosongkan form setelah pengiriman
    this.reset();

    // Menyembunyikan pesan setelah beberapa detik
    setTimeout(function() {
        confirmationMessage.style.display = 'none';
    }, 3000); // Pesan akan hilang setelah 3 detik
});