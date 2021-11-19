import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: {title:""}}; 
        this.add = props.add; // props의 함수를 this.add에 연결
    }
    
    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.taret.value;
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    onButtonClick = () => {
        this.add(this.state.item);
        this.setState({ item: {title: ""}});
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{ margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        <TextField 
                            placeholder="Add Todo Here" 
                            fullWidth
                            onChange={this.onInputChange}
                            value={this.state.item.title} 
                            onKeyPress={this.enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button 
                            fullWidth 
                            color="secondary" 
                            variant="oulined"
                            onClick={this.onButtonClick}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;