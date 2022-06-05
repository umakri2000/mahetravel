const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 8000;
const setmail = require('./sendmail');
const cors = require("cors");
const dbconnection = require("./db");
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
// post the traveller data in the projecttravel db
app.post("/travel", (request, response) => {
  console.log(request);
  const object = {
    
    first_name: request.body.first_name,
    mobileNumber:request.body.mobileNumber,
    email: request.body.email,
    date:request.body.date,
    place:request.body.place,
    aadhar:request.body.aadhar,
    file:request.body.file,
    type:'user',
    password:request.body.password
  };
    dbconnection.post_travel(object,'projecttravel').then((res)=>{
      const teststatus={
        status:201,
        message: "TRAVELLER was registered Successfully into the database",
        data: res,
      }
      const err ={
        status:404,
        message:'OOPS',
        data:res,
      }
      if (res) {
        response.send(teststatus);
      } else {
        response.send(err);
      }
            
      })
    });
    app.get("/displayDetails", (request, response) => {
        console.log(request);
        console.log("begin to write data");
        const data = {
          selector:{
            type:'user'
          }
        }
        dbconnection.get(data,"projecttravel").then((res) => {
          const teststatus={
            status:200,
            message: "TRAVELLER was registered Successfully into the database",
            data: res,
          }
          if (res) {
            response.send(teststatus);
          } else {
            response.send("error");
          }
        });
      }); 
      app.post("/hotel", (request, response) => {
        console.log(request);
        const object = {
          
          name: request.body.name,
          mobileNumber:request.body.mobileNumber,
          email: request.body.email,
          date:request.body.date,
          hotel:request.body.hotel,
          food:request.body.food,
          file:request.body.file,
           type:'hotel'
        };
        
          dbconnection.post_travel(object,'projecttravel').then((res)=>{
            const teststatus={
              status:201,
              message: "TRAVELLER was registered Successfully into the database",
              data: res,
            }
            const err ={
              status:404,
              message:'OOPS',
              data:res,
            }
            if (res) {
              response.send(teststatus);
            } else {
              response.send(err);
            }
                  
            })
          })
        console.log("the traveller data added");
       // to display the hotel status  
  app.get("/hotelstatus", (request, response) => {
    console.log(request);
    console.log("begin to write ddata");
    const data = {
      selector:{
        type:'hotel'
      }
    }
    dbconnection.get(data,"projecttravel").then((res) => {
      const teststatus={
        status:200,
        message: "hotel was registered Successfully into the database",
        data: res,
      }
      const err ={
        status:404,
        message:'OOPS',
        data:res,
      }
      if (res) {
        response.send(teststatus);
      } else {
        response.send(err);
      }
    });
  });
  app.get("/viewpackage", (request, response) => {
    console.log(request);
    console.log('admin get data')
  const data={
    selector:{
      type:'package'
    }
  }
  dbconnection.get(data,"projecttravel").then((res) => {
    const teststatus={
      status:200,
      message: "TRAVELLER was registered Successfully into the database",
      data: res,
    }
    const err ={
      status:404,
      message:'OOPS',
      data:res,
    }
    if (res) {
      response.send(teststatus);
    } else {
      response.send(err);
    }
  });
  });
  // to post the package only (admin control)
app.post('/addpackage', (request, response) =>{
  console.log('request')
  const object={
  place:request.body.place,
  package:request.body.package,
  price:request.body.price,
     type:'package'
 }
 
dbconnection.post_travel(object,'projecttravel').then((res)=>{
  const teststatus={
    status:201,
    message: "TRAVELLER was registered Successfully into the database",
    data: res,
  }
  const err ={
    status:404,
    message:'OOPS',
    data:res,
  }
  if (res) {
    response.send(teststatus);
  } else {
    response.send(err);
  }
        
  }

)})
  
  app.get("/adminlogin", (request, response) => {
    console.log(request);
    console.log('admin get data')
    const data = {
      selector:{
        type:'adminloign'
      }
    }
    dbconnection.get(data,"projecttravel").then((res) => {
      const teststatus={
        status:200,
        message: "TRAVELLER was registered Successfully into the database",
        data: res,
      }
      const err ={
        status:404,
        message:'OOPS',
        data:res,
      }
      if (res) {
        response.send(teststatus);
      } else {
        response.send(err);
      }
    });
  });
  app.post("/postflightbooking", (request, response) => {
    console.log(request);
    const object = {
      
      name: request.body.name,
      mobileNumber:request.body.mobileNumber,
      email: request.body.email,
      date:request.body.date,
      flight:request.body.flight,
     seat:request.body.seat,
      // passport:request.body.passport,
      file:request.body.file,
      type:'flight'
    };
    
    // dbconnection.post_travel(object,'projecttravel').then((res)=>{
      dbconnection.post_travel(object,'projecttravel').then((res)=>{
        const teststatus={
          status:201,
          message: "TRAVELLER was registered Successfully into the database",
          data: res,
        }
        const err ={
          status:404,
          message:'OOPS',
          data:res,
        }
        if (res) {
          response.send(teststatus);
        } else {
          response.send(err);
        }
              
        })
      })
  
  //To display the flight booking data
app.get("/flightDetails", (request, response) => {
  console.log(request);
  console.log("begin to write ddata");
  const data = {
    selector:{
      type:'flight'
    }
  }
dbconnection.get(data,"projecttravel").then((res) => {
  if (res) {
    response.send(res);
  } else {
    response.send("error");
  }
});
});
app.post('/email',(request,response,next)=>{
  console.log('mmm');
 
  var object ={
    first_name: request.body.first_name,
    mobileNumber:request.body.mobileNumber,
    email: request.body.email,
    date:request.body.date,
    place:request.body.place,
    aadhar:request.body.aadhar,
    // file:request.body.file,
    type:'user'
  }
  setmail.getemail(request.body.email);
  console.log(object);
})
  app.delete("/delete/:id/:id1", (request, response) => {
    dbconnection.del_id(request.params.id,request.params.id1, "projecttravel").then((res)=>{
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  });
  app.delete("/deletehotel/:id/:id1", (request, response) => {
    dbconnection.del_id(request.params.id,request.params.id1, "projecttravel").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  });
  app.listen(port, (err) => {
    if (err) {
      return console.log("something bad happened", err);
    }
  
    console.log(`server is listening on http://localhost:${port}`);
  })
      
