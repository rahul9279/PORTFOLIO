import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
  <path d="M10 80
           L30 20
           L50 80
           L70 20
           L90 80
           M110 80
           L110 20
           L150 20
           L150 80
           M170 80
           L150 20
           L190 20
           L170 80
           Z" />
</svg>
    );
  }
}

export default LogoLoader;
