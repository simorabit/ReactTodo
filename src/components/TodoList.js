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
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { Title } from "@mui/icons-material";
import { Description } from "@mui/icons-material";

import { useState } from "react";
import { useContext } from "react";
import { TodosContext } from "../contexts/todosContext";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const [inputFiled, setInputFiled] = useState("");

  function Addtodo() {
    const element = {
      id: uuidv4(),
      Title: inputFiled,
      Description: "",
      isCompleted: false,
    };
    setTodos([...todos, element]);
    setInputFiled("");
  }
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
          {todos.map((todo) => {
            return <Todo key={todo.id} item={todo}></Todo>;
          })}
          {/* */}
          <Grid container spacing={3} style={{ marginTop: "15px" }}>
            <Grid
              item
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              xs={8}
            >
              <TextField
                value={inputFiled}
                onChange={(event) => {
                  setInputFiled(event.target.value);
                }}
                style={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              xs={4}
            >
              <Button
                onClick={Addtodo}
                style={{
                  width: "100%",
                  background: "orange",
                  height: "100%",
                }}
                variant="contained"
              >
                Contained
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
