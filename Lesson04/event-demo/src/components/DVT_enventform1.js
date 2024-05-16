import React, { Component } from 'react';

class DVT_enventform1 extends Component {

      //Ham xu li su kien
       eventHandleclick1 = ()=>{
        alert("event handle 1");
      }
      eventHandleclick2(){
        alert("event click 2")
      }


    render() {
        return (
            <div className='alert alert-dangger'>
                <h2>event handle</h2>
                 {/* goi ham xu ly su kien khi render */}
               {/* <button onclick={this.eventHandleclick1()}>click 1</button> */}
                {/* goi ham xu ly khi click */}
                <button onclick={this.eventHandleclick2()}>click 2</button>
            </div>
        );
    }
}

export default DVT_enventform1;