import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">MY EDUCATION</h1>
            <Widecard title="MSc COMPUTER SCIENCE" where="LAKEHEAD UNIVERSITY" from="SEP 2017" to="JUL 2019" cgpa="cgpa: 81.70/100"/>
            <Widecard title="B.TECH INFORMATION TECHNOLOGY" where="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY" from="JUN 2013" to="JUN 2017" cgpa="cgpa: 7.91/10"/>
            </div>
            )
        }
    }
    
export default Education
    