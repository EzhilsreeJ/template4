import './App.css'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
function App() {
  
  return (
    <>
      <div className="navbar">
                  <div className="links">
                      <a href="#">LINK 1</a><span>|</span>
                      <a href="#">LINK 2</a><span>|</span>
                      <a href="#">LINK 3</a><span>|</span>
                      <a href="#">LINK 4</a>
                  </div>
                  <div className="info">
                      <span>☎ +1233456789</span>
                      <span>|</span>
                      <span>✉ EZHIL@DOMAIN.COM</span>
                  </div>
              </div>
              <div className="S1">
                  <div className="logo">
                      <img src="image.png" alt="logo" width="10%" height="80%"/>
                      <h2><b>XYZ  <br />COMPANY</b></h2>
                  </div>
                  <nav className="sidebar">
                      <ul >
                          <li><a href="#">HOME </a><span>|</span> </li>
                          <li><a href="#">PAGES </a><span>|</span></li>
                          <li><a href="#">DROPDOWN </a><span>|</span></li>
                          <li><a href="#">LINK TEXT </a><span>|</span></li>
                          <li><a href="#">LINK TEXT </a></li>
                  </ul>
                  </nav>        
              </div>
              <Section2 />
              <Section3 />
              <Section4 />
              <div className="footer">
                  <div className="foot1">
                      <div className="subfoot1">
                          <h2>Lorem, ipsum dolor.</h2>
                          <hr  />
                      </div>
                      <div className="subfoot2">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi doloribus. Dolorem quae eum repellendus eveniet molestias! Maiores, repellendus neque?</p>
                          <br />
                          <div className="add">
                              <p>🌐 Street Name,Area,Town- Zipcode</p>
                              <p>☎ +987 654 321</p>
                              <p>🖂 INFO@DOMAIN.COM</p>
                          </div>
                      </div>        
                  </div>
                  <div className="foot1">
                      <div className="subfoot1">
                          <h2> Quick Links</h2>
                          <hr / >
              
                      </div>
                        
                      <div className="subfoot2">
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Blog</a></li>
                              <li><a href="#">Gallery</a></li>
                              <li><a href="#">Portofolio</a></li>
                              <li><a href="#">Contact Us</a></li>
                          </ul> 
                      </div>
                      
          
                  </div>
                  <div className="foot1">
                          <div className="subfoot1">
                              <h2>Email</h2>
                              <hr />
                          <div className="footcol">
                              <div className="subfoot2">
                                  <input type="email" placeholder="Email"/>
                                  <br /><br />
                                  <button>Submit</button>
                                  <br />
                                  <br />
                              <div className="socialmedia">
                                  <ul>
                                      <li><a href="#">ⓕ</a></li>
                                      <li><a href="#">ⓕ</a></li>
                                      <li><a href="#">ⓕ</a></li>
                                      <li><a href="#">ⓕ</a></li>
                                  </ul>
                              </div>
                          </div>             
                      </div>
                      
                      
                  </div>
          
                  
              </div>
              </div>
              <div className="footer2">
                  <p>© 2020 XYZ COMPANY. ALL RIGHTS RESERVED.</p>
          
              </div>
    </>
  )
}

export default App
