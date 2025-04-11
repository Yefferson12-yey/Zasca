        document.addEventListener("DOMContentLoaded", function () {
            const modal = document.getElementById("modal");
            const modalImg = document.getElementById("modal-img");
            const closeModal = document.querySelector(".close");
            const images = document.querySelectorAll(".post-image");

            images.forEach(img => {
                img.addEventListener("click", function () {
                    modal.style.display = "flex";
                    modal.style.position = "fixed";
                    modal.style.top = "0";
                    modal.style.left = "0";
                    modal.style.width = "100%";
                    modal.style.height = "100%";
                    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
                    modal.style.zIndex = "1000";
                    modal.style.justifyContent = "center";
                    modal.style.alignItems = "center";
                    modalImg.src = this.src;
                    modalImg.style.maxWidth = "90%";
                    modalImg.style.maxHeight = "90vh";
                });
            });

            closeModal.addEventListener("click", function () {
                modal.style.display = "none";
            });

            // Cerrar modal al hacer clic fuera de la imagen
            modal.addEventListener("click", function(e) {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });

            // Cerrar modal con tecla ESC
            document.addEventListener("keydown", function(e) {
                if (e.key === "Escape") {
                    modal.style.display = "none";
                }
            });
        });

        // historia
        
        document.addEventListener("DOMContentLoaded", function () {
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

            function openStory(index) {
                if (index >= 0 && index < storyData.length) {
                    currentStoryIndex = index;
                    storyImage.src = storyData[index];
                    storyModal.style.display = "flex";
                    storyModal.style.position = "fixed";
                    storyModal.style.top = "0";
                    storyModal.style.left = "0";
                    storyModal.style.width = "100%";
                    storyModal.style.height = "100%";
                    storyModal.style.backgroundColor = "rgba(0,0,0,0.8)";
                    storyModal.style.zIndex = "1000";
                    storyModal.style.justifyContent = "center";
                    storyModal.style.alignItems = "center";

                    // Actualizar visibilidad de botones
                    prevStoryBtn.style.display = index === 0 ? "none" : "block";
                    nextStoryBtn.style.display = index === storyData.length - 1 ? "none" : "block";
                }
            }

            prevStoryBtn.addEventListener("click", function () {
                openStory(currentStoryIndex - 1);
            });

            nextStoryBtn.addEventListener("click", function () {
                openStory(currentStoryIndex + 1);
            });

            stories.forEach((story, index) => {
                story.addEventListener("click", function () {
                    openStory(index);
                });
            });

            // Cerrar modales
            document.querySelectorAll(".close").forEach(closeBtn => {
                closeBtn.addEventListener("click", function () {
                    storyModal.style.display = "none";
                });
            });

            // Cerrar story modal con tecla ESC
            document.addEventListener("keydown", function(e) {
                if (e.key === "Escape") {
                    storyModal.style.display = "none";
                }
            });

            // Cerrar story modal al hacer clic fuera
            storyModal.addEventListener("click", function(e) {
                if (e.target === storyModal) {
                    storyModal.style.display = "none";
                }
            });
        });