import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import 'ag-grid-enterprise';
import {ColDef, GetRowIdParams, GridApi, IServerSideGetRowsParams, PaginationChangedEvent} from "ag-grid-community";

import getRowsData from "../../getRowsData.ts";
import type {IServerSideDatasource} from "ag-grid-community/dist/types/core/interfaces/iServerSideDatasource";

interface IRow {
  id: number,
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

function AgGrid() {
  const colDefs = useMemo<ColDef<IRow>[]>(() => ([
    { field: "id", valueGetter: (p) => Number(p.node?.id) + 1 },
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]), []);
  const defaultColDef = {
    flex: 1,
  };
  const gridRef = useRef<AgGridReact<any>>();

  const getRowId = useCallback(
    (params: GetRowIdParams) => `${params.data.id}`,
    []
  );

  const handleGoto5Click = () => {
    gridRef.current!.api.paginationGoToPage(5);
  }

  const serverSideDatasource: IServerSideDatasource = useMemo(() => ({
    getRows(params: IServerSideGetRowsParams) {
      getRowsData(params).then((resp: []) => {
        params.success({
          rowData: resp,
          rowCount: 35,
        })
      });
    }
  }), [])
  

  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "100%", height: "100%" }}
    >
      <button onClick={handleGoto5Click}>go to 5</button>
      <AgGridReact
        ref={gridRef}
        columnDefs={colDefs}
        // defaultColDef={defaultColDef}
        pagination
        rowModelType="serverSide"
        suppressServerSideFullWidthLoadingRow
        paginationPageSize={20}
        cacheBlockSize={20}
        // getRowId={getRowId}
        serverSideDatasource={serverSideDatasource}
      />
    </div>
  );
}

export default AgGrid;
