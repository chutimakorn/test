export default function Input(data) {
  return (
    <div>
      <input
        className='input'
        onChange={data.onChange}
        value={data.value}
        placeholder={data.placeholder}
      />
    </div>
  )
}
//Input เเถวเดียว โยนค่ามาเป็น Data เเล้วจะใช้ตัวไหนก็เเตกค่าออกมา
