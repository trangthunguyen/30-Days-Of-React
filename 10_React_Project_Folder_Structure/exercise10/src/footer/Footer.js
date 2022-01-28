import react from "react";
import '../style/footer/Footer.scss'

const Footer = (props) => {
      const {date, styles: { backgroundColor, color } }= props;
      const background = {
        backgroundColor: backgroundColor === "light" ? "#66cbff" : "#000000",
        color: color === "light" ? "#000000" : "#fff",
      };
      return (
        <footer>
          <div className="footer-wrapper" style={background}>
            <p>Copyright {date.getFullYear()}</p>
          </div>
        </footer>
      );
  }

export default Footer