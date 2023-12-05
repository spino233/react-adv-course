import "./Styles.css";
import { useTheme } from "../context/ThemeContext";

const Switch = () => {
    const { theme, toogleTheme } = useTheme();
    return (
      <label className="switch">
        <input
          type="checkbox"
          onChange={toogleTheme}
          checked={theme === "light"}
        />
        <span className="slider round" />
      </label>
    );
};

export default Switch;
