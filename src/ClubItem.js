import React, { useContext } from 'react' 
import { makeStyles } from '@material-ui/core/styles'   
import { Grid, Card, CardMedia, Typography, Divider } from '@material-ui/core' 
import './fonts.css'  
import { Club } from './ClubContext' 


const useStyles = makeStyles({ 
    root: { 

    }, 
    card: { 
        height: 300, 
        width: 200, 
        border: 'solid', 
        borderColor: 'gray', 
        borderWidth: 2, 
        borderRadius: 10
    }, 
    logo: { 
        height: 200, 
        width: 200, 
        marginTop: 20
    }, 
    typoClub: { 
        marginTop: 5, 
        fontFamily: 'Anton', 
        fontSize: 18
    }, 
    typoClub2: { 
        fontSize: 14, 
        color: 'gray'
    }
})

const ClubItem = (item) => {  
    const classes = useStyles() 
    const { club, image, country, id } = item  
    const { pushClubInfo } = useContext(Club)
    return (
        <div>   
            <Card className={classes.card} onClick={() => pushClubInfo(id)}>  
                <Grid container justify='center' alignItems='center' direction='column'> 
                    <CardMedia className={classes.logo} image={image} />  
                    <Divider style={{ width: 200, marginTop: 20 }}/>
                    <Typography className={classes.typoClub}>{club}</Typography> 
                    <Typography className={classes.typoClub2}>{country}</Typography>
                </Grid>  
            </Card> 
        </div>
    )
}

export default ClubItem
