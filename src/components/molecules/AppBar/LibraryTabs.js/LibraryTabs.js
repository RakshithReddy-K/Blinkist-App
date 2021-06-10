import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  indicator: {
    backgroundColor: "#22c870"
  },
  tabroot: {
    textTransform: "none",
    fontSize:16,
    fontFamily:['"CeraPRO-Regular"', '"sans-serif"','"arial"'].join(','),
  },
  tab: {
    paddingBottom: "0px ",
    paddingLeft:0,
    paddingRight:"100px",
    maxWidth: "600px",
    height: "72px",
    color: "#22c870"
  }
});

export default function LibraryTabs({onChange,value}) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    onChange(event,newValue)
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Tabs
        classes={{
          indicator: classes.indicator
        }}
        value={value}
        onChange={handleChange}
        textColor="inherit"
      >
       <Tab
          classes={{root:classes.tabroot}}
          className={classes.tab}
          label="Currently reading"
        ></Tab>
        <Tab 
        classes={{root:classes.tabroot}}
         className={classes.tab}
         label="Finished" />
        </Tabs>
       
    </Paper>
  );
}
