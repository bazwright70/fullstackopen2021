
const Message = ({ message }) => {

  const messageStyles = {
    color: 'green',
    textAlign: 'center',
    fontSize: '1.5em',
    lineHeight: '2em',
    backgroundColor: 'lightGrey',
    borderWidth: 2,
    borderColor: 'green',
    borderStyle: 'solid',
    padding: 5,
    borderRadius: 5
  }
  
  if (message == null) return null;

  return(
    <div style={messageStyles}>{message}</div>
  )
}

export default Message;