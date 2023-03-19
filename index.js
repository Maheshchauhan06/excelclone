// Define a functional component called Newele
const Newele = () => {
  // Create an array of rows and columns for the table
  const rows = Array.from({ length: 20 }, (_, i) => i + 1);
  const cols = Array.from({ length: 20 }, (_, i) => i + 1);

  // Initialize tableData state variable to a 100x100 array of empty strings
  const [tableData, setTableData] = React.useState(
    Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => ""))
  );

  // Initialize formData state variable to an empty array
  const [formData, setFormData] = React.useState([]);

  // Handle change in cell input and update tableData and formData state variables accordingly
  const handleCellChange = (event, row, col) => {
    const { value } = event.target;

    // Update tableData with new value
    const newTableData = [...tableData];
    newTableData[row][col] = value;
    setTableData(newTableData);

    // Update formData with new value
    const newFormData = [...formData];
    newFormData[row] = {
      ...newFormData[row],
      [`Column ${col + 1}`]: value,
    };
    setFormData(newFormData);
  };

  // Handle form submission and send formData to an API
  const handleSubmit = () => {
    console.log(formData);
    alert("Data submitted to API");
  };

  // Render the table with header and body
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </th>
            {/* Render column headers */}
            {cols.map((col) => (
              <th key={col}>Column {col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render table rows */}
          {rows.map((row) => (
            <tr key={row}>
              <th>Row {row}</th>
              {/* Render table cells */}
              {cols.map((col) => (
                <td key={`${row}-${col}`}>
                  <input
                    className="input"
                    type="text"
                    value={tableData[row - 1][col - 1]}
                    onChange={(event) =>
                      handleCellChange(event, row - 1, col - 1)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Render the Newele component to the root element in the DOM
ReactDOM.render(<Newele />, document.getElementById("root"));
