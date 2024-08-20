import { IServerSideGetRowsParams } from "ag-grid-community";
import getData from "./mock";

async function getRowsData(params: IServerSideGetRowsParams, second?: string) {
  console.log("request: ", params.request);
  console.log("second: ", second);
  const response = await getData(
    Number(params.request.startRow),
    Number(params.request.endRow)
  ) as [];

  params.success({
    rowData: response,
    rowCount: 210,
  });
}

export default getRowsData;