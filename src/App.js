import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

// Styled Components
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Courier New', monospace;
  background-color: #0a0e17;
  color: #e0e0e0;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #111827;
  color: #00ff41;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  border: 1px solid #00ff41;
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.4);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #111827, #00ff41, #111827);
    z-index: -1;
    pointer-events: none;
    opacity: 0.3;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #00ff41;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: #1a2634;
  transition: all 0.2s;
  border: 1px solid #00ff41;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: #00ff41;
    color: #000;
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.4), transparent);
    transition: 0.5s;
  }
  
  &:hover:before {
    left: 100%;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #111827;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
  border: 1px solid #00ff41;
  position: relative;
  overflow: hidden;
  color: #e0e0e0;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 100%;
    background: #00ff41;
    opacity: 0.7;
  }
  
  h2 {
    color: #00ff41;
    border-bottom: 1px solid #00ff41;
    padding-bottom: 10px;
    text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
    font-family: 'Courier New', monospace;
  }
  
  h3 {
    color: #00ccff;
  }
`;

const BlogPostCard = styled.div`
  background-color: #1a2634;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #313d4f;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #00ff41;
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.4);
  }
  
  h3 {
    color: #00ccff;
    margin-top: 0;
  }
  
  &:before {
    content: '>';
    position: absolute;
    left: 5px;
    top: 5px;
    color: #00ff41;
    font-weight: bold;
    opacity: 0.7;
  }
`;

const BackButton = styled.button`
  background-color: #111827;
  color: #00ff41;
  border: 1px solid #00ff41;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  transition: all 0.2s;
  
  &:hover {
    background-color: #00ff41;
    color: #000;
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
  }
`;

// Home component that contains all three sections (About, Career, Blog) with scroll navigation
function Home() {
  const navigate = useNavigate();
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <AppContainer>
      <Header>
        <h1>0xAtom - Saif Sghaier</h1>
        <Nav>
          <NavLink to="#welcome" onClick={(e) => {e.preventDefault(); scrollToSection('welcome')}}>Home</NavLink>
          <NavLink to="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about')}}>About Me</NavLink>
          <NavLink to="#career" onClick={(e) => {e.preventDefault(); scrollToSection('career')}}>Career</NavLink>
          <NavLink to="#blog" onClick={(e) => {e.preventDefault(); scrollToSection('blog')}}>Blog Posts</NavLink>
        </Nav>
      </Header>
      {/* Welcome Section */}
      <Section id="welcome">
        <h2>Welcome to 0xAtom</h2>
        <div>
          <p>Your source for cybersecurity insights, tutorials, and best practices.</p>
          <p>Browse through the sections to learn more about me, my career in cybersecurity, and read my latest posts on security topics.</p>
        </div>
      </Section>
      
      {/* About Me Section */}
      <Section id="about">
        <h2>About Me</h2>
        <div>
          <p>Hello! I'm a cybersecurity specialist focusing on penetration testing and security research.</p>
          <p>My journey in cybersecurity began during my time at university where I studied Computer Science with a focus on network security.</p>
          <p>When I'm not hunting for vulnerabilities, you can find me participating in CTF competitions, analyzing malware, or contributing to open-source security tools.</p>
        </div>
      </Section>
      
      {/* Career Section */}
      <Section id="career">
        <h2>Career</h2>
        <div>
          <div>
            <h3>Senior Security Engineer</h3>
            <h4>CyberDefend Solutions</h4>
            <p>January 2023 - Present</p>
            <p>Leading security assessments, implementing zero-trust architecture, and conducting penetration testing for high-profile clients.</p>
          </div>
          <div>
            <h3>Cybersecurity Analyst</h3>
            <h4>SecureNet Technologies</h4>
            <p>March 2020 - December 2022</p>
            <p>Performed vulnerability assessments, managed security incident response, and implemented security awareness training programs.</p>
          </div>
        </div>
      </Section>
      
      {/* Blog Posts Section */}
      <Section id="blog">
        <h2>Blog Posts</h2>
        <div>
          <BlogPostCard onClick={() => navigate('/blog/1')}>
            <h3>Introduction to Ethical Hacking</h3>
            <p>April 5, 2025</p>
            <p>Learn the fundamentals of ethical hacking and the methodologies used to secure systems against attackers.</p>
          </BlogPostCard>
          <BlogPostCard onClick={() => navigate('/blog/2')}>
            <h3>OWASP Top 10 Vulnerabilities</h3>
            <p>April 7, 2025</p>
            <p>An in-depth analysis of the most critical web application security risks according to OWASP.</p>
          </BlogPostCard>
          <BlogPostCard onClick={() => navigate('/blog/3')}>
            <h3>Advanced Network Penetration Testing</h3>
            <p>April 8, 2025</p>
            <p>Techniques and tools for conducting thorough network penetration tests to identify security weaknesses.</p>
          </BlogPostCard>
        </div>
      </Section>
    </AppContainer>
  );
}

// BlogPost component for individual blog post pages
function BlogPost() {
  const navigate = useNavigate();
  const [post] = useState({
    id: 1,
    title: 'Introduction to Ethical Hacking',
    date: 'April 5, 2025',
    content: `
      <h2>What is Ethical Hacking?</h2>
      <p>Ethical hacking involves legally breaking into computers and devices to test an organization's defenses. It's among the most exciting IT jobs any person can have.</p>
      
      <h2>The Ethical Hacking Methodology</h2>
      <p>A structured approach to ethical hacking typically follows these phases:</p>
      <pre>1. Reconnaissance
2. Scanning
3. Gaining Access
4. Maintaining Access
5. Covering Tracks</pre>
      <p>Each phase has specific techniques and tools that ethical hackers use to identify vulnerabilities in a system.</p>
      
      <h2>Essential Tools of the Trade</h2>
      <p>Every ethical hacker needs a toolkit. Some essential tools include:</p>
      <ul>
        <li>Kali Linux - A security-focused operating system</li>
        <li>Metasploit - For exploiting vulnerabilities</li>
        <li>Wireshark - For network traffic analysis</li>
        <li>Nmap - For network discovery and security auditing</li>
        <li>Burp Suite - For web application security testing</li>
      </ul>
      
      <h2>Legal Considerations</h2>
      <p>Ethical hacking must always be conducted with proper authorization. Unauthorized hacking—even with good intentions—can result in legal penalties.</p>
      
      <h2>Getting Started</h2>
      <p>If you're interested in becoming an ethical hacker, start with certifications like CompTIA Security+, CEH (Certified Ethical Hacker), or OSCP (Offensive Security Certified Professional).</p>
    `
  });
  
  return (
    <AppContainer>
      <Header>
        <h1>0xSecurity</h1>
        <Nav>
          <NavLink to="/">Home</NavLink>
        </Nav>
      </Header>
      
      <BackButton onClick={() => navigate('/')}>← Back to Home</BackButton>
      
      <Section>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Section>
    </AppContainer>
  );
}



// Main App component with routing
function App() {
  return (
    <Router basename="/0xAtom">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
