import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import 'ag-grid-enterprise';
import { ColDef } from "ag-grid-community";

import getRowsData from "../../getRowsData.ts";

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

function AgGrid() {
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);
  const defaultColDef = {
    flex: 1,
  };

  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination
        rowModelType="serverSide"
        suppressServerSideFullWidthLoadingRow
        paginationPageSize={20}
        cacheBlockSize={20}
        serverSideDatasource={{
          getRows: (params) => getRowsData(params, "delbekhah"),
        }}
        serverSideInitialRowCount={10}
      />
    </div>
  );
}

export default AgGrid;
