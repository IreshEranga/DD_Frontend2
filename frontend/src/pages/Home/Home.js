import React from 'react'
import NavBar from '../../components/NavBar'
import '../../components/NavBar.css'
import foot2 from '../../assets/foot2.jpg'
import foot22 from '../../assets/foot22.webp'
import foot3 from '../../assets/foot3.jpeg'
import foot4 from '../../assets/foot4.jpeg'


const Home = () => {
  return (
    <div>
        
            <NavBar/>

            <div className="bodycontainer">

            
                <img src={foot2} alt="foot" style={{width: '20%', height: '300px', alignItems:'center', marginLeft:'150px' }} />
                <img src={foot3} alt="foot" style={{width: '20%', height: '300px', alignItems:'center', marginLeft:'150px' }} />
                <img src={foot4} alt="foot" style={{width: '20%', height: '300px', alignItems:'center', marginLeft:'150px' }} />

                
            </div>

            {/* <div className="btext" style={{color:'white', fontFamily:'serif', fontStyle:'italic', fontWeight:'bolder',marginTop:'-10px', textAlign:'right', marginRight:'100px', fontSize:'80px' , backgroundColor:'black'}}>
                    DD Foot Ware
                </div> */}
            

            

    <h1 style={{
        color: 'white',
        backgroundColor:'black',
        width:'300px',
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 'bolder',
        marginTop: '100px',
        textAlign: 'center',
        fontSize: '50px'
      }}>
        Who We Are
      </h1>
      <div style={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: '30px',
        textAlign: 'left' 
      }}>
        <img 
          src={foot22} 
          alt="quality" 
          style={{ width: '40%', height: '400px', marginRight: '20px' ,marginLeft:'50px'}} 
        />
        <p style={{
          color: 'black',
          fontFamily: 'serif',
          fontStyle: 'italic',
          fontSize: '30px',
          margin: 0 ,
          backgroundColor:'yellow',
          padding:'20px',
          marginLeft:'20px',
          marginRight:'20px', 
          borderRadius:'20px'
        }}>
         We are a footwear company dedicated to delivering premium quality shoes to our customers. We take great pride in our products, ensuring they are made with top-notch materials designed for maximum comfort and support. We wholeheartedly stand behind our footwear and are committed to offering exceptional service to our valued customers.
        </p>
      </div>
{/* 
      <h1 style={{textAlign:'center', fontFamily:'bold', marginTop:'150px'}}>Contact Us</h1>
        <div className="contact" style={{backgroundColor:'gray', width:'75%', marginLeft:'200px', borderRadius:'20px'}}>
            
            <FormExample/>
        </div> */}
        <br /><br /><br /><br />
        
    </div>
  )
}

export default Home