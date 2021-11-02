import { useTheme } from "@emotion/react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
const DragArea = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({ onDrop });
  const theme = useTheme();
  console.log(acceptedFiles);
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <Paper
        sx={{
          bgcolor: theme.palette.primary.light,
          height: "100%",
          padding: 10,
          margin: 5,
        }}
      >
        {isDragActive ? (
          <Typography>Drop Files HERE</Typography>
        ) : (
          <Grid sx={{ backgroundColor: "white", height: "100%" }}>
            <Box sx={{ height: 250 }}> </Box>{" "}
          </Grid>
        )}
      </Paper>
    </div>
  );
};

export default DragArea;
