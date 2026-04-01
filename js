function validateBooking(data) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'booking_completed',
    service: data.service_name,
    category: data.category_name,
    price: data.price
  });

  return true;
}
