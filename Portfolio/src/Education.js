import './App.css'; 

function Education() {
    return (
<div className='eduDiv'>
        <div className="education">
          <h1 className='heading'>Educations</h1>
            <table>
    <thead>
      <tr>
        <th>Degree</th>
        <th>Institution</th>
        <th>CGPA/Percentage</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>BE CSE(AIML)</td>
        <td>Sri Eshwar College of Engineering</td>
        <td>CGPA 7.6</td>
        <td>2nd Year</td>
      </tr>
      <tr>
        <td>SSLC</td>
        <td>Swamy Chidbhavanandha MHSS</td>
        <td>88.33%</td>
        <td>2023</td>
      </tr>
      <tr>
        <td>HSC</td>
        <td>Swamy Chidbhavanandha MHSS</td>
        <td>Pass</td>
        <td>2021</td>
      </tr>
    </tbody>
  </table>
        </div>
</div>

    )
}

export default Education