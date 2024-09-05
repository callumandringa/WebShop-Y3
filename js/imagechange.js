fetch('../Media-assets/dataset.json')
  .then(response => response.json())  
  .then(data => {
    

    
    const colourWithId1 = data.products.find(products => products.id === 1);
    function colourWithId1(params) {
        
    }

    const colourWithId2 = data.colours.find(colour => colour.id === 1);
    console.log(colourWithId2);
  })
  .catch(error => console.error('Error fetching data:', error));



 