export default setData=(data)=>{ // Calls generateOptions to Retrieve Options Object. Sets Retrieved Object To Current State.

  let array=[{}];

  //ASync
  data.map(set=>{ 

    console.log("setData:Mapping... " + set);
    console.log(this.generateOptions(set));
    // array.push(this.generateOptions(set)); // places Objects returned from generateOptions into array

    // this.setState(prevState=>({
    //   Options: [...prevState.Options,this.generateOptions(set)]
    // }),function(){    
    //   console.log("this.state.Options: "+ this.state.Options)
    // })

  })

}