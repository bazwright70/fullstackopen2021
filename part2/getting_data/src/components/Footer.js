const Footer = (props) => {

  const footerStyle ={
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <div style={footerStyle}>
      <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
    </div>
  )
}

export default Footer;