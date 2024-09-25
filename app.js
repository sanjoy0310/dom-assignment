// Initialize Balance
let balance = 5500;

// Donation handler
function donate(campaign, currentAmount) {
  const input = document.getElementById(`${campaign}Input`);
  const donationAmount = parseFloat(input.value);

  // Input Validation
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  if (donationAmount > balance) {
    alert("Insufficient balance for this donation.");
    return;
  }

  // Deduct from balance
  balance -= donationAmount;
  document.getElementById("balance").textContent = `${balance} BDT`;

  // Update Donation amount
  const totalDonation = donationAmount + currentAmount;
  document.getElementById(
    `${campaign}Donation`
  ).textContent = `${totalDonation} BDT`;

  // Add to history 
  const historyList = document.getElementById("historyList"); 
  
  const li = document.createElement("li"); 
  const date = new Date(); li.textContent = `${donationAmount} BDT donated to ${campaign} on ${date.toLocaleString()}`; historyList.appendChild(li);

  // Show success modal
  document.getElementById("modal").classList.remove("hidden");
}

// Close modal
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

// Toggle between Donation and History sections
document.getElementById("donationBtn").addEventListener("click", () => {
  document.getElementById("donationSection").classList.remove("hidden");
  document.getElementById("historySection").classList.add("hidden");

  // Change button styles
  document
    .getElementById("donationBtn")
    .classList.add("bg-green-500", "text-white");
  document
    .getElementById("donationBtn")
    .classList.remove("bg-gray-200", "text-gray-700");

  document
    .getElementById("historyBtn")
    .classList.add("bg-gray-200", "text-gray-700");
  document
    .getElementById("historyBtn")
    .classList.remove("bg-green-500", "text-white");
});

document.getElementById("historyBtn").addEventListener("click", () => {
  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("historySection").classList.remove("hidden");

  // Change button styles
  document
    .getElementById("historyBtn")
    .classList.add("bg-green-500", "text-white");
  document
    .getElementById("historyBtn")
    .classList.remove("bg-gray-200", "text-gray-700");

  document
    .getElementById("donationBtn")
    .classList.add("bg-gray-200", "text-gray-700");
  document
    .getElementById("donationBtn")
    .classList.remove("bg-green-500", "text-white");
});