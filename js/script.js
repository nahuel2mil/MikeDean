        const menuHamburguesa = document.getElementById('menu-hamburguesa');
        const menuNav = document.getElementById('menu-nav');

        // Agrega un evento para alternar el menú
        menuHamburguesa.addEventListener('click', () => {
            menuNav.classList.toggle('hidden');
        });