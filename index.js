 async function fetchData() {
      const pokemonName = document.querySelector("#pokemonName").value.toLowerCase().trim();
      const imgElement = document.querySelector("#pokemonSprite");
      const errorMsg = document.querySelector("#errorMsg");
      
      if (!pokemonName) {
        errorMsg.textContent = "Please enter a Pokémon name!";
        errorMsg.style.display = "block";
        imgElement.style.display = "none";
        return;
      }

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) throw new Error("Not Found");
        
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        errorMsg.style.display = "none";
      } catch (error) {
        imgElement.style.display = "none";
        errorMsg.textContent = "Pokémon not found ";
        errorMsg.style.display = "block";
      }
    }