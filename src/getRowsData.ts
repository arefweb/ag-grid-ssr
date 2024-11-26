import {IServerSideGetRowsParams} from "ag-grid-community";
import getData from "./mock";

function getRowsData(params: IServerSideGetRowsParams, second?: string) {
  console.log("request: ", params.request);
  console.log("second: ", second);
  // if(params.request.startRow === 0) {
  const data = getData(
      Number(params.request.startRow),
      Number(params.request.endRow)
    );

  return data;

    // params.success({
    //   rowData: response,
    //   rowCount: 210,
    // });
  // }
  
}

export default getRowsData;