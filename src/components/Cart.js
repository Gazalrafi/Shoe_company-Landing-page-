import { Card,CardContent, Typography, Button } from '@material-ui/core';
import '../App.css';


const Cart = () => {
  

    return (
        <div className="cart-container">
            <Typography className="font" variant="h4" style={{marginTop:"20px"}} align="center" gutterBottom>Your Cart</Typography>
            <div className="cart-section">
            
                <div className="cart-summery">
                    <Card>
                        <CardContent>
                            <Typography className="font" variant="h5" gutterBottom>ORDER SUMMERY</Typography>
                            <div className="flex1">
                                <Typography gutterBottom variant="body2" className="font" >ITEMS</Typography>
                
                            </div>
                            <div className="flex1">
                                <Typography gutterBottom  variant="body2" className="font">DELEVERY</Typography>
                                <Typography gutterBottom  variant="body2" className="font">FREE</Typography>
                            </div>
                            <div className="flex1">
                                <Typography gutterBottom variant="body2" className="font">SALES TAX</Typography>
                                <Typography gutterBottom  variant="body2" className="font"></Typography>
                            </div>
                            <div className="flex1">
                                <Typography gutterBottom variant="body2" className="font">TOTAL</Typography>
                              
                            </div>
                            <Button
                            style={{marginTop:"30px",width:"100%"}}
                            size="small"
                            className="font"
                            variant="contained"
                            color="secondary"

                            >
                                CHECKOUT
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Cart
