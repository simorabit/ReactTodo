import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./Todos";
export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ color: "text.secondary" }}
          >
            مهامي
          </Typography>
          <Divider />
          {/* {Toggle Groupl} */}
          <ToggleButtonGroup
            style={{
              direction: "ltr",
              marginTop: "30px",
            }}
            exclusive
            aria-label="text alignment"
          >
            <ToggleButton value="justify" aria-label="justified" disabled>
              الغير منجز
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              المنجز
            </ToggleButton>
            <ToggleButton value="left" aria-label="left aligned">
              الكل
            </ToggleButton>
          </ToggleButtonGroup>
          {/* ALL TODOS */}
          <Todo></Todo>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
