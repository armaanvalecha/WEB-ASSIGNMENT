// Get reference to the form element
const form = document.getElementById('myForm');

// Get reference to the table body element
const tableBody = document.getElementById('tableBody');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get form data
    const formData = new FormData(form);

    // Create a new row in the table
    const newRow = document.createElement('tr');

    // Iterate over form data and create table cells
    formData.forEach(function(value, key) {
        const cell = document.createElement('td');
        cell.textContent = value;
        newRow.appendChild(cell);
    });

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Reset the form
    form.reset();
});
