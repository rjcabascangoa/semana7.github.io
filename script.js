document.addEventListener('DOMContentLoaded', function() {
    // Lista mejorada de productos
    let productos = [
        {
            nombre: "Laptop HP EliteBook",
            precio: 1299.99,
            descripcion: "Potente laptop para profesionales con procesador Intel i7 de 11va generación y 16GB de RAM DDR4."
        },
        {
            nombre: "Smartphone Samsung Galaxy S23",
            precio: 899.99,
            descripcion: "Flagship con pantalla Dynamic AMOLED 2X de 6.1 pulgadas y cámara de 50MP."
        },
        {
            nombre: "Tablet Apple iPad Air",
            precio: 599.99,
            descripcion: "Tablet potente con chip M1, pantalla Liquid Retina de 10.9\" y compatibilidad con Apple Pencil."
        },
        {
            nombre: "Auriculares Sony WH-1000XM5",
            precio: 349.99,
            descripcion: "Auriculares inalámbricos premium con cancelación de ruido líder en el mercado."
        },
        {
            nombre: "Smartwatch Garmin Venu 2",
            precio: 399.99,
            descripcion: "Reloj inteligente con GPS integrado, monitor de frecuencia cardiaca y pantalla AMOLED."
        }
    ];

    const listaProductos = document.getElementById('lista-productos');
    const botonAgregar = document.getElementById('agregar-producto');

    // Función mejorada para renderizar productos
    function renderizarProductos() {
        listaProductos.innerHTML = '';
        
        productos.forEach((producto, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                <p><strong>Descripción:</strong> ${producto.descripcion}</p>
                <div class="product-id">#${String(index + 1).padStart(3, '0')}</div>
            `;
            listaProductos.appendChild(li);
        });
    }

    // Función mejorada para agregar producto
    function agregarProducto() {
        const nuevosProductos = [
            {
                nombre: "Monitor LG UltraWide",
                precio: 449.99,
                descripcion: "Monitor curvado 34\" WQHD con tasa de refresco de 144Hz y tecnología HDR10."
            },
            {
                nombre: "Teclado Mecánico Logitech",
                precio: 129.99,
                descripcion: "Teclado gaming con switches GX Blue táctiles y retroiluminación RGB."
            },
            {
                nombre: "Disco Duro Externo SSD",
                precio: 199.99,
                descripcion: "Almacenamiento portátil de 1TB con velocidades de transferencia de hasta 1050MB/s."
            }
        ];
        
        // Agrega un producto aleatorio del array nuevosProductos
        const randomProduct = nuevosProductos[Math.floor(Math.random() * nuevosProductos.length)];
        productos.push(randomProduct);
        
        renderizarProductos();
        
        // Scroll suave al nuevo producto
        setTimeout(() => {
            const lastProduct = listaProductos.lastElementChild;
            lastProduct.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Efecto visual de destacado
            lastProduct.style.animation = 'highlight 1.5s';
            setTimeout(() => {
                lastProduct.style.animation = '';
            }, 1500);
        }, 100);
    }

    // Evento mejorado para el botón
    botonAgregar.addEventListener('click', function() {
        // Efecto de pulsación
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            agregarProducto();
        }, 150);
    });

    // Renderizar productos al cargar
    renderizarProductos();
});