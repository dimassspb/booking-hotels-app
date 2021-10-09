const formatCurrency = (value) =>
  value.toLocaleString('ru-RU', { style: 'currency', currency: 'EUR' });

  export default formatCurrency;