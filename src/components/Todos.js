import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
export default function Todo() {
  return (
    <>
      <Card
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
                المهمة الاولى
              </Typography>
            </Grid>
            <Grid xs={4}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
