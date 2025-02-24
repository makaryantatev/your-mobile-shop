import { Main } from "./project"
function App() {

  return (
    <>
      <Main/>
    </>
  )
}

export default App




// 9
// import { useRef, useState } from "react"

// function App() {
//   const myInput = useRef();
//   const [value, setValue] = useState()
//   const onChange = (e) => {
//     setValue(e.target.value)
//     console.log(value);
//   } 
//   return (
//     <>
//       <input type="text" placeholder="write the color..." ref={myInput} onChange={onChange} style={{borderColor: value, outline: "none"}} value={value}/>
//     </>
//   )
// }

// export default App


// 8

// import { useRef, useState } from "react"

// function App() {
//   const [value, setValue] = useState({})
//   const [array, setArray] = useState([])
//   let onChange = (e) => {
//     setValue((el) => {
//       return el = { ...el, [e.target.name]: e.target.value }
//     })
//   }
//   let addFunction = () => {
//     let arr = array.slice()
//     arr.push(value)
//     setArray(arr)
//   }
//   let deleteFunction = (index) => {
//     if(i != index){
//       return e
//     }
//   } 
//   return (
//     <>
//       <input type="text" placeholder="write the model" onChange={onChange} name="model" />
//       <input type="text" placeholder="write the color" onChange={onChange} name="color" />
//       <input type="number" placeholder="write the price" onChange={onChange} name="price" />
//       <button onClick={addFunction}> Add </button>
//       {array.map((e, i) => {
//         return (
//           <div key={e + i}>
//             <p> mode: {e.model} </p>
//             <p> color: {e.color} </p>
//             <p> price: {e.price} </p>
//             <button onClick={()=> deleteFunction(i)}> Delete </button>
//             <hr />
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default App




// 10

// import { useRef, useState } from "react"
// import { FisrtDiv, SecDiv, Input, IconDiv } from "./styled"
// import { CiUser } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { CiShoppingCart } from "react-icons/ci";
// import { FaBalanceScale } from "react-icons/fa";



// function App() {

//   return (
//     <>
//       <FisrtDiv>
//         <div>
//           <ul>
//             <li> <a href=""> ՄԵՐ ՄԱՍԻՆ </a> </li>
//             <li> <a href=""> ԿԱՊ </a> </li>
//             <li> <a href=""> ՀՏՀ </a> </li>
//             <li> <a href=""> ԸՆԴՀԱՆՈՒՐ ԴՐՈՒՅԹՆԵՐ </a> </li>
//             <li> <a href=""> ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ </a> </li>
//             <li> <a href=""> ԱՊԱՌԻԿԻ ՊԱՅՄԱՆՆԵՐ </a> </li>
//             <li> <a href=""> ԲԼՈԳ </a> </li>
//           </ul>
//         </div>
//       </FisrtDiv>
//       <SecDiv>
//         <div>
//           <img src="https://yerevanmobile.am/media/logo/default/favicon-512x512.png" />
//         </div>
//         <Input placeholder="Մուտքագրեք ապրանքի անվանումը" />
//         <IconDiv>
//           <span> <CiUser /> </span>
//           <span> <CiHeart /> </span>
//           <span> <CiShoppingCart /> </span>
//           <span> <FaBalanceScale /> </span>
//         </IconDiv>
//       </SecDiv>
//     </>
//   )
// }

// export default App
