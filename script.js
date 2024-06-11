document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.mobile');
    const sidebar = document.querySelector('.hamburger');
    const sidebarContent = document.getElementById('#hidden');

    function showSidebar() {
        hidden.style.display = 'flex';
        document.addEventListener('click', handleClickOutside, true);
    }

    function hideSidebar() {
        hidden.style.display = 'none';
        document.removeEventListener('click', handleClickOutside, true);
    }

    function handleClickOutside(event) {
        if (!sidebar.contains(event.target) && !cartIcon.contains(event.target)) {
            hideSidebar();
        }
    }

    cartIcon.addEventListener('click', function(event) {
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            showSidebar();
        } else {
            hideSidebar();
        }
        event.stopPropagation(); // Prevent event from bubbling up to document
    });

    // Prevent clicks inside the sidebar content from closing it
    sidebarContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});