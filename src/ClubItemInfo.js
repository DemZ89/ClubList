import React, { useContext } from 'react' 
import { makeStyles } from '@material-ui/core/styles' 
import { Grid, Typography, IconButton, CardMedia, Divider, Card } from '@material-ui/core'   
import ArrowBackIcon from '@material-ui/icons/ArrowBack' 
import { Link } from 'react-router-dom' 
import { Club } from './ClubContext' 

const useStyles = makeStyles({ 
    container: { 
        width: 500, 
    },  
    card: { 
        backgroundColor: '#dddddd'
    },
    logo: { 
        height: 200, 
        width: 200, 
        marginTop: 20
    },  
    divider: { 
        width: 500, 
        marginTop: 20
    }, 
    clubName: { 
        marginTop: 10, 
        fontFamily: 'Anton', 
        fontSize: 24
    }, 
    country: { 
        fontSize: 16
    }, 
    value: { 
        fontFamily: 'Anton'
    }, 
    titles: { 
        fontSize: 20 
    }
})

const ClubItemInfo = () => {  
    const { clubsInfo } = useContext(Club)
    const classes = useStyles() 





    return (
        <Grid container justify='center'>
            <Grid container justify='center' className={classes.container}>    
                {clubsInfo.map((club) => { 
                    return (   
                        <Grid item>   
                        <Card className={classes.card}> 
                           <Grid container direction='column' alignItems='center'> 
                                <CardMedia className={classes.logo} image={club.image} />  
                                <Divider className={classes.divider}/> 
                                <Typography className={classes.clubName}>{club.name}</Typography>  
                                <Typography className={classes.country}>{club.country}</Typography>  
                                <Typography className={classes.value}>Kaderwert: {club.value}mil €</Typography>   
                                <Typography className={classes.titles}>Champions League Titel: {club.european_titles}</Typography>   
                                <Typography className={classes.stadium}>Stadium: <strong>{club.stadium.name}</strong></Typography> 
                                <Typography className={classes.stadium}>Stadiumkapazität: <strong>{club.stadium.size}</strong></Typography>
                            </Grid>
                            <Link to={'/'}>  
                                <IconButton> 
                                    <ArrowBackIcon />
                                </IconButton>
                            </Link>
                        </Card>  
                        </Grid> 
                    )
                })}  
            </Grid> 
        </Grid>
    )
}

export default ClubItemInfo
