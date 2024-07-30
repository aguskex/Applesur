document.addEventListener('DOMContentLoaded', () => {
  // Función para obtener los elementos del DOM
  const getElementIfExists = (id) => {
    const element = document.getElementById(id);
    return element ? parseFloat(element.textContent) : null;
  };

  // Función para obtener la cotización del dólar blue usando fetch
  const getDolarBlue = () => {
    return fetch('https://dolarapi.com/v1/dolares/blue')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Para ver la estructura de la respuesta
        // Usar la cotización de compra del dólar blue
        if (data && data.compra) {
          return parseFloat(data.compra);
        } else {
          throw new Error('Dólar Blue no encontrado en la respuesta');
        }
      })
      .catch(error => {
        console.error('Error al obtener la cotización del dólar blue:', error);
        return null;
      });
  };

  // Función para convertir USD a ARS
  const convertUsdToArs = (amountUsd, amountArsElement) => {
    if (amountUsd !== null) {
      getDolarBlue().then(dolarBlueCompra => {
        if (dolarBlueCompra) {
          const amountArs = amountUsd * dolarBlueCompra;
          amountArsElement.textContent = amountArs.toFixed(2);
        } else {
          amountArsElement.textContent = "Error al obtener la cotización";
        }
      });
    } else {
      amountArsElement.textContent = "Valor en USD no disponible";
    }
  };

  // Obtener valores predeterminados en USD y elementos de ARS
  const amountUsdElement1 = document.getElementById('amount-usd-1');
  const amountArsElement1 = document.getElementById('amount-ars-1');
  const amountUsdElement2 = document.getElementById('amount-usd-2');
  const amountArsElement2 = document.getElementById('amount-ars-2');

  // Valor predeterminado en USD
  const defaultAmountUsd1 = getElementIfExists('amount-usd-1');
  const defaultAmountUsd2 = getElementIfExists('amount-usd-2');

  // Inicializar la conversión con los valores predeterminados si los elementos existen
  if (amountArsElement1) {
    convertUsdToArs(defaultAmountUsd1, amountArsElement1);
  }

  if (amountArsElement2) {
    convertUsdToArs(defaultAmountUsd2, amountArsElement2);
  }
});