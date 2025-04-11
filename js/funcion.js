document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos del modal de imagen
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");
    const images = document.querySelectorAll(".post-image");

    // Obtener los elementos del modal de historias
    const storyModal = document.getElementById("story-modal");
    const storyImage = document.getElementById("story-image");
    const stories = document.querySelectorAll(".story");
    const prevStoryBtn = document.getElementById("prev-story");
    const nextStoryBtn = document.getElementById("next-story");

    let currentStoryIndex = 0;
    const storyData = Array.from(stories).map(story => {
        const img = story.querySelector('.story-image');
        return img ? img.src : '';
    });

    // Función reutilizable para abrir modales
    function openModal(modalElement, imageElement, src) {
        // Establecer el estilo del modal
        modalElement.style.display = "flex";
        modalElement.style.position = "fixed";
        modalElement.style.top = "0";
        modalElement.style.left = "0";
        modalElement.style.width = "100%";
        modalElement.style.height = "100%";
        modalElement.style.backgroundColor = "rgba(0,0,0,0.8)";
        modalElement.style.zIndex = "1000";
        modalElement.style.justifyContent = "center";
        modalElement.style.alignItems = "center";
        
        // Establecer la imagen dentro del modal
        imageElement.src = src;
        imageElement.style.maxWidth = "90%";
        imageElement.style.maxHeight = "90vh";
    }

    // Lógica para abrir el modal de imagen al hacer clic en las imágenes
    images.forEach(img => {
        img.addEventListener("click", function () {
            openModal(modal, modalImg, this.src);
        });
    });

    // Función para abrir una historia en el modal de historias
    function openStory(index) {
        if (index >= 0 && index < storyData.length) {
            currentStoryIndex = index;
            storyImage.src = storyData[index];
            openModal(storyModal, storyImage, storyData[index]);

            // Mostrar los botones "prev" y "next" solo cuando se abre una historia
            prevStoryBtn.style.display = "block"; // Mostrar botón prev
            nextStoryBtn.style.display = "block"; // Mostrar botón next

            // Actualizar visibilidad de los botones según el índice
            prevStoryBtn.style.display = index === 0 ? "none" : "block"; // Ocultar "prev" en el primer índice
            nextStoryBtn.style.display = index === storyData.length - 1 ? "none" : "block"; // Ocultar "next" en el último índice
        }
    }

    // Lógica para cambiar de historia con los botones "prev" y "next"
    prevStoryBtn.addEventListener("click", function () {
        openStory(currentStoryIndex - 1);
    });

    nextStoryBtn.addEventListener("click", function () {
        openStory(currentStoryIndex + 1);
    });

    // Abrir una historia al hacer clic en una miniatura de historia
    stories.forEach((story, index) => {
        story.addEventListener("click", function () {
            openStory(index);
        });
    });

    // Cerrar ambos modales al hacer clic en el botón de cerrar
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
        storyModal.style.display = "none";

        // Ocultar los botones "prev" y "next" cuando el modal de historia se cierra
        prevStoryBtn.style.display = "none";
        nextStoryBtn.style.display = "none";
    });

    // Cerrar los modales al presionar la tecla Escape
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
            storyModal.style.display = "none";

            // Ocultar los botones "prev" y "next" cuando se cierre el modal
            prevStoryBtn.style.display = "none";
            nextStoryBtn.style.display = "none";
        }
    });

    // Cerrar los modales al hacer clic fuera del contenido del modal
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    storyModal.addEventListener("click", function(e) {
        if (e.target === storyModal) {
            storyModal.style.display = "none";

            // Ocultar los botones "prev" y "next" cuando el modal se cierre
            prevStoryBtn.style.display = "none";
            nextStoryBtn.style.display = "none";
        }
    });

    // Estilo adicional para los botones de "prev" y "next" para ubicarlos a los lados del modal
    prevStoryBtn.style.position = "absolute";
    prevStoryBtn.style.left = "10px"; // Botón de "prev" en el lado izquierdo
    prevStoryBtn.style.top = "50%";   // Centrado verticalmente
    prevStoryBtn.style.transform = "translateY(-50%)"; // Asegurar que esté centrado verticalmente

    nextStoryBtn.style.position = "absolute";
    nextStoryBtn.style.right = "10px"; // Botón de "next" en el lado derecho
    nextStoryBtn.style.top = "50%";    // Centrado verticalmente
    nextStoryBtn.style.transform = "translateY(-50%)"; // Asegurar que esté centrado verticalmente
});
