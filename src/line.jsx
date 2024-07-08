function Line({ pos, thickness, length, opacity }) {
  const style = {
    position: 'relative',
    left: pos,
    backgroundColor: 'white',
    width: '100%',
    height: thickness,
    width: length,
    opacity: opacity,
    borderRadius: '50px',
    marginBottom:'5%'
  };
  return <div style={style} className="line"></div>;
}

export default Line;
