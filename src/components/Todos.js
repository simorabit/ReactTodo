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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { TodosContext } from "../contexts/todosContext";
import { useContext, useState } from "react";

export default function Todo({ item }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  function handleClose() {
    setShowDeleteDialog(false);
  }

  function deleteTodo() {
    let newTodos = todos.filter((t) => {
      return item.id != t.id;
    });
    setTodos(newTodos);
  }

  function handelCheck() {
    const newTodos = todos.map((t) => {
      if (t.id == item.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <Dialog
        style={{ direction: "rtl" }}
        open={showDeleteDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">هل ترغب في حدف المهمة</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لن تتمكن من استرجاعها
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>الغاء</Button>
          <Button onClick={deleteTodo}> نعم تاكيد الحدف</Button>
        </DialogActions>
      </Dialog>
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
                  handelCheck();
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
                onClick={() => {
                  setShowDeleteDialog(true);
                }}
                className="iconBtn"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
                aria-label="delete"
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
