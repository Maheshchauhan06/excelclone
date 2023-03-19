const Newele = () => {
  const rows = Array.from({ length: 20 }, (_, i) => i + 1);
  const cols = Array.from({ length: 20 }, (_, i) => i + 1);
  const [tableData, setTableData] = React.useState(
    Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => ""))
  );
  const [formData, setFormData] = React.useState([]);

  const handleCellChange = (event, row, col) => {
    const { value } = event.target;
    const newTableData = [...tableData];
    newTableData[row][col] = value;
    setTableData(newTableData);

    const newFormData = [...formData];
    newFormData[row] = {
      ...newFormData[row],
      [`Column ${col + 1}`]: value,
    };
    setFormData(newFormData);
  };

  const handleSubmit = () => {
    // Here we can use the formData state variable to send the form data to an API
    console.log(formData);
    alert("Data submitted to API");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              {" "}
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </th>
            {cols.map((col) => (
              <th key={col}>Column {col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <th>Row {row}</th>
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

ReactDOM.render(<Newele />, document.getElementById("root"));