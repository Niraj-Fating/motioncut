function togglePrice(plan) {
    const priceElement = document.getElementById(`${plan}-price`);
    const toggleElement = document.getElementById(`${plan}-toggle`);
  
    if (toggleElement.checked) {
      
      priceElement.textContent = '$199.99';
    } else {
 
      priceElement.textContent = '$19.99';
    }
  }
  