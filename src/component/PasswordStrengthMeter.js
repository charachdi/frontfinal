import React, { Component } from 'react';
import './../css/PasswordStrengthMeter.css';
import zxcvbn from 'zxcvbn'
import $ from 'jquery'

class PasswordStrengthMeter extends Component {
  render() {
    const { password } = this.props;
    const testedResult = zxcvbn(password);
    
   
   
   
    return (
        <div className="password-strength-meter">
        <progress
        className={`password-strength-meter-progress strength-${this.createPasswordLabel(testedResult)}`}
        value={testedResult.score}
        max="4"
         />
        <br />
        <label
          className="password-strength-meter-label"
        >
        {password && (
            <>
              <strong>Fiabilité du mot de passe:</strong> {this.createPasswordLabel(testedResult)}
            </>
          )}
        </label>
      </div>
    );
    }
    createPasswordLabel = (result) => {
        console.log()
      
       

        switch (result.score) {
          case 0:
            return 'Faible';
          case 1:
            return 'Faible';
          case 2:
            return 'Moyen';
          case 3:
            return 'Bon';
          case 4:
            return 'Fort';
          default:
            return 'Faible';
        }
      }
}

export default PasswordStrengthMeter;