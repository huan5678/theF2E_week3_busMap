import searchBus from "../public/images/searchBus-fix.png";
import nearbyStop from "../public/images/nearbyStop-fix.png";
import navigation from "../public/images/navigation-fix.png";
import searchBusMobile from '../public/images/searchBus-sm-fix.png';
import nearbyStopMobile from "../public/images/nearbyStop-sm-fix.png";
import navigationMobile from "../public/images/navigation-sm-fix.png";


const BG = ( props ) => {
  let source = '';
  let BgStyle = {};

    const windowWidth = window.innerWidth;

    switch (props.title) {
      case "index":
        (windowWidth <= 768) ? source = searchBusMobile.src : source = searchBus.src;
        break;
      case "station":
        (windowWidth <= 768) ? source = nearbyStopMobile.src : source = nearbyStop.src;
        break;
      case "navigation":
        (windowWidth <= 768) ? source = navigationMobile.src : source = navigation.src;
        break;
    }




    BgStyle = {
      backgroundColor: "#F2F2F2",
      backgroundImage: `url(${source})`,
      backgroundSize: "100%",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      minHeight: "90vh",
    };




  return (
    <main style={BgStyle}>
    {props.children}
    </main>
  );
}
export default BG;