 <script> 
        function toggleContent(button) { 
            const content = button.nextElementSibling; 
            const isVisible = content.style.display === 'block'; 
            content.style.display = isVisible ? 'none' : 'block'; 
        } 
    </script> 
