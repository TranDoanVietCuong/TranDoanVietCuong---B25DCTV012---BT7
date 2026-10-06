import Calculator from './Calculator';
import CV from './CV';
import './App.css'; 

function App() {
  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '20px' }}>
      
      {/* --- BÀI 1 --- */}
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>BÀI TẬP 1: MÁY TÍNH</h2>
      <Calculator />

      {/* Đường kẻ ngang ngăn cách 2 bài */}
      <hr style={{ margin: '50px auto', border: '1px dashed #bdc3c7', maxWidth: '800px' }} />

      {/* --- BÀI 2 --- */}
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>BÀI TẬP 2: TRANG CV</h2>
      <CV />
      
    </div>
  );
}

export default App;