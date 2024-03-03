import { connect } from 'react-redux';
import DetailCooking from '../page/DetailCooking';
import { addToCart, moveTocart } from '../redux/product';

const mapStateToProps = (state) => ({
    cart: state.cart.products,
});
const mapDispatchToProps = {
    addToCart,
    moveTocart,
};
console.log(addToCart);
export default connect(mapStateToProps, mapDispatchToProps)(DetailCooking);
