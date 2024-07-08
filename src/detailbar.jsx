import './styles.css';
function Details({ left, right }) {
  return (
    <div class="detailBar">
      <div className="leftD">{left}</div>
      <div className="rightD">{right}</div>
    </div>
  );
}

export default Details;
