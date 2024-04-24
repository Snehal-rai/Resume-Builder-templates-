import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [education, setEducation] = useState('');
  const [collage, setCollage] = useState('');
  const [percentage, setPercentage] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [title, setTitle] = useState('');
  const [gender, setGender] = useState('');
  // const [female, setFemale] = useState('');
  // const [other, setOther] = useState('');
  const [address, setAddress] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPreviewing(true);
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('preview-content');
    html2pdf().from(element).save();
  };

  return (
    <div>
      <h1 style={{ fontSize: '2.5em', color: '#2c3e50', textAlign: 'center', marginBottom: '0.5em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
        Resume Builder
      </h1>
      <h2 style={{ fontSize: '1.8em', color: 'blue', textAlign: 'center', fontWeight: 'bold', marginBottom: '1em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
        Build your resume by your own...!!!
      </h2>
      <form onSubmit={handleSubmit}>
      <h3 style={{ fontSize: '1.8em', color: 'orange', textAlign: 'center', fontWeight: 'bold', marginBottom: '1em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Personal Information</h3>
      <label>Profile Picture:</label> <br />
        <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} /><br />
        <label>Name:</label> <br />
     <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
       <label>Email:</label><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Phone:</label><br />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
       <label htmlFor="">Gender : </label>
      <label htmlFor=""> Male</label>
      <input type="checkbox" name="" id="" value={gender} onChange={(e) => setGender(e.target.value)} className='gender' />
      <label htmlFor="">Female</label>
      <input type="checkbox" name="" id="" value={gender} onChange={(e) => setGender(e.target.value)} className='gender' />
       <label htmlFor="">Other</label>
       <input type="checkbox" name="" id="" value={gender} onChange={(e) => setGender(e.target.value)} className='gender' />
        <br />
      <label>Date of Birth:</label><br />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br />
      <label htmlFor="">Hobbies</label> <br />
      <input type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} /><br />
      <label htmlFor="">Address</label> <br />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
      
        {/* Your form fields */}
        
        <h3 style={{ fontSize: '1.8em', color: 'orange', textAlign: 'center', fontWeight: 'bold', marginBottom: '1em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}  >Education:</h3>
        <label htmlFor="" >Education Name</label>       
        <input type='text' value={education} onChange={(e) => setEducation(e.target.value)} /><br/>
        <label htmlFor="">College</label>
        <input type='text' value={collage} onChange={(e) => setCollage(e.target.value)} /><br/>
        <label htmlFor="">Percentage</label>
        <input type="text" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
       <h3 style={{ fontSize: '1.8em', color: 'orange ', textAlign: 'center', fontWeight: 'bold', marginBottom: '1em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Projects</h3>
       <label>Projects Title:</label><br />
       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
       <label htmlFor="">Project-Description</label> <br />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br />

       <h3 style={{ fontSize: '1.8em', color: 'orange ', textAlign: 'center', fontWeight: 'bold', marginBottom: '1em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }} >Experience:</h3><br />        
       <label>Work Experience:</label><br /><textarea value={experience} onChange={(e) => setExperience(e.target.value)}></textarea><br />
       

        <button type="button" onClick={handleSubmit}>Preview</button>
      </form>
      {isPreviewing && (
      <div>
           <h2>Preview</h2>
          <div id="preview-content">
       
            <div className="img">
               {profilePic && (
                <img src={URL.createObjectURL(profilePic)} alt="Profile" />
                 )}
              </div>
                <div className="content sm-12"> 
                <h4 style={{ fontSize: '1.5em', color: 'yellow', textAlign: 'center', marginBottom: '0.5em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Personal Information</h4>            
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p> 
                    <p><strong>Gender :{(gender)}</strong></p>
                    <p><strong>DOB:</strong> {date}</p>
                    <p><strong>Hobbies:</strong> {hobbies}</p>
                    <p><strong>Address:</strong> {address}</p>
                    <h4 style={{ fontSize: '1.5em', color: 'yellow', textAlign: 'center', marginBottom: '0.5em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }} >Education Details</h4>
                    <p><strong>Education Name:</strong> {education}</p>
                    <p><strong>Collage Name :{collage}</strong></p>
                    <p><strong>Percentage :{percentage}</strong></p> 
                    <h4 style={{ fontSize: '1.5em', color: 'yellow', textAlign: 'center', marginBottom: '0.5em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Project-Information</h4>
                    <p><strong>Project Title:</strong>{title}</p>
                    <p><strong>Project Description:</strong>{description}</p> 
                    <p><strong>Experience:</strong> {experience}</p> 
                    <h4 style={{ fontSize: '1.5em', color: 'yellow', textAlign: 'center', marginBottom: '0.5em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Awards / Achievements </h4>
                    
                  </div>
               </div>
        </div>
      )}
      {isPreviewing && (
        <button onClick={handleDownloadPDF}>Download PDF</button>
      )}
    </div>
  );
};

export default ResumeBuilder;