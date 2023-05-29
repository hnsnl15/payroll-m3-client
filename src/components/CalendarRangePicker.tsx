import { SetStateAction, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { Box, Button } from "@mui/material";
import { useMutation } from "react-query";
import { postCalculationData } from "../api";
import CustomModal from "./CustomModal";
import { IPayables } from "..";

export default function CalendarRangePicker({
  username,
}: {
  username: string;
}) {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [payables, setPayables] = useState<IPayables | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleStartDateChange = (date: SetStateAction<Dayjs | null>) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: SetStateAction<Dayjs | null>) => {
    setEndDate(date);
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const postMutation = useMutation(
    async () =>
      await postCalculationData(
        username,
        startDate?.format("YYYY-MM-DD")!,
        endDate?.format("YYYY-MM-DD")!
      )
  );

  const handleCalculate = async () => {
    const response = await postMutation.mutateAsync();
    setPayables(response.data);
    setIsOpen(true);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "600px",
          my: "30px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          bgcolor: "white",
          p: "20px",
        }}
      >
        <DatePicker
          label="Start Date"
          value={startDate}
          format="YYYY-MM-DD"
          onChange={handleStartDateChange}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          format="YYYY-MM-DD"
          onChange={handleEndDateChange}
        />
        <Button onClick={handleClearDates}>Clear Dates</Button>
        <Button onClick={handleCalculate}>Calculate</Button>
      </Box>

      {payables && <CustomModal data={payables} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </LocalizationProvider>
  );
}
