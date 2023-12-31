import React from 'react'
import { Navi } from './components/Navbar/Navi'
import { Footer } from './components/Footer/Footer'

export const About = () => {
    return (
        <div>
            <Navi />
            <div className="bg-gray-100 py-10">
                <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold mb-5 text-blue-700">Bhavesh Chand Upadhyay</h1>
                    <p>📞 +91 8115533838</p>
                    <p>✉️ upadhyaybhavesh71@gmail.com</p>
                    <p>🌐 linkedin.com/bhavesh-upadhyay</p>
                    <p>🔗 github.com/Visbhavesh</p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-700">Education</h2>
                    <p>
                        Dr. Shakuntala Misra National University Lucknow, India | Aug 2021 – 2025
                        <br />
                        Bachelor of Technology in Computer Science Engineering— Cumulative GPA: 8.0/10.0
                    </p>

                    {/* ... Other sections ... */}

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-700">Technical Skills</h2>
                    <p>
                        Languages: C/C++, TypeScript, JavaScript, HTML/CSS
                        <br />
                        Databases and Tools: MongoDB, Git, Latex, MySQL
                        <br />
                        Technologies/Frameworks: NodeJS, NextJS, ReactJS, ExpressJS, Mongoose, RestAPI
                        <br />
                        CS Fundamentals: Object-Oriented Programming, Computer Network, DBMS, Operating System
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-700">Achievements</h2>
                    <p>
                        Secured a global rank of 6013 in Google Kickstart 2022 Round F.
                        <br />
                        Secured a global rank of 1651 in Google Farewell 2023 Round A.
                        {/* ... Other achievements ... */}
                    </p>
                </div>
            </div>

            <Footer />



        </div>
    )
}
