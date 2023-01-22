// import "./App.css";
// import Header from "./Components/Header";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { Container, Stack } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import { useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [data, setData] = useState([]);

//   const receivedData = () => {
//     setData([...data, { name, email }]);
//     setEmail("");
//     setName("");
//   };

//   const deleteData = (index) => {
//     let arr = data;
//     arr.splice(index,1)
//     setData([...arr])
//   };

//   return (
//     <div className="App">
//       <Header />

//       {/* form part */}
//       <Stack
//         direction="row"
//         spacing={3}
//         justifyContent={"center"}
//         marginTop={"22px"}
//       >
//         <TextField
//           id="outlined-basic"
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//           label="Name"
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-basic"
//           type={'email'}
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           label="Email"
//           variant="outlined"
//         />
//         <Button variant="contained" color="success" onClick={receivedData}>
//           <AddIcon />
//         </Button>
//       </Stack>

//       {/* data part */}

//       <Container maxWidth={"lg"}>
//         <Stack
//           direction={"row"}
//           justifyContent={"space-between"}
//           box-shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
//           marginTop={"20px"}
//           className={"data-part"}
//         >
//           <p>name</p>
//           <p>email</p>
//           <p>remove</p>
//         </Stack>

//         {data.map((element, index) => {
//           return (
//             <Stack
//               key={index}
//               direction={"row"}
//               justifyContent={"space-between"}
//               marginTop={"20px"}
//               className={"data-part"}
//             >
//               <p>{element.name}</p>
//               <p>{element.email}</p>

//               <Button
//                 variant="contained"
//                 color="error"
//                 onClick={()=>deleteData(index)}
//                 style={{
//                   margin: "10px",
//                 }}
//               >
//                 <DeleteIcon />
//               </Button>
//             </Stack>
//           );
//         })}
//       </Container>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Record from './Components/Record'

const App = () => {
  return (
   <Record/>
  )
}

export default App