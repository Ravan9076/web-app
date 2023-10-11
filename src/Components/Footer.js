

let prop = {
  width: "100%",
  backgroundColor: "transparent",//"rgb(228 228 228 / 84%)",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: 'Roboto',
  // borderRadius:"0 0 20px 20px",
  // borderBottom:"1px solid white",
  // boxShadow:"rgb(0 0 0 / 47%) 0px 7px 20px 0px",
  letterSpacing:"5px",
  flexBasis:"15%",
}
function Footer() {
  return (
    <>
    <footer className="footer" style={{height:"max-content",width:"max-content",margin:"auto"}}>
      <h1 className="hvrSpace pointer" style={{color:"white"}}>ABOUT·US</h1>
    </footer>
    </>
  );
}

export default Footer;
