// This script runs before React hydration to prevent flashing
function setInitialTheme() {
    function getThemePreference() {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    const theme = getThemePreference();
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Optional: set color-scheme
    document.documentElement.style.colorScheme = theme;
  }
  
  // Execute immediately
  setInitialTheme();