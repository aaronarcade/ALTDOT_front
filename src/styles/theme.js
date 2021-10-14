import './fonts.css'

const size = {
  mobileS: "480px",
  mobileL: "770px",
  tabletS: "1023px",
  tabletL: "1280px",
  laptop: "1460px",
  desktop: "1700px",
}

const theme = {
  color: {
    primary: "#0a3d62",
    secondary: "#82ccdd",
    background: "#4a69bd",
    disabled: "#6a89cc",
    gradient: "#FFFBD5",

  },
  size: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`,
  },
  font: {
    title: "Oswald-VariableFont_wght",
    sebtitle: 'Roboto-Medium'
  },
  boxShadow: "0px 3px 6px #00000029",
}

export default theme