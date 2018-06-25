import React, { Component } from 'react';
import '../css/Newsletter.css';

class Newsletter extends Component {
    render() {
        return (
            <section className="newsletter">
            <div className="container">
              <form className="form" action="https://www.fanbridge.com/signup/1.5/submit?userid=218812" method="post" target="_blank" rel="noopener">
                <div className="email-wrapper">
                    <div className="form-text">
                            <h2>Join Our Email List <span className="nowrap">to Get a Free Song</span></h2>
                            {/* <span className="hover">Click &amp; Enter your email</span>
                            <span className="thanks">Thanks for signing up!</span>
                            <span className="error-text">Something went wrong!<br />Click to try again</span> */}
                        </div>
                            <table border="0" cellSpacing="0" cellPadding="5">
                                <tbody>
                                <tr>
                                    <td valign="top"><input name="email" type="text" id="email" placeholder="e-mail address" aria-label="email address" /></td>
                                </tr>

                                <tr>
                                    <td><input type="submit" name="Submit" value="Submit" className="btn btn-1 btn-1f" /></td>
                                </tr>
                                </tbody>
                            </table>
                </div>
              </form>
            </div>
          </section>

        );
    }
}

export default Newsletter;