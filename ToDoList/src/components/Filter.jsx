const Filter = () => {
  return (
    <div className="filter">
        <h2>Filter:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Complete">Completas</option>
                    <option value="Imcomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter