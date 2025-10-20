import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function Todo({ item, handelCheck }) {
  return (
    <>
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 8,
        }}
      >
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={8}>
              <Typography variant="h5" sx={{ textAlign: "right" }}>
                {item.Title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "right" }}>
                {item.Description}
              </Typography>
            </Grid>

            <Grid
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              xs={4}
            >
              <IconButton
                onClick={() => {
                  handelCheck(item.id);
                }}
                className="iconBtn"
                style={{
                  color: item.isCompleted ? "white" : "#8bc34a",
                  background: item.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
                aria-label="delete"
                color="primary"
              >
                <CheckIcon></CheckIcon>
              </IconButton>
              <IconButton
                className="iconBtn"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                }}
                aria-label="delete"
                color="primary"
              >
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton
                className="iconBtn"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
                aria-label="delete"
                disabled
                color="primary"
              >
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
