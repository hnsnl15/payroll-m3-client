import { SetStateAction } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { IPayables } from "..";

export default function CustomModal({
  data,
  isOpen,
  setIsOpen,
}: {
  data: IPayables;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Payables
          </Typography>
          <Typography sx={{ mt: 2 }}>SSS: {data.sss}</Typography>
          <Typography sx={{ mt: 2 }}>Philhealth: {data.philhealth}</Typography>
          <Typography sx={{ mt: 2 }}>Net Income: {data.netIncome}</Typography>
          <Typography sx={{ mt: 2 }}>Leave: {data.leaveHours} hours</Typography>
          <Typography sx={{ mt: 2 }}>
            Total Deductions: {data.totalDeductions}
          </Typography>
          <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
