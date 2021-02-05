import React, { useContext } from 'react'  
import { makeStyles } from '@material-ui/core/styles' 
import ClubItem from './ClubItem' 
import { Club } from './ClubContext' 
import { Grid, AppBar, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({ 
    bar: { 
        height: 50, 
        width: '100%', 
        marginBottom: 20
    }, 
    logo: { 
        fontFamily: 'Anton', 
        fontSize: 26, 
        textAlign: 'center', 
        paddingTop: 5 
    }, 
    buttons: { 
        width: 100, 
        height: 'auto', 
        backgroundColor: 'gray', 
        marginTop: -20,
    }, 
    button: { 
        width: 110, 
        backgroundColor: 'white', 
        marginTop: 20
    }
})

const ClubList = () => {  
    const classes = useStyles()
    const { clubs, sortValue, sortValuePlus, sortA, sortZ } = useContext(Club)   
    const history = useHistory()  
   


    return (
        <div>  
            <AppBar position='static' className={classes.bar}>  
                <Typography className={classes.logo}>ClubList</Typography> 
            </AppBar>  
            <Grid container direction='row'> 
                <Grid container item xs={2} className={classes.buttons} alignItems='center' direction='column'>  
                    <Button className={classes.button} onClick={sortA}>A-Z</Button> 
                    <Button className={classes.button} onClick={sortZ}>Z-A</Button> 
                    <Button className={classes.button} onClick={sortValue}>Least valued</Button>
                    <Button className={classes.button} onClick={sortValuePlus}>Most valued</Button>
                </Grid>
                <Grid container item xs={10} spacing={2} justify='center'> 
                    {clubs.map((item) => { 
                                return (   
                                    <Grid item onClick={() => history.push('./info')}>   
                                    <ClubItem key={item.id} 
                                              club={item.name} 
                                              country={item.country} 
                                              image={item.image}  
                                              titles={item.european_titles} 
                                              stadium={item.stadium} 
                                              valueofclub={item.value} 
                                              id={item.id}  
                                              
                                    /> 
                                    </Grid>
                                )
                            })}
                </Grid>
            </Grid>
           
        </div>
    )
}

export default ClubList
