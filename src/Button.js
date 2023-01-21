import PropTypes from "prop-types";
import styles from "./Button.module.css";

// 특정 컴포넌트를 위한 CSS파일을 만들 수 있음.
function Button({text}) {
    // 아래처럼 create-react-app 을 사용하면 랜덤 class를 가지게 됨.
    return <button className={styles.btn}>{text}</button>;    
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
export default Button;