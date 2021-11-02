import { useTheme } from "@emotion/react";
import { Box, colors, Grid, Paper, Typography } from "@mui/material";

const DragArea = (props) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        bgcolor: theme.palette.primary.light,
        height: "100%",
        padding: 10,
        margin: 5,
      }}
    >
      <Grid sx={{ backgroundColor: "white", height: "100%" }}>
        <Box sx={{ height: 250 }}>
          {" "}
          <Typography color="">Drag Area</Typography>
        </Box>{" "}
      </Grid>
    </Paper>
  );
};

export default DragArea;
