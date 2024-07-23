<template>
    <div :class="['container', { dark: isDarkMode }]">
      <div class="text-block" ref="textBlock">{{ displayText }}</div>
      <div class="button-group">
        <button @click="typeAnimation">Type Animation</button>
        <button @click="scrambleAnimation">Scramble Animation</button>
        <button @click="flyInAnimation">Fly-In Animation</button>
        <button @click="blurAnimation">Blur Animation</button>
    </div>
      <button class="dark-mode-toggle" @click="toggleDarkMode">
        <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        {{ darkModeText }}
      </button>
    </div>
  </template>
  
  <script>
  import { gsap, TextPlugin } from "gsap/all";
  gsap.registerPlugin(TextPlugin);
  
  export default {
    name: "TextAnimation",
    data() {
      return {
        text: "This is a sample block of text that will be animated using different effects.",
        displayText: "",
        isDarkMode: false,
      };
    },
    computed: {
      darkModeText() {
        return this.isDarkMode ? 'Light' : 'Dark';
      }
    },
    mounted() {
      this.displayText = this.text; // Initialize the display text
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
      },
      typeAnimation() {
        this.displayText = ""; // Reset the text
        gsap.to(this.$refs.textBlock, {
          duration: 5,
          text: this.text,
          ease: "none"
        });
      },
      scrambleAnimation() {
        gsap.fromTo(this.$refs.textBlock, 
          { text: { value: this.randomString(this.text.length), scrambleText: true } }, 
          { duration: 7, text: { value: this.text, scrambleText: true }, ease: "power2" });
      },
      flyInAnimation() {
        const textBlock = this.$refs.textBlock;
        textBlock.innerHTML = ""; // Clear the text block
        const words = this.text.split(" ");
        
        words.forEach((word, wordIndex) => {
          const wordContainer = document.createElement("span");
          wordContainer.style.display = "inline-block";
          wordContainer.style.whiteSpace = "nowrap";
          textBlock.appendChild(wordContainer);
  
          word.split("").forEach((char, charIndex) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.display = "inline-block";
            wordContainer.appendChild(span);
  
            gsap.fromTo(span, {
              opacity: 0,
              x: Math.random() * 1000 - 500, // Random X position
              y: Math.random() * 1000 - 500, // Random Y position
              rotation: Math.random() * 720 - 360, // Random rotation
            }, {
              opacity: 1,
              x: 0,
              y: 0,
              rotation: 0,
              duration: 3,
              delay: (wordIndex + charIndex) * 0.05,
              ease: "power4.out"
            });
          });
  
          // Add a space after each word except the last one
          if (wordIndex < words.length - 1) {
            const space = document.createElement("span");
            space.innerHTML = "&nbsp;";
            textBlock.appendChild(space);
          }
        });        
    },

    blurAnimation() {
      const textBlock = this.$refs.textBlock;
      textBlock.innerHTML = this.text; // Set the text

      gsap.fromTo(textBlock, {
        filter: "blur(20px)"
      }, {
        duration: 3,
        filter: "blur(0px)",
        ease: "power4.out"
      });
    },

      randomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: 'Nunito', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .container.dark {
    background-color: #1a1a1a;
    color: rgba(255, 255, 255, 0.95);
  }
  
  .text-block {
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    margin-bottom: 20px;
    font-size: 3rem;
    width: 60%;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  button {
    padding: 1rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 2rem;
    cursor: pointer;
    border: 2px solid;
    border-radius: 999px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  button:hover {
    background-color: #1e1e1e;
    color: white;
  }
  
  .dark-mode-toggle {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #1a1a1a;
    color: rgba(255, 255, 255, 0.95);
    border: none;
    border-radius: 999px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .dark-mode-toggle:hover {
    background-color: #777;
    color: white;
  }
  
  .container.dark .text-block {
    color: rgba(255, 255, 255, 0.95);
  }
  
  .container.dark button {
    background-color: #555;
    color: rgba(255, 255, 255, 0.95);
  }
  
  .container.dark button:hover {
    background-color: #e0e0e0;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.95);
  }  
  
  .container.dark .dark-mode-toggle {
    background-color: #dedede;
    color: rgba(0, 0, 0, 0.95);
  }
  
  .dark-mode-toggle i {
    margin-right: 0.5rem;
  }
  </style>
  