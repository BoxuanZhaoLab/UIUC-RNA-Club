// Dropdown navigation handler
function setupNav() {
    const navSelect = document.getElementById("navSelect");
    if (!navSelect) return;
  
    // Set dropdown to current page if present
    const current = navSelect.getAttribute("data-current");
    if (current) navSelect.value = current;
  
    navSelect.addEventListener("change", () => {
      const target = navSelect.value;
      if (target) window.location.href = target;
    });
  }
  
  document.addEventListener("DOMContentLoaded", setupNav);