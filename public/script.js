function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle('hidden')
    document.getElementById(collapseID).classList.toggle('block')
  }


AOS.init({
    delay: 200,
    duration: 1200,
    once: false,
  })

  const plan = document.getElementById('dietPlanForm');
  const dietPlanDiv = document.getElementById('dietPlan');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const dietaryPreference = document.getElementById('dietaryPreference').value;
    const calorieIn = document.getElementById('calorieIn').value;
    const mealfre = document.getElementById('mealfre').value;

    // Here you can generate the diet plan based on the form values
    // For simplicity, let's just display the values for now
    const dietPlanHTML = `
      <h3 class="text-lg font-semibold mb-2">Your Personalized Diet Plan:</h3>
      <p><strong>Dietary Preference:</strong> ${dietaryPreference}</p>
      <p><strong>Daily Calorie Intake:</strong> ${calorieIn} calories</p>
      <p><strong>Meal Frequency per Day:</strong> ${mealfre} meals</p>
      <!-- Additional diet plan details can be added here -->
    `;

    // Display the diet plan
    dietPlanDiv.innerHTML = dietPlanHTML;
    dietPlanDiv.classList.remove('hidden');
  });


const form = document.getElementById('slotBookingForm');
const bookingConfirmationDiv = document.getElementById('bookingConfirmation');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  // Get form values
  const date = document.getElementById('date').value;
  const timeSlot = document.getElementById('timeSlot').value;

  try {
    const response = await fetch('/api/bookSlot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date, timeSlot })
    });

    if (!response.ok) {
      throw new Error('Error booking slot');
    }

    const data = await response.json();
    bookingConfirmationDiv.innerHTML = `<p class="text-lg font-semibold">${data.message}</p>`;
    bookingConfirmationDiv.classList.remove('hidden');
  } catch (error) {
    console.error(error);
    bookingConfirmationDiv.innerHTML = `<p class="text-lg text-red-500">Error booking slot</p>`;
    bookingConfirmationDiv.classList.remove('hidden');
  }
});
