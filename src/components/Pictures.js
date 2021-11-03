import { Card, CardMedia, Typography, Grid, Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const Pictures = ({ files, deleteHandler }) => {
  console.log(files);
  return files.length >= 1 ? (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
      {files.map((file) => {
        return (
          <Grid
            item
            xs={6}
            sx={{
              maxWidth: "auto",
              gridAutoFlow: "row",
              display: "flex",
              gridTemplateColumns: "repeat(5, 1fr)",

              gap: 4,
            }}
          >
            {" "}
            <Box sx={{ position: "relative", maxWidth: 400 }}>
              <HighlightOffIcon
                fontSize="large"
                sx={{ position: "absolute", top: 2, right: 2, zIndex: 100 }}
                onClick={(e) => deleteHandler(file)}
              ></HighlightOffIcon>
              <Card
                sx={{
                  maxWidth: 400,
                  maxHeight: "100%",
                  margin: 2,
                  padding: 1,
                  bgcolor: "light",
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  image={file.preview}
                ></CardMedia>
              </Card>{" "}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <Typography>drag here!</Typography>
  );
};

export default Pictures;
