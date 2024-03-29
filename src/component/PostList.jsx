import React, { Component } from 'react'
import InputField from './InputField';
import DataSection from './DataSection';
import swal from 'sweetalert';

class PostList extends Component {
  constructor(){
    super();

    this.state = {
      posts: [],
      inputField: ''
    }
  }

   handleChange = (e) => {
     const { value } = e.target
     this.setState({
      inputField: value
     })
   }

   handleSubmit = () => {
    const { inputField } = this.state
    if(!inputField) return;
     fetch(`http://ip-api.com/json/${inputField}`)
     .then(response => response.json())
     .then(data => {
      // Check if data is successfully fetched
      if (data.status === 'success') {
        this.setState({ posts: [data] }, () => {
          this.setState({ inputField: '' });
        });
      } else {
        // Handle error response from API
        if(data.message === 'private range'){
          swal('Error', 'Cannot Track private IPV4 Networks', 'error')
          return
        } else {
          swal('Error Occured', 'Something went wrong', 'error')
        }
      }
     })
     .catch(error => {
      console.error(error);
      console.log(error.message);
     })

   }
  render() {
    const { inputField, posts } = this.state

    const styles = {
      width: "100%",
      height: "100vh",
      border: 'none'
    }
    return (
      <>
      <div className='post_lists'>
         <InputField 
           handleChange={this.handleChange} name='inputField'
           value={inputField}
           handleSubmit={this.handleSubmit}
        />
        </div>
      
         {
          posts ? (
          posts.map(ip => {
            return (
            <React.Fragment key={ip.lat} >

            <DataSection query={ip.query} location={ip.country} timezone={ip.timezone} isp={ip.isp} />

          <iframe
              style={styles}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAXJ_5lAE4WVoxq67hVghpnHwaVboPYIjQ
              &q=${ip.timezone}&maptype=satellite`}>
          </iframe>

             </React.Fragment>
            ) 
            
          
          })
          ) : null
         }


        </>

        
// as
// : 
// "AS29465 MTN NIGERIA Communication limited"
// city
// : 
// "Lagos"
// country
// : 
// "Nigeria"
// countryCode
// : 
// "NG"
// isp
// : 
// "MTN NIGERIA Communication limited"
// lat
// : 
// 6.4474
// lon
// : 
// 3.3903
// org
// : 
// "MTN Nigeria"
// query
// : 
// "102.89.40.123"
// region
// : 
// "LA"
// regionName
// : 
// "Lagos"
// status
// : 
// "success"
// timezone
// : 
// "Africa/Lagos"
// zip

    )
  }
}

export default PostList