import { useInfiniteQuery } from "react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { getAttendanceByEmployeeId } from "../api";

export default function AttendanceTable({ id }: { id: number }) {
  const fetchAttendanceRecords = async ({ pageParam = 0 }) => {
    const response = await getAttendanceByEmployeeId(pageParam, 5, id);
    return response.data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["attendance-by-employee-id", id],
      fetchAttendanceRecords,
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.length === 0) {
            return undefined; // Stop fetching if the last page is empty
          }
          return pages.length; // Increment the page number for subsequent requests
        },
      }
    );

  return (
    <TableContainer component={Paper} sx={{ display: "grid", my: "30px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time In</TableCell>
            <TableCell>Time Out</TableCell>
            <TableCell>Is Late</TableCell>
            <TableCell>Is Absent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.pages.flatMap((page) =>
            page.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.timeIn}</TableCell>
                <TableCell>{record.timeOut}</TableCell>
                <TableCell>{record.isLate ? "Yes" : "No"}</TableCell>
                <TableCell>{record.isAbsent ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          sx={{ alignSelf: "center" }}
        >
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </Button>
      )}
    </TableContainer>
  );
}
