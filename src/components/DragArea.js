import { useTheme } from "@emotion/react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Pictures from "./Pictures";
const DragArea = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    noClick: true,
    onDrop: (acceptedFiles) => {
      setFiles((previous) => {
        const current = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        return [...previous, ...current];
      });
    },
  });
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  const deleteHandler = (e) => {
    setFiles(() => {
      return files.filter((pic) => pic !== e);
    });
  };

  const theme = useTheme();

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <Paper
        sx={{
          bgcolor: theme.palette.primary.light,

          padding: 5,
          margin: 2,
        }}
      >
        <Box>
          <Pictures deleteHandler={deleteHandler} files={files}></Pictures>
        </Box>
      </Paper>
    </div>
  );
};

export default DragArea;
