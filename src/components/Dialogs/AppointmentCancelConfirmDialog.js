import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";

const useStyles = makeStyles({
    buttonContainer:{
      width:'100%',
      textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 20,
    },
    cancelButton:{
        backgroundColor:'#a3302d',
        width: 160,
        color:'white',
        fontSize: 16,
        textTransform:'capitalize',
        '&:hover':{
            backgroundColor:'rgba(163,48,45,0.69)',
        }
    },
    continueButton:{
        width: 160,
        color:'white',
        backgroundColor:'#3292c4',
        fontSize: 16,
        textTransform:'capitalize',
        '&:hover':{
            backgroundColor:'rgba(50,146,196,0.56)',
        }
    }
})

export const AppointmentCancelConfirmDialog = ({open, handleClose, handleConfirm}) => {
    const classes = useStyles();
    const user = useSelector(state=>state.firebase.profile)
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xs"
            >
                <div className="w-100">
                    <div style={{width:'60%', margin:'auto'}}>
                        <img src={require('../../assets/image/appointment-cancel.png')} style={{width:'100%', height:'auto', margin:'auto'}}/>
                    </div>
                </div>
                <DialogContent>
                    <DialogContentText style={{textAlign: 'center', color:'black'}}>
                        <strong style={{textTransform:'capitalize'}}>{user && user.fullName}</strong>, you have a pending request
                    </DialogContentText>
                    <DialogContentText style={{textAlign:'center', fontSize: 12, color:'black'}}>
                        We will send you an  offer as soon as a doctor will applied
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.buttonContainer}>
                    <Button onClick={handleConfirm} className={classes.cancelButton}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose} className={classes.continueButton}>
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
