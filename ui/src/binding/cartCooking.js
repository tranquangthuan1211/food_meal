import { connect } from 'react-redux';
import Cooking from '../page/Cooking';
import { addToCart, moveTocart } from '../redux/product';

const mapStateToProps = (state) => ({
    cart: state.cart.products,
});
const mapDispatchToProps = {
    addToCart,
    moveTocart,
};
console.log(addToCart);
export default connect(mapStateToProps, mapDispatchToProps)(Cooking);
