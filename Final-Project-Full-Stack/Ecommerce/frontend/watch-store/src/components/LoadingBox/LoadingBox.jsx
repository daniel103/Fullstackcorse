import Spinner from 'react-bootstrap/Spinner';
import "./LoadingBox.css"
export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <div className="loading">
      <img src="https://c.tenor.com/siXiZO-F1awAAAAC/loader-waiting.gif" alt="loading" />
      </div>
    </Spinner>
  );
}