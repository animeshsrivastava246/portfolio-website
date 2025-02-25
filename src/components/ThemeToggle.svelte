<script lang="ts">
    import { onMount } from "svelte";
  
    let isDarkMode = false;
  
    onMount(() => {
      isDarkMode = localStorage.getItem("theme") === "dark";
      document.documentElement.classList.toggle("dark-theme", isDarkMode);
    });
  
    function toggleTheme() {
      isDarkMode = !isDarkMode;
      document.documentElement.classList.toggle("dark-theme", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
  </script>
  
  <button 
    on:click={toggleTheme} 
    class="btn"
  >
    {isDarkMode ? "Light Mode" : "Dark Mode"}
  </button>
  